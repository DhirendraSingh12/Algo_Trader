import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import SignUpForm from '../components/auth/SignUpForm';
import type { SignUpCredentials } from '../types/auth';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = async (credentials: SignUpCredentials) => {
    try {
      // TODO: Implement actual signup logic
      console.log('SignUp credentials:', credentials);
      navigate('/');
    } catch (error) {
      console.error('SignUp failed:', error);
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start your trading journey with AlgoTrader"
    >
      <SignUpForm onSubmit={handleSignUp} />
    </AuthLayout>
  );
}