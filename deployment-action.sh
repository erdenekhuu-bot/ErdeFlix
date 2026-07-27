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

echo "Installing PHP dependencies..."
composer install --no-dev --optimize-autoloader

echo "Installing frontend dependencies..."
$YARN install --frozen-lockfile

echo "Building frontend..."
$YARN build

echo "Setting permissions BEFORE Laravel optimization..."
chown -R www-data:www-data "$DST"
find storage -type d -exec chmod 775 {} \;
find storage -type f -exec chmod 664 {} \;
find bootstrap/cache -type d -exec chmod 775 {} \;
find bootstrap/cache -type f -exec chmod 664 {} \;

# Create log file with proper permissions
touch storage/logs/laravel.log
chown www-data:www-data storage/logs/laravel.log
chmod 664 storage/logs/laravel.log

echo "Laravel optimization..."

# Clear all caches first
php artisan optimize:clear
php artisan config:clear
php artisan cache:clear
php artisan view:clear

# Fix: Check config/app.php for invalid entries
echo "Checking for invalid service providers..."
php -r "
\$config = require 'config/app.php';
if (isset(\$config['providers'])) {
    \$invalid = false;
    foreach (\$config['providers'] as \$key => \$provider) {
        if (!is_string(\$provider)) {
            echo 'WARNING: Found invalid provider at index ' . \$key . ' (type: ' . gettype(\$provider) . ')' . PHP_EOL;
            \$invalid = true;
        }
    }
    if (\$invalid) {
        echo 'Fixing invalid providers...' . PHP_EOL;
        // Filter out non-string providers
        \$fixed = array_filter(\$config['providers'], function(\$p) { return is_string(\$p); });
        \$config['providers'] = array_values(\$fixed);
        file_put_contents('config/app.php', '<?php return ' . var_export(\$config, true) . ';');
        echo 'Fixed config/app.php' . PHP_EOL;
    }
}
"

# Run migrations
php artisan migrate --force

if [ ! -L public/storage ]; then
    php artisan storage:link
fi

# Try package discovery with error handling
echo "Running package discovery..."
set +e  # Temporarily disable exit on error
php artisan package:discover
if [ $? -ne 0 ]; then
    echo "Package discovery failed, attempting fix..."
    # Try to fix by clearing config again
    php artisan config:clear
    composer dump-autoload
    php artisan package:discover || true
fi
set -e  # Re-enable exit on error

# Now run optimize (which includes package:discover again)
echo "Running final optimization..."
php artisan optimize

echo "Setting final permissions..."
chown -R www-data:www-data "$DST"
find storage -type d -exec chmod 775 {} \;
find storage -type f -exec chmod 664 {} \;
find bootstrap/cache -type d -exec chmod 775 {} \;
find bootstrap/cache -type f -exec chmod 664 {} \;

echo "===== Deployment completed ====="


#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --url http://192.168.6.40:80
#pm2 start cloudflared --name "erdeflix-tunnel" -- tunnel --protocol http2 --url http://192.168.6.40:80
