'use client';

import React, { useState, useEffect } from 'react';
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

// Client-only splash effects component to avoid hydration issues
const ClientOnlySplashEffects = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) return null;
  
  return (
    <>
      {/* Beer Splashes */}
      {[...Array(12)].map((_, i) => (
        <motion.div 
          key={`splash-${i}`}
          className={`absolute rounded-full ${i % 3 === 0 ? "bg-white/80" : "bg-[#F8C154]"}`}
          style={{ 
            width: 2 + Math.random() * 2,
            height: 2 + Math.random() * 2,
            left: '50%',
            top: '30%',
            x: '-50%',
            y: '-50%',
            boxShadow: i % 3 === 0 ? '0 0 2px #fff' : 'none'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0, 1, 0],
            x: [0, 0, (Math.random() - 0.5) * 120],
            y: [0, 0, (Math.random() - 0.8) * 100],
            scale: [0.5, 0.5, Math.random() + 0.5, 0]
          }}
          transition={{
            duration: 3,
            times: [0, 0.45, 0.5, 0.7],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      ))}
      
      {/* Fizz Bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`fizz-${i}`}
          className="absolute bg-white/90 rounded-full"
          style={{ 
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
            left: '50%',
            top: '30%',
            filter: 'blur(0.5px)'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0, 1, 0],
            x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 50],
            y: [0, -30 - Math.random() * 40, -60 - Math.random() * 40],
            scale: [0.8, Math.random() + 0.5, 0]
          }}
          transition={{
            duration: 3,
            times: [0.45, 0.5, 0.8],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      ))}
    </>
  );
};

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
              M-20, Block M, Greater Kailash 2 (GK 2), New Delhi
              </p>
              <div className="flex items-center space-x-3 mt-4">
                <span className="text-[#C8A27A]">📞</span>
                <span className="text-white/80 font-sans"> <a href="tel:+918447441441" className="text-white/70 hover:text-[#C8A27A] transition">
                  +91 8447441441
                </a> </span>
              </div>
            </div>

            {/* Beer Mugs Animation */}
            <div className='bg-[#1A0F00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/20 overflow-hidden'>
              <h2 className="text-3xl font-serif text-[#C8A27A] mb-6 text-center">Cheers to Good Times!</h2>
              <div className="relative h-48 w-[80%] flex justify-center items-center">
                {[0, 1, 2].map((index) => (
                  <motion.div 
                    key={index}
                    className="absolute"
                    style={{ 
                      left: index === 0 ? 'calc(50% - 70px)' : index === 1 ? '50%' : 'calc(50% + 70px)', 
                      bottom: '10%',
                      transform: index === 1 ? 'translateX(-50%)' : 'none',
                      transformOrigin: 'bottom center',
                      zIndex: 10 - index
                    }}
                    initial={{ y: 100, rotate: index === 0 ? -20 : index === 2 ? 20 : 0 }}
                    animate={{
                      y: [100, 0, -20, 0],
                      x: [0, 0, index === 0 ? 30 : index === 2 ? -30 : 0, 0],
                      rotate: [
                        index === 0 ? -20 : index === 2 ? 20 : 0,
                        index === 0 ? -30 : index === 2 ? 30 : 0,
                        0,
                        index === 0 ? -10 : index === 2 ? 10 : 0
                      ]
                    }}
                    transition={{
                      duration: 3,
                      times: [0, 0.4, 0.5, 0.6],
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <div className="relative w-20 h-28 md:w-24 md:h-32">
                      {/* Improved Beer Mug with Shadow */}
                      <div className="relative w-full h-full flex items-center justify-center" style={{ filter: "drop-shadow(0px 10px 8px rgba(0,0,0,0.25))" }}>
                        {/* Glass bottom base */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[85%] h-[12px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 rounded-[50%] border-t border-white/40"></div>
                        
                        {/* Glass body - main part */}
                        <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[90%] h-[85%] rounded-b-xl overflow-hidden" 
                          style={{ 
                            background: "linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                            border: "2px solid rgba(255,255,255,0.3)",
                            boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)",
                            clipPath: "polygon(2% 0%, 98% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)"
                          }}>
                        
                          {/* Glass reflections */}
                          <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-white/60 via-white/40 to-transparent"></div>
                          <div className="absolute top-0 left-[25%] w-[1px] h-[70%] bg-gradient-to-b from-white/30 via-white/20 to-transparent"></div>
                          
                          {/* Beer fill */}
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#D78329] to-[#F8C154]"
                            style={{ 
                              height: '75%',
                              boxShadow: "0 -5px 10px rgba(255, 255, 255, 0.2) inset",
                            }}
                            animate={{ 
                              height: ['75%', '60%', '73%'],
                              y: [0, -5, 0] 
                            }}
                            transition={{
                              duration: 3,
                              times: [0.4, 0.5, 0.7],
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                          >
                            {/* Beer bubbles */}
                            <div className="absolute inset-0 opacity-60">
                              <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[30%] animate-[bubble_2s_ease-in_infinite]"></div>
                              <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[30%] left-[70%] animate-[bubble_2.5s_ease-in_infinite]"></div>
                              <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[50%] left-[20%] animate-[bubble_1.8s_ease-in_infinite]"></div>
                              <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[40%] animate-[bubble_2s_ease-in_infinite_1.5s]"></div>
                              <div className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[60%] animate-[bubble_2.2s_ease-in_infinite_0.8s]"></div>
                            </div>
                            
                            {/* Beer foam - more realistic */}
                            <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden transform -translate-y-3">
                              <div className="flex justify-between">
                                <div className="w-4 h-4 bg-white/90 rounded-full"></div>
                                <div className="w-5 h-5 bg-white/90 rounded-full -mt-1"></div>
                                <div className="w-4 h-4 bg-white/90 rounded-full"></div>
                                <div className="w-5 h-5 bg-white/90 rounded-full -mt-1"></div>
                                <div className="w-4 h-4 bg-white/90 rounded-full"></div>
                              </div>
                              <div className="flex justify-around -mt-2">
                                <div className="w-5 h-5 bg-white/90 rounded-full"></div>
                                <div className="w-4 h-4 bg-white/90 rounded-full -mt-1"></div>
                                <div className="w-5 h-5 bg-white/90 rounded-full"></div>
                                <div className="w-4 h-4 bg-white/90 rounded-full -mt-1"></div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Glass handle - more authentic curved design */}
                        <div className="absolute top-[20%] -right-4 h-[60%] w-6">
                          <div className="absolute top-0 right-0 w-full h-[40%] border-t-[3px] border-r-[3px] border-white/40 rounded-tr-xl"></div>
                          <div className="absolute top-[40%] right-0 w-full h-[20%] border-r-[3px] border-white/40"></div>
                          <div className="absolute bottom-0 right-0 w-full h-[40%] border-b-[3px] border-r-[3px] border-white/40 rounded-br-xl"></div>
                          
                          {/* Handle highlight */}
                          <div className="absolute top-[5%] right-[60%] w-[1px] h-[90%] bg-white/30"></div>
                        </div>
                        
                        {/* Top rim highlight */}
                        <div className="absolute top-[7.5%] left-1/2 transform -translate-x-1/2 w-[88%] h-[1px] bg-white/50"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* All splash and fizz effects rendered client-side only */}
                <ClientOnlySplashEffects />
                
                {/* Clinking Effect - Static position safe for hydration */}
                <motion.div
                  className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0, 1, 0],
                    scale: [0, 0, 2, 0]
                  }}
                  transition={{
                    duration: 3,
                    times: [0, 0.47, 0.5, 0.6],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <div className="text-4xl">✨</div>
                </motion.div>
                
                {/* Fizz Ring Effect */}
                <motion.div
                  className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/40"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0, 0.7, 0],
                    scale: [0, 0, 2.5, 3.5]
                  }}
                  transition={{
                    duration: 3,
                    times: [0, 0.47, 0.5, 0.7],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </div>
              <p className="text-white/70 font-sans text-center mt-4 italic">Join us for the perfect pint experience!</p>
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