'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/918447441441"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-black/80 text-white text-xs font-medium py-2 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md border border-white/10 font-sans">
        Chat with us!
      </span>
    </a>
  );
}
