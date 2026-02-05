import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: 'https://res.cloudinary.com/dz2bz1qsw/image/upload/v1770314711/shahrukh-rehman-05IxAEjVNl0-unsplash_1_mdv72g.jpg',
      alt: 'Luxury Jeweller display 1',
    },
    {
      url: 'https://res.cloudinary.com/dz2bz1qsw/image/upload/v1770314519/ryan-waring-p2WUEFGrAdA-unsplash_c9lerr.jpg',
      alt: 'Luxury Jeweller display 2',
    },
    {
      url: 'https://res.cloudinary.com/dz2bz1qsw/image/upload/v1770314519/ern-gan-3vSGyBo8_pU-unsplash_tw6syk.jpg',
      alt: 'Luxury Jeweller display 3',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[400px] md:h-[554px] overflow-hidden">
      {/* Hero Slider Container */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.url}
            alt={slide.alt}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay with Text */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center z-10">
        <div className="text-center text-white px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Icekettle Jeweller
          </h1>
          <p className="text-xl md:text-2xl italic drop-shadow-md">Feels Rich</p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index
                ? 'bg-white bg-opacity-100'
                : 'bg-white bg-opacity-60 hover:bg-opacity-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
