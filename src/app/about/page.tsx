"use client"
import { useState } from "react"
import Image from "next/image"
import { Playfair_Display, Montserrat } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ReservationForm from "@/components/ReservationForm"
import "./marquee.css"

// Font setup
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const About = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className={`min-h-screen bg-black text-white ${playfair.variable} ${montserrat.variable}`}>
      <Navbar onBookingOpen={() => setIsBookingOpen(true)} />

      {/* Hero Section with Full Picture */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/about-hero.jpg" alt="About Us Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-serif mb-6 text-white">Our Story</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-6">
              Four visionaries. One dream. Endless possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome to Our Story Section */}
      <section className="py-8 md:py-8 bg-gradient-to-b from-black to-[#1A0F00]">
        <div className="container mx-auto px-2 md:px-6">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center mb-10 md:mb-0">
              <div className="relative w-full h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/about-ourstory.jpg"
                  alt="Deja Brew Ambience"
                  fill
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div>

            {/* Right: Our Story */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white text-left">Our Story</h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed text-left">
                The idea behind Deja Brew was simple — to create a space that flows with your day. A place where you can
                start your morning with a soulful cup of coffee, move into easy conversations over craft beer, and
                unwind by evening with cocktails that speak your vibe.
                <br />
                <br />
                Deja Brew is more than just a hybrid lounge — it's an all-day escape. Designed to feel like your second
                home, it brings together artisanal coffee, freshly brewed craft beer, signature cocktails, and a
                globally inspired kitchen, all in one warm, tastefully curated setting.
                <br />
                <br />
                Our name says it all — "Deja Brew" is a feeling. It's that instant connection you get when you walk in
                and want to come back, again and again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Four - Directors Section */}
      <section className="py-16 md:py-24 bg-[#1A0F00]">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[#C8A27A]">The Story of Four</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Four visionaries, one dream. Meet the directors who transformed a simple idea into a luxury experience
              empire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Navin Sachdeva */}
            <div className="text-center group">
              <div className="relative h-80 w-full mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/directors/NavinSachdeva.png"
                  alt="Navin Sachdeva"
                  fill
                  className="object-cover group-hover:grayscale transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Navin Sachdeva</h3>
              <p className="text-[#C8A27A] text-lg italic">Visionary Leader</p>
              <p className="text-white/70 mt-4 text-sm">
                With 25 years of experience in the F&B industry. A true visionary, his calm leadership and grounded
                approach are what keep the entire team aligned and inspired.
              </p>
            </div>

            {/* Gunjan Chadha */}
            <div className="text-center group">
              <div className="relative h-80 w-full mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/director2.jpg"
                  alt="Gunjan Chadha"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Gunjan Chadha</h3>
              <p className="text-[#C8A27A] text-lg italic">Financial Backbone</p>
              <p className="text-white/70 mt-4 text-sm">
                The perfect blend of beauty and brains — Gunjan is the financial backbone of our business. Ensures we
                stay sharp, scalable, and financially strong.
              </p>
            </div>

            {/* Raunaq Singh */}
            <div className="text-center group">
              <div className="relative h-80 w-full mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/directors/Rauna1.png"
                  alt="Raunaq Singh"
                  fill
                  className="object-cover group-hover:grayscale transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Raunaq Singh</h3>
              <p className="text-[#C8A27A] text-lg italic">Guest Experience</p>
              <p className="text-white/70 mt-4 text-sm">
                The heart of our in-house guest experience. He brings precision to front-end operations.
              </p>
            </div>

            {/* Kratika Gupta */}
            <div className="text-center group">
              <div className="relative h-80 w-full mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/directors/kRATIKA.png"
                  alt="Kratika Gupta"
                  fill
                  className="object-cover group-hover:grayscale transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">Kratika Gupta</h3>
              <p className="text-[#C8A27A] text-lg italic">Brand Growth & Direction</p>
              <p className="text-white/70 mt-4 text-sm">
                With over 15 years in the F&B world, she brings an unmatched sense of finesse and direction. Her eye for
                detail, excellence, and brand vision ensures the growth to our brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newspaper Coverage Section - Auto-playing Carousel */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1A0F00] to-black">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">In the News</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our journey has been recognized by leading publications across India and beyond.
            </p>
          </div>

          {/* Auto-playing Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-news">
              {/* News Article 1 */}
              <div className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/newsletter/newsletter-1.jpeg"
                      alt="Newspaper coverage 1"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#C8A27A] text-sm font-medium mb-2">Times of India</p>
                    <h3 className="text-xl font-serif text-white mb-3">
                      "Luxury Beer Catering Redefines Elite Events"
                    </h3>
                    <p className="text-white/70 text-sm">
                      How Deja Brew Taps is transforming the premium events landscape with craft beer excellence.
                    </p>
                  </div>
                </div>
              </div>

              {/* News Article 2 */}
              <div className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/newsletter/newsletter-2.jpeg"
                      alt="Newspaper coverage 2"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#C8A27A] text-sm font-medium mb-2">Economic Times</p>
                    <h3 className="text-xl font-serif text-white mb-3">"From Local Bar to Luxury Brand"</h3>
                    <p className="text-white/70 text-sm">
                      The remarkable journey of four entrepreneurs who built a luxury empire.
                    </p>
                  </div>
                </div>
              </div>

              {/* News Article 3 */}
              <div className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/newsletter/newsletter-3.jpeg"
                      alt="Newspaper coverage 3"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#C8A27A] text-sm font-medium mb-2">Hindustan Times</p>
                    <h3 className="text-xl font-serif text-white mb-3">"Rajasthan's Royal Palaces Choose Deja Brew"</h3>
                    <p className="text-white/70 text-sm">
                      How we became the preferred choice for India's most prestigious venues.
                    </p>
                  </div>
                </div>
              </div>

              {/* News Article 4 */}
              <div className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/newsletter/newsletter-4.jpeg"
                      alt="Newspaper coverage 4"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#C8A27A] text-sm font-medium mb-2">Business Standard</p>
                    <h3 className="text-xl font-serif text-white mb-3">
                      "Craft Beer Revolution in Luxury Hospitality"
                    </h3>
                    <p className="text-white/70 text-sm">Industry analysis on how Deja Brew is changing the game.</p>
                  </div>
                </div>
              </div>

              {/* News Article 5 */}
              <div className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/newsletter/newsletter-5.jpeg"
                      alt="Newspaper coverage 5"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#C8A27A] text-sm font-medium mb-2">Indian Express</p>
                    <h3 className="text-xl font-serif text-white mb-3">"International Expansion on the Horizon"</h3>
                    <p className="text-white/70 text-sm">Exclusive interview about our global expansion plans.</p>
                  </div>
                </div>
              </div>

              {/* News Article 6 */}
              <div className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/newsletter/newsletter-6.jpeg"
                      alt="Newspaper coverage 6"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#C8A27A] text-sm font-medium mb-2">Forbes India</p>
                    <h3 className="text-xl font-serif text-white mb-3">"Young Entrepreneurs Making Waves"</h3>
                    <p className="text-white/70 text-sm">Featured in Forbes' list of innovative young entrepreneurs.</p>
                  </div>
                </div>
              </div>

              {/* Duplicate articles for seamless loop */}
              <div className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/newsletter/newsletter-1.jpeg"
                      alt="Newspaper coverage 1"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#C8A27A] text-sm font-medium mb-2">Times of India</p>
                    <h3 className="text-xl font-serif text-white mb-3">
                      "Luxury Beer Catering Redefines Elite Events"
                    </h3>
                    <p className="text-white/70 text-sm">
                      How Deja Brew Taps is transforming the premium events landscape with craft beer excellence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/newsletter/newsletter-2.jpeg"
                      alt="Newspaper coverage 2"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#C8A27A] text-sm font-medium mb-2">Economic Times</p>
                    <h3 className="text-xl font-serif text-white mb-3">"From Local Bar to Luxury Brand"</h3>
                    <p className="text-white/70 text-sm">
                      The remarkable journey of four entrepreneurs who built a luxury empire.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/newsletter/newsletter-3.jpeg"
                      alt="Newspaper coverage 3"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[#C8A27A] text-sm font-medium mb-2">Hindustan Times</p>
                    <h3 className="text-xl font-serif text-white mb-3">"Rajasthan's Royal Palaces Choose Deja Brew"</h3>
                    <p className="text-white/70 text-sm">
                      How we became the preferred choice for India's most prestigious venues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deja Brew Taps with Map Section */}
      <section className="py-16 md:py-24 bg-[#1A0F00]">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[#C8A27A]">Deja Brew Taps</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our luxury catering division bringing premium craft beer experiences to India's most prestigious venues.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Luxury on Tap</h3>
                <p className="text-lg text-white/80 mb-6">
                  What began as a neighborhood hideaway evolved into India's premier luxury beer catering experience.
                  Deja Brew Taps has redefined premium events across the country.
                </p>
                <p className="text-lg text-white/80">
                  From royal palaces to luxury resorts, we bring the craft beer revolution to India's most exclusive
                  venues.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/30 p-6 rounded-lg border border-white/10">
                  <h4 className="text-2xl font-serif text-[#C8A27A] mb-2">50+</h4>
                  <p className="text-white/80">Luxury Venues Served</p>
                </div>
                <div className="bg-black/30 p-6 rounded-lg border border-white/10">
                  <h4 className="text-2xl font-serif text-[#C8A27A] mb-2">15+</h4>
                  <p className="text-white/80">Cities Covered</p>
                </div>
                <div className="bg-black/30 p-6 rounded-lg border border-white/10">
                  <h4 className="text-2xl font-serif text-[#C8A27A] mb-2">1000+</h4>
                  <p className="text-white/80">Events Catered</p>
                </div>
                <div className="bg-black/30 p-6 rounded-lg border border-white/10">
                  <h4 className="text-2xl font-serif text-[#C8A27A] mb-2">5*</h4>
                  <p className="text-white/80">Elite Partners</p>
                </div>
              </div>
            </div>

            {/* Right Map Video */}
            <div className="relative w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/mapanime.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-lg font-serif">Our Expanding Footprint</p>
                <p className="text-white/80 text-sm">Across India and Beyond</p>
              </div>
            </div>
          </div>

          {/* Venues Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-serif text-center text-white mb-12">Our Elite Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Fairmont Jaipur</p>
                <p className="text-[#C8A27A] text-sm">Luxury Hotel</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Suryagarh Palace</p>
                <p className="text-[#C8A27A] text-sm">Heritage Resort</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Umaid Bhawan Palace</p>
                <p className="text-[#C8A27A] text-sm">Royal Palace</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Raas Devigarh</p>
                <p className="text-[#C8A27A] text-sm">Luxury Resort</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">Raas Chhatrasagar</p>
                <p className="text-[#C8A27A] text-sm">Boutique Camp</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center">
                <p className="text-xl font-serif text-white mb-2">The Westin Pushkar</p>
                <p className="text-[#C8A27A] text-sm">Resort & Spa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Brands Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#1A0F00] to-black">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">Our Brand Portfolio</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Beyond Deja Brew, discover our diverse collection of brands, each crafted with the same passion for
              excellence.
            </p>
          </div>

          {/* Scrolling Carousel for Brands */}
          <div className="marquee-container mb-16">
            <div className="marquee-content">
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand1.png"
                  alt="Brand 1"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand2.png"
                  alt="Brand 2"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand3.png"
                  alt="Brand 3"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand4.png"
                  alt="Brand 4"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand5.png"
                  alt="Brand 5"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand6.png"
                  alt="Brand 6"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              {/* Duplicate for smooth loop */}
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand1.png"
                  alt="Brand 1"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand2.png"
                  alt="Brand 2"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="mx-8 flex items-center">
                <Image
                  src="/brand3.png"
                  alt="Brand 3"
                  width={200}
                  height={100}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Brand Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/brand-logo1.png" alt="Brand Logo 1" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Brand Name 1</h3>
              <p className="text-white/70 mb-4">Premium craft spirits and cocktail experiences.</p>
              <p className="text-[#C8A27A] text-sm italic">Launching Soon</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/brand-logo2.png" alt="Brand Logo 2" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Brand Name 2</h3>
              <p className="text-white/70 mb-4">Artisanal coffee and café culture redefined.</p>
              <p className="text-[#C8A27A] text-sm italic">In Development</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/brand-logo3.png" alt="Brand Logo 3" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Brand Name 3</h3>
              <p className="text-white/70 mb-4">Luxury event planning and hospitality services.</p>
              <p className="text-[#C8A27A] text-sm italic">Coming 2024</p>
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

      {/* Booking Form Modal */}
      {isBookingOpen && <ReservationForm onClose={() => setIsBookingOpen(false)} />}
    </div>
  )
}

export default About
