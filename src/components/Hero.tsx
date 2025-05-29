
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-50"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wider animate-fade-in">
          ARTISTIC
          <span className="block text-gray-300 mt-2">PORTFOLIO</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide mb-12 animate-fade-in">
          Exploring the intersection of creativity and expression
        </p>
        
        <button
          onClick={scrollToPortfolio}
          className="inline-flex items-center text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 tracking-wider animate-fade-in"
        >
          VIEW WORK
          <ChevronDown className="ml-2" size={20} />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
