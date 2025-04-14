import type { NextApiRequest, NextApiResponse } from 'next';

// Dummy data for research/demo purposes
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbol, assetType, range } = req.query;
  // In a real app, fetch from DB or external API
  const data = generateHistory((range as string) || '24h');
  res.status(200).json(data);
}
