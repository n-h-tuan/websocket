@ECHO OFF
php artisan migrate:refresh
php artisan passport:install --force
php artisan db:seed
@ECHO "done!"