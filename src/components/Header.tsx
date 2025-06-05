import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/Logo.png" alt="Logo Emmanuel" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold text-blue-700">
            Emmanuel
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a href="#servizi" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Servizi
          </a>
          <a href="#chi-siamo" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Chi Siamo
          </a>
          <a href="#contatti" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Contatti
          </a>
        </nav>
        
        <a 
          href="#contatti" 
          className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          Richiedi Consulto
        </a>
      </div>
    </header>
  );
};

export default Header;