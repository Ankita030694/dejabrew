'use client';

import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function ReservationPage() {
  const scrollToForm = () => {
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`min-h-screen text-white ${playfair.variable} ${montserrat.variable} relative`}
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(26, 15, 0, 0.85), rgba(0, 0, 0, 0.95)), url(/reservation.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar onBookingOpen={scrollToForm} />

      {/* Reservation Content */}
      <div className="relative z-10 pt-56 pb-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-[#C8A27A] mb-6">Reserve Your Table</h1>
            <p className="text-white/80 font-sans text-lg md:text-xl">
              Book your spot at Deja Brew for an unforgettable dining experience.
            </p>
          </div>
          
          <ReservationForm isInline={true} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
