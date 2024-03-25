# Classified-Ad-Platform

A commercial-grade web interface for a classified advertisements website tailored specifically for students.

## Setup

### Installing npm and node

1. Install npm
2. Install Node.js
3. Run `npm install` in project folder

### Installing Django

1. Install Python
2. Run `pip install -r requirements.txt` in project folder

### Setting up Django

1. `cd cap_backend`
2. `python manage.py makemigrations`
3. `python manage.py migrate`
4. `python manage.py createsuperuser`

After changing any models run:

`.\update_db.bat`

## Running the project

### Frontend

`npm run dev`

### Backend

`cd cap_backend`

`python manage.py runserver` or `.\run_server.bat`

### Generate documentation

The API documentation is generated with `drf-spectacular` for the OpenAPI 3 schema and `widdershins` for converting that into markdown.

1. `cd cap_backend`
2. `python manage.py spectacular --color --file schema.yml`
3. `npm run make-docs`

## Admin Dashboard

<http://127.0.0.1:8000/admin>

## API Documentation
