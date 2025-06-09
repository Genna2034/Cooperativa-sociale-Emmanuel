import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import MobileNavigation from './MobileNavigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial size
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // NUOVO ORDINE DELLA BARRA DI NAVIGAZIONE
  const navItems = [
    { href: '/servizi', label: 'Servizi' },
    { href: '/chi-siamo', label: 'Chi Siamo' },
    { href: '/contatti', label: 'Contatti' },
    { href: '/recensioni', label: 'Recensioni' },
    { href: '/prenotazioni', label: 'Prenota' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Usa la navigazione mobile su schermi piccoli
  if (isMobile) {
    return <MobileNavigation />;
  }

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
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/Logo.png" 
              alt="Cooperativa Sociale Emmanuel" 
              className={`object-contain transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'h-12 w-12' : 'h-16 w-16'
              }`}
            />
          </Link>
          
          {/* Desktop Navigation - Centrata */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className={`transition-colors font-medium text-sm lg:text-base relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:bg-blue-600 after:transition-all ${
                    isActive(item.href)
                      ? 'text-blue-600 after:w-full'
                      : 'text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link 
              to="/lavora-con-noi" 
              className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              Sei un Professionista Sanitario?
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;