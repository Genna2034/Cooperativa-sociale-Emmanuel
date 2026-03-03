import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Users, Heart, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Shield, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const SADPorticiPage = () => {
  const serviceFeatures = [
    { icon: Users, text: 'Cura della persona e assistenza igienica' },
    { icon: Heart, text: 'Supporto domestico e relazionale' },
    { icon: Shield, text: 'Piani assistenziali personalizzati' },
    { icon: Calendar, text: 'Monitoraggio continuo e flessibilità' }
  ];

  const benefits = [
    'Supporto nelle attività quotidiane della persona',
    'Mantenimento dell\'autonomia e della dignità',
    'Accompagnamento e stimolazione relazionale',
    'Sollievo per i familiari caregiver',
    'Flessibilità negli orari e nelle modalità di intervento'
  ];

  return (
    <>
      <Helmet>
        <title>SAD anziani e disabili – Comune di Portici | Cooperativa Emmanuel</title>
        <meta name="description" content="Servizio di Assistenza Domiciliare per anziani e persone con disabilità nel Comune di Portici. Supporto alla vita quotidiana e al benessere." />
        <meta name="keywords" content="SAD Portici, assistenza domiciliare Portici, anziani Portici, disabilità Portici, cooperativa emmanuel, servizio assistenza domiciliare Portici" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/sad-portici" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "SAD anziani e disabili – Comune di Portici - Cooperativa Emmanuel",
          "description": "Servizio di assistenza domiciliare per supporto alla vita quotidiana e al benessere.",
          "provider": {
            "@type": "Organization",
            "name": "Cooperativa Sociale Emmanuel",
            "url": "https://cooperativaemmanuel.it"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Portici",
            "addressRegion": "Campania",
            "addressCountry": "IT"
          },
          "areaServed": "Portici"
        })}
        </script>

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://cooperativaemmanuel.it/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Servizi",
              "item": "https://cooperativaemmanuel.it/servizi"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "SAD Portici",
              "item": "https://cooperativaemmanuel.it/sad-portici"
            }
          ]
        })}
        </script>
      </Helmet>

      <PageHeader
        title="SAD anziani e disabili – Comune di Portici"
        description="Supporto alla vita quotidiana e al benessere della persona a domicilio."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Servizi', href: '/servizi' },
          { label: 'SAD Portici' }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Home className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Assistenza domiciliare nel Comune di Portici</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Il Servizio di Assistenza Domiciliare (SAD) nel Comune di Portici offre supporto qualificato alle persone
                      anziane e con disabilità, favorendo il mantenimento dell'autonomia e della qualità della vita nel proprio
                      ambiente domestico.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cos'è il servizio</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Il SAD è un servizio di <strong>assistenza domiciliare socio-assistenziale</strong> che supporta le persone
                  anziane e con disabilità nelle attività della vita quotidiana, promuovendo il benessere psicofisico e
                  prevenendo l'isolamento sociale.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Gli operatori della Cooperativa Emmanuel intervengono con <strong>professionalità e umanità</strong>,
                  offrendo aiuto concreto nella cura della persona, nelle attività domestiche e nel supporto relazionale,
                  con un piano personalizzato costruito sulle esigenze specifiche di ogni utente.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Il servizio si integra con la rete familiare e territoriale, garantendo <strong>continuità assistenziale</strong>
                  e collaborazione con i servizi sociali e sanitari del Comune di Portici.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cosa offriamo</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                    <feature.icon className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Interventi Principali</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Cura della persona:</strong> Igiene personale, vestizione, mobilizzazione e alimentazione</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Supporto domestico:</strong> Gestione della casa, preparazione pasti, spesa e commissioni</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Supporto relazionale:</strong> Accompagnamento, stimolazione cognitiva, socializzazione</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Piano personalizzato e monitoraggio:</strong> Progetto individuale condiviso con famiglia e servizi</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantaggi del servizio</h2>
              <div className="bg-white border-2 border-green-100 rounded-xl p-8 mb-12">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center rounded-full bg-green-100 h-6 w-6 text-green-600 font-medium text-sm mr-3 mt-0.5">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={400}>
              <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Richiedi Informazioni</h2>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  Per informazioni sul servizio SAD nel Comune di Portici, contattaci.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Phone className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Telefono</h3>
                    </div>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-xl font-bold hover:text-green-200 transition-colors block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Mail className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Email</h3>
                    </div>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-lg hover:text-green-200 transition-colors break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul SAD nel Comune di Portici`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:bg-gray-100"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contattaci su WhatsApp
                  </a>
                  <Link
                    to="/prenotazioni"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-400 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    Prenota Consulenza <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default SADPorticiPage;
