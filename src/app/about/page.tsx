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
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0)

  // News articles data
  const newsArticles = [
    {
      id: 1,
      image: "/newsletter/newsletter-1.jpeg",
      publication: "Times of India",
      title: "Luxury Beer Catering Redefines Elite Events",
      description: "How Deja Brew Taps is transforming the premium events landscape with craft beer excellence."
    },
    {
      id: 2,
      image: "/newsletter/newsletter-2.jpeg",
      publication: "Economic Times",
      title: "From Local Bar to Luxury Brand",
      description: "The remarkable journey of four entrepreneurs who built a luxury empire."
    },
    {
      id: 3,
      image: "/newsletter/newsletter-3.jpeg",
      publication: "Hindustan Times",
      title: "Rajasthan's Royal Palaces Choose Deja Brew",
      description: "How we became the preferred choice for India's most prestigious venues."
    },
    {
      id: 4,
      image: "/newsletter/newsletter-4.jpeg",
      publication: "Business Standard",
      title: "Craft Beer Revolution in Luxury Hospitality",
      description: "Industry analysis on how Deja Brew is changing the game."
    },
    {
      id: 5,
      image: "/newsletter/newsletter-5.jpeg",
      publication: "Indian Express",
      title: "International Expansion on the Horizon",
      description: "Exclusive interview about our global expansion plans."
    },
    {
      id: 6,
      image: "/newsletter/newsletter-6.jpeg",
      publication: "Forbes India",
      title: "Young Entrepreneurs Making Waves",
      description: "Featured in Forbes' list of innovative young entrepreneurs."
    }
  ]

  const nextSlide = () => {
    setCurrentNewsSlide((prev) => Math.min(prev + 1, newsArticles.length - 3))
  }

  const prevSlide = () => {
    setCurrentNewsSlide((prev) => Math.max(prev - 1, 0))
  }

  const goToSlide = (index: number) => {
    setCurrentNewsSlide(Math.min(index, newsArticles.length - 3))
  }

  return (
    <div className={`min-h-screen bg-black text-white ${playfair.variable} ${montserrat.variable}`}>
      <Navbar onBookingOpen={() => setIsBookingOpen(true)} />

      {/* Hero Section with Full Picture */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/abouthero.jpg" alt="About Us Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-serif mb-6 text-white">About Us</h1>
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
                  src="/aboutleft.png"
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
                The idea behind Deja Brew was simple — to create a space that flows with your day.
                A place where you can start your morning with a soulful cup of coffee, move into easy conversations over craft beer, and unwind by evening with cocktails that speak your vibe.
                Deja Brew is more than just a hybrid lounge — it’s an all-day escape.

                Our name says it all — “Deja Brew” is a feeling. It’s that instant connection you get when you walk in and want to come back, again and again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Four - Directors Section */}
      <section className="py-8 bg-[#1A0F00]">
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
                  className="object-cover transition-all duration-500"
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
                  src="/directors/gunjan.PNG"
                  alt="Gunjan Chadha"
                  fill
                  className="object-cover transition-all duration-500"
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
                  className="object-cover transition-all duration-500"
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
                  className="object-cover transition-all duration-500"
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

      {/* Newspaper Coverage Section - Manual Carousel */}
      <section className="py-8 bg-gradient-to-b from-[#1A0F00] to-black">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">In the News</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our journey has been recognized by leading publications across India and beyond.
            </p>
          </div>

          {/* Manual Carousel - 3 Cards Visible */}
          <div className="relative max-w-7xl mx-auto">
            {/* Main Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentNewsSlide * (100/3)}%)` }}>
                {newsArticles.map((article, index) => (
                  <div key={article.id} className="flex-shrink-0 w-1/3 px-2">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 group h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={`Newspaper coverage ${index + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-[#C8A27A] text-sm font-medium mb-2">{article.publication}</p>
                        <h3 className="text-lg md:text-xl font-serif text-white mb-3">
                          "{article.title}"
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentNewsSlide === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border ${
                currentNewsSlide === 0
                  ? 'bg-black/30 text-white/30 border-white/10 cursor-not-allowed'
                  : 'bg-black/50 hover:bg-black/70 text-white border-white/20 hover:border-[#C8A27A]/50'
              }`}
              aria-label="Previous article"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentNewsSlide >= newsArticles.length - 3}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border ${
                currentNewsSlide >= newsArticles.length - 3
                  ? 'bg-black/30 text-white/30 border-white/10 cursor-not-allowed'
                  : 'bg-black/50 hover:bg-black/70 text-white border-white/20 hover:border-[#C8A27A]/50'
              }`}
              aria-label="Next article"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

           

           
          </div>
        </div>
      </section>

      {/* Deja Brew Taps with Map Section */}
      <section className="py-16 md:py-8 bg-[#1A0F00]">
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
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-white text-lg font-serif">Our Expanding Footprint</p>
                <p className="text-white/80 text-sm">Across India and Beyond</p>
              </div>
            </div>
          </div>

         
        </div>
      </section>

      {/* Other Brands Section */}
      <section className="py-8 md:py-8 bg-gradient-to-b from-[#1A0F00] to-black">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">Our Brand Portfolio</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Beyond Deja Brew, discover our diverse collection of brands, each crafted with the same passion for
              excellence.
            </p>
          </div>

         

          {/* Brand Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/brands/brands (1).png" alt="Cherish" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Cherish</h3>
              <p className="text-white/70 mb-4">With 25 years of legacy, Cherish is a name synonymous with premium ballroom experiences. Specializing in grand weddings and bespoke celebrations.</p>
              <p className="text-[#C8A27A] text-sm italic">25 Years of Excellence</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/brands/brands (2).png" alt="Ministry of Beer" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Ministry of Beer</h3>
              <p className="text-white/70 mb-4">Delhi's original microbrewery, pioneering the brewing culture in the capital for over a decade with authentic brews and buzzing vibes.</p>
              <p className="text-[#C8A27A] text-sm italic">Delhi's First Microbrewery</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/brands/brands (3).png" alt="Anand Villas" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Anand Villas</h3>
              <p className="text-white/70 mb-4">A boutique hotel in West Delhi that blends charm with convenience, perfect for intimate gatherings and personalized hospitality experiences.</p>
              <p className="text-[#C8A27A] text-sm italic">Boutique Hospitality</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/brands/brands (4).png" alt="Sufiana" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Sufiana</h3>
              <p className="text-white/70 mb-4">A culinary destination serving refined Indian cuisine in an ambience soaked in culture, promising a gastronomic journey in true sufiana andaaz.</p>
              <p className="text-[#C8A27A] text-sm italic">Cultural Dining Experience</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/brands/brands (5).png" alt="Ala Chaat" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Ala Chaat</h3>
              <p className="text-white/70 mb-4">Bringing authentic street flavours to curated occasions, redefining chaat catering for over five years with zest and nostalgia.</p>
              <p className="text-[#C8A27A] text-sm italic">Street Food Elevated</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#C8A27A]/30 transition-all duration-300 text-center group">
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/brands/brands.png" alt="Deja Brew Taps" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Deja Brew Taps</h3>
              <p className="text-white/70 mb-4">India's first portable craft beer bar, delivering freshly brewed luxury on wheels with 24/7 chilled pours and curated beer-tasting experiences.</p>
              <p className="text-[#C8A27A] text-sm italic">Luxury on Wheels</p>
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
