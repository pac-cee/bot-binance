import { useEffect, useState } from 'react';
import axios from 'axios';
import AssetChart from './AssetChart';

const assets = [
  { symbol: 'BTCUSDT', name: 'Bitcoin', assetType: 'crypto' },
  { symbol: 'ETHUSDT', name: 'Ethereum', assetType: 'crypto' },
  // Add more assets (stocks/forex) as needed
];

const ranges = [
  { label: '24h', value: '24h' },
  { label: '7d', value: '7d' },
  { label: 'All', value: 'all' },
];

export default function AssetDashboard() {
  const [prices, setPrices] = useState<any>({});
  const [selected, setSelected] = useState<any>(null);
  const [range, setRange] = useState<'24h' | '7d' | 'all'>('24h');

  useEffect(() => {
    const fetchPrices = async () => {
      const updated: any = {};
      for (const asset of assets) {
        try {
          const resp = await axios.get(`/api/prices?symbol=${asset.symbol}&assetType=${asset.assetType}`);
          updated[asset.symbol] = resp.data.price;
        } catch {
          updated[asset.symbol] = 'N/A';
        }
      }
      setPrices(updated);
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 5000); // Refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Trading Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {assets.map(asset => (
          <div key={asset.symbol} className="border rounded p-4 cursor-pointer hover:bg-gray-100" onClick={() => { setSelected(asset); setRange('24h'); }}>
            <div className="font-semibold">{asset.name}</div>
            <div className="text-xl">{prices[asset.symbol] ?? '...'}</div>
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
          <AssetChart symbol={selected.symbol} assetType={selected.assetType} range={range} />
        </div>
      )}
    </div>
  );
}
