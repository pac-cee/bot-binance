# Real-Time Trading Dashboard

A web app to visualize real-time cryptocurrency, forex, and stocks data with interactive charts and historical price tracking.

## Tech Stack
- **Frontend:** Next.js (React, TypeScript), Tailwind CSS, Recharts
- **Backend:** Next.js API routes
- **Database:** PostgreSQL (with TimescaleDB extension)
- **APIs:** Binance (crypto), Alpha Vantage/Twelve Data (stocks/forex)

## Features
- Real-time prices for crypto, forex, and stocks
- Click on any asset to view historical price charts (24h, 7d, all time)
- Fast, modern UI

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your API keys.

### 3. Run the App
```bash
npm run dev
```

### 4. Database Setup
- Install PostgreSQL and TimescaleDB extension
- Run the SQL in `requirements.sql` to set up tables

---

## Folder Structure
- `pages/` - Next.js pages (frontend & API routes)
- `components/` - React components
- `lib/` - Utility code (e.g., API clients)

---

## License
MIT
