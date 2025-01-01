// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthLayout from '../components/auth/AuthLayout';
// import LoginForm from '../components/auth/LoginForm';
// import type { LoginCredentials } from '../types/auth';

// export default function Login() {
//   const navigate = useNavigate();

//   const handleLogin = async (credentials: LoginCredentials) => {
//     try {
//       // TODO: Implement actual login logic
//       console.log('Login credentials:', credentials);
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <AuthLayout
//       title="Welcome back!"
//       subtitle="Login into your account to start adding strategies to your trades!"
//     >
//       <LoginForm onSubmit={handleLogin} />
//     </AuthLayout>
//   );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthLayout from '../components/auth/AuthLayout';
import FormInput from '../components/auth/FormInput';
import PasswordInput from '../components/auth/PasswordInput';
import SocialLogin from '../components/auth/SocialLogin';
import type { LoginCredentials } from '../types/auth';

export default function Login() {
  const navigate = useNavigate();
  const { login, loginWithGoogle, isLoading, error } = useAuth();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate('/', { replace: true });
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/', { replace: true });
    } catch (err) {
      console.error('Google login failed:', err);
    }
  };

  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Login into your account to start adding strategies to your trades!"
    >
      <form className="space-y-6" onSubmit={handleLogin}>
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <FormInput
          id="email"
          type="email"
          label="Email ID / Client ID"
          value={credentials.email}
          onChange={(value) => setCredentials({ ...credentials, email: value })}
        />

        <PasswordInput
          id="password"
          label="Password"
          value={credentials.password}
          onChange={(value) => setCredentials({ ...credentials, password: value })}
        />

        <div className="flex items-center justify-end">
          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Signing in...' : 'Continue'}
        </button>

        <SocialLogin onGoogleLogin={handleGoogleLogin} />

        <div className="text-sm text-center">
          <span className="text-gray-500">Don't have an account?</span>{' '}
          <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign Up
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}