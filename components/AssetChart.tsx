import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

interface AssetChartProps {
  symbol: string;
  assetType: string;
  range: '24h' | '7d' | 'all';
}

export default function AssetChart({ symbol, assetType, range }: AssetChartProps) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/history?symbol=${symbol}&assetType=${assetType}&range=${range}`)
      .then(resp => setData(resp.data))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, [symbol, assetType, range]);

  if (loading) return <div>Loading chart...</div>;
  if (!data.length) return <div>No historical data.</div>;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <XAxis dataKey="timestamp" tickFormatter={t => new Date(t).toLocaleString()} minTickGap={30} />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip labelFormatter={l => new Date(l).toLocaleString()} />
        <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
