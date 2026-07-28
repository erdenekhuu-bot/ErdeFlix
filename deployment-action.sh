#!/usr/bin/env bash
set -Eeuo pipefail

echo "===== Started deployment ====="

YARN="/usr/local/bin/yarn"
SRC="/home/lab/ErdeFlix"
APP_ROOT="/var/www/ErdeFlix"
RELEASES_DIR="$APP_ROOT/releases"
SHARED_DIR="$APP_ROOT/shared"
CURRENT_LINK="$APP_ROOT/current"
RELEASE="$RELEASES_DIR/$(date +%Y%m%d%H%M%S)"
KEEP_RELEASES=5
LOCK_FILE="/tmp/erdeflix-deploy.lock"

# Prevent overlapping deploys
exec 200>"$LOCK_FILE"
flock -n 200 || { echo "Another deployment is already running"; exit 1; }

if [ ! -d "$SRC" ]; then
    echo "Source directory not found: $SRC"
    exit 1
fi

if [ ! -f "$SHARED_DIR/.env" ]; then
    echo "Missing $SHARED_DIR/.env — create it once manually before first deploy"
    exit 1
fi

# Clean up the half-built release if anything fails
cleanup_on_failure() {
    echo "Deployment failed — removing incomplete release $RELEASE"
    rm -rf "$RELEASE"
}
trap cleanup_on_failure ERR

echo "Preparing release directory..."
mkdir -p "$RELEASE" "$SHARED_DIR/storage" "$RELEASES_DIR"

echo "Copying source..."
rsync -a \
    --exclude='.env' \
    --exclude='/storage/' \
    --exclude='node_modules/' \
    --exclude='vendor/' \
    --exclude='.git/' \
    --exclude='bootstrap/cache/*.php' \
    "$SRC/" "$RELEASE/"

cd "$RELEASE"

echo "Linking shared resources..."
ln -sfn "$SHARED_DIR/.env" "$RELEASE/.env"
rm -rf "$RELEASE/storage"
ln -sfn "$SHARED_DIR/storage" "$RELEASE/storage"

mkdir -p bootstrap/cache
echo "APP_URL: $(grep '^APP_URL=' "$SHARED_DIR/.env" | cut -d= -f2)"

echo "Installing PHP dependencies..."
COMPOSER_ALLOW_SUPERUSER=1 composer install \
    --no-dev \
    --prefer-dist \
    --no-interaction \
    --optimize-autoloader

echo "Installing frontend dependencies..."
"$YARN" install --frozen-lockfile

echo "Building frontend..."
"$YARN" build

echo "Clearing and rebuilding Laravel cache..."
php artisan config:clear
php artisan migrate --force

if [ ! -L public/storage ]; then
    php artisan storage:link
fi

php artisan optimize

echo "Setting permissions..."
chown -R www-data:www-data "$RELEASE" "$SHARED_DIR/storage"
find "$RELEASE" -type d -exec chmod 755 {} \;
find "$RELEASE" -type f -exec chmod 644 {} \;
find "$SHARED_DIR/storage" -type d -exec chmod 775 {} \;
find "$SHARED_DIR/storage" -type f -exec chmod 664 {} \;

echo "Swapping symlink to new release..."
ln -sfn "$RELEASE" "$CURRENT_LINK"

echo "Reloading PHP-FPM..."
sudo systemctl reload php8.3-fpm   # adjust to your PHP version/service name

trap - ERR   # deploy succeeded, disarm cleanup trap

echo "Pruning old releases (keeping last $KEEP_RELEASES)..."
cd "$RELEASES_DIR"
ls -1t | tail -n +$((KEEP_RELEASES + 1)) | xargs -r rm -rf

echo "===== Deployment completed ====="

#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --url http://192.168.6.40:80
#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --protocol http2 --url http://192.168.6.40:80
