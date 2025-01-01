import React from 'react';
import type { Strategy } from '../../types';

export default function ActiveStrategies({ strategies }: { strategies: Strategy[] }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Active Strategies</h2>
      <div className="space-y-4">
        {strategies.map(strategy => (
          <StrategyCard key={strategy.id} strategy={strategy} />
        ))}
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