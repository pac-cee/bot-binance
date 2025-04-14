import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';
import axios from 'axios';

interface AssetChartProps {
  symbol: string;
  assetType: string;
  range: '24h' | '7d' | 'all';
}

// Helper to color-code up/down segments
function getLineSegments(data: any[]) {
  if (!data.length) return [];
  const segments = [];
  for (let i = 1; i < data.length; i++) {
    segments.push({
      from: data[i - 1],
      to: data[i],
      isUp: data[i].price > data[i - 1].price
    });
  }
  return segments;
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

  const segments = getLineSegments(data);

  return (
    <ResponsiveContainer width="100%" height={300}>
      {/* Uncomment for candlestick support later */}
      {/* <ComposedChart ... > ... </ComposedChart> */}
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <XAxis dataKey="timestamp" tickFormatter={t => new Date(t).toLocaleString()} minTickGap={30} />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip labelFormatter={l => new Date(l).toLocaleString()} />
        {/* Draw up/down segments with different colors */}
        {segments.map((seg, i) => (
          <Line
            key={i}
            data={[seg.from, seg.to]}
            type="monotone"
            dataKey="price"
            stroke={seg.isUp ? '#22c55e' : '#ef4444'}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        ))}
        {/* Markers for up/down points */}
        {segments.map((seg, i) => (
          <ReferenceDot
            key={i}
            x={seg.to.timestamp}
            y={seg.to.price}
            r={3}
            fill={seg.isUp ? '#22c55e' : '#ef4444'}
            stroke="none"
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
