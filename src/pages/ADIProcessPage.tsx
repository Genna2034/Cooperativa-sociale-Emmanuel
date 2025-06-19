import React from 'react';
import { ArrowRight, CheckCircle, Phone, Mail, FileText, Calendar, Users, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const ADIProcessPage = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Richiesta del Medico di Famiglia',
      description: 'Il medico di medicina generale valuta le condizioni del paziente e compila la richiesta per l\'ADI.',
      details: [
        'Valutazione clinica del paziente',
        'Compilazione modulo di richiesta ADI',
        'Invio della richiesta all\'ASL di competenza',
        'Allegazione della documentazione clinica necessaria'
      ],
      icon: Stethoscope,
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      step: 2,
      title: 'Valutazione UVM (Unità di Valutazione Multidimensionale)',
      description: 'L\'équipe multidisciplinare dell\'ASL valuta le condizioni del paziente e definisce il piano assistenziale.',
      details: [
        'Valutazione multidimensionale del paziente',
        'Definizione del livello di intensità assistenziale',
        'Elaborazione del Piano Assistenziale Individualizzato (PAI)',
        'Autorizzazione all\'erogazione dei servizi ADI'
      ],
      icon: Users,
      image: '/images/medium-shot-women-posing-together.jpg'
    },
    {
      step: 3,
      title: 'Attivazione dei Servizi',
      description: 'La Cooperativa Emmanuel attiva i servizi ADI autorizzati entro 72 ore dalla richiesta.',
      details: [
        'Assegnazione del team assistenziale',
        'Prima visita domiciliare di valutazione',
        'Avvio del piano assistenziale personalizzato',
        'Coordinamento con il medico di famiglia'
      ],
      icon: CheckCircle,
      image: '/images/closeup-support-hands.jpg'
    }
  ];

  const requirements = [
    {
      title: 'Requisiti del Paziente',
      items: [
        'Residenza nella Regione Campania',
        'Condizioni di non autosufficienza certificate',
        'Necessità di assistenza sanitaria domiciliare',
        'Impossibilità di recarsi presso strutture sanitarie'
      ]
    },
    {
      title: 'Documentazione Necessaria',
      items: [
        'Richiesta del medico di medicina generale',
        'Documentazione clinica aggiornata',
        'Tessera sanitaria del paziente',
        'Documento di identità del paziente o del familiare'
      ]
    }
  ];

  const services = [
    'Visite mediche specialistiche domiciliari',
    'Assistenza infermieristica professionale',
    'Fisioterapia e riabilitazione domiciliare',
    'Fornitura di ausili sanitari',
    'Supporto psicologico per paziente e famiglia',
    'Educazione sanitaria al caregiver',
    'Coordinamento con il medico di famiglia'
  ];

  return (
    <>
      <PageHeader
        title="Come Accedere all'ADI in Campania"
        description="Guida completa per richiedere l'Assistenza Domiciliare Integrata nella Regione Campania"
        metaTitle="Come Richiedere ADI Campania - Cooperativa Emmanuel"
        metaDescription="Guida passo-passo per accedere ai servizi di Assistenza Domiciliare Integrata in Campania. Requisiti, documentazione e procedura completa."
        keywords="ADI Campania, come richiedere assistenza domiciliare, procedura ADI, requisiti assistenza domiciliare, UVM Campania, supporto psicologico ADI"
        showBreadcrumb={false}
      />

      {/* Introduzione */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Procedura per Richiedere l'ADI in Campania
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                L'Assistenza Domiciliare Integrata (ADI) è un servizio gratuito per gli aventi diritto, 
                erogato dalla Regione Campania attraverso cooperative accreditate come Emmanuel.
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Importante</h3>
                <p className="text-gray-700">
                  I servizi ADI sono completamente gratuiti per i pazienti che rispettano i requisiti. 
                  La Cooperativa Emmanuel è accreditata con la Regione Campania per l'erogazione di questi servizi.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Procedura Passo-Passo */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Procedura Passo-Passo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Segui questi semplici passaggi per richiedere l'assistenza domiciliare integrata
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <FadeInSection key={step.step} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 200}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="lg:w-1/2">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mr-4">
                        {step.step}
                      </div>
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
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

      {/* Requisiti e Documentazione */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Requisiti e Documentazione
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Verifica di avere tutti i requisiti e la documentazione necessaria
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {requirements.map((req, index) => (
              <FadeInSection key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={200}>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">{req.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi Inclusi */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Servizi Inclusi nell'ADI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tutti i servizi erogati dalla Cooperativa Emmanuel nell'ambito dell'ADI, 
                incluso il supporto psicologico specializzato
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up" delay={200}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">Nota Importante</h4>
                  <p className="text-gray-700">
                    Tutti i servizi ADI sono erogati gratuitamente per i pazienti che rispettano i requisiti. 
                    La Cooperativa Emmanuel è accreditata con la Regione Campania e l'ASL Napoli 1 Centro 
                    per garantire la massima qualità nell'assistenza domiciliare, incluso il supporto psicologico 
                    per pazienti e famiglie.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeInSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hai Bisogno di Maggiori Informazioni?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              I nostri esperti sono a disposizione per guidarti nella procedura di richiesta ADI 
              e rispondere a tutte le tue domande.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contatti"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Contattaci per Informazioni <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/prenotazioni"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Prenota Consulenza Gratuita
              </Link>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Contatti Diretti</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center text-white hover:text-blue-200 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {CONTACT_INFO.phone}
                </a>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-center text-white hover:text-blue-200 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default ADIProcessPage;