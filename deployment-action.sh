#!/usr/bin/env bash

set -Eeuo pipefail

trap 'echo "Deployment failed at line $LINENO"' ERR

echo "===== Started deployment ====="

YARN="/usr/local/bin/yarn"

SRC="/home/lab/ErdeFlix"

LIVE="/var/www/ErdeFlix"
RELEASES="/var/www/ErdeFlix-releases"
SHARED="/var/www/ErdeFlix"

RELEASE_ID="$(date +%Y%m%d_%H%M%S)"
RELEASE="$RELEASES/$RELEASE_ID"

if [ ! -d "$SRC" ]; then
    echo "Source directory not found: $SRC"
    exit 1
fi

echo "Creating release directories..."

mkdir -p \
    "$RELEASE" \
    "$SHARED/storage/app/public" \
    "$SHARED/storage/framework/cache/data" \
    "$SHARED/storage/framework/sessions" \
    "$SHARED/storage/framework/views" \
    "$SHARED/storage/logs"

echo "Copying application source to release..."

rsync -a \
    --exclude='/.env' \
    --exclude='/storage/' \
    --exclude='/node_modules/' \
    --exclude='/vendor/' \
    --exclude='/.git/' \
    --exclude='/bootstrap/cache/*.php' \
    "$SRC/" "$RELEASE/"

cd "$RELEASE"

echo "Creating Laravel directories..."

mkdir -p \
    bootstrap/cache \
    public

echo "Linking production environment..."

if [ ! -f "$SHARED/.env" ]; then
    echo "Production environment file missing: $SHARED/.env"
    echo "Create it before deployment."
    exit 1
fi

ln -sfn "$SHARED/.env" "$RELEASE/.env"

rm -rf "$RELEASE/storage"
ln -sfn "$SHARED/storage" "$RELEASE/storage"

rm -rf "$RELEASE/public/storage"
ln -sfn "$SHARED/storage/app/public" "$RELEASE/public/storage"

echo "Removing generated Laravel cache..."

find bootstrap/cache \
    -maxdepth 1 \
    -type f \
    ! -name '.gitignore' \
    -delete

echo "Installing production PHP dependencies..."

COMPOSER_ALLOW_SUPERUSER=1 composer install \
    --no-dev \
    --prefer-dist \
    --no-interaction \
    --optimize-autoloader

echo "Installing frontend dependencies..."

"$YARN" install --frozen-lockfile

echo "Building frontend assets..."

"$YARN" build

echo "Clearing Laravel cache..."

php artisan optimize:clear

echo "Running database migrations..."

php artisan migrate --force

echo "Optimizing Laravel..."

php artisan optimize

echo "Setting permissions..."

sudo chown -R root:www-data "$RELEASE"

find "$RELEASE" \
    -type d \
    -exec chmod 755 {} \;

find "$RELEASE" \
    -type f \
    -exec chmod 644 {} \;

sudo chown -R www-data:www-data \
    "$SHARED/storage" \
    "$RELEASE/bootstrap/cache"

find "$SHARED/storage" "$RELEASE/bootstrap/cache" \
    -type d \
    -exec chmod 775 {} \;

find "$SHARED/storage" "$RELEASE/bootstrap/cache" \
    -type f \
    -exec chmod 664 {} \;

echo "Activating release..."

ln -sfn "$RELEASE" "${LIVE}.new"
mv -Tf "${LIVE}.new" "$LIVE"

echo "Removing old releases..."

find "$RELEASES" \
    -mindepth 1 \
    -maxdepth 1 \
    -type d \
    -printf '%T@ %p\n' \
    | sort -rn \
    | tail -n +6 \
    | cut -d' ' -f2- \
    | xargs -r rm -rf

echo "===== Deployment completed ====="
echo "Active release: $RELEASE"

#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --url http://192.168.6.40:80
#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --protocol http2 --url http://192.168.6.40:80
