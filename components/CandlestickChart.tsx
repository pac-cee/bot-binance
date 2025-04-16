import { useEffect, useRef } from 'react';
import { ResponsiveContainer } from 'recharts';
import { createChart, IChartApi, UTCTimestamp } from 'lightweight-charts';
import axios from 'axios';

interface CandlestickChartProps {
  symbol: string;
  range: '24h' | '7d' | 'all';
  assetType: string;
}

export default function CandlestickChart({ symbol, range, assetType }: CandlestickChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<any>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;
    if (chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
    }
    // lightweight-charts v4+ uses createChart and returns an IChartApi
    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
      layout: { background: 'white' as any, textColor: '#222' },
      grid: { vertLines: { color: '#eee' }, horzLines: { color: '#eee' } },
      timeScale: { timeVisible: true, secondsVisible: false },
    });
    // Use v4+ API. TypeScript may not know about addCandlestickSeries, so cast as any if needed.
    if (chartRef.current && typeof (chartRef.current as any).addCandlestickSeries === 'function') {
      seriesRef.current = (chartRef.current as any).addCandlestickSeries();
    } else {
      seriesRef.current = null;
    }
    return () => { chartRef.current?.remove(); };
  }, [symbol, range]);

  useEffect(() => {
    async function fetchCandles() {
      let interval = '1h', limit = 24;
      if (range === '7d') { interval = '1h'; limit = 7 * 24; }
      if (range === 'all') { interval = '1d'; limit = 365; }
      let url = assetType === 'crypto'
        ? `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`
        : `/api/history?symbol=${symbol}&assetType=${assetType}&range=${range}`;
      const resp = await axios.get(url);
      let candles = resp.data.map((k: any) => ({
        time: assetType === 'crypto' ? (k[0] / 1000) as UTCTimestamp : Math.floor(k.timestamp / 1000),
        open: parseFloat(assetType === 'crypto' ? k[1] : k.open || k.price),
        high: parseFloat(assetType === 'crypto' ? k[2] : k.high || k.price),
        low: parseFloat(assetType === 'crypto' ? k[3] : k.low || k.price),
        close: parseFloat(assetType === 'crypto' ? k[4] : k.close || k.price),
      }));
      seriesRef.current?.setData(candles);
    }
    fetchCandles();
  }, [symbol, range, assetType]);

  // WebSocket for live updates (crypto only)
  useEffect(() => {
    if (assetType !== 'crypto') return;
    const ws = new window.WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_1h`);
    ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      const k = data.k;
      if (seriesRef.current) {
        seriesRef.current.update({
          time: k.t / 1000,
          open: parseFloat(k.o),
          high: parseFloat(k.h),
          low: parseFloat(k.l),
          close: parseFloat(k.c),
        });
      }
    };
    return () => ws.close();
  }, [symbol, assetType]);

  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: 300 }} />
  );
}
