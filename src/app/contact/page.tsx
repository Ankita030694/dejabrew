'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to Firebase
      await addDoc(collection(db, 'forms'), {
        ...formData,
        timestamp: new Date(),
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        notes: ''
      });
      
      // Show thank you message
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 5000); // Hide after 5 seconds
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            className="bg-[#1A0F00]/80 backdrop-blur-sm rounded-lg p-8 border border-white/20 relative"
          >
            {showThankYou && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1A0F00]/95 rounded-lg">
                <div className="text-center p-8">
                  <h3 className="text-3xl font-serif text-[#C8A27A] mb-4">Thank You!</h3>
                  <p className="text-white/80">We've received your message and will get back to you soon.</p>
                </div>
              </div>
            )}
            
            <h2 className="text-4xl font-serif text-[#C8A27A] mb-8">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="w-full p-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C8A27A]"
                />
              </div>

              <div className="space-y-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C8A27A]"
                />
              </div>

              <div className="space-y-2">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C8A27A]"
                />
              </div>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Message"
                rows={5}
                required
                className="w-full p-4 rounded-md bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#C8A27A]"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-4 text-xl rounded-md bg-[#C8A27A] text-white font-bold hover:bg-[#D4B48C] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;