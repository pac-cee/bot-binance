import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs } from './ui/tabs';
import AssetChart from './AssetChart';
import CandlestickChart from './CandlestickChart';

interface CoinModalProps {
  open: boolean;
  onClose: () => void;
  coin: string;
  pairSymbol: string;
  pairName: string;
  assetType: string;
  price: number | undefined;
  change: string | undefined;
  changePct: string | undefined;
  chartType: 'line' | 'candle';
  setChartType: (v: 'line' | 'candle') => void;
  range: '24h' | '7d' | 'all';
  setRange: (v: '24h' | '7d' | 'all') => void;
}

export function CoinModal({
  open,
  onClose,
  coin,
  pairSymbol,
  pairName,
  assetType,
  price,
  change,
  changePct,
  chartType,
  setChartType,
  range,
  setRange,
}: CoinModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-background rounded-2xl shadow-2xl max-w-lg w-full relative p-0 md:p-0">
        <button className="absolute top-4 right-4 text-2xl text-foreground hover:text-primary" onClick={onClose}>
          &times;
        </button>
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-3xl font-bold">{coin}</span>
            <span className="text-base text-muted-foreground">{pairName}</span>
          </div>
          <div className="text-2xl font-mono mb-2">{price !== undefined ? price : '...'}</div>
          <div className={
            change ? (parseFloat(change!) > 0 ? 'text-green-600' : 'text-red-600') : 'text-muted-foreground'
          }>
            {change ? `${parseFloat(change!) > 0 ? '+' : ''}${parseFloat(change!).toFixed(2)} (${parseFloat(changePct!).toFixed(2)}%)` : '...'}
          </div>
          <div className="flex items-center gap-4 mt-4 mb-2">
            <Tabs
              value={chartType}
              onValueChange={v => setChartType(v as 'line' | 'candle')}
              tabs={[
                { label: 'Line', value: 'line' },
                { label: 'Candle', value: 'candle' }
              ]}
            />
            <Tabs
              value={range}
              onValueChange={v => setRange(v as '24h' | '7d' | 'all')}
              tabs={[
                { label: '24h', value: '24h' },
                { label: '7d', value: '7d' },
                { label: 'All', value: 'all' },
              ]}
            />
          </div>
          <div className="h-72">
            {chartType === 'line' && (
              <AssetChart symbol={pairSymbol} assetType={assetType} range={range} />
            )}
            {chartType === 'candle' && (
              <CandlestickChart symbol={pairSymbol} assetType={assetType} range={range} />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
