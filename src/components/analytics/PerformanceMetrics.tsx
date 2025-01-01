import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import type { BacktestResult } from '../../types';

interface Props {
  results: BacktestResult;
}

export default function PerformanceMetrics({ results }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Returns"
        value={`${results.returns.toFixed(2)}%`}
        icon={<TrendingUp className="w-6 h-6 text-green-500" />}
        trend="positive"
      />
      <MetricCard
        title="Sharpe Ratio"
        value={results.sharpeRatio.toFixed(2)}
        icon={<Activity className="w-6 h-6 text-blue-500" />}
        trend="neutral"
      />
      <MetricCard
        title="Max Drawdown"
        value={`${results.maxDrawdown.toFixed(2)}%`}
        icon={<TrendingDown className="w-6 h-6 text-red-500" />}
        trend="negative"
      />
      <MetricCard
        title="Win Rate"
        value={`${(results.winRate * 100).toFixed(1)}%`}
        icon={<Activity className="w-6 h-6 text-purple-500" />}
        trend="positive"
      />
    </div>
  );
}

function MetricCard({ 
  title, 
  value, 
  icon, 
  trend 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  trend: 'positive' | 'negative' | 'neutral';
}) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-600 text-sm">{title}</p>
        {icon}
      </div>
      <p className={`text-2xl font-bold ${
        trend === 'positive' ? 'text-green-600' :
        trend === 'negative' ? 'text-red-600' :
        'text-gray-900'
      }`}>
        {value}
      </p>
    </div>
  );
}