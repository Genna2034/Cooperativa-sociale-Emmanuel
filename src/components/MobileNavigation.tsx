import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chiudi menu quando cambia la route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Previeni scroll del body quando il menu è aperto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/servizi', label: 'Servizi' },
    { href: '/chi-siamo', label: 'Chi Siamo' },
    { href: '/recensioni', label: 'Recensioni' },
    { href: '/prenotazioni', label: 'Prenota' },
    { href: '/contatti', label: 'Contatti' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Header mobile */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-top ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2'
            : 'bg-white/70 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 safe-area-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/Logo.png" 
                alt="Cooperativa Sociale Emmanuel" 
                className={`object-contain transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'h-10 w-10' : 'h-12 w-12'
                }`}
              />
              <span className="ml-2 text-lg font-bold text-gray-800">Emmanuel</span>
            </Link>
            
            {/* Menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors touch-target"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu mobile */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full safe-area-padding safe-area-top safe-area-bottom">
          {/* Header del menu */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <img 
                src="/images/Logo.png" 
                alt="Emmanuel" 
                className="h-8 w-8 object-contain"
              />
              <span className="ml-2 font-bold text-gray-800">Emmanuel</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 touch-target"
              aria-label="Chiudi menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation items */}
          <div className="flex-1 overflow-y-auto ios-scroll">
            <div className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-4 text-lg font-medium transition-colors mobile-spacing touch-target ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="px-4 py-6 border-t bg-gray-50">
              <Link
                to="/lavora-con-noi"
                className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors hover:bg-blue-700 mobile-button"
              >
                Lavora Con Noi
              </Link>
            </div>
          </div>

          {/* Footer del menu */}
          <div className="p-4 border-t bg-gray-50">
            <div className="space-y-3">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors touch-target"
              >
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </a>
              
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors touch-target"
              >
                <Mail className="h-4 w-4 mr-3" />
                <span className="text-sm break-all">{CONTACT_INFO.email}</span>
              </a>
            </div>
            
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs text-gray-500 text-center">
                © 2024 Cooperativa Emmanuel
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;