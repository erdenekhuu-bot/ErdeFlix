#!/bin/bash

echo "Started deployment..."
yarn=/usr/local/bin/yarn

SRC="/home/lab/ErdeFlix"
DST="/var/www/ErdeFlix"

# copy project
rsync -av --delete "$SRC"/ "$DST"/

cd "$DST"

# laravel commands
$yarn build
php artisan optimize:clear
php artisan storage:link
php artisan migrate --force
php artisan optimize

# permissions
chown -R www-data:www-data "$DST"
chmod -R 775 "$DST/storage"
chmod -R 775 "$DST/bootstrap/cache"

echo "Done."
