import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import FadeInSection from './FadeInSection';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/closeup-support-hands.jpg"
          alt="Assistenza domiciliare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          <FadeInSection direction="up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="block">Cooperativa Sociale Emmanuel</span>
              <span className="block mt-2 text-blue-200">
                Al servizio di chi ha più bisogno, da oltre 13 anni a Napoli
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection direction="up" delay={400}>
            <h2 className="text-xl md:text-2xl text-gray-100 my-8 max-w-3xl mx-auto leading-relaxed">
              Assistenza Domiciliare Integrata (ADI), supporto ad anziani e persone con disabilità.
              Unisciti alle migliaia di famiglie che hanno già scelto Emmanuel per il loro benessere quotidiano.
            </h2>
          </FadeInSection>

          <FadeInSection direction="up" delay={600}>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                to="/contatti"
                className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-medium transition-colors shadow-lg"
              >
                Richiedi un consulto gratuito
              </Link>
              
              <div className="flex flex-col gap-3 mt-6 md:mt-0">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-blue-300" />
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    Chiama ora: {CONTACT_INFO.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-300" />
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    Scrivici: {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;