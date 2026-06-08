"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  altTexts: string[];
}

export default function ImageCarousel({ images, altTexts }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleItems, setVisibleItems] = useState(4);
  const scrollTimeoutRef = useRef<any>(null);

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images, ...images];
  const duplicatedAltTexts = [...altTexts, ...altTexts, ...altTexts];

  // Helper to update state only when index actually changes (reduces re-renders)
  const updateIndex = (newIndex: number) => {
    if (newIndex !== currentIndexRef.current) {
      currentIndexRef.current = newIndex;
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else {
        setVisibleItems(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize scroll position to the middle set on mount / resize
  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        if (containerWidth > 0) {
          const itemWidth = containerWidth / visibleItems;
          carouselRef.current.scrollLeft = (currentIndexRef.current + images.length) * itemWidth;
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [visibleItems, images.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndexRef.current + 1) % images.length;
      scrollToIndex(nextIndex, 'next');
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToIndex = (index: number, direction: 'next' | 'prev') => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      const itemWidth = containerWidth / visibleItems;
      
      let targetIndex = index + images.length;
      if (direction === 'next' && index === 0 && currentIndexRef.current === images.length - 1) {
        targetIndex = 2 * images.length;
      } else if (direction === 'prev' && index === images.length - 1 && currentIndexRef.current === 0) {
        targetIndex = images.length - 1;
      }

      const scrollPosition = targetIndex * itemWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
    updateIndex(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndexRef.current + 1) % images.length;
    scrollToIndex(nextIndex, 'next');
  };

  const prevSlide = () => {
    const prevIndex = (currentIndexRef.current - 1 + images.length) % images.length;
    scrollToIndex(prevIndex, 'prev');
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const containerWidth = carouselRef.current.offsetWidth;
      const itemWidth = containerWidth / visibleItems;
      const totalWidthOfSet = images.length * itemWidth;

      // 1. Calculate active index and update state if changed (non-blocking)
      const index = Math.round(scrollLeft / itemWidth) % images.length;
      updateIndex(index);

      // 2. Debounce wrapping to avoid fighting with active scrolling or dragging gestures
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (carouselRef.current) {
          const currentScroll = carouselRef.current.scrollLeft;
          if (currentScroll >= totalWidthOfSet * 2) {
            carouselRef.current.scrollLeft = currentScroll - totalWidthOfSet;
          } else if (currentScroll < totalWidthOfSet) {
            carouselRef.current.scrollLeft = currentScroll + totalWidthOfSet;
          }
        }
      }, 150); // Small delay to let scroll actions settle
    }
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-4 md:gap-6"
        onScroll={handleScroll}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="carousel-item relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden flex-shrink-0 snap-center"
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
    </div>
  );
} 