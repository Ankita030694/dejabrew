'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavbarProps {
  onBookingOpen: () => void;
}

export default function Navbar({ onBookingOpen }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuDropdownOpen, setIsMobileMenuDropdownOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuDropdownOpen(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col items-center p-4">
          {/* Top Row: Logo with Contact/Booking */}
          <div className="w-full flex justify-between items-center mb-4">
            {/* Left Contact Info */}
            <div className="hidden md:flex flex-col gap-2">
              <a href="tel:+918447441441" className="flex items-center gap-2 text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +91 8447441441
              </a>
              <a href="mailto:dejabrewmail@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                dejabrewmail@gmail.com
              </a>
            </div>

            {/* Mobile Layout Container */}
            <div className="md:hidden w-full flex items-center justify-between">
              <button 
                className="text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              <div className="h-17 flex items-center">
                <Image 
                  src="/logo9.svg" 
                  alt="Deja Brew Logo" 
                  width={168} 
                  height={67}
                  className="w-auto h-full"
                />
              </div>
              <div className="w-8"></div>
            </div>

            <div className="hidden md:block h-22">
              <Image 
                src="/logo9.svg" 
                alt="Deja Brew Logo" 
                width={252} 
                height={90}
                className="w-auto h-full"
              />
            </div>

            <button
              onClick={onBookingOpen}
              className="hidden md:block border border-white/20 text-white px-6 py-2 rounded hover:bg-white/10 transition"
            >
              BOOK A TABLE
            </button>
          </div>

          {/* Bottom Row: Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-white/80 hover:text-white">HOME</a>
            <a href="/about" className="text-white/80 hover:text-white">ABOUT US</a>
            <div className="relative group">
              <button className="text-white/80 group-hover:text-white flex items-center gap-1 cursor-pointer uppercase font-sans text-sm">
                MENU
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-md bg-[#1A0F00] border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/foodandbar.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition font-sans">
                    Food & Bar
                  </a>
                  <a href="/summer_cocktails.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition font-sans">
                    Summer Cocktails
                  </a>
                </div>
              </div>
            </div>
            <a href="/contact" className="text-white/80 hover:text-white">CONTACT US</a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-0 left-0 h-full w-[80%] bg-[#1A0F00] z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-start pt-10 gap-8">
          <a href="/about" className="text-2xl font-sans" onClick={() => setIsMobileMenuOpen(false)}>About us</a>
          
          {/* Mobile Menu Dropdown */}
          <div className="w-full flex flex-col items-center">
            <button 
              onClick={() => setIsMobileMenuDropdownOpen(!isMobileMenuDropdownOpen)}
              className="text-2xl font-sans flex items-center gap-2 text-white"
            >
              Menu
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-5 h-5 transition-transform duration-200 ${isMobileMenuDropdownOpen ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className={`w-full flex flex-col items-center gap-4 overflow-hidden transition-all duration-300 ${isMobileMenuDropdownOpen ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <a href="/foodandbar.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-white/70 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                Food & Bar
              </a>
              <a href="/summer_cocktails.pdf" target="_blank" rel="noopener noreferrer" className="text-xl text-white/70 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                Summer Cocktails
              </a>
            </div>
          </div>

          <a href="#book" className="text-2xl font-sans" onClick={() => setIsMobileMenuOpen(false)}>Book a table</a>
          <a href="/contact" className="text-2xl font-sans" onClick={() => setIsMobileMenuOpen(false)}>Contact us</a>
          
          <button
            onClick={() => {
              onBookingOpen();
              setIsMobileMenuOpen(false);
            }}
            className="mt-8 w-[80%] bg-[#6F4E37] text-white px-6 py-4 rounded-md text-xl font-sans font-medium hover:bg-[#8B5E3C] transition"
          >
            BOOK A TABLE
          </button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
} 