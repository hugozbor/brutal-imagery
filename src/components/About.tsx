
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-8">
              ABOUT THE ARTIST
            </h2>
            <div className="w-24 h-0.5 bg-white mb-8"></div>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Welcome to my artistic journey. Through various mediums and expressions, 
              I explore the boundaries between traditional and contemporary art forms.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My work draws inspiration from urban landscapes, natural forms, and the 
              interplay between light and shadow. Each piece represents a moment of 
              discovery and creative exploration.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe art should challenge perceptions and evoke emotion, creating 
              a dialogue between the observer and the observed.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <p className="text-sm tracking-wider">ARTIST PORTRAIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
