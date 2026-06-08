"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display, Montserrat } from "next/font/google";
import ReservationForm from "@/components/ReservationForm";
import ImageCarousel from "@/components/ImageCarousel";
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
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle mounting and loading state
  useEffect(() => {
    setMounted(true);
    // Set a timeout to ensure minimum loading time for visual appeal
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  // Handle video playback rate when it loads
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Play at 2x speed
    }
  }, [loading]);

  // Beer counter animation - triggers only when section comes into view
  useEffect(() => {
    // Function to start the counter animation
    const startCounterAnimation = () => {
      if (animationTriggered.current) return; // Prevent double execution
      console.log("Starting beer counter animation");
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
    };

    // Add intersection observer for scroll-based trigger
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animationTriggered.current) {
          console.log("Counter section in view - triggering animation");
          startCounterAnimation();
        }
      },
      { 
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "50px" // Add some margin to trigger slightly before element is fully visible
      }
    );

    // Attach observer after loading is complete and DOM is ready
    const attachObserver = () => {
      if (counterRef.current) {
        observer.observe(counterRef.current);
        console.log("Observer attached to counter element");
      } else {
        console.log("Counter element not found, retrying...");
        // Retry after a short delay if element is not found
        setTimeout(attachObserver, 100);
      }
    };

    // Wait for loading to complete before attaching observer
    if (!loading) {
      const timer = setTimeout(attachObserver, 500); // Small delay to ensure DOM is ready
      return () => {
        clearTimeout(timer);
        if (counterRef.current) observer.unobserve(counterRef.current);
      };
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [loading]); // Add loading as dependency

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="fixed inset-0 w-full h-full bg-black flex items-center justify-center z-50">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // If loading, show the loader video
  if (loading) {
    return (
      <div className="fixed inset-0 w-full h-full bg-black flex items-center justify-center z-50">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline
          className="max-w-full max-h-full object-contain"
        >
          <source src="/loader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // Main content rendered after loading
  return (
    <div
      className={`min-h-screen bg-black text-white ${playfair.variable} ${montserrat.variable}`}
    >
      {/* Background Video Container */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 overflow-hidden">
        <video
          src="/aboutbgvid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full brightness-35"
        />
      </div>

      <Navbar onBookingOpen={() => setIsBookingOpen(true)} />

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-4 md:px-0 pt-20 md:pt-0">
        <div className="z-10 text-center">
          <p className="text-2xl md:text-3xl italic mb-4 md:mb-6 font-sans">
            A hybrid Lounge 
          </p>
          <h2 className="text-5xl md:text-6xl font-serif mb-4 md:mb-6">
          Craft Beers, Artisanal Coffee,
          </h2>
          <h2 className="text-5xl md:text-6xl font-serif">World Cuisine</h2>
        </div>
      </main>

      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
            <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
          <span className="marquee-text font-serif">•</span>
          <span className="marquee-text font-serif">SERVING THE BEST CRAFT BEER</span>
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
              The idea behind Deja Brew was simple - to create a space that flows with your day.
 A place where you can start your morning with a soulful cup of coffee, move into easy conversations over craft beer, and unwind by evening with cocktails that speak your vibe.Deja Brew is more than just a hybrid lounge- it’s an all-day escape. <br />
Our name says it all- “Deja Brew” is a feeling. It’s that instant connection you get when you walk in and want to come back, again and again.

              </p>
            </div>

            <div className="pt-3 md:pt-0">
              <div
                ref={counterRef}
                className="relative flex flex-col gap-2 bg-gradient-to-r from-[#1A0F00]/80 to-[#2A1A00]/80 p-6 rounded-lg border border-[#C8A27A]/30 backdrop-blur-sm shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 rounded-full bg-[#C8A27A] blur-lg -translate-y-1/4 translate-x-1/4"></div>
                <div className="flex items-center gap-6 md:gap-8">
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
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[#C8A27A] text-xl md:text-2xl font-medium mb-2 md:mb-3">
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
                    <span className="text-lg md:text-xl font-sans text-white/90 uppercase tracking-wider font-light mt-1">
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

      {/* Full Screen Beer Video Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/beervideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Beer Showcase Section */}
      <section className="bg-[#1A0F00] flex items-center p-6 md:p-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Left Image */}
          <div className="relative h-[400px] md:h-[700px] rounded-2xl overflow-hidden">
            <Image
              src="/aboutbeer.png"
              alt="Craft beer selection"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-4xl md:text-5xl italic font-serif text-[#C8A27A]">
                Our Craft Beer Selection
              </p>
            
            </div>

            <div className="space-y-6 text-white/90">
              <div className="space-y-4">
                <div className="border-l-4 border-[#C8A27A] pl-6">
                  <h3 className="text-xl md:text-2xl font-serif text-[#C8A27A] mb-2">
                    Hefeweizen (Wheat Beer – German Style)
                  </h3>
                  <p className="text-lg leading-relaxed">
                    A smooth, unfiltered wheat beer with notes of banana and clove. Light-bodied, refreshing, and slightly fruity - a classic from Bavaria.
                  </p>
                </div>

                <div className="border-l-4 border-[#C8A27A] pl-6">
                  <h3 className="text-xl md:text-2xl font-serif text-[#C8A27A] mb-2">
                    Stout (Dark Ale – English Style)
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Rich, roasted, and full-bodied with hints of coffee, dark chocolate. A creamy finish with low bitterness - the perfect slow sipper.
                  </p>
                </div>

                <div className="border-l-4 border-[#C8A27A] pl-6">
                  <h3 className="text-xl md:text-2xl font-serif text-[#C8A27A] mb-2">
                    NEIPA – New England IPA (Hazy IPA – American Style)
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Juicy and hop-forward with low bitterness, bursting with tropical fruit notes like mango, pineapple, and citrus. Hazy in appearance, smooth in sip.
                  </p>
                </div>

                <div className="border-l-4 border-[#C8A27A] pl-6">
                  <h3 className="text-xl md:text-2xl font-serif text-[#C8A27A] mb-2">
                    India Pale Ale – West Coast Style
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Bold and bitter with sharp citrus and piney hop notes. Dry finish and medium body - a classic IPA with a crisp punch.
                  </p>
                </div>

                <div className="border-l-4 border-[#C8A27A] pl-6">
                  <h3 className="text-xl md:text-2xl font-serif text-[#C8A27A] mb-2">
                    Belgian Blonde (Blonde Ale – Belgian Style)
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Golden-hued with subtle spice and soft malt sweetness. Lightly fruity and delicately bitter, this one's smooth, approachable, and a Belgian classic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesome Experience Section */}
      <section className="bg-[#1A0F00] px-6 md:px-20 py-16 md:py-8">
        <h2 className="text-5xl md:text-8xl font-serif text-center italic text-white mb-10 md:mb-20">
          A Wholesome Experience
        </h2>

        <div className="container mx-auto">
          <ImageCarousel 
            images={[
              "/1.jpg",
              "/2.jpg", 
              "/3.jpg",
              "/4.jpg",
              "/home/5.png",
              "/home/6.png",
              "/home/7.png",
              "/home/9.png",
              "/home/10.png",
              "/home/11.png",
              "/home/12.png",
              "/home/13.png",
              "/home/14.png",
              "/home/16.png",
              "/home/17.png",
              "/home/18.png",
              "/home/19.png",
              "/home/20.png",
              "/home/21.png",
              "/home/22.png",
              "/home/23.png",
              "/home/24.png",
              "/home/27.png",
              "/home/30.png",
              "/home/31.png",
              "/home/32.png",
              "/home/33.png"
            ]}
            altTexts={[
              "Elegant plated dish with flowers",
              "Variety of coffee drinks",
              "Beer mugs with fried snacks",
              "Delicious food presentation",
              "Craft beer selection",
              "Artisanal coffee preparation",
              "Gourmet dining experience",
              "Fresh ingredients showcase",
              "Chef's special creation",
              "Premium beverage selection",
              "Fine dining atmosphere",
              "Culinary artistry display",
              "Signature cocktail presentation",
              "Fresh local ingredients",
              "Expert culinary preparation",
              "Elegant table setting",
              "Craft beer brewing process",
              "Coffee roasting expertise",
              "International cuisine showcase",
              "Seasonal menu highlights",
              "Chef's tasting menu",
              "Wine and beverage pairing",
              "Artisanal bread making",
              "Fresh seafood preparation",
              "Organic produce display",
              "Traditional cooking methods",
              "Modern culinary techniques"
            ]}
          />
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
      {isBookingOpen && <ReservationForm onClose={() => setIsBookingOpen(false)} />}
    </div>
  );
}
