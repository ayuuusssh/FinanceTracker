# Personal Finance Tracker (MERN)

Simple personal finance tracker built with the MERN stack.

## Features
- Create, Read, Update, Delete transactions
- Fields: `title`, `amount` (positive income / negative expense), `date`, `category`
- Frontend routes: `/`, `/add`, `/:id/edit`, `/:id/delete`

## Repo structure
- `backend/` — Node.js + Express + MongoDB (Mongoose)
- `frontend/` — React (Vite or CRA) with React Router

## Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)


### Frontend(Vite)

cd frontend
npm install
npm run dev
# open http://localhost:5173 (or printed host)

### Backend
 - bash
cd backend
cp .env.example .env
# edit .env to set MONGO_URI
npm install
npm run dev    

### API's

- GET/POST/PUT/DELETE http://localhost:5000/api/transactions

- GET /api/transactions — list all transactions

- POST /api/transactions — create:
{ "title": "Salary", "amount": 2000, "date": "2025-09-10T00:00:00.000Z", "category": "Income" }

- GET /api/transactions/:id — get one

- PUT /api/transactions/:id — update (same body as POST)

- DELETE /api/transactions/:id — delete

