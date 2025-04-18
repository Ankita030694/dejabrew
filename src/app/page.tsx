'use client';

import { useState } from 'react';
import Image from "next/image";
import { Playfair_Display, Montserrat } from 'next/font/google';
import BookingForm from '@/components/BookingForm';
import '../styles/marquee.css';

// Font setup
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-black text-white ${playfair.variable} ${montserrat.variable}`}>
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <Image
          src="/hero.jpg"
          alt="Restaurant background"
          fill
          priority
          className="object-cover object-center object-[center_25%] brightness-50"
          sizes="100vw"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col items-center p-4">
          {/* Top Row: Logo with Contact/Booking */}
          <div className="w-full flex justify-between items-center mb-4">
            {/* Left Contact Info */}
            <div className="hidden md:flex flex-col gap-2">
              <a href="tel:+1234567890" className="flex items-center gap-2 text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +1 234 567 890
              </a>
              <a href="mailto:info@dejabrew.com" className="flex items-center gap-2 text-white/80 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@dejabrew.com
              </a>
            </div>

            {/* Mobile Layout Container */}
            <div className="md:hidden w-full flex items-center justify-between">
              {/* Mobile Menu Button */}
              <button 
                className="text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* Centered Logo for Mobile */}
              <h1 className="text-3xl font-bold font-sans tracking-wider">DEJA BREW</h1>

              {/* Empty div to maintain centering */}
              <div className="w-8"></div>
            </div>

            {/* Desktop Only Logo */}
            <h1 className="hidden md:block text-4xl font-bold font-sans tracking-wider">DEJA BREW</h1>

            {/* Book Table Button */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="hidden md:block border border-white/20 text-white px-6 py-2 rounded hover:bg-white/10 transition"
            >
              BOOK A TABLE
            </button>
          </div>

          {/* Bottom Row: Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white/80 hover:text-white">HOME</a>
            <a href="#about" className="text-white/80 hover:text-white">ABOUT US</a>
            <a href="#menu" className="text-white/80 hover:text-white">MENU</a>
            {/* <a href="#contact" className="text-white/80 hover:text-white">CONTACT US</a> */}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-0 left-0 h-full w-[80%] bg-[#1A0F00] z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button container */}
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

        {/* Mobile menu items */}
        <div className="flex flex-col items-center justify-start pt-10 gap-8">
          <a href="#about" className="text-2xl font-sans" onClick={() => setIsMobileMenuOpen(false)}>About us</a>
          <a href="#menu" className="text-2xl font-sans" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
          <a href="#book" className="text-2xl font-sans" onClick={() => setIsMobileMenuOpen(false)}>Book a table</a>
          {/* <a href="#contact" className="text-2xl font-sans" onClick={() => setIsMobileMenuOpen(false)}>Contact us</a> */}
          
          {/* Book table button in mobile menu */}
          <button
            onClick={() => {
              setIsBookingOpen(true);
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

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 md:px-0 pt-20 md:pt-0">
        <div className="z-10 text-center">
          <p className="text-2xl md:text-3xl italic mb-4 md:mb-6 font-sans">F&B Restaurant</p>
          <h2 className="text-5xl md:text-8xl font-serif mb-4 md:mb-6">Artisanal Coffee.</h2>
          <h2 className="text-5xl md:text-8xl font-serif">World Cuisine.</h2>
        </div>
      </main>

      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST BEER</span>
          <span className="marquee-text font-serif">•</span>
          
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-[#1A0F00] flex items-center p-6 md:p-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-10">
            <p className="text-2xl md:text-3xl italic font-serif text-[#C8A27A]">About Us</p>
            <h2 className="text-5xl md:text-7xl font-serif text-white">Crafted With Precision</h2>
            
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-white/80">
              <p>
                Every Cup At Deja Brew Is An Invitation To Pause.
                Crafted With Precision. Inspired By Cultures. Curated For
                Conversations.
              </p>
              
              <p>
                Whether It's Your Morning Ritual Or An Evening Unwinding,
                We Bring Together The Finest Beans, Soulful Dishes, And An
                Ambience That Feels Like A Second Home.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-5 pt-4 md:pt-6">
              <span className="px-6 md:px-8 py-2 md:py-3 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer transition text-base md:text-lg">
                Continental
              </span>
              <span className="px-6 md:px-8 py-2 md:py-3 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer transition text-base md:text-lg">
                Asian
              </span>
              <span className="px-6 md:px-8 py-2 md:py-3 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer transition text-base md:text-lg">
                Pizza
              </span>
              <span className="px-6 md:px-8 py-2 md:py-3 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer transition text-base md:text-lg">
                Beverages
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] md:h-[700px] rounded-2xl overflow-hidden">
            <Image
              src="/drinks.jpg" // Add this image to your public folder
              alt="Cocktail glasses"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Wholesome Experience Section */}
      <section className="min-h-screen bg-[#1A0F00] px-6 md:px-20 py-16 md:py-32">
        <h2 className="text-5xl md:text-8xl font-serif text-center italic text-white mb-10 md:mb-20">
          A Wholesome Experience
        </h2>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* First Image - Food */}
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/1.jpg" // Add elegant food plate image
              alt="Elegant plated dish with flowers"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Second Image - Beer and Snacks */}
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/3.jpg" // Add beer and snacks image
              alt="Beer mugs with fried snacks"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Third Image - Coffee */}
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/2.jpg" // Add coffee drinks image
              alt="Variety of coffee drinks"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {isBookingOpen && <BookingForm onClose={() => setIsBookingOpen(false)} />}
    </div>
  );
}
