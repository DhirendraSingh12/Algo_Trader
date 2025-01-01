import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LineChart, BookOpen, Activity, Settings } from 'lucide-react';
import ProfileMenu from './profile/ProfileMenu';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-400' : 'text-white hover:text-blue-400';
  };

  return (
    <nav className="bg-slate-900 text-white h-16 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <LineChart className="w-8 h-8 text-blue-400" />
          <span className="text-xl font-bold">AlgoTrader</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <NavItem to="/" icon={<Activity />} text="Dashboard" isActive={isActive('/')} />
          <NavItem to="/backtest" icon={<LineChart />} text="Backtest" isActive={isActive('/backtest')} />
          <NavItem to="/learn" icon={<BookOpen />} text="Learn" isActive={isActive('/learn')} />
          <NavItem to="/settings" icon={<Settings />} text="Settings" isActive={isActive('/settings')} />
          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
}

function NavItem({ 
  to, 
  icon, 
  text, 
  isActive 
}: { 
  to: string; 
  icon: React.ReactNode; 
  text: string;
  isActive: string;
}) {
  return (
    <Link to={to} className={`flex items-center space-x-2 transition-colors ${isActive}`}>
      {icon}
      <span>{text}</span>
    </Link>
  );
}