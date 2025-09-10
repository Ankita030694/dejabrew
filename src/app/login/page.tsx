'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display, Montserrat } from "next/font/google";

// Font setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created successfully');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully');
      }
      router.push('/admin');
    } catch (error: any) {
      console.error('Authentication error:', error);
      setError(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode: string) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No user found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters.';
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      default:
        return 'An error occurred. Please try again.';
    }
  };

  return (
    <div className={`min-h-screen ${playfair.variable} ${montserrat.variable}`}>
      {/* Background with beer theme */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#1A0F00] via-[#2D1B00] to-[#1A0F00]">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bubble-1"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-300 rounded-full animate-bubble-2"></div>
          <div className="absolute top-60 left-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-bubble-3"></div>
          <div className="absolute top-80 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-bubble-1"></div>
          <div className="absolute bottom-40 left-20 w-4 h-4 bg-yellow-300 rounded-full animate-bubble-2"></div>
          <div className="absolute bottom-60 right-10 w-2 h-2 bg-yellow-500 rounded-full animate-bubble-3"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto flex justify-between items-center p-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo9.svg" 
                alt="Deja Brew Logo" 
                width={168} 
                height={67}
                className="w-auto h-12"
              />
            </Link>
            <Link
              href="/"
              className="text-white/80 hover:text-white font-montserrat text-sm border border-white/20 px-4 py-2 rounded hover:bg-white/10 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
          <div className="w-full max-w-md">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="mb-6">
                <Image 
                  src="/logo9.svg" 
                  alt="Deja Brew Logo" 
                  width={200} 
                  height={80}
                  className="w-auto h-16 mx-auto"
                />
              </div>
              <h1 className={`text-4xl font-playfair font-bold text-white mb-2`}>
                {isSignUp ? 'Join Deja Brew' : 'Welcome Back'}
              </h1>
              <p className="text-white/70 font-montserrat">
                {isSignUp ? 'Create your account to continue' : 'Sign in to your account'}
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white/80 font-montserrat text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-montserrat"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-white/80 font-montserrat text-sm mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent font-montserrat"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                    <div className="text-red-200 font-montserrat text-sm">{error}</div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#6F4E37] hover:bg-[#8B5E3C] text-white font-montserrat font-medium py-3 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {isSignUp ? 'Creating Account...' : 'Signing In...'}
                    </div>
                  ) : (
                    isSignUp ? 'Create Account' : 'Sign In'
                  )}
                </button>

                {/* Toggle Sign Up/Sign In */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-white/70 hover:text-white font-montserrat text-sm transition"
                  >
                    {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                  </button>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="text-white/50 font-montserrat text-xs">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
