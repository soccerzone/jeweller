import React from 'react';
import { Category } from '../types';

const CategorySection: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      title: 'Ultra Luxury',
      imageUrl:
        'https://res.cloudinary.com/dz2bz1qsw/image/upload/v1770113104/jenish-ghaadiya-gtgTdWTZpOQ-unsplash_uieavg.jpg',
      altText: 'Ultra Luxury watches',
    },
    {
      id: 2,
      title: 'Mechanical',
      imageUrl:
        'https://res.cloudinary.com/dz2bz1qsw/image/upload/v1770111263/kent-lam-sVQ4FCQmrbA-unsplash_b8i0qa.jpg',
      altText: 'Mechanical watches',
    },
    {
      id: 3,
      title: 'Swiss luxury',
      imageUrl:
        'https://res.cloudinary.com/dz2bz1qsw/image/upload/v1770113786/patrick-langwallner-GaHmbqNh5q8-unsplash_sqapky.jpg',
      altText: 'Swiss luxury watches',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg md:text-xl font-semibold mb-8 md:mb-12">
          SHOP BY CATEGORY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="w-full h-64 md:h-80 overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.altText}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-center text-gray-800">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
