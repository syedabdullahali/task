# 🛒 Minimal E-commerce App (Django + React)

A minimal **full-stack e-commerce application** built with **Django REST Framework (DRF)** for the backend and **React** for the frontend.  
This project demonstrates authentication, product management, cart, orders, and payment flow with a clean and modular setup.  

---

## 🚀 Features

### 🔹 Backend (Django + DRF)
- User registration & login with **JWT authentication**
- Product listing & detail APIs
- Role-based access:
  - **Admin/Owner**: Create, edit, delete products
  - **Customer**: Read products, add to cart, place orders
- Cart functionality: add, update, remove
- Place orders + order history for customers
- Admin management for products & categories
- Stripe integration (or mock payment)
- Celery tasks for background jobs (e.g., confirmation emails)
- Unit tests
- Bonus: Generate **PDF receipts** for orders

### 🔹 Frontend (React)
- Product listing page & detail view
- Cart UI
- Checkout flow
- Order confirmation page
- User login/signup forms
- Admin panel: Manage products & orders
- Polished **UI/UX**
- Dockerized frontend setup

---

## 🛠️ Tech Stack

- **Backend**: Django, Django REST Framework, JWT Auth, Celery, Redis, Stripe
- **Frontend**: React, Axios, React Router, Redux/Context API
- **Database**: PostgreSQL (or SQLite for dev)
- **Deployment**: Docker, Docker Compose

---

## 📂 Project Structure
### server
```server/
│── manage.py
│── requirements.txt
│── .env
│
├── config/                     # Global project settings
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   ├── asgi.py
│
├── apps/                       # All business logic apps
│   ├── users/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── services/
│   ├── products/
│   ├── cart/
│   └── orders/
│
├── core/                       # Shared utils/helpers
│   ├── utils.py
│   ├── exceptions.py
│
├── media/                      # Uploaded product images
├── static/                     # Static assets
└── logs/                       # Log files
```


## ⚙️ Setup Instructions

### 1️⃣ Manual Setup

#### Backend
```bash

cd backend

python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows'

pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver



Frontend
bash
Copy code
cd frontend
npm install
npm start
2️⃣ Setup with Docker
bash
Copy code
docker-compose up --build
This will spin up:

Backend API (Django + DRF)

Frontend (React)

Database (Postgres)

Redis (for Celery tasks)

🔑 Environment Variables
Create a .env file (or use .env.example as reference):

ini
Copy code
# Backend
DJANGO_SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=postgres://user:password@db:5432/ecommerce_db
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
REDIS_URL=redis://redis:6379

# Frontend
REACT_APP_API_URL=http://localhost:8000/api
📌 API Documentation
All API endpoints are available via DRF browsable API.

Postman Collection included in docs/postman_collection.json.

Main endpoints:

/api/auth/register/

/api/auth/login/

/api/products/

/api/cart/

/api/orders/

✅ Tests
Run backend tests:

bash
Copy code
cd backend
pytest
Run frontend tests:

bash
Copy code
cd frontend
npm test
🎁 Bonus Feature
Order receipt PDF generation (via reportlab)

Celery async email confirmation after checkout

📜 License
This project is licensed under the MIT License.

