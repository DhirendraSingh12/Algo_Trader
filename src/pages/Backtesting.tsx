import React from 'react';
import BacktestForm from '../components/backtesting/BacktestForm';
import PerformanceMetrics from '../components/analytics/PerformanceMetrics';

const mockResults = {
  returns: 24.5,
  sharpeRatio: 1.8,
  maxDrawdown: -12.3,
  winRate: 0.65
};

export default function Backtesting() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Strategy Backtesting</h1>
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Configure Backtest</h2>
          <BacktestForm />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <PerformanceMetrics results={mockResults} />
        </div>
      </div>
    </div>
  );
}