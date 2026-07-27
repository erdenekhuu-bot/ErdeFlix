#!/bin/bash
set -e

echo "===== Started deployment ====="

YARN="/usr/local/bin/yarn"
SRC="/home/lab/ErdeFlix"
DST="/var/www/ErdeFlix"

echo "Syncing files..."
rsync -av --delete \
    --exclude='storage/' \
    --exclude='node_modules/' \
    --exclude='vendor/' \
    --exclude='.git/' \
    "$SRC/" "$DST/"

cd "$DST"

# echo "Installing PHP dependencies..."
# composer install --no-dev --optimize-autoloader

# echo "Installing frontend dependencies..."
# $YARN install --frozen-lockfile

# echo "Building frontend..."
# $YARN build

echo "Laravel optimization..."
php artisan optimize:clear
php artisan migrate --force

if [ ! -L public/storage ]; then
    php artisan storage:link
fi

php artisan optimize

echo "Setting permissions..."
chown -R www-data:www-data "$DST"
find storage -type d -exec chmod 775 {} \;
find storage -type f -exec chmod 664 {} \;
find bootstrap/cache -type d -exec chmod 775 {} \;
find bootstrap/cache -type f -exec chmod 664 {} \;

echo "===== Deployment completed ====="


#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --url http://192.168.6.40:80
#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --protocol http2 --url http://192.168.6.40:80
