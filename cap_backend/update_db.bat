@echo off

echo Running makemigrations...
python manage.py makemigrations
echo.

echo Running migrate...
python manage.py migrate
