#!/usr/bin/env bash

set -e

echo "===== Started deployment ====="

YARN="/usr/local/bin/yarn"
SRC="/home/lab/ErdeFlix"
BUILD="/tmp/ErdeFlix-build"
DST="/var/www/ErdeFlix"

echo "Preparing build directory..."
rm -rf "$BUILD"
mkdir -p "$BUILD"

echo "Copying source..."
rsync -a \
    --exclude='node_modules/' \
    --exclude='vendor/' \
    --exclude='.git/' \
    --exclude='.env' \
    --exclude='storage/' \
    --exclude='bootstrap/cache/*.php' \
    "$SRC/" "$BUILD/"

echo "Bringing in production .env and storage for build-time artisan commands..."
if [ -f "$DST/.env" ]; then
    cp "$DST/.env" "$BUILD/.env"
else
    echo "ERROR: $DST/.env not found. Create it manually before first deploy."
    exit 1
fi

mkdir -p "$BUILD/storage"
rsync -a "$DST/storage/" "$BUILD/storage/" 2>/dev/null || mkdir -p \
    "$BUILD/storage/framework/sessions" \
    "$BUILD/storage/framework/views" \
    "$BUILD/storage/framework/cache" \
    "$BUILD/storage/logs"

cd "$BUILD"

echo "Installing PHP dependencies..."
COMPOSER_ALLOW_SUPERUSER=1 composer install \
    --no-dev \
    --optimize-autoloader

echo "Installing frontend dependencies..."
"$YARN" install --frozen-lockfile

echo "Building frontend..."
"$YARN" build

echo "Copying build to /var/www/ErdeFlix..."
mkdir -p "$DST"

rsync -a --delete \
    --exclude='.env' \
    --exclude='storage/' \
    "$BUILD/" "$DST/"

cd "$DST"

echo "Fixing storage/cache permissions..."
mkdir -p storage/framework/{sessions,views,cache} storage/logs
chown -R www-data:www-data "$DST/storage" "$DST/bootstrap/cache"
find "$DST/storage" -type d -exec chmod 775 {} \;
find "$DST/storage" -type f -exec chmod 664 {} \;
chmod -R 775 "$DST/bootstrap/cache"

echo "Clearing Laravel cache..."
php artisan optimize:clear

echo "Running database migrations..."
php artisan migrate --force

echo "Optimizing Laravel..."
php artisan optimize

echo "Removing temporary build..."
rm -rf "$BUILD"

echo "===== Deployment completed ====="

#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --url http://192.168.6.40:80
#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --protocol http2 --url http://192.168.6.40:80
