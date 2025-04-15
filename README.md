# Binance Real-Time Trading Dashboard

A modern, production-ready Binance spot market dashboard with:
- All spot pairs and coins
- Real-time prices and 24h stats
- Coins tab with live price, change, and sparklines
- Virtualized table for fast browsing
- Favorites, advanced filters, and sorting
- Binance-style dark mode

---

## 🚀 Features
- **All Binance Spot Pairs**: Instantly see all trading pairs and filter/search with ease.
- **Coins Tab**: Browse all tokens/coins, see their live price (from the most liquid pair), 24h change, and a mini sparkline chart.
- **Real-Time Data**: Prices and stats update live via Binance WebSocket.
- **Favorites**: Star your favorite pairs for quick access.
- **Advanced Filters**: Filter by quote asset (e.g. USDT), show only favorites, and sort by price/change.
- **Dark Mode**: Toggle between light and Binance-style dark mode.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 How to Test the Dashboard

1. **Browse All Pairs:**
   - Use the "Pairs" tab to see all Binance spot pairs, search/filter, and sort.
2. **Explore Coins:**
   - Switch to the "Coins" tab to see all coins/tokens, each with live price, 24h change, and a sparkline.
   - Click any coin to see all its tradable pairs and stats.
3. **Favorites:**
   - Star your favorite pairs in the pairs table. Toggle "Show Favorites" to filter.
4. **Filters and Sorting:**
   - Filter by quote asset (e.g. USDT), sort by symbol, price, or 24h change.
5. **Dark Mode:**
   - Use the toggle in the top right to switch between light and dark themes.
6. **Live Updates:**
   - All prices and stats update in real time—no need to refresh!

---

## 📦 Production Build
```bash
npm run build
npm run start
```

---

## Folder Structure
- `pages/` - Next.js pages (frontend & API routes)
- `components/` - React components
- `lib/` - Utility code (e.g., API clients)

---

## 🔗 Binance API Integration

This project integrates with the official Binance API to provide real-time and historical trading data. Below is an overview of how API calls are made and where to find or add them in the codebase:

### REST API Calls
- **Fetching all spot pairs:**
  - File: `components/AssetDashboard.tsx`
  - Example: 
    ```js
    await axios.get('https://api.binance.com/api/v3/exchangeInfo');
    ```
- **Fetching 24hr ticker data:**
  - File: `components/AssetDashboard.tsx`
  - Example:
    ```js
    await axios.get('https://api.binance.com/api/v3/ticker/24hr');
    ```
- **Fetching historical candlestick data:**
  - File: `components/CandlestickChart.tsx`
  - Example:
    ```js
    await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`);
    ```
- **Backend API routes:**
  - Files: `pages/api/prices.ts`, `pages/api/history.ts`
  - These files proxy requests to Binance for current prices and historical data.

### WebSocket API Calls (Real-Time Data)
- **Real-time mini ticker updates:**
  - File: `components/AssetDashboard.tsx`
  - Example:
    ```js
    new window.WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr');
    ```
- **Real-time candlestick (kline) updates:**
  - File: `components/CandlestickChart.tsx`
  - Example:
    ```js
    new window.WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_1h`);
    ```

### Where to Add New API Calls
- **Frontend (React components):**
  - Add calls directly in components inside the `components/` directory for UI-driven data fetching or WebSocket subscriptions.
- **Backend (API routes):**
  - Add new endpoints in `pages/api/` to proxy or aggregate data from Binance, especially if you want to keep your API keys or logic server-side.

For more details, see:
- [Binance REST API docs](https://binance-docs.github.io/apidocs/spot/en/)
- [Binance WebSocket Streams](https://binance-docs.github.io/apidocs/spot/en/#websocket-market-streams)

---

## 📝 License
MIT
