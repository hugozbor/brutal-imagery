
import React from 'react';

const Portfolio = () => {
  const artworks = [
    { id: 1, title: 'Abstract Expression I', category: 'Painting', size: 'large' },
    { id: 2, title: 'Digital Dreams', category: 'Digital Art', size: 'medium' },
    { id: 3, title: 'Sculptural Form', category: 'Sculpture', size: 'medium' },
    { id: 4, title: 'Color Study', category: 'Painting', size: 'small' },
    { id: 5, title: 'Urban Landscape', category: 'Photography', size: 'large' },
    { id: 6, title: 'Minimalist Composition', category: 'Digital Art', size: 'medium' },
    { id: 7, title: 'Textural Exploration', category: 'Mixed Media', size: 'small' },
    { id: 8, title: 'Light and Shadow', category: 'Photography', size: 'medium' },
    { id: 9, title: 'Geometric Harmony', category: 'Painting', size: 'large' },
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-4">
            SELECTED WORKS
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className={`group cursor-pointer overflow-hidden bg-gray-900 hover:bg-gray-800 transition-all duration-500 ${
                artwork.size === 'large' ? 'md:col-span-2 lg:col-span-2 h-80' :
                artwork.size === 'medium' ? 'h-64' : 'h-48'
              }`}
            >
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {/* Placeholder for artwork */}
                <div className="absolute inset-0 bg-gray-700 opacity-20"></div>
                
                <div className="relative z-10 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-light tracking-wide mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-400 text-sm tracking-wider">
                    {artwork.category}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 tracking-wider">
            VIEW ALL WORKS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
