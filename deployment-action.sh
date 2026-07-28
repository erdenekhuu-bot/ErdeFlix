#!/usr/bin/env bash
set -Eeuo pipefail

echo "===== Started deployment ====="

YARN="/usr/local/bin/yarn"
SRC="/home/lab/ErdeFlix"
DST="/var/www/ErdeFlix"

if [ ! -d "$SRC" ]; then
    echo "Source directory not found: $SRC"
    exit 1
fi

echo "Creating destination directory..."
mkdir -p "$DST"

echo "Syncing files..."
rsync -av --delete \
    --exclude='/storage/' \
    --exclude='/node_modules/' \
    --exclude='/vendor/' \
    --exclude='/.git/' \
    --exclude='/bootstrap/cache/*.php' \
    "$SRC/" "$DST/"

cd "$DST"

echo "Verifying environment file..."
if [ ! -f .env ]; then
    echo ".env not found in $DST — aborting deployment"
    exit 1
fi
echo "APP_URL: $(grep '^APP_URL=' .env | cut -d= -f2)"

echo "Creating Laravel directories..."
mkdir -p \
    bootstrap/cache \
    storage/app/public \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs

echo "Removing stale Laravel cache..."
find bootstrap/cache \
    -maxdepth 1 \
    -type f \
    ! -name '.gitignore' \
    -delete

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

echo "Clearing Laravel cache..."
php artisan optimize:clear

echo "Running migrations..."
php artisan migrate --force

echo "Creating storage link..."
if [ ! -L public/storage ]; then
    rm -rf public/storage
    php artisan storage:link
fi

echo "Optimizing Laravel..."
php artisan optimize

echo "Setting permissions..."
chown -R www-data:www-data "$DST"

find "$DST" -type d -exec chmod 755 {} \;
find "$DST" -type f -exec chmod 644 {} \;

find storage bootstrap/cache \
    -type d \
    -exec chmod 775 {} \;

find storage bootstrap/cache \
    -type f \
    -exec chmod 664 {} \;

echo "===== Deployment finished ====="

#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --url http://192.168.6.40:80
#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --protocol http2 --url http://192.168.6.40:80
