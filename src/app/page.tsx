'use client';

import { useState } from 'react';
import Image from "next/image";
import { Playfair_Display, Montserrat } from 'next/font/google';
import BookingForm from '@/components/BookingForm';
import '../styles/marquee.css';
import Navbar from '@/components/Navbar';

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

      <Navbar onBookingOpen={() => setIsBookingOpen(true)} />

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
