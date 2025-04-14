import { useEffect, useState } from 'react';
import axios from 'axios';
import AssetChart from './AssetChart';
import CandlestickChart from './CandlestickChart';

const assets = [
  { symbol: 'BTCUSDT', name: 'Bitcoin', assetType: 'crypto' },
  { symbol: 'ETHUSDT', name: 'Ethereum', assetType: 'crypto' },
  { symbol: 'AAPL', name: 'Apple', assetType: 'stock' },
  { symbol: 'MSFT', name: 'Microsoft', assetType: 'stock' },
  { symbol: 'EURUSD', name: 'EUR/USD', assetType: 'forex' },
];

function assetTypeIcon(type: string) {
  if (type === 'crypto') return '🪙';
  if (type === 'stock') return '📈';
  if (type === 'forex') return '💱';
  return '';
}

const ranges = [
  { label: '24h', value: '24h' },
  { label: '7d', value: '7d' },
  { label: 'All', value: 'all' },
];

type Ticker24hr = {
  symbol: string;
  price: string;
  priceChange: string;
  priceChangePercent: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
};

export default function AssetDashboard() {
  const [search, setSearch] = useState('');
  const [chartType, setChartType] = useState<'line' | 'candle'>('line');
  const [prices, setPrices] = useState<any>({});
  const [ticker24, setTicker24] = useState<Record<string, Ticker24hr>>({});
  const [selected, setSelected] = useState<any>(null);
  const [range, setRange] = useState<'24h' | '7d' | 'all'>('24h');

  // Fetch 24hr stats for crypto assets
  useEffect(() => {
    async function fetch24hr() {
      try {
        const resp = await axios.get('https://api.binance.com/api/v3/ticker/24hr');
        const map: Record<string, Ticker24hr> = {};
        for (const t of resp.data) {
          map[t.symbol] = t;
        }
        setTicker24(map);
      } catch {}
    }
    fetch24hr();
    const interval = setInterval(fetch24hr, 10000);
    return () => clearInterval(interval);
  }, []);

  // WebSocket for live price updates (crypto)
  useEffect(() => {
    const ws: Record<string, WebSocket> = {};
    const updateLive = (symbol: string, price: number) => {
      setPrices((prev: any) => ({ ...prev, [symbol]: price }));
    };
    assets.forEach(asset => {
      if (asset.assetType === 'crypto') {
        const wsUrl = `wss://stream.binance.com:9443/ws/${asset.symbol.toLowerCase()}@trade`;
        ws[asset.symbol] = new window.WebSocket(wsUrl);
        ws[asset.symbol].onmessage = (event: MessageEvent) => {
          const data = JSON.parse(event.data);
          updateLive(asset.symbol, parseFloat(data.p));
        };
      }
    });
    return () => {
      Object.values(ws).forEach(socket => socket && socket.close());
    };
  }, []);

  // Fallback fetch for non-crypto
  useEffect(() => {
    const fetchPrices = async () => {
      const updated: any = {};
      for (const asset of assets) {
        if (asset.assetType !== 'crypto') {
          try {
            const resp = await axios.get(`/api/prices?symbol=${asset.symbol}&assetType=${asset.assetType}`);
            updated[asset.symbol] = resp.data.price;
          } catch {
            updated[asset.symbol] = 'N/A';
          }
        }
      }
      setPrices((prev: any) => ({ ...prev, ...updated }));
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 5000); // Refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Trading Dashboard</h1>
      <div className="mb-4 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search assets..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-64"
        />
        <div className="flex gap-2 ml-auto">
          <button
            className={`px-3 py-1 rounded border ${chartType === 'line' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`}
            onClick={() => setChartType('line')}
          >
            Line
          </button>
          <button
            className={`px-3 py-1 rounded border ${chartType === 'candle' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`}
            onClick={() => setChartType('candle')}
          >
            Candle
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {assets.filter(asset =>
          asset.name.toLowerCase().includes(search.toLowerCase()) ||
          asset.symbol.toLowerCase().includes(search.toLowerCase())
        ).map(asset => (
          <div key={asset.symbol} className="border rounded-lg shadow-sm p-4 cursor-pointer hover:bg-blue-50 flex flex-col items-center transition-all" onClick={() => { setSelected(asset); setRange('24h'); }}>
            <div className="text-3xl mb-2">{assetTypeIcon(asset.assetType)}</div>
            <div className="font-semibold mb-1">{asset.name}</div>
            <div className="text-xs text-gray-500 mb-1">{asset.symbol}</div>
            <div className="text-xl font-mono">{prices[asset.symbol] ?? '...'}</div>
            {asset.assetType === 'crypto' && ticker24[asset.symbol] && (
              <div className="mt-1 text-xs">
                <span className={
                  parseFloat(ticker24[asset.symbol].priceChange) > 0 ? 'text-green-600' : 'text-red-600'
                }>
                  {parseFloat(ticker24[asset.symbol].priceChange) > 0 ? '+' : ''}
                  {parseFloat(ticker24[asset.symbol].priceChange).toFixed(2)}
                  {' '}({parseFloat(ticker24[asset.symbol].priceChangePercent).toFixed(2)}%)
                </span><br />
                <span className="text-gray-500">H: {ticker24[asset.symbol].highPrice} L: {ticker24[asset.symbol].lowPrice}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      {selected && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">{selected.name} ({selected.symbol})</h2>
          <div className="mb-4 flex gap-2">
            {ranges.map(r => (
              <button
                key={r.value}
                onClick={() => setRange(r.value as '24h' | '7d' | 'all')}
                className={`px-3 py-1 rounded border ${range === r.value ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border-blue-600'}`}
              >
                {r.label}
              </button>
            ))}
          </div>
          {chartType === 'line' && (
            <AssetChart symbol={selected.symbol} assetType={selected.assetType} range={range} />
          )}
          {chartType === 'candle' && (
            <CandlestickChart symbol={selected.symbol} assetType={selected.assetType} range={range} />
          )}
        </div>
      )}
    </div>
  );
}
