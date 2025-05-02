"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display, Montserrat } from "next/font/google";
import BookingForm from "@/components/BookingForm";
import "../styles/marquee.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Font setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [beerCount, setBeerCount] = useState(0);
  const counterRef = useRef(null);
  const animationTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true;

          let startCount = 0;
          const endCount = 1000;
          const duration = 2000; // 2 seconds
          const interval = 20; // Update every 20ms
          const steps = duration / interval;
          const increment = endCount / steps;

          const timer = setInterval(() => {
            startCount += increment;
            if (startCount >= endCount) {
              setBeerCount(endCount);
              clearInterval(timer);
            } else {
              setBeerCount(Math.floor(startCount));
            }
          }, interval);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`min-h-screen bg-black text-white ${playfair.variable} ${montserrat.variable}`}
    >
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
          <p className="text-2xl md:text-3xl italic mb-4 md:mb-6 font-sans">
            A hybrid Lounge Craft Beers
          </p>
          <h2 className="text-5xl md:text-8xl font-serif mb-4 md:mb-6">
            Artisanal Coffee,
          </h2>
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
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-[#1A0F00] flex items-center p-6 md:p-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Left Content */}
          <div className="space-y-6 ">
            <p className="text-4xl md:text-5xl italic font-serif text-[#C8A27A] ">
              About Us
            </p>
            <h2 className="text-5xl md:text-5xl font-serif text-white">
              A Concept Born from Passion, Brewed with Precision{" "}
            </h2>

            <div className=" md:space-y-8 text-lg md:text-xl text-white/80">
              <p>
                Nestled in the heart of South Delhi, Deja Brew is a
                one-of-a-kind hybrid lounge that blends the comforting aroma of
                freshly brewed coffee with the bold flavors of craft beer, all
                under one beautifully curated roof. Start your day with our
                artisanal coffees, made from carefully selected beans and brewed
                to perfection. As the day transitions, so does the vibe — from
                cozy café to lively lounge — where hand-crafted beers, signature
                cocktails, and an eclectic world cuisine menu await to elevate
                your evening.
              </p>

              <p>
                At Deja Brew, every visit is a fresh experience. Whether you’re
                here to work, unwind, or connect, we’ve created a space that
                feels familiar yet refreshingly unexpected — never quite déjà
                vu.
              </p>
            </div>

            <div className="pt-3 md:pt-0">
              <div
                ref={counterRef}
                className="relative flex flex-col gap-2 bg-gradient-to-r from-[#1A0F00]/80 to-[#2A1A00]/80 p-6 rounded-lg border border-[#C8A27A]/30 backdrop-blur-sm shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 rounded-full bg-[#C8A27A] blur-lg -translate-y-1/4 translate-x-1/4"></div>
                <div className="flex items-start gap-6">
                  {/* Beer Glass Animation - Enhanced Design */}
                  <div className="relative w-20 h-28 md:w-24 md:h-32 flex items-center justify-center">
                    {/* Beer Mug Container with Shadow */}
                    <div
                      className="relative w-full h-full flex items-center justify-center"
                      style={{
                        filter: "drop-shadow(0px 10px 8px rgba(0,0,0,0.25))",
                      }}
                    >
                      {/* Glass bottom base */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[85%] h-[12px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 rounded-[50%] border-t border-white/40"></div>

                      {/* Glass body - main part */}
                      <div
                        className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-[90%] h-[85%] rounded-b-xl overflow-hidden"
                        style={{
                          background:
                            "linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                          border: "2px solid rgba(255,255,255,0.3)",
                          boxShadow: "inset 0 0 20px rgba(255,255,255,0.1)",
                          clipPath:
                            "polygon(2% 0%, 98% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)",
                        }}
                      >
                        {/* Glass reflections */}
                        <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-white/60 via-white/40 to-transparent"></div>
                        <div className="absolute top-0 left-[25%] w-[1px] h-[70%] bg-gradient-to-b from-white/30 via-white/20 to-transparent"></div>

                        {/* Beer fill - animated based on counter */}
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#D78329] to-[#F8C154] transition-all duration-[2000ms] ease-in-out"
                          style={{
                            height: `${(beerCount / 1000) * 100}%`,
                            boxShadow:
                              "0 -5px 10px rgba(255, 255, 255, 0.2) inset",
                          }}
                        >
                          {/* Beer bubbles with improved animation */}
                          <div className="absolute inset-0 opacity-60">
                            <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[30%] animate-bubble-1"></div>
                            <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[30%] left-[70%] animate-bubble-2"></div>
                            <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-[50%] left-[20%] animate-bubble-3"></div>
                            <div
                              className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[40%] animate-bubble-1"
                              style={{ animationDelay: "1.5s" }}
                            ></div>
                            <div
                              className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[60%] animate-bubble-2"
                              style={{ animationDelay: "0.8s" }}
                            ></div>
                            <div
                              className="absolute w-0.5 h-0.5 bg-white rounded-full top-[80%] left-[80%] animate-bubble-3"
                              style={{ animationDelay: "1.2s" }}
                            ></div>
                          </div>

                          {/* Beer foam - more realistic with animation */}
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
                            <div className="flex justify-between -mt-2">
                              <div className="w-4 h-4 bg-white/90 rounded-full"></div>
                              <div className="w-5 h-5 bg-white/90 rounded-full -mt-1"></div>
                              <div className="w-4 h-4 bg-white/90 rounded-full"></div>
                              <div className="w-5 h-5 bg-white/90 rounded-full -mt-1"></div>
                              <div className="w-4 h-4 bg-white/90 rounded-full"></div>
                            </div>
                          </div>
                        </div>
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

                  {/* Counter Text - Better aligned */}
                  <div className="flex flex-col">
                    <h3 className="text-[#C8A27A] text-xl font-medium mb-1">
                      Proudly Serving
                    </h3>
                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl md:text-7xl font-serif text-[#C8A27A] font-bold tracking-tighter tabular-nums relative">
                        {beerCount}
                        <span className="absolute -right-6 text-3xl md:text-5xl">
                          +
                        </span>
                      </span>
                    </div>
                    <span className="text-xl md:text-2xl font-sans text-white/90 uppercase tracking-wider font-light">
                      Liters of Craft Beer Poured
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C8A27A] to-transparent opacity-40"></div>
              </div>
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
      <section className="min-h-screen bg-[#1A0F00] px-6 md:px-20 py-16 md:py-8">
        <h2 className="text-5xl md:text-8xl font-serif text-center italic text-white mb-10 md:mb-20">
          A Wholesome Experience
        </h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {/* First Image - Food */}
          <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/1.jpg"
              alt="Elegant plated dish with flowers"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Second Image - Beer and Snacks */}
          <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/3.jpg"
              alt="Beer mugs with fried snacks"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Third Image - Coffee */}
          <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/2.jpg"
              alt="Variety of coffee drinks"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Fourth Image */}
          <div className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/4.jpg"
              alt="Variety of coffee drinks"
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="w-full border-t border-white/20 my-10 md:my-16 max-w-[1200px] mx-auto px-6 md:px-0">
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-[#C8A27A] -mt-0.5"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Booking Form Modal */}
      {isBookingOpen && <BookingForm onClose={() => setIsBookingOpen(false)} />}
    </div>
  );
}
