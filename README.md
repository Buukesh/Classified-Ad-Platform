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

Or `.\make_docs.bat`

## Live Demo
<https://classified-ad-platform-1.onrender.com/>

## Admin Dashboard

<https://classified-ad-platform-1.onrender.com/admin>

## API Documentation

[Documentation](cap_backend/docs.md)

## Known issues

On hosted website messages may not work because free tier of deployment services only allows a short window before websockets are disconnected

Authentication to login may also be slow on the hosted website

http images may not load on browser because of browser's mixed content policies. 
