'use client';

import React from 'react';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function ThankYouPage() {
  return (
    <div 
      className={`min-h-screen text-white flex flex-col justify-between ${playfair.variable} ${montserrat.variable} relative`}
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(26, 15, 0, 0.85), rgba(0, 0, 0, 0.95)), url(/reservation.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center pt-56 pb-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-xl w-full mx-auto text-center bg-gradient-to-br from-[#1A0F00]/80 to-black/80 border border-[#C8A27A]/30 rounded-2xl shadow-2xl p-8 md:p-12 backdrop-blur-sm">
          {/* Checkmark Icon */}
          <div className="w-20 h-20 bg-[#C8A27A]/15 border border-[#C8A27A]/45 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#C8A27A]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-[#C8A27A] mb-6">Thank You!</h1>
          <p className="text-white/80 font-sans text-lg mb-10 leading-relaxed">
            Your request has been successfully submitted. Our team will get back to you shortly to confirm your booking or inquiry.
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-3.5 rounded-lg bg-[#C8A27A] text-black font-bold hover:bg-[#B8927A] transition-all duration-300 font-sans tracking-wide"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
