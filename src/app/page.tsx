'use client';

import { useState } from 'react';
import Image from "next/image";
import { Playfair_Display, Montserrat } from 'next/font/google';
import BookingForm from '@/components/BookingForm';

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

  return (
    <div className={`min-h-screen bg-black text-white ${playfair.variable} ${montserrat.variable}`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8">
        <h1 className="text-4xl font-bold font-sans">DEJA BREW</h1>
        
        {/* Centered navigation with rounded border */}
        <div className="flex-1 flex justify-center">
          <div className="flex gap-12 items-center border border-white/30 rounded-full px-10 py-4">
            <a href="#about" className="hover:text-gray-300 font-sans text-lg">About us</a>
            <a href="#menu" className="hover:text-gray-300 font-sans text-lg">Menu</a>
            <a href="#book" className="hover:text-gray-300 font-sans text-lg">Book a table</a>
            <a href="#contact" className="hover:text-gray-300 font-sans text-lg">Contact us</a>
          </div>
        </div>
        
        {/* Book table button */}
        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-[#6F4E37] text-white px-10 py-4 rounded-md text-xl font-sans font-medium hover:bg-[#8B5E3C] transition"
        >
          BOOK A TABLE
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative h-[calc(100vh-100px)] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/restaurant-bg.jpg" // You'll need to add this image
            alt="Restaurant background"
            fill
            className="object-cover opacity-50"
          />
        </div>
        
        <div className="z-10 text-center">
          <p className="text-3xl italic mb-6 font-sans">F&B Restaurant</p>
          <h2 className="text-8xl font-serif mb-6">Artisanal Coffee.</h2>
          <h2 className="text-8xl font-serif">World Cuisine.</h2>
        </div>
      </main>

      {/* About Us Section */}
      <section className="min-h-screen bg-[#1A0F00] flex items-center p-20">
        <div className="container mx-auto grid grid-cols-2 gap-20">
          {/* Left Content */}
          <div className="space-y-10">
            <p className="text-3xl italic font-serif text-[#C8A27A]">About Us</p>
            <h2 className="text-7xl font-serif text-white">Crafted With Precision</h2>
            
            <div className="space-y-8 text-xl text-white/80">
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

            <div className="flex gap-5 pt-6">
              <span className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer transition text-lg">
                Continental
              </span>
              <span className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer transition text-lg">
                Asian
              </span>
              <span className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer transition text-lg">
                Pizza
              </span>
              <span className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 cursor-pointer transition text-lg">
                Beverages
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[700px] rounded-2xl overflow-hidden">
            <Image
              src="/cocktails.jpg" // Add this image to your public folder
              alt="Cocktail glasses"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Wholesome Experience Section */}
      <section className="min-h-screen bg-[#1A0F00] px-20 py-32">
        <h2 className="text-8xl font-serif text-center italic text-white mb-20">
          A Wholesome Experience
        </h2>
        
        <div className="container mx-auto grid grid-cols-3 gap-8">
          {/* First Image - Food */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/food-plate.jpg" // Add elegant food plate image
              alt="Elegant plated dish with flowers"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Second Image - Beer and Snacks */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/beer-snacks.jpg" // Add beer and snacks image
              alt="Beer mugs with fried snacks"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Third Image - Coffee */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/coffee-drinks.jpg" // Add coffee drinks image
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
