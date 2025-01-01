import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User, LoginCredentials, SignUpCredentials } from '../types/auth';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      setError(null);
      // TODO: Implement actual login logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({
        id: '1',
        email: credentials.email,
        name: 'Demo User'
      });
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (credentials: SignUpCredentials) => {
    try {
      setIsLoading(true);
      setError(null);
      // TODO: Implement actual signup logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({
        id: '1',
        email: credentials.email,
        name: credentials.name
      });
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = useCallback(async () => {
    try {
      setIsLoading(true);
      // TODO: Implement actual logout logic here
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser(null);
      navigate('/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      setError(null);
      // TODO: Implement Google login logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({
        id: '1',
        email: 'demo@example.com',
        name: 'Demo User'
      });
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    isLoading,
    error,
    login,
    signup,
    logout,
    loginWithGoogle
  };
}