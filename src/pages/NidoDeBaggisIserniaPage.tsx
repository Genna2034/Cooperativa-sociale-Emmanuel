import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Baby, Users, Heart, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, BookOpen, Sun, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const NidoDeBaggisIserniaPage = () => {
  const serviceFeatures = [
    { icon: Users, text: 'Educatori qualificati e rapporto numerico adeguato' },
    { icon: BookOpen, text: 'Progetto pedagogico e piani educativi personalizzati' },
    { icon: Sun, text: 'Attività ludiche, laboratori e gioco all\'aperto' },
    { icon: Heart, text: 'Alleanza educativa con le famiglie' }
  ];

  const benefits = [
    'Accoglienza e cura quotidiana dei bambini da 0 a 3 anni',
    'Ambienti sicuri, organizzati per fasce d\'età e bisogni',
    'Routine di cura: pasti, riposo, igiene e autonomia',
    'Osservazione e documentazione del percorso di crescita',
    'Colloqui, incontri e momenti di partecipazione per le famiglie',
    'Continuità educativa con la scuola dell\'infanzia'
  ];

  const tenderInfo = [
    { label: 'Ente', value: 'Comune di Isernia' },
    { label: 'Anno educativo', value: '2026/27' },
    { label: 'CPV', value: '80110000-8 – Servizi di istruzione prescolastica' },
    { label: 'CIG', value: 'BC978ED1CF' }
  ];

  return (
    <>
      <Helmet>
        <title>Asilo Nido Comunale "De Baggis" – Isernia | Cooperativa Emmanuel</title>
        <meta name="description" content="Servizio educativo per l'infanzia presso l'Asilo Nido Comunale De Baggis di Isernia, anno educativo 2026/27. Educatori qualificati, progetto pedagogico e cura quotidiana dei bambini 0-3 anni." />
        <meta name="keywords" content="asilo nido isernia, nido de baggis, asilo nido comunale isernia, servizio educativo infanzia isernia, nido 0-3 isernia, cooperativa emmanuel" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/nido-de-baggis-isernia" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content='Asilo Nido Comunale "De Baggis" – Isernia | Cooperativa Emmanuel' />
        <meta property="og:description" content="Servizio educativo per l'infanzia 0-3 anni presso l'Asilo Nido Comunale De Baggis di Isernia, anno educativo 2026/27." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/nido-de-baggis-isernia" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ChildCare",
          "name": "Asilo Nido Comunale De Baggis – Isernia - Cooperativa Emmanuel",
          "description": "Servizio educativo per l'infanzia presso l'Asilo Nido Comunale De Baggis del Comune di Isernia, anno educativo 2026/27.",
          "provider": {
            "@type": "Organization",
            "name": "Cooperativa Sociale Emmanuel",
            "url": "https://cooperativaemmanuel.it"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Isernia",
            "addressRegion": "Molise",
            "addressCountry": "IT"
          },
          "areaServed": "Isernia",
          "audience": {
            "@type": "PeopleAudience",
            "suggestedMinAge": 0,
            "suggestedMaxAge": 3
          }
        })}
        </script>

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cooperativaemmanuel.it/" },
            { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://cooperativaemmanuel.it/servizi" },
            { "@type": "ListItem", "position": 3, "name": "Nido De Baggis Isernia", "item": "https://cooperativaemmanuel.it/nido-de-baggis-isernia" }
          ]
        })}
        </script>
      </Helmet>

      <PageHeader
        manageMeta={false}
        title='Asilo Nido Comunale "De Baggis" – Isernia'
        description="Servizio educativo per l'infanzia 0-3 anni – Anno educativo 2026/27"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Baby className="h-8 w-8 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Un nido per crescere insieme, a Isernia</h2>
                    <p className="text-gray-700 leading-relaxed">
                      La Cooperativa Emmanuel gestisce il servizio educativo per l'infanzia presso l'<strong>Asilo Nido Comunale
                      "De Baggis"</strong> del Comune di Isernia per l'anno educativo 2026/27: un luogo di cura, gioco e scoperta
                      pensato per il benessere dei bambini e per accompagnare le famiglie nei primi anni di vita.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cos'è il servizio</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed mb-4">
                  L'asilo nido è un <strong>servizio educativo e sociale</strong> rivolto ai bambini da 0 a 3 anni che promuove
                  lo sviluppo armonico delle competenze affettive, relazionali, cognitive e motorie, in un ambiente accogliente e
                  organizzato secondo i bisogni di ogni fascia d'età.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Presso il nido <strong>"De Baggis" di Isernia</strong> la Cooperativa Emmanuel mette a disposizione un'équipe di
                  educatori qualificati e personale ausiliario, un progetto pedagogico condiviso con il Comune e le famiglie e
                  una programmazione educativa fatta di routine rassicuranti, laboratori e attività all'aperto.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Il servizio sostiene inoltre la <strong>conciliazione dei tempi di vita e di lavoro</strong> dei genitori,
                  offrendo un contesto educativo sicuro e continuativo per tutto l'anno educativo.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cosa offriamo</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                    <feature.icon className="h-8 w-8 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">La giornata al nido</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Riferimenti dell'affidamento</h2>
              <div className="bg-white border-2 border-purple-100 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Servizio educativo per l'infanzia – Asilo Nido Comunale "De Baggis"</h3>
                </div>
                <dl className="grid sm:grid-cols-2 gap-4">
                  {tenderInfo.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <dt className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{item.label}</dt>
                      <dd className="text-gray-800 font-medium mt-1">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={400}>
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Richiedi Informazioni</h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Per informazioni sul servizio educativo presso l'Asilo Nido "De Baggis" di Isernia, contattaci.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Phone className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Telefono</h3>
                    </div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold hover:text-purple-200 transition-colors block">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Mail className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Email</h3>
                    </div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-purple-200 transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/390817877064?text=Ciao! Vorrei informazioni sull'Asilo Nido De Baggis di Isernia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contattaci su WhatsApp
                  </a>
                  <Link
                    to="/contatti"
                    className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                  >
                    Vai ai Contatti <ArrowRight className="ml-2 h-5 w-5" />
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

export default NidoDeBaggisIserniaPage;
