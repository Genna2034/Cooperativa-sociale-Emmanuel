import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Shield, Award } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import BlogSection from '../components/BlogSection';
import NewsletterSection from '../components/NewsletterSection';
import AccreditationSection from '../components/AccreditationSection';
import FadeInSection from '../components/FadeInSection';

const HomePage = () => {
  const features = [
    {
      icon: Heart,
      title: 'Assistenza Personalizzata',
      description: 'Ogni piano di cura è studiato sulle specifiche esigenze della persona e della famiglia, seguendo l\'insegnamento cristiano di amare il prossimo.',
      link: '/servizi',
      image: '/images/closeup-support-hands.jpg'
    },
    {
      icon: Users,
      title: 'Team Qualificato',
      description: 'Professionisti sanitari esperti e formati per garantire il massimo livello di assistenza con compassione cristiana.',
      link: '/chi-siamo',
      image: '/images/medium-shot-women-posing-together.jpg'
    },
    {
      icon: Shield,
      title: 'Accreditamento Ufficiale',
      description: 'Accreditati con la Regione Campania per l\'erogazione di servizi ADI dal 2015.',
      link: '/recensioni',
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      icon: Award,
      title: 'Qualità Certificata ISO',
      description: 'Servizi ADI autorizzati e conformi alle normative regionali della Campania con certificazione ISO.',
      link: '/servizi',
      image: '/images/closeup-support-hands.jpg'
    }
  ];

  const quickServices = [
    {
      title: 'Assistenza Domiciliare Integrata (ADI)',
      description: 'Servizi sanitari e socio-assistenziali a domicilio per anziani e persone con disabilità, accreditati con la Regione Campania.',
      features: ['Visite mediche specialistiche', 'Assistenza infermieristica', 'Fisioterapia domiciliare'],
      link: '/servizi',
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      title: 'Supporto Familiare',
      description: 'Accompagnamento e sostegno per le famiglie nel percorso di cura dei propri cari.',
      features: ['Consulenza gratuita', 'Piani personalizzati', 'Supporto 24/7'],
      link: '/prenotazioni',
      image: '/images/medium-shot-women-posing-together.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cooperativa Sociale Emmanuel | Assistenza Domiciliare Napoli | ADI Campania Accreditata</title>
        <meta name="description" content="Cooperativa Sociale Emmanuel: accreditata con la Regione Campania per l'assistenza domiciliare a Napoli. Servizi ADI autorizzati, assistenza anziani e disabilità. Certificazione ISO. Chiama +39 081 7877064" />
        <meta name="keywords" content="cooperativa sociale emmanuel accreditata, emmanuel napoli regione campania, assistenza domiciliare napoli accreditata, ADI campania autorizzata, assistenza anziani napoli, cooperativa emmanuel accreditamento, luigi borriello emmanuel, gennaro borriello infermiere, umberto borriello economia, imma angelone educazione, certificazione iso" />
        
        {/* Schema.org per la homepage */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Cooperativa Sociale Emmanuel - Homepage",
          "description": "Homepage ufficiale della Cooperativa Sociale Emmanuel, accreditata con la Regione Campania per l'assistenza domiciliare a Napoli",
          "url": "https://deluxe-kitten-b2c047.netlify.app/",
          "mainEntity": {
            "@type": "Organization",
            "name": "Cooperativa Sociale Emmanuel",
            "alternateName": "Emmanuel Cooperativa Napoli Accreditata",
            "hasCredential": "Accreditamento Regione Campania per ADI"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://deluxe-kitten-b2c047.netlify.app/"
            }]
          }
        })}
        </script>
      </Helmet>

      <HeroSection />
      <AccreditationSection />
      <StatsSection />

      {/* Sezione Caratteristiche con riferimento biblico */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Perché Scegliere la Cooperativa Sociale Emmanuel
              </h2>
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
                🏆 Accreditata con la Regione Campania dal 2015
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                La nostra missione è portare conforto, dignità e sostegno a chi è in difficoltà con servizi accreditati e certificazione ISO di qualità
              </p>
              <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-gray-700 italic text-lg mb-2">
                  <em>"Ama il tuo prossimo come te stesso"</em>
                </p>
                <p className="text-blue-600 font-medium text-sm">
                  Matteo 22:39 - Il fondamento biblico della nostra missione
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeInSection key={index} direction="up" delay={index * 150}>
                <Link 
                  to={feature.link}
                  className="group bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all duration-300 block"
                >
                  <img 
                    src={feature.image}
                    alt={`${feature.title} - Cooperativa Emmanuel Accreditata`}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
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
                I Nostri Servizi Principali ADI Accreditati in Campania
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluzioni complete per l'assistenza domiciliare integrata in Campania con accreditamento ufficiale e certificazione ISO
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quickServices.map((service, index) => (
              <FadeInSection key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={200}>
                <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
                  <img 
                    src={service.image}
                    alt={`${service.title} - Cooperativa Emmanuel Napoli Accreditata`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
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

      <BlogSection />

      {/* Call to Action con riferimento biblico */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeInSection direction="up">
            <img 
              src="/images/closeup-support-hands.jpg"
              alt="Inizia il tuo percorso con Emmanuel Accreditata"
              className="w-full max-w-md mx-auto h-48 object-cover rounded-lg mb-8"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Inizia il Tuo Percorso di Assistenza con Emmanuel
            </h2>
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white font-medium mb-6">
              🏆 Accreditata Regione Campania • Certificazione ISO
            </div>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              La prima consulenza è sempre gratuita. Contatta la Cooperativa Sociale Emmanuel accreditata per scoprire come possiamo aiutarti.
            </p>
            <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-white italic text-lg mb-2">
                <em>"Tutto quello che avete fatto a uno solo di questi miei fratelli più piccoli, l'avete fatto a me"</em>
              </p>
              <p className="text-blue-200 font-medium text-sm">
                Matteo 25:40 - La nostra ispirazione quotidiana
              </p>
            </div>
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
                Contatta Emmanuel Ora
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
};

export default HomePage;