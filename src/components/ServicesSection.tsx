import React from 'react';
import { Stethoscope, Home } from 'lucide-react';
import { ADI_SERVICES, EXTRA_SERVICES } from '../constants';
import FadeInSection from './FadeInSection';

const ServicesSection = () => {
  return (
    <section id="servizi" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            I Nostri Servizi
          </h2>
        </FadeInSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* ADI Services */}
          <FadeInSection direction="left" delay={200}>
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600 transform transition-all hover:shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Prestazioni offerte per conto dell'ADI
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Assistenza Domiciliare Integrata con servizi professionali e qualificati
              </p>
              
              <ul className="space-y-4">
                {ADI_SERVICES.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 min-w-6 text-blue-600 font-medium text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
          
          {/* Extra Services */}
          <FadeInSection direction="right" delay={400}>
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-600 transform transition-all hover:shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Servizi di assistenza ad anziani e persone con disabilità
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Supporto personalizzato per il benessere quotidiano e l'autonomia
              </p>
              
              <ul className="space-y-4">
                {EXTRA_SERVICES.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 min-w-6 text-blue-600 font-medium text-sm mr-3 mt-0.5">✓</span>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-gray-700 italic">
                  "Ogni piano di assistenza è personalizzato sulle esigenze specifiche della persona e della famiglia"
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;