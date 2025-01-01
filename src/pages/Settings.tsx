import React from 'react';
import StrategySettings from '../components/settings/StrategySettings';

export default function Settings() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Strategy Settings</h1>
      <StrategySettings />
    </div>
  );
}