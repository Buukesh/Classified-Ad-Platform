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

## Running the project

### Frontend

`npm run dev`

### Backend

`cd cap_backend`

`python manage.py runserver`

## API Endpoints

Base URL: <localhost:8000/api>

### `/users`

`POST`

```json
{
    "username": "",
    "password": "",
    "email": ""
}
```

### `/ads`

`GET`

`POST`

## Admin Dashboard

<localhost:8000/admin/>
