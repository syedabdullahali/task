---

# Project Setup Guide (React + Django + Realtime)
---

## Prerequisites

Make sure you have the following installed:

* Python 3.10+
* Node.js 18+ & npm 9+
* Pipenv (`pip install pipenv`)
* Redis server
* PostgreSQL
* Git
* Stripe
Optional: Use **virtual environments** via Pipenv for isolated Python dependencies.

---

## 1. Backend (Django REST API)

### Step 1: Clone the project

```bash
git clone https://github.com/syedabdullahali/Ecommerce-MVP.git
cd Backend
```

### Step 2: Install dependencies with Pipenv

```bash
pip install pipenv      # only if not installed
pipenv install          # installs all dependencies from Pipfile
pipenv shell            # activate virtual environment
```

**Key packages installed:**

* `django` – Backend framework
* `djangorestframework` – Build REST APIs
* `djangorestframework-simplejwt` & `pyjwt` – JWT authentication
* `psycopg2-binary` – PostgreSQL driver
* `django-environ` – Read `.env` file for environment variables
* `django-cors-headers` – Allow frontend to call APIs
* `asgiref` – ASGI support for realtime server
* `dj-database-url` – Easy database config
* `pillow` – Image handling
* `tzdata`, `sqlparse` – Required by Django

### Step 3: Configure environment variables

Create a `.env` file in the backend folder:

```env
# Django settings
DEBUG=True
SECRET_KEY='your-django-secret-key'

# Database
DJ_DATABASE_URL='postgresql://username:password@host:port/dbname'

# Stripe
STRIPE_SECRET_KEY='your-stripe-secret-key'
STRIPE_WEBHOOK_SECRET='your-stripe-webhook-secret'

# Email (Gmail example)
EMAIL_BACKEND='django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST='smtp.gmail.com'
EMAIL_USE_TLS=True
EMAIL_PORT=587
EMAIL_HOST_USER='your-email@gmail.com'
EMAIL_HOST_PASSWORD='your-email-app-password'
```

### Step 4: Run database migrations

```bash
python manage.py migrate
```

### Step 5: Start Django server

```bash
python manage.py runserver
```

* Backend API will run at: `http://127.0.0.1:8000`

---

## 2. Realtime Server (WebSockets with Daphne + Redis)

Handles realtime features like notifications, live updates, etc.

### Step 1: Start Redis server

```bash
redis-server
```

* Default port: `6379`

### Step 2: Run Daphne server

```bash
python -m daphne -p 9000 config.asgi:application
```

* Realtime server runs at: `http://127.0.0.1:9000`



---

## 3. Frontend (React)

### Step 1: Navigate to frontend folder

```bash
cd Frontend
```

### Step 2: Install dependencies

```bash
npm install
```

**Key frontend dependencies:**

* `react`, `react-dom` – React core libraries
* `react-router-dom` – Routing
* `@tanstack/react-query` – Data fetching & caching
* `axios` – API requests
* `react-hot-toast`, `react-toastify` – Notifications
* `@stripe/react-stripe-js`, `@stripe/stripe-js` – Stripe integration
* `typescript` – TypeScript support
* `tailwindcss` – tailwindcss  support
### Step 3: Start React frontend

```bash
npm start
```

* Frontend will run at: `http://localhost:3000`
* 
```env
# .env.example - React environment variables template

# Backend API
REACT_APP_API_BASE_URL=http://127.0.0.1:8000/api

# Stripe
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_51S2zo7PNPxOZIKm6K5dXhAubeS8DoMVD1DLWga7F9FmPx74hX2wCuLwVXkgQUQ5bs7ZC8LMAC2VErAUjTk4aVinV00fBm3xajf

# Cloudinary
REACT_APP_CLOUD_NAME=your-cloudinary-cloud-name
REACT_APP_UPLOAD_PRESET=your-upload-preset
```



---

## 4. Stripe Integration

1. Add Stripe keys to `.env`:

**Backend:**

```env
STRIPE_SECRET_KEY=<your-secret-key>
```

**Frontend (if needed):**

```env
REACT_APP_STRIPE_PUBLIC_KEY=<your-public-key>
```

2. Frontend uses `Elements` & `useStripe` hooks.
3. Backend uses `stripe` Python library to handle payments.

---

## 5. Recommended Run Order

1. Start **Redis**
2. Start **Daphne** (realtime server)
3. Start **Django backend**
4. Start **React frontend**

> This ensures realtime WebSockets work properly with the backend and frontend. for real time order update 




Do you want me to make that diagram?
