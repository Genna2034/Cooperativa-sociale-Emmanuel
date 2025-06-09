import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import FadeInSection from './FadeInSection';

const Footer = () => {
  const footerLinks = [
    { label: 'Servizi', href: '/servizi' },
    { label: 'Chi Siamo', href: '/chi-siamo' },
    { label: 'Recensioni', href: '/recensioni' },
    { label: 'Prenotazioni', href: '/prenotazioni' },
    { label: 'Contatti', href: '/contatti' }
  ];

  const services = [
    'Assistenza Domiciliare Integrata',
    'Assistenza Anziani',
    'Supporto Disabilità',
    'Fisioterapia Domiciliare',
    'Assistenza Infermieristica',
    'Servizi Educativi e Scolastici'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <FadeInSection direction="up" delay={100}>
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img 
                  src="/images/Logo.png" 
                  alt="Logo Cooperativa Sociale Emmanuel" 
                  className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110" 
                />
                <span className="text-2xl font-bold text-white">Emmanuel</span>
              </Link>
              <p className="text-gray-400 mb-4">
                Cooperativa Sociale Emmanuel al servizio di chi ha più bisogno, da oltre 15 anni a Napoli e in Campania. Accreditata con la Regione Campania per servizi ADI.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>Con amore e professionalità dal 2010</span>
              </div>
              <div className="text-sm text-turquoise-400 font-medium">
                🏆 Accreditata Regione Campania • Certificazione ISO 9001:2015
              </div>
            </div>
          </FadeInSection>
          
          {/* Quick Links */}
          <FadeInSection direction="up" delay={200}>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Link Rapidi</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="text-gray-400 hover:text-turquoise-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
          
          {/* Services */}
          <FadeInSection direction="up" delay={300}>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">I Nostri Servizi</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
          
          {/* Contact Info */}
          <FadeInSection direction="up" delay={400}>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contatti Emmanuel</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-turquoise-400 mr-2 mt-0.5" />
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-gray-400 hover:text-turquoise-400 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-turquoise-400 mr-2 mt-0.5" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-400 hover:text-turquoise-400 transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-turquoise-400 mr-2 mt-0.5" />
                  <span className="text-gray-400">Napoli, Campania - Italia</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h5 className="text-white font-medium mb-2">Orari di Apertura</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>Lun-Ven: 9:00-18:00</div>
                  <div>Sabato: 9:00-13:00</div>
                  <div>Domenica: Chiuso</div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
        
        <FadeInSection direction="fade" delay={500}>
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <img 
                  src="/images/Logo.png" 
                  alt="Logo Cooperativa Sociale Emmanuel" 
                  className="h-6 w-6 object-contain" 
                />
                <span>© {new Date().getFullYear()} Cooperativa Sociale Emmanuel. Tutti i diritti riservati.</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <Link to="/privacy" className="hover:text-turquoise-400 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/cookie" className="hover:text-turquoise-400 transition-colors">
                  Cookie Policy
                </Link>
                <span>•</span>
                <span>Cooperativa Sociale secondo Legge 381/91</span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
};

export default Footer;