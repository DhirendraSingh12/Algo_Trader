import React from 'react';
import type { MarketData } from '../../types';

export default function MarketOverview({ data }: { data: MarketData[] }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
      <div className="space-y-4">
        {data.map(market => (
          <MarketRow key={market.symbol} data={market} />
        ))}
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