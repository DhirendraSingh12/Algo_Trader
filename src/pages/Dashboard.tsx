import React from 'react';
import { TrendingUp, BarChart, AlertTriangle } from 'lucide-react';
import ActiveStrategies from '../components/dashboard/ActiveStrategies';
import MarketOverview from '../components/dashboard/MarketOverview';
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
    <div className="container mx-auto px-4 py-8">
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
        <ActiveStrategies strategies={mockStrategies} />
        <MarketOverview data={mockMarketData} />
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