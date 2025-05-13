"use client";

import React from "react";
import Image from "next/image";
import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../../styles/marquee.css";

// Font setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const About = () => {
  return (
    <div
      className={`min-h-screen bg-black text-white ${playfair.variable} ${montserrat.variable}`}
    >
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <Image
          src="/about-banner.jpg" // Add this image to your public folder (1920x1080)
          alt="About us background"
          fill
          priority
          className="object-cover object-center object-[center_25%] brightness-50"
          sizes="100vw"
        />
      </div>

      <Navbar onBookingOpen={() => {}} />

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 md:px-0 pt-20 md:pt-0">
        <div className="z-10 text-center">
          <p className="text-2xl md:text-3xl italic mb-4 md:mb-6 font-sans">
            Welcome to
          </p>
          <h2 className="text-5xl md:text-8xl font-serif mb-4 md:mb-6">
            Our Story
          </h2>
          <h2 className="text-5xl md:text-8xl font-serif">Passion & Craft.</h2>
        </div>
      </main>

      {/* Brands Section */}
      <section className="py-16 md:py-24 bg-[#1A0F00]">
        <div className="container mx-auto px-6 md:px-0">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 md:mb-16">
            The Brands
          </h2>

          {/* Scrolling Carousel for Brands */}
          <div className="marquee-container">
            <div className="marquee-content">
              {/* Repeat these for each brand */}
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand1.png"
                  alt="Brand 1"
                  width={150}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand2.png"
                  alt="Brand 2"
                  width={150}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand3.png"
                  alt="Brand 3"
                  width={150}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand4.png"
                  alt="Brand 4"
                  width={150}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand5.png"
                  alt="Brand 5"
                  width={150}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand6.png"
                  alt="Brand 6"
                  width={150}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              {/* Repeat brands to ensure continuous loop */}
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand1.png"
                  alt="Brand 1"
                  width={150}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand2.png"
                  alt="Brand 2"
                  width={150}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand3.png"
                  alt="Brand 3"
                  width={150}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="py-16 md:py-24 bg-[#1A0F00]">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Left Image */}
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/uncle.png" // Add this image to your public folder
                alt="About us image"
                fill
                className="object-cover"
              />
            </div>
           

            {/* Right Text Content */}
            <div className="space-y-6">
              <p className="text-4xl md:text-5xl italic font-serif text-[#C8A27A]">
                Our Philosophy
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                Crafting Unforgettable Experiences
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-white/80">
                <p>
                  From Brew to Beyond
                </p>

                <p>
                  Deja Brew isn't just a bar or a café — it's a state of being.
                  With some coverage that we will share.
                </p>

                <p>
                  Enter Deja Brew Taps – Luxury on Tap
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/team.JPG" // Add this image to your public folder
                alt="About us image"
                fill
                className="object-cover"
              />
            </div>

     
      <section className="py-16 md:py-24 bg-[#1A0F00]">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center space-y-12">
            <div className="text-center text-lg md:text-xl text-white/80 max-w-2xl">
              <p>
                What began as a neighborhood hideaway soon gave rise to something larger — Deja Brew Taps, the first luxury beer catering experience. Pioneering the premium craft beer segment, Taps has become synonymous with elevated celebration.
              </p>
              <p className="mt-4">
                In just two years, Deja Brew Taps has made its mark across India's most iconic destinations, pouring at elite venues such as:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Fairmont Jaipur</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Suryagarh Palace, Jaisalmer</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Raas Rajmahal, Jaipur</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Umaid Bhawan Palace, Jodhpur</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Raas Devigarh, Udaipur</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Raas Chhatrasagar</p>
              </div>
              {/* <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Westin Pushkar, and more.</p>
              </div> */}
            </div>
            
            <div className="text-center text-xl md:text-2xl font-serif text-[#C8A27A] italic">
              <p>We don't just serve beer — we pour experiences. And increasingly, we're pouring beyond borders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-[#1A0F00]">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Experience Deja Brew
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Get a glimpse of the unique atmosphere and exceptional experience
              that awaits you at Deja Brew.
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            {/* Replace with actual video or embed code */}
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              {/* Placeholder for video - replace with actual video component */}
              <div className="relative w-full h-full">
                <Image
                  src="/video-thumbnail.jpg" // Add this image to your public folder
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 text-white ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t border-white/20 my-10 md:my-16 max-w-[1200px] mx-auto px-6 md:px-0">
        <div className="flex justify-center">
          <div className="w-20 h-1 bg-[#C8A27A] -mt-0.5"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
