"use client";

import { useState, useEffect } from "react";
import { carouselPhotos } from "@/config/photos";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselPhotos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % carouselPhotos.length);
    setAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + carouselPhotos.length) % carouselPhotos.length);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full h-96 md:h-screen bg-obrien-black overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {carouselPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obrien-black to-transparent p-6">
              <p className="text-obrien-white text-2xl font-bold">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-obrien-beige hover:bg-white text-obrien-black p-3 rounded-full z-10 transition"
        aria-label="Previous slide"
      >
        ◀
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-obrien-beige hover:bg-white text-obrien-black p-3 rounded-full z-10 transition"
        aria-label="Next slide"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current
                ? "bg-obrien-beige w-8"
                : "bg-obrien-white/50 hover:bg-obrien-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
