import React from 'react';
import { Settings, Bell, Shield } from 'lucide-react';

export default function StrategySettings() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg divide-y">
        <SettingSection
          title="Risk Management"
          icon={<Shield className="w-5 h-5 text-blue-500" />}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Stop Loss (%)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="2.0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Take Profit (%)</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="6.0"
              />
            </div>
          </div>
        </SettingSection>

        <SettingSection
          title="Notifications"
          icon={<Bell className="w-5 h-5 text-blue-500" />}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Trade Notifications</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Performance Alerts</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </SettingSection>
      </div>
    </div>
  );
}

function SettingSection({ 
  title, 
  icon, 
  children 
}: { 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}