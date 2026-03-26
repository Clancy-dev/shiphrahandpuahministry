'use client';

import { useEffect, useState } from 'react';

interface HeroCarouselProps {
  title: string;
  subtitle: string;
}

export function HeroCarousel({ title, subtitle }: HeroCarouselProps) {
  const images = [
    '/images/hero-1.jpg',
    '/images/hero-2.jpg',
    '/images/hero-3.jpg',
    '/images/hero-4.jpg',
    '/images/hero-5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen md:h-[600px] overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentIndex
                ? `opacity-100 scale-100 ${fadeIn ? 'animate-zoom-in' : 'opacity-0'}`
                : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-balance drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 text-balance drop-shadow-md">
            {subtitle}
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#about"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
            <a
              href="/donate"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom-in {
          from {
            transform: scale(1.1);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-zoom-in {
          animation: zoom-in 1s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
