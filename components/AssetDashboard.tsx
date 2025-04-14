import { useEffect, useState } from 'react';
import axios from 'axios';
import AssetChart from './AssetChart';
import CandlestickChart from './CandlestickChart';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Tabs } from './ui/tabs';
import { useMemo, useRef } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { CoinModal } from './CoinModal';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeader } from './ui/table';
import { FixedSizeList as List } from 'react-window';

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

type SortKey = 'symbol' | 'price' | 'change';

export default function AssetDashboard() {
  const [search, setSearch] = useState('');
  const [chartType, setChartType] = useState<'line' | 'candle'>('line');
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [ticker24, setTicker24] = useState<Record<string, Ticker24hr>>({});
  const [selected, setSelected] = useState<Asset | null>(null);
  const [range, setRange] = useState<'24h' | '7d' | 'all'>('24h');
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
      } catch { return []; }
    }
    return [];
  });
  const [showFavorites, setShowFavorites] = useState(false);
  const [filterQuote, setFilterQuote] = useState('ALL');
  const [sortKey, setSortKey] = useState<SortKey>('symbol');
  const [sortAsc, setSortAsc] = useState(true);
  const [tab, setTab] = useState<'pairs' | 'coins'>('pairs');
  const [selectedCoin, setSelectedCoin] = useState<string | null>(null);
  // For sparklines: map symbol -> price history
  const [priceHistory, setPriceHistory] = useState<Record<string, number[]>>({});
  // Coin modal state
  const [coinModal, setCoinModal] = useState<null | { coin: string, best: { symbol: string, name: string } }>(null);
  const [coinModalChartType, setCoinModalChartType] = useState<'line' | 'candle'>('line');
  const [coinModalRange, setCoinModalRange] = useState<'24h' | '7d' | 'all'>('24h');

  // Fetch all Binance spot pairs (exchangeInfo)
  useEffect(() => {
    async function fetchAssets() {
      setLoading(true);
      try {
        const resp = await axios.get('https://api.binance.com/api/v3/exchangeInfo');
        const symbols: Asset[] = resp.data.symbols
          .filter((s: any) => s.status === 'TRADING' && s.isSpotTradingAllowed)
          .map((s: any) => ({
            symbol: s.symbol,
            name: `${s.baseAsset}/${s.quoteAsset}`,
            assetType: 'crypto',
          }));
        setAssets(symbols);
      } finally {
        setLoading(false);
      }
    }
    fetchAssets();
  }, []);

  // Fetch 24hr stats for all pairs
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

  // WebSocket for all tickers (miniTicker stream)
  useEffect(() => {
    if (!assets.length) return;
    const ws = new window.WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr');
    ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      const updated: Record<string, number> = {};
      for (const t of data) {
        updated[t.s] = parseFloat(t.c);
      }
      setPrices(prev => ({ ...prev, ...updated }));
      setPriceHistory(prev => {
        const next = { ...prev };
        for (const symbol in updated) {
          if (!next[symbol]) next[symbol] = [];
          next[symbol] = [...next[symbol].slice(-29), updated[symbol]]; // last 30 points
        }
        return next;
      });
    };
    return () => ws.close();
  }, [assets]);

  // --- Favorite toggle ---
  function toggleFavorite(symbol: string) {
    setFavorites((prev) => {
      let next;
      if (prev.includes(symbol)) {
        next = prev.filter(s => s !== symbol);
      } else {
        next = [...prev, symbol];
      }
      localStorage.setItem('favorites', JSON.stringify(next));
      return next;
    });
  }

  // --- Filtering, sorting, virtualization ---
  let filtered = assets.filter(asset =>
    asset.name.toLowerCase().includes(search.toLowerCase()) ||
    asset.symbol.toLowerCase().includes(search.toLowerCase())
  );
  if (showFavorites) filtered = filtered.filter(a => favorites.includes(a.symbol));
  if (filterQuote !== 'ALL') filtered = filtered.filter(a => a.symbol.endsWith(filterQuote));
  filtered = filtered.sort((a, b) => {
    if (sortKey === 'symbol') return sortAsc ? a.symbol.localeCompare(b.symbol) : b.symbol.localeCompare(a.symbol);
    if (sortKey === 'price') return sortAsc ? ((prices[a.symbol] || 0) - (prices[b.symbol] || 0)) : ((prices[b.symbol] || 0) - (prices[a.symbol] || 0));
    if (sortKey === 'change') return sortAsc
      ? (parseFloat(ticker24[a.symbol]?.priceChangePercent || '0') - parseFloat(ticker24[b.symbol]?.priceChangePercent || '0'))
      : (parseFloat(ticker24[b.symbol]?.priceChangePercent || '0') - parseFloat(ticker24[a.symbol]?.priceChangePercent || '0'));
    return 0;
  });

  // --- Unique coins (base assets) ---
  // --- Coins with their best pair (for price) ---
  const coins = useMemo(() => {
    // Map base asset to best pair symbol (prefer USDT, then BUSD, then any)
    const map: Record<string, { symbol: string, name: string }> = {};
    for (const asset of assets) {
      const [base, quote] = asset.name.split('/');
      if (!map[base]) {
        map[base] = { symbol: asset.symbol, name: asset.name };
      }
      // Prefer USDT
      if (quote === 'USDT') {
        map[base] = { symbol: asset.symbol, name: asset.name };
      } else if (quote === 'BUSD' && !map[base].name.endsWith('USDT')) {
        map[base] = { symbol: asset.symbol, name: asset.name };
      }
    }
    return Object.entries(map).sort((a, b) => a[0].localeCompare(b[0]));
  }, [assets]);

  // --- All pairs for a selected coin ---
  const pairsForCoin = useMemo(() => {
    if (!selectedCoin) return [];
    return assets.filter(a => a.name.startsWith(selectedCoin + '/'));
  }, [assets, selectedCoin]);

  // --- Virtualized row renderer ---
  const Row = ({ index, style }: { index: number, style: React.CSSProperties }) => {
    const asset = filtered[index];
    return (
      <TableRow
        key={asset.symbol}
        style={style}
        className="cursor-pointer hover:bg-muted/50"
        onClick={() => { setSelected(asset); setRange('24h'); }}
      >
        <TableCell className="text-2xl" onClick={e => { e.stopPropagation(); toggleFavorite(asset.symbol); }}>
          <span title={favorites.includes(asset.symbol) ? 'Unfavorite' : 'Favorite'}>
            {favorites.includes(asset.symbol) ? '★' : '☆'}
          </span> {assetTypeIcon(asset.assetType)}
        </TableCell>
        <TableCell>{asset.name}</TableCell>
        <TableCell className="font-mono">{asset.symbol}</TableCell>
        <TableCell className="font-mono">{prices[asset.symbol] ?? '...'}</TableCell>
        <TableCell>
          {ticker24[asset.symbol] && (
            <span className={
              parseFloat(ticker24[asset.symbol].priceChange) > 0 ? 'text-green-600' : 'text-red-600'
            }>
              {parseFloat(ticker24[asset.symbol].priceChange) > 0 ? '+' : ''}
              {parseFloat(ticker24[asset.symbol].priceChange).toFixed(2)}
              {' '}({parseFloat(ticker24[asset.symbol].priceChangePercent).toFixed(2)}%)
            </span>
          )}
        </TableCell>
        <TableCell>{ticker24[asset.symbol] ? ticker24[asset.symbol].highPrice : '-'}</TableCell>
        <TableCell>{ticker24[asset.symbol] ? ticker24[asset.symbol].lowPrice : '-'}</TableCell>
      </TableRow>
    );
  };

  // --- Quote asset filter options ---
  const quoteAssets = Array.from(new Set(assets.map(a => a.symbol.slice(-4)).concat(assets.map(a => a.symbol.slice(-3))))).filter(q => q.match(/^[A-Z]+$/)).sort();

  return (
    <div className="p-8 bg-background text-foreground min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Trading Dashboard</h1>
      <div className="mb-4 flex flex-col md:flex-row gap-4 items-center">
        <Tabs
          value={tab}
          onValueChange={v => { setTab(v as 'pairs' | 'coins'); setSelectedCoin(null); }}
          tabs={[{ label: 'Pairs', value: 'pairs' }, { label: 'Coins', value: 'coins' }]}
        />
        {tab === 'pairs' && <>
          <Input
            type="text"
            placeholder="Search assets..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="ml-4"
          />
          <Tabs
            value={chartType}
            onValueChange={v => setChartType(v as 'line' | 'candle')}
            tabs={[
              { label: 'Line', value: 'line' },
              { label: 'Candle', value: 'candle' }
            ]}
            className="ml-auto"
          />
        </>}
      </div>
      {tab === 'pairs' && <>
        <div className="mb-2 flex gap-2 flex-wrap items-center">
          <Button variant={showFavorites ? 'default' : 'outline'} onClick={() => setShowFavorites(f => !f)}>
            {showFavorites ? 'Show All' : 'Show Favorites'}
          </Button>
          <span>Quote:</span>
          <select className="border rounded px-2 py-1" value={filterQuote} onChange={e => setFilterQuote(e.target.value)}>
            <option value="ALL">ALL</option>
            {quoteAssets.map(q => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
          <span>Sort by:</span>
          <select className="border rounded px-2 py-1" value={sortKey} onChange={e => setSortKey(e.target.value as SortKey)}>
            <option value="symbol">Symbol</option>
            <option value="price">Price</option>
            <option value="change">24h Change</option>
          </select>
          <Button variant="outline" onClick={() => setSortAsc(a => !a)}>{sortAsc ? '▲' : '▼'}</Button>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Loading all Binance spot pairs...</div>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Fav</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Symbol</TableHeader>
                  <TableHeader>Price</TableHeader>
                  <TableHeader>24h Change</TableHeader>
                  <TableHeader>High</TableHeader>
                  <TableHeader>Low</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody style={{ display: 'block', height: '600px', overflow: 'auto' }}>
                <List
                  height={600}
                  itemCount={filtered.length}
                  itemSize={48}
                  width={1200}
                >
                  {Row}
                </List>
              </TableBody>
            </Table>
          )}
        </div>
        {selected && (
          <div className="mt-8 max-w-3xl mx-auto">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{selected.name} ({selected.symbol})</h2>
              <Tabs
                value={range}
                onValueChange={v => setRange(v as '24h' | '7d' | 'all')}
                tabs={ranges}
                className="mb-4"
              />
              {chartType === 'line' && (
                <AssetChart symbol={selected.symbol} assetType={selected.assetType} range={range} />
              )}
              {chartType === 'candle' && (
                <CandlestickChart symbol={selected.symbol} assetType={selected.assetType} range={range} />
              )}
            </Card>
          </div>
        )}
      </>}
      {tab === 'coins' && <>
        {/* Popular Coins */}
        <div className="mb-6">
          <div className="text-lg font-bold mb-2 text-primary">Popular Coins</div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {["BTC","ETH","BNB","SOL","ADA","XRP","DOGE","TON","AVAX","SHIB"].map((coin) => {
              const best = coins.find(([c]) => c === coin)?.[1];
              if (!best) return null;
              const price = prices[best.symbol];
              const change = ticker24[best.symbol]?.priceChange;
              const changePct = ticker24[best.symbol]?.priceChangePercent;
              const history = priceHistory[best.symbol] || [];
              return (
                <Card
                  key={coin}
                  className={`min-w-[180px] max-w-[200px] p-4 flex-shrink-0 cursor-pointer border-2 ${selectedCoin === coin ? 'border-primary' : 'border-transparent'} hover:border-primary transition-shadow shadow-lg hover:shadow-xl`}
                  onClick={() => {
                    setSelectedCoin(coin === selectedCoin ? null : coin);
                    setCoinModal({ coin, best });
                    setCoinModalChartType('line');
                    setCoinModalRange('24h');
                  }}
                >
                  <div className="text-2xl font-bold mb-1">{coin}</div>
                  <div className="font-mono text-lg">
                    {price !== undefined ? price : '...'}
                    <span className="text-xs ml-1 text-muted-foreground">{best.name.split('/')[1]}</span>
                  </div>
                  <div className={
                    change ? (parseFloat(change) > 0 ? 'text-green-600' : 'text-red-600') : 'text-muted-foreground'
                  }>
                    {change ? `${parseFloat(change) > 0 ? '+' : ''}${parseFloat(change).toFixed(2)} (${parseFloat(changePct).toFixed(2)}%)` : '...'}
                  </div>
                  <div className="my-2">
                    {history.length > 1 ? (
                      <Sparklines data={history} width={80} height={24} margin={4}>
                        <SparklinesLine color={change && parseFloat(change) > 0 ? '#16a34a' : '#dc2626'} />
                      </Sparklines>
                    ) : (
                      <div className="h-6" />
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">{assets.filter(a => a.name.startsWith(coin + '/')).length} pairs</div>
                </Card>
              );
            })}
          </div>
        </div>
        {/* Trending Coins */}
        <div className="mb-6">
          <div className="text-lg font-bold mb-2 text-accent">Trending Coins</div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[...coins]
              .sort((a, b) => {
                const aSym = a[1].symbol;
                const bSym = b[1].symbol;
                const aChg = aSym ? parseFloat(ticker24[aSym]?.priceChangePercent || '0') : 0;
                const bChg = bSym ? parseFloat(ticker24[bSym]?.priceChangePercent || '0') : 0;
                return bChg - aChg;
              })
              .slice(0, 6)
              .map(([coin, best]) => {
                const price = prices[best.symbol];
                const change = ticker24[best.symbol]?.priceChange;
                const changePct = ticker24[best.symbol]?.priceChangePercent;
                const history = priceHistory[best.symbol] || [];
                return (
                  <Card
                    key={coin}
                    className={`min-w-[180px] max-w-[200px] p-4 flex-shrink-0 cursor-pointer border-2 ${selectedCoin === coin ? 'border-primary' : 'border-transparent'} hover:border-primary transition-shadow shadow-lg hover:shadow-xl`}
                    onClick={() => {
                      setSelectedCoin(coin === selectedCoin ? null : coin);
                      setCoinModal({ coin, best });
                      setCoinModalChartType('line');
                      setCoinModalRange('24h');
                    }}
                  >
                    <div className="text-2xl font-bold mb-1">{coin}</div>
                    <div className="font-mono text-lg">
                      {price !== undefined ? price : '...'}
                      <span className="text-xs ml-1 text-muted-foreground">{best.name.split('/')[1]}</span>
                    </div>
                    <div className={
                      change ? (parseFloat(change) > 0 ? 'text-green-600' : 'text-red-600') : 'text-muted-foreground'
                    }>
                      {change ? `${parseFloat(change) > 0 ? '+' : ''}${parseFloat(change).toFixed(2)} (${parseFloat(changePct).toFixed(2)}%)` : '...'}
                    </div>
                    <div className="my-2">
                      {history.length > 1 ? (
                        <Sparklines data={history} width={80} height={24} margin={4}>
                          <SparklinesLine color={change && parseFloat(change) > 0 ? '#16a34a' : '#dc2626'} />
                        </Sparklines>
                      ) : (
                        <div className="h-6" />
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{assets.filter(a => a.name.startsWith(coin + '/')).length} pairs</div>
                  </Card>
                );
              })}
          </div>
        </div>
        {/* All Coins */}
        <div className="mb-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {coins.map(([coin, best]) => {
            const price = prices[best.symbol];
            const change = ticker24[best.symbol]?.priceChange;
            const changePct = ticker24[best.symbol]?.priceChangePercent;
            const history = priceHistory[best.symbol] || [];
            return (
              <Card
                key={coin}
                className={`p-4 cursor-pointer border-2 ${selectedCoin === coin ? 'border-primary' : 'border-transparent'} hover:border-primary`}
                onClick={() => {
                  setSelectedCoin(coin === selectedCoin ? null : coin);
                  setCoinModal({ coin, best });
                  setCoinModalChartType('line');
                  setCoinModalRange('24h');
                }}
              >
                <div className="text-xl font-bold">{coin}</div>
                <div className="font-mono text-lg">
                  {price !== undefined ? price : '...'}
                  <span className="text-xs ml-1 text-muted-foreground">{best.name.split('/')[1]}</span>
                </div>
                <div className={
                  change ? (parseFloat(change) > 0 ? 'text-green-600' : 'text-red-600') : 'text-muted-foreground'
                }>
                  {change ? `${parseFloat(change) > 0 ? '+' : ''}${parseFloat(change).toFixed(2)} (${parseFloat(changePct).toFixed(2)}%)` : '...'}
                </div>
                <div className="my-2">
                  {history.length > 1 ? (
                    <Sparklines data={history} width={80} height={24} margin={4}>
                      <SparklinesLine color={change && parseFloat(change) > 0 ? '#16a34a' : '#dc2626'} />
                    </Sparklines>
                  ) : (
                    <div className="h-6" />
                  )}
                </div>
                <div className="text-xs text-muted-foreground">{assets.filter(a => a.name.startsWith(coin + '/')).length} pairs</div>
              </Card>
            );
          })}
        </div>
        {selectedCoin && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">{selectedCoin} pairs</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Pair</TableHeader>
                  <TableHeader>Price</TableHeader>
                  <TableHeader>24h Change</TableHeader>
                  <TableHeader>High</TableHeader>
                  <TableHeader>Low</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {pairsForCoin.map(asset => (
                  <TableRow key={asset.symbol} className="cursor-pointer hover:bg-muted/50" onClick={() => { setSelected(asset); setTab('pairs'); setRange('24h'); }}>
                    <TableCell>{asset.name}</TableCell>
                    <TableCell className="font-mono">{prices[asset.symbol] ?? '...'}</TableCell>
                    <TableCell>
                      {ticker24[asset.symbol] && (
                        <span className={
                          parseFloat(ticker24[asset.symbol].priceChange) > 0 ? 'text-green-600' : 'text-red-600'
                        }>
                          {parseFloat(ticker24[asset.symbol].priceChange) > 0 ? '+' : ''}
                          {parseFloat(ticker24[asset.symbol].priceChange).toFixed(2)}
                          {' '}({parseFloat(ticker24[asset.symbol].priceChangePercent).toFixed(2)}%)
                        </span>
                      )}
                    </TableCell>
                    <TableCell>{ticker24[asset.symbol] ? ticker24[asset.symbol].highPrice : '-'}</TableCell>
                    <TableCell>{ticker24[asset.symbol] ? ticker24[asset.symbol].lowPrice : '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </>}
      {/* Coin Details Modal */}
      {coinModal && (
        <CoinModal
          open={!!coinModal}
          onClose={() => setCoinModal(null)}
          coin={coinModal.coin}
          pairSymbol={coinModal.best.symbol}
          pairName={coinModal.best.name}
          assetType="crypto"
          price={prices[coinModal.best.symbol]}
          change={ticker24[coinModal.best.symbol]?.priceChange}
          changePct={ticker24[coinModal.best.symbol]?.priceChangePercent}
          chartType={coinModalChartType}
          setChartType={setCoinModalChartType}
          range={coinModalRange}
          setRange={setCoinModalRange}
        />
      )}
    </div>
  );
}

