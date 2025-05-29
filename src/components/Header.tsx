import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useMobilePage } from '../hooks/useMobilePage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentPage, setCurrentPage, resetPage } = useMobilePage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (isMobile) {
      setCurrentPage(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {isMobile && currentPage !== 'home' ? (
            <button
              onClick={resetPage}
              className="text-white p-2 hover:bg-red-800 rounded-lg transition-colors duration-200 active:bg-red-700"
              aria-label="Back to home"
            >
              <ArrowLeft size={24} />
            </button>
          ) : (
            <div className="text-2xl font-light tracking-wider">
              PORTFOLIO
            </div>
          )}
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide"
            >
              HOME
            </button>
            <button 
              onClick={() => handleNavigation('portfolio')}
              className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide"
            >
              WORK
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide"
            >
              ABOUT
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          {(isMobile && currentPage === 'home') && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-red-800 rounded-lg transition-colors duration-200 active:bg-red-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-800 mt-4">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-gray-300 hover:text-white active:bg-red-800 transition-colors duration-300 tracking-wide text-left py-3 px-2 rounded-lg"
            >
              HOME
            </button>
            <button 
              onClick={() => handleNavigation('portfolio')}
              className="text-gray-300 hover:text-white active:bg-red-800 transition-colors duration-300 tracking-wide text-left py-3 px-2 rounded-lg"
            >
              WORK
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-gray-300 hover:text-white active:bg-red-800 transition-colors duration-300 tracking-wide text-left py-3 px-2 rounded-lg"
            >
              ABOUT
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="text-gray-300 hover:text-white active:bg-red-800 transition-colors duration-300 tracking-wide text-left py-3 px-2 rounded-lg"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
