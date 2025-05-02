import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
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
              Artisanal coffee and world cuisine, <br /> crafted with precision and served with passion.
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
              <li><Link href="/reservations" className="text-white/70 hover:text-[#C8A27A] transition">Reservations</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-[#C8A27A] transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Policies Section */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-xl font-serif mb-6">Policies</h4>
            <ul className="space-y-3 font-sans">
              <li><Link href="/terms" className="text-white/70 hover:text-[#C8A27A] transition">Terms and Conditions</Link></li>
              <li><Link href="/privacy" className="text-white/70 hover:text-[#C8A27A] transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Hours Section */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-xl font-serif mb-6">Hours</h4>
            <ul className="space-y-3 font-sans text-white/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9AM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10AM - 12AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10AM - 10PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section with Copyright */}
      <div className="container mx-auto px-6 md:px-20 mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 font-sans text-sm">
            © {new Date().getFullYear()} Deja Brew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
