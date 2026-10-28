import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Shield, Award, Stethoscope, BookOpen, HeartHandshake, Briefcase } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import BlogSection from '../components/BlogSection';
import NewsletterSection from '../components/NewsletterSection';
import AccreditationSection from '../components/AccreditationSection';
import FadeInSection from '../components/FadeInSection';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants/projects';

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
      description: 'Accreditati con la Regione Campania per l\'erogazione di servizi ADI.',
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

  const serviceAreas = [
    {
      icon: Stethoscope,
      title: 'Assistenza domiciliare',
      description: 'ADI accreditata con la Regione Campania e SAD per i Comuni: cure sanitarie e supporto quotidiano a casa, per anziani e persone con disabilità.',
      items: ['Infermieri e fisioterapisti a domicilio', 'Operatori socio-sanitari', 'Piani di cura personalizzati'],
      link: '/come-richiedere-adi',
      cta: 'Come richiedere l\'ADI',
      secondaryLink: undefined as { href: string; label: string } | undefined
    },
    {
      icon: BookOpen,
      title: 'Servizi educativi e infanzia',
      description: 'Nidi e micronidi comunali, educativa domiciliare, doposcuola e assistenza educativa scolastica per minori e famiglie.',
      items: ['Asili nido e micronidi 0-3', 'Educativa domiciliare', 'Supporto scolastico e doposcuola'],
      link: '/servizi',
      cta: 'Scopri i servizi educativi'
    },
    {
      icon: HeartHandshake,
      title: 'Inclusione sociale e cultura',
      description: 'Progetti con enti pubblici e partner del terzo settore per giovani, persone fragili e comunità locali.',
      items: ['Percorsi di inserimento sociale e lavorativo', 'Supporto psicologico e alle famiglie', 'Progetti culturali di comunità'],
      link: '/progetti',
      cta: 'Vedi i progetti'
    },
    {
      icon: Briefcase,
      title: 'App e software gestionali',
      description: 'Strumenti digitali su misura per cooperative, associazioni ed enti locali, progettati da chi i servizi sociali ed educativi li gestisce ogni giorno.',
      items: ['Gestionali per servizi sociali ed educativi', 'App per operatori e famiglie', 'Siti, portali e automazioni'],
      link: '/sviluppo-app-software-gestionali',
      cta: 'Scopri lo sviluppo software',
      secondaryLink: undefined
    }
  ];

  const latestProjects = PROJECTS.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Assistenza Domiciliare Integrata Napoli (ADI) | Cooperativa Sociale Emmanuel</title>
        <meta name="description" content="Cooperativa Sociale Emmanuel: assistenza domiciliare integrata (ADI) a Napoli accreditata Regione Campania. Infermieri, fisioterapisti e OSS a domicilio per anziani e disabili, gratuita tramite ASL. ☎ 081 7877064" />
        <meta name="keywords" content="assistenza domiciliare integrata napoli, ADI napoli, assistenza domiciliare napoli, infermiere domicilio asl napoli, cooperativa sociale emmanuel, cooperativa sociale napoli, assistenza anziani napoli" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cooperativaemmanuel.it/" />
        <meta property="og:title" content="Assistenza Domiciliare Integrata Napoli (ADI) | Cooperativa Sociale Emmanuel" />
        <meta property="og:description" content="ADI a Napoli accreditata Regione Campania: infermieri, fisioterapisti e OSS a domicilio per anziani e persone con disabilità, gratuita tramite ASL per gli aventi diritto." />
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
                "url": "https://cooperativaemmanuel.it/images/logo_emmanuel_new_ok.png",
                "contentUrl": "https://cooperativaemmanuel.it/images/logo_emmanuel_new_ok.png",
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
              ]
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
              "name": "Assistenza Domiciliare Integrata Napoli (ADI) | Cooperativa Sociale Emmanuel",
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
                Accreditata con la Regione Campania
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

      {/* Aree di servizio */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Di cosa ci occupiamo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quattro aree di intervento, un unico modo di lavorare: vicino alle persone e in rete con il territorio
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <FadeInSection key={index} direction="up" delay={index * 150}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-5">
                    <area.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-5">{area.description}</p>
                  <ul className="space-y-2 mb-6">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-5 w-5 text-blue-600 font-medium text-xs mr-3 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-col gap-2">
                    <Link
                      to={area.link}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                    >
                      {area.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    {area.secondaryLink && (
                      <Link to={area.secondaryLink.href} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                        {area.secondaryLink.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimi progetti */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  Gli ultimi progetti
                </h2>
                <p className="text-xl text-gray-600">
                  Servizi e progetti che gestiamo oggi per Comuni ed enti pubblici
                </p>
              </div>
              <Link
                to="/progetti"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 whitespace-nowrap"
              >
                Tutti i progetti e i territori <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestProjects.map((project, index) => (
              <FadeInSection key={project.link} direction="up" delay={index * 100}>
                <ProjectCard project={project} compact />
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
              Accreditata Regione Campania • Certificazione ISO
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