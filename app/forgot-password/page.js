'use client';

import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setMessage('');
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setMessage('Check your email for password reset instructions');
    } catch (error) {
      setError('Failed to send password reset email. Please check your email address.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-indigo-900/80 to-black/90">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8 border border-white/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Reset your password
            </h2>
            <p className="text-gray-300 mb-8">
              Enter your email address and we&apos;ll send you instructions to reset your password.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {message && (
              <div className="bg-green-500/20 border border-green-400 text-green-200 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{message}</span>
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
            
            <div className="text-sm text-center">
              <Link href="/login" className="font-medium text-indigo-300 hover:text-indigo-200">
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 
