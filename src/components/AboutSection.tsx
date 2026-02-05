import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden p-12 ">
      <div className="grid md:grid-cols-2 min-h-[600px]">

        {/* Image Section */}
        <div className="relative h-[300px] md:h-auto">
          <img
            src="https://res.cloudinary.com/dz2bz1qsw/image/upload/v1770107949/bayu-prahara-5eAvq_7ibq0-unsplash_scmrk4.jpg"
            alt="Jeweller craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        {/* Text Content */}
        <div className="flex items-center px-6 py-10 md:px-12 md:py-20 bg-white">
          <div className="space-y-6 max-w-xl">
            <p className="text-gray-700 leading-relaxed">
              Icekettle Jeweller was founded with a clear vision: to craft timeless
              jewelry that blends refined artistry with accessible luxury. Built on a
              passion for excellence, the brand is dedicated to delivering beautifully
              designed pieces that celebrate elegance, confidence, and individuality.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Drawing inspiration from rich cultural influences and modern aesthetics,
              our collections are thoughtfully designed to reflect contemporary tastes
              while maintaining a sense of timeless sophistication.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Icekettle Jeweller stands for more than jewelry — it represents
              craftsmanship, heritage, and a promise to deliver enduring beauty in
              every creation.
            </p>

            <a
              href="#about"
              className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
            >
              About us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
