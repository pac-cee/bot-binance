import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbol, assetType } = req.query;
  try {
    let priceData = null;
    if (assetType === 'crypto') {
      // Example: fetch from Binance
      const resp = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
      priceData = { price: resp.data.price, symbol };
    } else if (assetType === 'stock') {
      // Example: fetch from Alpha Vantage (you need to set API key in env)
      // const resp = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);
      // priceData = { price: resp.data['Global Quote']['05. price'], symbol };
      priceData = { price: 0, symbol }; // Placeholder
    } else if (assetType === 'forex') {
      // Example: fetch from Twelve Data
      // const resp = await axios.get(`https://api.twelvedata.com/price?symbol=${symbol}&apikey=${process.env.TWELVE_DATA_API_KEY}`);
      // priceData = { price: resp.data.price, symbol };
      priceData = { price: 0, symbol }; // Placeholder
    }
    res.status(200).json(priceData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch price data' });
  }
}
