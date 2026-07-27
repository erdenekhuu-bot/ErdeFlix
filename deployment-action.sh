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
    --exclude='.env' \
    "$SRC/" "$DST/"

cd "$DST"

# Clear all caches before composer install
echo "Clearing caches..."
php artisan config:clear 2>/dev/null || true
php artisan cache:clear 2>/dev/null || true
php artisan view:clear 2>/dev/null || true
php artisan route:clear 2>/dev/null || true
php artisan optimize:clear 2>/dev/null || true

echo "Installing PHP dependencies..."
# Install with --no-scripts to avoid post-autoload-dump issues
/usr/local/bin/composer install --no-dev --optimize-autoloader --no-interaction --no-scripts

# Run package discovery separately (it worked in your test)
php artisan package:discover --ansi

echo "Installing frontend dependencies..."
$YARN install --frozen-lockfile

# Build frontend - with Wayfinder fix
echo "Building frontend..."
# Option 1: Generate Wayfinder routes first
php artisan wayfinder:generate --with-form 2>/dev/null || echo "Wayfinder generation skipped"

# Option 2: Build with environment variable to skip Wayfinder
WAYFINDER_SKIP=true $YARN build || {
    echo "Build failed with Wayfinder, trying without..."
    # If failed, modify vite config temporarily
    if [ -f vite.config.js ]; then
        cp vite.config.js vite.config.js.backup
        # Remove Wayfinder from config
        sed -i '/wayfinder/d' vite.config.js
        sed -i '/@laravel\/vite-plugin-wayfinder/d' vite.config.js
        $YARN build
        mv vite.config.js.backup vite.config.js
    fi
}

echo "Laravel optimization..."
php artisan optimize:clear 2>/dev/null || true
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
