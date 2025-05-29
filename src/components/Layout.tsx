import React from 'react';
import { useMobilePage } from '../context/MobilePageContext';
import Header from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const Layout = () => {
  const { currentPage } = useMobilePage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Mobile View */}
      <div className="md:hidden">
        {currentPage === 'home' && <Hero />}
        {currentPage === 'portfolio' && (
          <div className="animate-in slide-in-from-right">
            <Portfolio />
          </div>
        )}
        {currentPage === 'about' && (
          <div className="animate-in slide-in-from-right">
            <About />
          </div>
        )}
        {currentPage === 'contact' && (
          <div className="animate-in slide-in-from-right">
            <Contact />
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Layout; 