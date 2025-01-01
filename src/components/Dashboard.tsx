import React from 'react';
import { BarChart, TrendingUp, AlertTriangle } from 'lucide-react';
import type { Strategy, MarketData } from '../types';

const mockStrategies: Strategy[] = [
  {
    id: '1',
    name: 'Moving Average Crossover',
    description: 'Classic trend-following strategy',
    performance: 15.4,
    risk: 'Medium',
    timeframe: '1D'
  },
  {
    id: '2',
    name: 'Mean Reversion',
    description: 'Statistical arbitrage approach',
    performance: 12.8,
    risk: 'High',
    timeframe: '4H'
  }
];

const mockMarketData: MarketData[] = [
  { symbol: 'BTC/USD', price: 63500, change: 2.4, volume: 1250000 },
  { symbol: 'ETH/USD', price: 3400, change: -0.8, volume: 890000 },
  { symbol: 'SOL/USD', price: 120, change: 5.2, volume: 450000 }
];

export default function Dashboard() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Trading Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total Return"
            value="+24.5%"
            icon={<TrendingUp className="w-6 h-6 text-green-500" />}
          />
          <StatCard
            title="Active Strategies"
            value="5"
            icon={<BarChart className="w-6 h-6 text-blue-500" />}
          />
          <StatCard
            title="Risk Level"
            value="Medium"
            icon={<AlertTriangle className="w-6 h-6 text-yellow-500" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Active Strategies</h2>
            <div className="space-y-4">
              {mockStrategies.map(strategy => (
                <StrategyCard key={strategy.id} strategy={strategy} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
            <div className="space-y-4">
              {mockMarketData.map(market => (
                <MarketRow key={market.symbol} data={market} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}

function StrategyCard({ strategy }: { strategy: Strategy }) {
  return (
    <div className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{strategy.name}</h3>
          <p className="text-sm text-gray-600">{strategy.description}</p>
        </div>
        <span className={`px-2 py-1 rounded text-sm ${
          strategy.risk === 'High' ? 'bg-red-100 text-red-800' :
          strategy.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {strategy.risk}
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="text-gray-600">Performance: <span className="text-green-600">+{strategy.performance}%</span></span>
        <span className="text-gray-600">Timeframe: {strategy.timeframe}</span>
      </div>
    </div>
  );
}

function MarketRow({ data }: { data: MarketData }) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
      <span className="font-medium">{data.symbol}</span>
      <div className="flex items-center space-x-4">
        <span className="font-medium">${data.price.toLocaleString()}</span>
        <span className={`${
          data.change >= 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {data.change >= 0 ? '+' : ''}{data.change}%
        </span>
        <span className="text-gray-600 text-sm">
          Vol: {(data.volume / 1000).toFixed(1)}K
        </span>
      </div>
    </div>
  );
}