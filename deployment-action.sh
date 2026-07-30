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

echo "Copying source code..."
rsync -a \
    --exclude='node_modules/' \
    --exclude='vendor/' \
    --exclude='.git/' \
    --exclude='.env' \
    --exclude='storage/' \
    --exclude='public/storage' \
    --exclude='bootstrap/cache/*.php' \
    "$SRC/" "$BUILD/"

echo "Copying production .env..."
if [ -f "$DST/.env" ]; then
    cp "$DST/.env" "$BUILD/.env"
else
    echo "ERROR: $DST/.env not found."
    exit 1
fi

echo "Preparing build storage directories..."
mkdir -p \
    "$BUILD/storage/framework/sessions" \
    "$BUILD/storage/framework/views" \
    "$BUILD/storage/framework/cache/data" \
    "$BUILD/storage/logs"

cd "$BUILD"

echo "Installing PHP dependencies..."
COMPOSER_ALLOW_SUPERUSER=1 composer install \
    --no-dev \
    --optimize-autoloader \
    --no-interaction

echo "Installing frontend dependencies..."
"$YARN" install --frozen-lockfile

echo "Building frontend..."
"$YARN" build

echo "Copying application build to $DST..."
mkdir -p "$DST"

rsync -a --delete \
    --exclude='.env' \
    --exclude='storage/' \
    --exclude='public/storage' \
    "$BUILD/" "$DST/"

echo "Copying HLS, movies, videos and all public storage files..."

mkdir -p "$DST/storage/app/public"

rsync -a --info=progress2 \
    "$SRC/storage/app/public/" \
    "$DST/storage/app/public/"

cd "$DST"

echo "Preparing Laravel storage directories..."
mkdir -p \
    storage/framework/sessions \
    storage/framework/views \
    storage/framework/cache/data \
    storage/logs \
    storage/app/public

echo "Fixing storage permissions..."
chown -R www-data:www-data \
    "$DST/storage" \
    "$DST/bootstrap/cache"

find "$DST/storage" -type d -exec chmod 775 {} \;
find "$DST/storage" -type f -exec chmod 664 {} \;
chmod -R 775 "$DST/bootstrap/cache"

echo "Clearing Laravel cache..."
php artisan optimize:clear

echo "Creating correct storage link..."

if [ -L "$DST/public/storage" ]; then
    rm -f "$DST/public/storage"
elif [ -e "$DST/public/storage" ]; then
    echo "ERROR: $DST/public/storage exists but is not a symbolic link."
    echo "Please inspect it manually."
    exit 1
fi

php artisan storage:link

echo "Running database migrations..."
php artisan migrate --force

echo "Optimizing Laravel..."
php artisan optimize

echo "Reloading services..."
systemctl reload php8.5-fpm
systemctl reload nginx

echo "Removing temporary build..."
rm -rf "$BUILD"

echo "===== Deployment completed ====="

#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --url http://192.168.6.40:80
#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --protocol http2 --url http://192.168.6.40:80
