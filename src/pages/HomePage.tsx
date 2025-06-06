import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Shield, Award } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FadeInSection from '../components/FadeInSection';

const HomePage = () => {
  const features = [
    {
      icon: Heart,
      title: 'Assistenza Personalizzata',
      description: 'Ogni piano di cura è studiato sulle specifiche esigenze della persona e della famiglia.',
      link: '/servizi'
    },
    {
      icon: Users,
      title: 'Team Qualificato',
      description: 'Professionisti sanitari esperti e formati per garantire il massimo livello di assistenza.',
      link: '/chi-siamo'
    },
    {
      icon: Shield,
      title: 'Sicurezza e Affidabilità',
      description: 'Oltre 15 anni di esperienza nel settore sociosanitario in Campania.',
      link: '/recensioni'
    },
    {
      icon: Award,
      title: 'Qualità Certificata',
      description: 'Servizi ADI autorizzati e conformi alle normative regionali della Campania.',
      link: '/servizi'
    }
  ];

  const quickServices = [
    {
      title: 'Assistenza Domiciliare Integrata (ADI)',
      description: 'Servizi sanitari e socio-assistenziali a domicilio per anziani e persone con disabilità.',
      features: ['Visite mediche specialistiche', 'Assistenza infermieristica', 'Fisioterapia domiciliare'],
      link: '/servizi'
    },
    {
      title: 'Supporto Familiare',
      description: 'Accompagnamento e sostegno per le famiglie nel percorso di cura dei propri cari.',
      features: ['Consulenza gratuita', 'Piani personalizzati', 'Supporto 24/7'],
      link: '/prenotazioni'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cooperativa Sociale Emmanuel - Assistenza Domiciliare a Napoli</title>
        <meta name="description" content="Assistenza Domiciliare Integrata (ADI), supporto ad anziani e persone con disabilità. Servizi di qualità per il benessere dei tuoi cari a Napoli e in Campania." />
        <meta name="keywords" content="assistenza domiciliare, ADI, anziani, disabilità, Napoli, Campania, cooperativa sociale" />
      </Helmet>

      <HeroSection />
      <StatsSection />

      {/* Sezione Caratteristiche */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Perché Scegliere Emmanuel
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La nostra missione è portare conforto, dignità e sostegno a chi è in difficoltà
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeInSection key={index} direction="up" delay={index * 150}>
                <Link 
                  to={feature.link}
                  className="group bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                    Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sezione Servizi Principali */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                I Nostri Servizi Principali
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluzioni complete per l'assistenza domiciliare in Campania
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quickServices.map((service, index) => (
              <FadeInSection key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={200}>
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-5 w-5 text-blue-600 font-medium text-xs mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeInSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Inizia il Tuo Percorso di Assistenza
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              La prima consulenza è sempre gratuita. Contattaci per scoprire come possiamo aiutarti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/prenotazioni"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Prenota Consulenza Gratuita
              </Link>
              <Link 
                to="/contatti"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contattaci Ora
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default HomePage;