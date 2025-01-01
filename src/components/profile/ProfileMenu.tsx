import React from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function ProfileMenu() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <Link
        to="/login"
        className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
      >
        <User className="w-5 h-5" />
        <span>Login</span>
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-sm font-medium">{user.name?.[0] || user.email[0]}</span>
        </div>
        <span>{user.name || user.email}</span>
      </button>

      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
        <Link
          to="/settings"
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Link>
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
}