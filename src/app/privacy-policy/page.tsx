"use client"

import { useState, useEffect } from "react"
import { Playfair_Display, Montserrat } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ReservationForm from "@/components/ReservationForm"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function PrivacyPolicy() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#1A0F00] text-white flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-[#1A0F00] text-white ${playfair.variable} ${montserrat.variable}`}>
      <Navbar onBookingOpen={() => setIsBookingOpen(true)} />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen pt-56 pb-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif text-[#C8A27A] mb-6">Privacy Policy</h1>
            <div className="w-24 h-1 bg-[#C8A27A] mx-auto mb-8"></div>
            <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              At Deja Brew, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information shared with us through our website, social media platforms, advertisements, and other digital interactions.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-[#110A00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition duration-300">
              <h2 className="text-2xl font-serif text-[#C8A27A] mb-4">1. Information We Collect</h2>
              <p className="text-white/80 font-sans mb-4 leading-relaxed">
                We may collect the following information when you interact with us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-sans leading-relaxed">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Reservation or inquiry details</li>
                <li>Feedback and customer preferences</li>
                <li>Information submitted through forms, advertisements, or website interactions</li>
              </ul>
              <p className="text-white/80 font-sans mt-4 leading-relaxed">
                We may also collect non-personal information such as browser type, device information, IP address, and website usage data to improve user experience.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-[#110A00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition duration-300">
              <h2 className="text-2xl font-serif text-[#C8A27A] mb-4">2. How We Use Your Information</h2>
              <p className="text-white/80 font-sans mb-4 leading-relaxed">
                The information collected may be used for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-sans leading-relaxed">
                <li>Responding to inquiries and reservations</li>
                <li>Customer support and communication</li>
                <li>Sharing updates, offers, events, and promotions</li>
                <li>Improving our services and customer experience</li>
                <li>Running advertisements and marketing campaigns</li>
                <li>Internal analytics and business insights</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="bg-[#110A00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition duration-300">
              <h2 className="text-2xl font-serif text-[#C8A27A] mb-4">3. Marketing & Communication</h2>
              <p className="text-white/80 font-sans leading-relaxed mb-4">
                By submitting your details through our website or advertisements, you consent to receive communication from Deja Brew via phone calls, WhatsApp, SMS, or email regarding reservations, events, offers, and updates.
              </p>
              <p className="text-white/80 font-sans leading-relaxed">
                You may opt out of marketing communication at any time by contacting us directly.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-[#110A00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition duration-300">
              <h2 className="text-2xl font-serif text-[#C8A27A] mb-4">4. Data Protection</h2>
              <p className="text-white/80 font-sans leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, misuse, disclosure, or alteration.
              </p>
              <p className="text-white/80 font-sans leading-relaxed">
                However, while we strive to use commercially acceptable means to protect your information, no method of transmission over the internet is completely secure.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-[#110A00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition duration-300">
              <h2 className="text-2xl font-serif text-[#C8A27A] mb-4">5. Third-Party Services</h2>
              <p className="text-white/80 font-sans mb-4 leading-relaxed">
                We may use third-party tools and platforms for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-sans leading-relaxed">
                <li>Advertising and analytics</li>
                <li>Payment processing</li>
                <li>Reservation management</li>
                <li>Website hosting and maintenance</li>
              </ul>
              <p className="text-white/80 font-sans mt-4 leading-relaxed">
                These third parties may collect and process information according to their own privacy policies.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-[#110A00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition duration-300">
              <h2 className="text-2xl font-serif text-[#C8A27A] mb-4">6. Cookies</h2>
              <p className="text-white/80 font-sans leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and improve marketing performance.
              </p>
              <p className="text-white/80 font-sans leading-relaxed">
                Users can choose to disable cookies through their browser settings.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-[#110A00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition duration-300">
              <h2 className="text-2xl font-serif text-[#C8A27A] mb-4">7. Information Sharing</h2>
              <p className="text-white/80 font-sans leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. Information may only be shared when required by law or for operational and service-related purposes.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-[#110A00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition duration-300">
              <h2 className="text-2xl font-serif text-[#C8A27A] mb-4">8. Your Rights</h2>
              <p className="text-white/80 font-sans mb-4 leading-relaxed">
                You may request to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/80 font-sans leading-relaxed">
                <li>Access your personal information</li>
                <li>Correct or update your information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for communication</li>
              </ul>
              <p className="text-white/80 font-sans mt-4 leading-relaxed">
                For any such requests, please contact us using the details below.
              </p>
            </div>

            {/* Section 9 */}
            <div className="bg-[#110A00]/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#C8A27A]/30 transition duration-300">
              <h2 className="text-2xl font-serif text-[#C8A27A] mb-4">9. Policy Updates</h2>
              <p className="text-white/80 font-sans leading-relaxed">
                Deja Brew reserves the right to update or modify this Privacy Policy at any time. Changes will be reflected on this page with an updated effective date.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Booking Form Modal */}
      {isBookingOpen && <ReservationForm onClose={() => setIsBookingOpen(false)} />}
    </div>
  )
}
