import React from 'react';

interface SocialLoginProps {
  onGoogleLogin: () => void;
}

export default function SocialLogin({ onGoogleLogin }: SocialLoginProps) {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or</span>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={onGoogleLogin}
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            className="w-5 h-5 mr-2" 
            alt="Google"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}