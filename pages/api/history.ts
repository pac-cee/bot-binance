import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
const now = Date.now();
const generateHistory = (range: string) => {
  let points = 24;
  let interval = 60 * 60 * 1000; // 1h
  if (range === '7d') {
    points = 7 * 24;
    interval = 60 * 60 * 1000; // 1h
  } else if (range === 'all') {
    points = 365;
    interval = 24 * 60 * 60 * 1000; // 1 day
  }
  return Array.from({ length: points }, (_, i) => ({
    timestamp: now - (points - 1 - i) * interval,
    price: (Math.random() * 10000 + 20000).toFixed(2),
  }));
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbol, assetType, range } = req.query;
  try {
    if (assetType === 'crypto') {
      // Binance Klines API
      let interval = '1h';
      let limit = 24;
      if (range === '7d') { interval = '1h'; limit = 7 * 24; }
      if (range === 'all') { interval = '1d'; limit = 365; }
      const resp = await axios.get(`https://api.binance.com/api/v3/klines`, {
        params: { symbol, interval, limit }
      });
      const data = resp.data.map((k: any) => ({
        timestamp: k[0],
        price: parseFloat(k[4]),
      }));
      return res.status(200).json(data);
    }
    if (assetType === 'stock' || assetType === 'forex') {
      // Alpha Vantage API
      const key = process.env.ALPHA_VANTAGE_API_KEY;
      if (!key) throw new Error('Alpha Vantage API key missing');
      let functionType = assetType === 'stock' ? 'TIME_SERIES_DAILY_ADJUSTED' : 'FX_DAILY';
      let url = `https://www.alphavantage.co/query?function=${functionType}`;
      if (assetType === 'stock') url += `&symbol=${symbol}`;
      if (assetType === 'forex') url += `&from_symbol=${symbol?.toString().slice(0,3)}&to_symbol=${symbol?.toString().slice(3,6)}`;
      url += `&apikey=${key}`;
      const resp = await axios.get(url);
      let timeSeries = assetType === 'stock' ? resp.data['Time Series (Daily)'] : resp.data['Time Series FX (Daily)'];
      if (!timeSeries) throw new Error('No data');
      let data = Object.entries(timeSeries).map(([date, v]: any) => ({
        timestamp: new Date(date).getTime(),
        price: parseFloat(v['4. close'] || v['4. close'] || v['4. close'])
      })).sort((a, b) => a.timestamp - b.timestamp);
      if (range === '24h') data = data.slice(-2); // last 2 days
      if (range === '7d') data = data.slice(-7);
      if (range === 'all') data = data.slice(-365);
      return res.status(200).json(data);
    }
    // fallback
    const data = generateHistory((range as string) || '24h');
    return res.status(200).json(data);
  } catch (e) {
    // fallback to dummy data
    const data = generateHistory((range as string) || '24h');
    return res.status(200).json(data);
  }
}
