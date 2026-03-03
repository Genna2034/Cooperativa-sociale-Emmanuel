import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Stethoscope, Users, Heart, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Shield, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const ADIPorticiPage = () => {
  const serviceFeatures = [
    { icon: Users, text: 'Valutazione multidimensionale dei bisogni' },
    { icon: Heart, text: 'Assistenza sanitaria e supporto socio-assistenziale' },
    { icon: Shield, text: 'Coordinamento tra tutti i servizi coinvolti' },
    { icon: Calendar, text: 'Monitoraggio continuo e adattamento del piano' }
  ];

  const benefits = [
    'Assistenza professionale a domicilio',
    'Riduzione degli accessi ospedalieri',
    'Mantenimento dell\'autonomia nel proprio ambiente',
    'Supporto continuo a paziente e famiglia',
    'Integrazione tra servizi sanitari e sociali'
  ];

  return (
    <>
      <Helmet>
        <title>ADI anziani e disabili – Comune di Portici | Cooperativa Emmanuel</title>
        <meta name="description" content="Assistenza Domiciliare Integrata per anziani e persone con disabilità nel Comune di Portici. Servizio ADI coordinato e professionale." />
        <meta name="keywords" content="ADI Portici, assistenza domiciliare Portici, anziani Portici, disabilità Portici, cooperativa emmanuel, ADI Comune Portici" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/adi-portici" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "ADI anziani e disabili – Comune di Portici - Cooperativa Emmanuel",
          "description": "Assistenza domiciliare integrata per anziani e persone con disabilità nel Comune di Portici.",
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
              "name": "ADI Portici",
              "item": "https://cooperativaemmanuel.it/adi-portici"
            }
          ]
        })}
        </script>
      </Helmet>

      <PageHeader
        title="ADI anziani e disabili – Comune di Portici"
        description="Assistenza domiciliare integrata per un supporto continuo e coordinato."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Servizi', href: '/servizi' },
          { label: 'ADI Portici' }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Stethoscope className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Assistenza integrata nel Comune di Portici</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Il servizio di Assistenza Domiciliare Integrata (ADI) nel Comune di Portici rappresenta un modello di assistenza
                      che integra interventi sanitari e socio-assistenziali, garantendo un supporto completo e coordinato alle persone
                      anziane e con disabilità nel proprio domicilio.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cos'è il servizio</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed mb-4">
                  L'ADI è un servizio che offre <strong>assistenza sanitaria e socio-assistenziale a domicilio</strong>,
                  evitando o riducendo il ricovero ospedaliero e permettendo alla persona di rimanere nel proprio ambiente familiare.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nel <strong>Comune di Portici</strong>, la Cooperativa Emmanuel eroga questo servizio con professionalità e
                  dedizione, distinguendosi dal servizio ADI ASL NA1 per la specifica collaborazione con l'amministrazione comunale
                  e per l'attenzione alle esigenze territoriali locali.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Il servizio prevede un <strong>approccio multidisciplinare</strong> che coinvolge medici, infermieri,
                  fisioterapisti, operatori socio-sanitari e assistenti sociali, tutti coordinati per garantire la continuità
                  assistenziale e il miglior outcome per il paziente.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cosa offriamo</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Interventi Principali</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Valutazione e presa in carico:</strong> Analisi completa dei bisogni sanitari e sociali della persona</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Assistenza sanitaria:</strong> Prestazioni infermieristiche, riabilitative e mediche specialistiche</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Supporto socio-assistenziale:</strong> Aiuto nelle attività quotidiane e cura della persona</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Coordinamento e continuità:</strong> Gestione integrata con medico di famiglia, ASL e servizi sociali</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Vantaggi del servizio</h2>
              <div className="bg-white border-2 border-blue-100 rounded-xl p-8 mb-12">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 text-blue-600 font-medium text-sm mr-3 mt-0.5">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={400}>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Richiedi Informazioni</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Per informazioni sul servizio ADI nel Comune di Portici, contattaci.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Phone className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Telefono</h3>
                    </div>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-xl font-bold hover:text-blue-200 transition-colors block"
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
                      className="text-lg hover:text-blue-200 transition-colors break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`https://wa.me/390817877064?text=Ciao! Vorrei informazioni sull'ADI nel Comune di Portici`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contattaci su WhatsApp
                  </a>
                  <Link
                    to="/prenotazioni"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
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

export default ADIPorticiPage;
