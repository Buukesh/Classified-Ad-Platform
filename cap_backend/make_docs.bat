@echo off

echo Running drf-spectacular...
python manage.py spectacular --color --file schema.yml
echo.

echo Running widdershins...
npm run make-docs
