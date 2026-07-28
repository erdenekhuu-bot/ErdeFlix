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
    --exclude='bootstrap/cache/*.php' \
    "$SRC/" "$BUILD/"

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
    "$BUILD/" "$DST/"

cd "$DST"

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
