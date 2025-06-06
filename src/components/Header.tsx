import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#servizi', label: 'Servizi' },
    { href: '#chi-siamo', label: 'Chi Siamo' },
    { href: '#recensioni', label: 'Recensioni' },
    { href: '#prenotazioni', label: 'Prenota' },
    { href: '#contatti', label: 'Contatti' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-white/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Più grande e senza testo */}
          <div className="flex items-center">
            <img 
              src="/images/Logo.png" 
              alt="Cooperativa Sociale Emmanuel" 
              className={`object-contain transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'h-12 w-12' : 'h-16 w-16'
              }`}
            />
          </div>
          
          {/* Desktop Navigation - Centrata */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a 
              href="#contatti" 
              className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              Richiedi Consulto
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-full text-sm font-medium transition-colors hover:bg-blue-700 mt-4"
            >
              Richiedi Consulto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;