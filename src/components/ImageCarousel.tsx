"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  altTexts: string[];
}

export default function ImageCarousel({ images, altTexts }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images, ...images];
  const duplicatedAltTexts = [...altTexts, ...altTexts, ...altTexts];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const itemWidth = containerWidth / 4; // 4 images visible at once
      const scrollPosition = (index + images.length) * itemWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    scrollToIndex(prevIndex);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const containerWidth = carouselRef.current.offsetWidth;
      const itemWidth = containerWidth / 4;
      const index = Math.round(scrollLeft / itemWidth) % images.length;
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-4 md:gap-6"
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden flex-shrink-0 snap-center"
            style={{ 
              width: 'calc(25% - 18px)',
              minWidth: 'calc(25% - 18px)',
              maxWidth: 'calc(25% - 18px)'
            }}
          >
            <Image
              src={image}
              alt={duplicatedAltTexts[index]}
              fill
              className="object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#C8A27A] scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isAutoPlaying
              ? "bg-[#C8A27A] text-black"
              : "bg-white/20 text-white"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {isAutoPlaying ? (
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            ) : (
              <path d="M8 5v14l11-7z" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
} 