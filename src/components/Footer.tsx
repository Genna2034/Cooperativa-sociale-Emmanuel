import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-blue-400" fill="#60A5FA" />
              <span className="text-xl font-bold text-white">Emmanuel</span>
            </div>
            <p className="text-gray-400 mb-4">
              Cooperativa Sociale al servizio di chi ha più bisogno, da oltre 13 anni a Napoli.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servizi" className="text-gray-400 hover:text-blue-400 transition-colors">I Nostri Servizi</a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-gray-400 hover:text-blue-400 transition-colors">Chi Siamo</a>
              </li>
              <li>
                <a href="#contatti" className="text-gray-400 hover:text-blue-400 transition-colors">Contattaci</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Servizi</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Assistenza Domiciliare Integrata</li>
              <li className="text-gray-400">Assistenza Anziani</li>
              <li className="text-gray-400">Supporto Disabilità</li>
              <li className="text-gray-400">Piani Personalizzati</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">Napoli, Italia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Cooperativa Sociale Emmanuel. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;