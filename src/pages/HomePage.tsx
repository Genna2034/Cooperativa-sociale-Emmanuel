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
      title: 'Servizi Educativi e Scolastici',
      description: 'Supporto educativo specializzato, doposcuola, tutoraggio e servizi pre/post scuola per studenti di ogni età.',
      features: ['Doposcuola qualificato', 'Tutoraggio personalizzato', 'Supporto studenti stranieri'],
      link: '/servizi',
      image: '/images/medium-shot-women-posing-together.jpg'
    },
    {
      title: 'Micronido d\'Infanzia – Romagnano Sesia',
      description: 'Servizio educativo per bambini 0-3 anni con progetto pedagogico completo, educazione all\'aperto e laboratori specializzati.',
      features: ['Educatori qualificati 1:6', 'Laboratori creativi', 'Sportello psicopedagogico'],
      link: '/micronido-romagnano-sesia',
      image: '/images/closeup-support-hands.jpg'
    },
    {
      title: 'Supporto Familiare',
      description: 'Accompagnamento e sostegno per le famiglie nel percorso di cura dei propri cari.',
      features: ['Consulenza gratuita', 'Piani personalizzati', 'Supporto continuo'],
      link: '/prenotazioni',
      image: '/images/closeup-support-hands.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cooperativa Sociale Emmanuel Napoli</title>
        <meta name="description" content="Cooperativa Sociale Emmanuel Napoli: assistenza domiciliare ADI accreditata Regione Campania. Anziani e disabilità. ☎ 081 7877064" />
        <meta name="keywords" content="cooperativa sociale emmanuel, cooperativa sociale emmanuel napoli, emmanuel napoli, assistenza domiciliare napoli, cooperativa sociale napoli" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://cooperativaemmanuel.it/#organization",
              "name": "Cooperativa Sociale Emmanuel",
              "alternateName": ["Emmanuel Napoli", "Cooperativa Emmanuel", "Emmanuel ADI"],
              "url": "https://cooperativaemmanuel.it",
              "logo": {
                "@type": "ImageObject",
                "@id": "https://cooperativaemmanuel.it/#logo",
                "url": "https://cooperativaemmanuel.it/images/Logo.png",
                "contentUrl": "https://cooperativaemmanuel.it/images/Logo.png",
                "width": 512,
                "height": 512,
                "caption": "Cooperativa Sociale Emmanuel Logo"
              },
              "image": { "@id": "https://cooperativaemmanuel.it/#logo" },
              "description": "Cooperativa Sociale Emmanuel: leader assistenza domiciliare Napoli. ADI Campania accreditata, assistenza anziani e disabilità. ISO certificata.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Napoli",
                "addressRegion": "Campania",
                "addressCountry": "IT"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+39-081-7877064",
                "contactType": "customer service",
                "areaServed": "IT",
                "availableLanguage": ["Italian"]
              },
              "foundingDate": "2010",
              "founder": {
                "@type": "Person",
                "name": "Luigi Borriello"
              },
              "sameAs": [
                "https://www.facebook.com/cooperativaemmanuel",
                "https://www.linkedin.com/company/cooperativa-emmanuel"
              ]
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://cooperativaemmanuel.it/#localbusiness",
              "name": "Cooperativa Sociale Emmanuel",
              "image": { "@id": "https://cooperativaemmanuel.it/#logo" },
              "priceRange": "€€",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Napoli",
                "addressRegion": "Campania",
                "postalCode": "80100",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.8518,
                "longitude": 14.2681
              },
              "url": "https://cooperativaemmanuel.it",
              "telephone": "+39-081-7877064",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "13:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://cooperativaemmanuel.it/#website",
              "url": "https://cooperativaemmanuel.it",
              "name": "Cooperativa Sociale Emmanuel",
              "description": "Assistenza domiciliare Napoli - Cooperativa Sociale",
              "publisher": { "@id": "https://cooperativaemmanuel.it/#organization" },
              "inLanguage": "it-IT"
            },
            {
              "@type": "WebPage",
              "@id": "https://cooperativaemmanuel.it/#webpage",
              "url": "https://cooperativaemmanuel.it",
              "name": "Cooperativa Sociale Emmanuel | Assistenza Napoli ADI",
              "isPartOf": { "@id": "https://cooperativaemmanuel.it/#website" },
              "about": { "@id": "https://cooperativaemmanuel.it/#organization" },
              "description": "Cooperativa Sociale Emmanuel: assistenza domiciliare Napoli accreditata. ADI Campania, anziani, disabilità. ISO certificata.",
              "inLanguage": "it-IT"
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://cooperativaemmanuel.it/#breadcrumb",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://cooperativaemmanuel.it/"
              }]
            }
          ]
        })}
        </script>
      </Helmet>

      <HeroSection />
      <AccreditationSection />
      <StatsSection />

      {/* Sezione Caratteristiche con riferimento biblico */}
      <section className="py-12 md:py-16 bg-white">
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
                La Cooperativa Sociale Emmanuel porta conforto, dignità e sostegno a chi è in difficoltà con servizi accreditati e certificazione ISO di qualità
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
                    alt={`${feature.title} - Cooperativa Sociale Emmanuel`}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    loading="lazy"
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Servizi della Cooperativa Sociale Emmanuel
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
                    alt={`${service.title} - Cooperativa Sociale Emmanuel Napoli`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                    loading="lazy"
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
              Contatta la Cooperativa Sociale Emmanuel
            </h2>
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white font-medium mb-6">
              🏆 Accreditata Regione Campania • Certificazione ISO
            </div>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              La prima consulenza è sempre gratuita. Contatta la Cooperativa Sociale Emmanuel per scoprire come possiamo aiutarti.
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
                Contattaci Ora
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