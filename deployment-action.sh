# #!/bin/bash
# set -e

# echo "===== Started deployment ====="

# YARN="/usr/local/bin/yarn"
# SRC="/home/lab/ErdeFlix"
# DST="/var/www/ErdeFlix"

# echo "Syncing files..."
# rsync -av --delete \
#     --exclude='storage/' \
#     --exclude='node_modules/' \
#     --exclude='vendor/' \
#     --exclude='.git/' \
#     "$SRC/" "$DST/"

# cd "$DST"

# # echo "Installing PHP dependencies..."
# # composer install --no-dev --optimize-autoloader

# echo "Installing frontend dependencies..."
# $YARN install --frozen-lockfile

# echo "Building frontend..."
# $YARN build

# echo "Laravel optimization..."
# php artisan optimize:clear
# php artisan migrate --force

# if [ ! -L public/storage ]; then
#     php artisan storage:link
# fi

# php artisan optimize

# echo "Setting permissions..."
# chown -R www-data:www-data "$DST"
# find storage -type d -exec chmod 775 {} \;
# find storage -type f -exec chmod 664 {} \;
# find bootstrap/cache -type d -exec chmod 775 {} \;
# find bootstrap/cache -type f -exec chmod 664 {} \;

# echo "===== Deployment completed ====="

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

# Fix PHP extension issues
echo "Fixing PHP extension issues..."
export PHP_OPCACHE_ENABLE=0
export COMPOSER_ALLOW_SUPERUSER=1

# Install PHP dependencies with disabled extensions
echo "Installing PHP dependencies..."
php -d extension=openssl -d extension=xsl -d disable_functions="" /usr/local/bin/composer install --no-dev --optimize-autoloader --no-interaction

echo "Installing frontend dependencies..."
$YARN install --frozen-lockfile

# Build frontend without Wayfinder plugin temporarily
echo "Building frontend..."
# Option 1: Disable Wayfinder plugin during build
$YARN build -- --no-wayfinder

# Option 2: Or run wayfinder generation separately
# php artisan wayfinder:generate --with-form || echo "Wayfinder generation skipped"
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
