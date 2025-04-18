'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Playfair_Display, Montserrat } from 'next/font/google';
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

const ContactUs = () => {
  return (
    <div className={`min-h-screen bg-[#1A0F00] text-white ${playfair.variable} ${montserrat.variable}`}>
      <Navbar onBookingOpen={() => {}} />
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-screen z-0" >
        <Image
          src="/contact-bg.jpg"
          alt="Contact background"
          fill
          priority
          className="object-cover object-center brightness-25"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 min-h-screen py-32 px-6 sm:px-8 lg:px-12" style={{marginTop: '100px'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Address Division */}
            <div className='bg-[#1A0F00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/20'>
              <h2 className="text-3xl font-serif text-[#C8A27A] mb-4">Our Address</h2>
              <p className="text-white/80 font-sans">
                Ward no 1, Kharsra No 1501, 1st Floor, Kalka Das Marg, Mehrauli, New Delhi, Delhi 110030
              </p>
              <div className="flex items-center space-x-3 mt-4">
                <span className="text-[#C8A27A]">📞</span>
                <span className="text-white/80 font-sans">+91 81309 33899</span>
              </div>
            </div>

            {/* Franchise Enquiries Division */}
            <div className='bg-[#1A0F00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/20'>
              <h2 className="text-3xl font-serif text-[#C8A27A] mb-4">Franchise Enquiries</h2>
              <p className='text-white/80 font-sans mb-4'>For franchisee enquiries contact Business Development and Franchising:</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-[#C8A27A]">📧</span>
                  <span className="text-white/80 font-sans">franchising@massiverestaurants.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#C8A27A]">📞</span>
                  <span className="text-white/80 font-sans">+91 88001 98091</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1A0F00]/80 backdrop-blur-sm rounded-lg p-8 border border-white/20"
          >
            <h2 className="text-4xl font-serif text-[#C8A27A] mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full p-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C8A27A]"
                />
              </div>

              <div className="space-y-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C8A27A]"
                />
              </div>

              <div className="space-y-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C8A27A]"
                />
              </div>

              <textarea
                name="notes"
                placeholder="Message"
                rows={5}
                className="w-full p-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C8A27A]"
              />

              <button
                type="submit"
                className="w-full p-4 text-xl rounded-md bg-[#C8A27A] text-white font-bold hover:bg-[#D4B48C] transition duration-200"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;