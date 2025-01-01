import React, { createContext, useContext, useState, useCallback } from 'react';
import type { User, LoginCredentials, SignUpCredentials } from '../types/auth';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignUpCredentials) => Promise<void>;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        error, 
        login, 
        signup, 
        logout, 
        loginWithGoogle 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}