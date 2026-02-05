import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-12 h-[600px] md:py-20 overflow-hidden">
      {/* Background Image - Half Screen */}
      <div className="absolute left-0 md:p-12 top-0 w-full md:w-1/2 h-full">
        <img
          src="https://res.cloudinary.com/dz2bz1qsw/image/upload/v1770107949/bayu-prahara-5eAvq_7ibq0-unsplash_scmrk4.jpg"
          alt="Jeweller craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Empty space for layout balance */}
          <div className="order-2 md:order-1 hidden md:block"></div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <div className="space-y-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Icekettle Jeweller was founded with a clear vision: to craft timeless
                Jeweller that blends refined artistry with accessible luxury. Built on a
                passion for excellence, the brand is dedicated to delivering beautifully
                designed pieces that celebrate elegance, confidence, and individuality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Drawing inspiration from rich cultural influences and modern aesthetics,
                our collections are thoughtfully designed to reflect contemporary tastes
                while maintaining a sense of timeless sophistication. Each piece is
                carefully crafted to resonate with clients who value detail, durability,
                and distinctive style.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Icekettle Jeweller stands for more than Jeweller — it represents
                craftsmanship, heritage, and a promise to deliver enduring beauty in
                every creation.
              </p>
              <div className="pt-4">
                <a
                  href="#about"
                  className="bg-black text-white px-8 py-3 rounded inline-block hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
                >
                  About us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
