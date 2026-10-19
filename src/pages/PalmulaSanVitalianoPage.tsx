import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Landmark, Users, BookOpen, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Palette, Mic, FileText, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const PalmulaSanVitalianoPage = () => {
  const serviceFeatures = [
    { icon: Mic, text: 'Raccolta di storie, memorie e testimonianze della comunità' },
    { icon: Palette, text: 'Laboratori creativi e artistici aperti a tutte le età' },
    { icon: Users, text: 'Partecipazione attiva di cittadini, scuole e associazioni' },
    { icon: BookOpen, text: 'Valorizzazione del patrimonio culturale e identitario locale' }
  ];

  const goals = [
    'Rafforzare il senso di appartenenza e l\'identità della comunità di San Vitaliano',
    'Rendere la cultura accessibile e partecipata, anche nei piccoli centri',
    'Creare occasioni di incontro tra generazioni attraverso il racconto',
    'Coinvolgere giovani e famiglie in esperienze culturali di qualità',
    'Lasciare al territorio strumenti e contenuti riutilizzabili nel tempo'
  ];

  const projectInfo = [
    { label: 'Progetto', value: 'PALMULA. San Vitaliano si racconta' },
    { label: 'Ente capofila', value: 'Comune di San Vitaliano (NA)' },
    { label: 'Ruolo della Cooperativa', value: 'Partner di progetto' },
    { label: 'Avviso', value: 'Avviso ministeriale "Cultura nei piccoli comuni" – approvato con Determinazione n. gen. 303 / n. sett. 104 del 16/07/2026' }
  ];

  return (
    <>
      <Helmet>
        <title>PALMULA – San Vitaliano si racconta | Cultura nei piccoli comuni | Cooperativa Emmanuel</title>
        <meta name="description" content="PALMULA. San Vitaliano si racconta: progetto culturale del Comune di San Vitaliano nell'ambito dell'Avviso ministeriale Cultura nei piccoli comuni, con la Cooperativa Emmanuel come partner. Memoria, racconto e partecipazione della comunità." />
        <meta name="keywords" content="palmula, san vitaliano si racconta, cultura nei piccoli comuni, progetto culturale san vitaliano, comune di san vitaliano, memoria comunità, cooperativa emmanuel" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/palmula-san-vitaliano" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="PALMULA – San Vitaliano si racconta | Cooperativa Emmanuel" />
        <meta property="og:description" content="Progetto culturale partecipato nell'ambito dell'Avviso Cultura nei piccoli comuni, in partnership con il Comune di San Vitaliano." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/palmula-san-vitaliano" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Project",
          "name": "PALMULA. San Vitaliano si racconta",
          "description": "Progetto culturale partecipato del Comune di San Vitaliano nell'ambito dell'Avviso ministeriale Cultura nei piccoli comuni, realizzato in partenariato con la Cooperativa Sociale Emmanuel.",
          "funder": {
            "@type": "GovernmentOrganization",
            "name": "Comune di San Vitaliano"
          },
          "member": {
            "@type": "Organization",
            "name": "Cooperativa Sociale Emmanuel",
            "url": "https://cooperativaemmanuel.it"
          },
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Vitaliano",
              "addressRegion": "Campania",
              "addressCountry": "IT"
            }
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
            { "@type": "ListItem", "position": 3, "name": "PALMULA San Vitaliano", "item": "https://cooperativaemmanuel.it/palmula-san-vitaliano" }
          ]
        })}
        </script>
      </Helmet>

      <PageHeader
        title="PALMULA. San Vitaliano si racconta"
        description='Progetto culturale partecipato – Avviso ministeriale "Cultura nei piccoli comuni"'
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Landmark className="h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Una comunità che racconta se stessa</h2>
                    <p className="text-gray-700 leading-relaxed">
                      La Cooperativa Emmanuel è <strong>partner del Comune di San Vitaliano</strong> nel progetto
                      <strong> "PALMULA. San Vitaliano si racconta"</strong>, candidato all'Avviso ministeriale "Cultura nei piccoli
                      comuni": un percorso per raccogliere, valorizzare e condividere la memoria, le storie e l'identità culturale
                      del paese, con la partecipazione attiva dei cittadini.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Il progetto</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed mb-4">
                  L'Avviso <strong>"Cultura nei piccoli comuni"</strong> sostiene iniziative culturali nei centri di piccole
                  dimensioni, dove la cultura è spesso il primo motore di coesione sociale. PALMULA nasce con questo spirito:
                  mettere al centro le persone e i luoghi di San Vitaliano, trasformando la memoria collettiva in un patrimonio
                  vivo e condiviso.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Attraverso <strong>racconti, laboratori, incontri intergenerazionali e produzioni culturali</strong>, il
                  progetto coinvolge famiglie, giovani, anziani, scuole e associazioni del territorio, intrecciando tradizione e
                  linguaggi contemporanei.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Il ruolo della Cooperativa Emmanuel è quello di <strong>partner operativo e sociale</strong>: cura la
                  dimensione educativa e partecipativa delle attività, favorendo l'inclusione e la partecipazione delle fasce
                  più fragili della comunità.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Le attività</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                    <feature.icon className="h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Gli obiettivi</h3>
                </div>
                <ul className="space-y-3">
                  {goals.map((goal, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Riferimenti del progetto</h2>
              <div className="bg-white border-2 border-teal-100 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Partenariato con il Comune di San Vitaliano</h3>
                </div>
                <dl className="grid sm:grid-cols-2 gap-4">
                  {projectInfo.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <dt className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{item.label}</dt>
                      <dd className="text-gray-800 font-medium mt-1">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={400}>
              <div className="bg-gradient-to-br from-teal-600 to-green-600 text-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Partecipa o richiedi informazioni</h2>
                <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                  Hai una storia da raccontare o vuoi collaborare al progetto PALMULA? Contattaci.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Phone className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Telefono</h3>
                    </div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold hover:text-teal-200 transition-colors block">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Mail className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Email</h3>
                    </div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-teal-200 transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul progetto PALMULA San Vitaliano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contattaci su WhatsApp
                  </a>
                  <Link
                    to="/contatti"
                    className="inline-flex items-center px-8 py-4 bg-white text-teal-700 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
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

export default PalmulaSanVitalianoPage;
