import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import ReservationForm from './ReservationForm';

const Footer = () => {
  const [showReservationForm, setShowReservationForm] = useState(false);

  return (
    <>
      <footer className="bg-black/50 backdrop-blur-sm text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-9 gap-10">
            {/* Brand Section with Contact Info */}
            <div className="col-span-1 md:col-span-5">
              <div className="flex items-center mb-4">
                <Image 
                  src="/logo9.svg" 
                  alt="Deja Brew Logo" 
                  width={75} 
                  height={75}
                  className="mr-3"
                />
              </div>
              <p className="text-white/70 font-sans mb-6">
              At Deja Brew, every visit is a fresh experience. Whether you're here to work, unwind, or connect, we've created a space that feels familiar yet refreshingly unexpected — never quite déjà vu.
              </p>
              <ul className="space-y-3 font-sans text-white/70 mb-6">
                <li>M-20, Block M , Greater Kailash-2 , Delhi - 110048</li>
                <li>
                  <a href="mailto:dejabrewmail@gmail.com" className="text-white/70 hover:text-[#C8A27A] transition">
                    dejabrewmail@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918447441441" className="text-white/70 hover:text-[#C8A27A] transition">
                    +91 8447441441
                  </a>
                </li>
              </ul>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                  <FaFacebookF className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition">
                  <FaTwitter className="text-white" />
                </a>
              </div>
            </div>

            {/* Links Section */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xl font-serif mb-6">Links</h4>
              <ul className="space-y-3 font-sans">
                <li><Link href="/" className="text-white/70 hover:text-[#C8A27A] transition">Home</Link></li>
                <li><Link href="/about" className="text-white/70 hover:text-[#C8A27A] transition">About</Link></li>
                <li><Link href="/menu" className="text-white/70 hover:text-[#C8A27A] transition">Menu</Link></li>
                <li>
                  <button 
                    onClick={() => setShowReservationForm(true)}
                    className="text-white/70 hover:text-[#C8A27A] transition"
                  >
                    Reservations
                  </button>
                </li>
                <li><Link href="/contact" className="text-white/70 hover:text-[#C8A27A] transition">Contact</Link></li>
                <li><Link href="/privacy-policy" className="text-white/70 hover:text-[#C8A27A] transition">Privacy Policy</Link></li>
              </ul>
            </div>
            
            {/* Hours Section */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xl font-serif mb-6">Hours</h4>
              <ul className="space-y-3 font-sans text-white/70">
                <li className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span>12PM - 1AM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="container mx-auto px-6 md:px-20 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-white/70 text-sm md:text-base font-sans">
              All government taxes are as applicable. We levy a 10% service charge.
            </p>
            <p className="mt-2">Copyright@2025</p>
          </div>
        </div>

      </footer>

      {/* Reservation Form Popup */}
      {showReservationForm && (
        <ReservationForm onClose={() => setShowReservationForm(false)} />
      )}
    </>
  );
};

export default Footer;
