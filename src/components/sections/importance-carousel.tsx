'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { importanceCarouselItems } from '@/lib/data';

export function ImportanceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? importanceCarouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === importanceCarouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(importanceCarouselItems[(currentIndex + i) % importanceCarouselItems.length]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="relative bg-gradient-to-b from-[#ffe8cc] to-[#ffd9a8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-center font-serif text-4xl font-bold text-[#6b1f1f] sm:text-5xl">
          Akshaya Tritiya Importance
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#6b1f1f] sm:text-xl">
          Akshaya Tritiya is an auspicious day praised in scriptures. Donations made today bring divine blessings, prosperity, and spiritual growth.
        </p>

        {/* Decorative divider */}
        <div className="flex justify-center pt-8">
          <svg className="h-8 w-64 text-[#6b1f1f]" viewBox="0 0 400 60" preserveAspectRatio="none">
            <path
              d="M 0 30 Q 50 10, 100 30 T 200 30 T 300 30 T 400 30"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="200" cy="30" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          <div className="flex items-center justify-between gap-4">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute -left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#6b1f1f] shadow-lg transition-all hover:bg-[#fde9bf] sm:left-0"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Carousel items */}
            <div className="grid w-full grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
              {visibleItems.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {/* Image container */}
                  <div className="relative h-72 w-full overflow-hidden rounded-t-2xl bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.sanskritTitle}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Text section with dropdown */}
                  <div className="border-t-4 border-[#8b3a1f] bg-white p-4">
                    <button className="flex w-full items-center justify-between rounded-lg bg-[#f5f5f5] px-4 py-3 transition-colors hover:bg-gray-200">
                      <span className="font-serif text-center text-base font-semibold text-[#6b1f1f] sm:text-lg">
                        {item.sanskritTitle}
                      </span>
                      <ChevronRight size={20} className="flex-shrink-0 text-[#6b1f1f]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute -right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#6b1f1f] shadow-lg transition-all hover:bg-[#fde9bf] sm:right-0"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
