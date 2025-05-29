import React from 'react';
import { Mail, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider mb-6 sm:mb-8">
          GET IN TOUCH
        </h2>
        <div className="w-16 sm:w-24 h-0.5 bg-white mx-auto mb-8 sm:mb-12"></div>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed px-4">
          Interested in collaborating or acquiring a piece? 
          I'd love to hear from you.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 mb-12 sm:mb-16">
          <a 
            href="mailto:hello@example.com"
            className="flex items-center text-gray-300 hover:text-white active:text-gray-400 transition-colors duration-300 p-2"
          >
            <Mail className="mr-3" size={24} />
            <span className="tracking-wide">hello@example.com</span>
          </a>
          
          <a 
            href="#"
            className="flex items-center text-gray-300 hover:text-white active:text-gray-400 transition-colors duration-300 p-2"
          >
            <Instagram className="mr-3" size={24} />
            <span className="tracking-wide">@artist</span>
          </a>
          
          <a 
            href="#"
            className="flex items-center text-gray-300 hover:text-white active:text-gray-400 transition-colors duration-300 p-2"
          >
            <Twitter className="mr-3" size={24} />
            <span className="tracking-wide">@artist</span>
          </a>
        </div>
        
        <div className="border-t border-gray-800 pt-8 sm:pt-12">
          <p className="text-gray-500 text-xs sm:text-sm tracking-wider px-4">
            © 2024 ARTISTIC PORTFOLIO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
