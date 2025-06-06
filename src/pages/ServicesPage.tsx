import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Home, Heart, Users, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { ADI_SERVICES, EXTRA_SERVICES } from '../constants';

const ServicesPage = () => {
  const serviceCategories = [
    {
      icon: Stethoscope,
      title: 'Assistenza Domiciliare Integrata (ADI)',
      description: 'Servizi sanitari autorizzati dalla Regione Campania per garantire cure professionali a domicilio.',
      services: ADI_SERVICES,
      color: 'blue',
      benefits: [
        'Servizi gratuiti per gli aventi diritto',
        'Personale sanitario qualificato',
        'Coordinamento con il medico di famiglia',
        'Piani di cura personalizzati'
      ],
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      icon: Home,
      title: 'Assistenza Privata Domiciliare',
      description: 'Servizi di supporto quotidiano per anziani e persone con disabilità, personalizzati sulle esigenze familiari.',
      services: EXTRA_SERVICES,
      color: 'green',
      benefits: [
        'Assistenza 24/7 disponibile',
        'Operatori formati e selezionati',
        'Flessibilità negli orari',
        'Tariffe competitive'
      ],
      image: '/images/medium-shot-women-posing-together.jpg'
    }
  ];

  const additionalServices = [
    {
      icon: Heart,
      title: 'Supporto Psicologico',
      description: 'Accompagnamento emotivo per pazienti e famiglie durante il percorso di cura.',
      features: ['Colloqui individuali', 'Supporto familiare', 'Gestione dello stress', 'Elaborazione del lutto'],
      image: '/images/closeup-support-hands.jpg'
    },
    {
      icon: Users,
      title: 'Formazione Caregiver',
      description: 'Corsi per familiari e badanti per migliorare la qualità dell\'assistenza.',
      features: ['Tecniche di mobilizzazione', 'Gestione farmaci', 'Primo soccorso', 'Comunicazione efficace'],
      image: '/images/medium-shot-women-posing-together.jpg'
    },
    {
      icon: Clock,
      title: 'Assistenza Notturna',
      description: 'Sorveglianza e assistenza durante le ore notturne per garantire sicurezza e tranquillità.',
      features: ['Controllo parametri vitali', 'Assistenza igienica', 'Somministrazione farmaci', 'Pronto intervento'],
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      icon: Shield,
      title: 'Servizi di Emergenza',
      description: 'Interventi rapidi per situazioni urgenti e supporto nelle emergenze sanitarie.',
      features: ['Reperibilità 24/7', 'Intervento rapido', 'Coordinamento con 118', 'Supporto familiare'],
      image: '/images/closeup-support-hands.jpg'
    }
  ];

  const campaniaNorms = [
    {
      title: 'Requisiti per l\'ADI in Campania',
      items: [
        'Residenza nella Regione Campania',
        'Prescrizione del medico di medicina generale',
        'Valutazione dell\'Unità di Valutazione Multidimensionale (UVM)',
        'Condizioni di non autosufficienza certificate'
      ],
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      title: 'Procedure di Accesso',
      items: [
        'Richiesta tramite medico di famiglia',
        'Valutazione domiciliare gratuita',
        'Elaborazione piano assistenziale personalizzato',
        'Attivazione servizi entro 72 ore'
      ],
      image: '/images/medium-shot-women-posing-together.jpg'
    }
  ];

  return (
    <>
      <PageHeader
        title="I Nostri Servizi"
        description="Assistenza domiciliare professionale e personalizzata per anziani e persone con disabilità in Campania"
        metaTitle="Servizi di Assistenza Domiciliare - Cooperativa Emmanuel Napoli"
        metaDescription="Scopri tutti i servizi di assistenza domiciliare della Cooperativa Emmanuel: ADI, assistenza privata, supporto psicologico e molto altro in Campania."
        keywords="assistenza domiciliare, ADI Campania, servizi anziani, fisioterapia domiciliare, infermiere a domicilio, Napoli"
      />

      {/* Servizi Principali */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <FadeInSection key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={200}>
                <div className={`bg-${category.color}-50 rounded-xl shadow-lg p-8 border-t-4 border-${category.color}-600 h-full`}>
                  <div className="mb-6">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center">
                      <div className={`p-3 bg-${category.color}-100 rounded-full mr-4`}>
                        <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Servizi Inclusi:</h3>
                    <ul className="space-y-2">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className={`h-5 w-5 text-${category.color}-600 mr-3 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`bg-${category.color}-100 rounded-lg p-4`}>
                    <h4 className="font-semibold text-gray-800 mb-2">Vantaggi:</h4>
                    <ul className="space-y-1">
                      {category.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center">
                          <span className={`w-2 h-2 bg-${category.color}-600 rounded-full mr-2`}></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi Aggiuntivi */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Servizi Specializzati
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluzioni complete per ogni esigenza di assistenza domiciliare
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <FadeInSection key={index} direction="up" delay={index * 150}>
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Normative Campania */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                ADI in Campania: Requisiti e Procedure
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Informazioni complete sui servizi di Assistenza Domiciliare Integrata nella Regione Campania
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campaniaNorms.map((section, index) => (
              <FadeInSection key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={300}>
                <div className="bg-white rounded-xl shadow-md p-8">
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 text-blue-600 font-medium text-sm mr-3 mt-0.5 flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection direction="up" delay={500}>
            <div className="text-center mt-12">
              <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
                <img 
                  src="/images/closeup-support-hands.jpg"
                  alt="Assistenza personalizzata"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Hai Bisogno di Maggiori Informazioni?
                </h3>
                <p className="text-gray-600 mb-6">
                  I nostri esperti sono a disposizione per una consulenza gratuita e per guidarti 
                  nell'accesso ai servizi ADI in Campania.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/prenotazioni"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Prenota Consulenza <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link 
                    to="/contatti"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Contattaci
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;