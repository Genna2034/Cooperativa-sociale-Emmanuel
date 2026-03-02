import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TreePine, Users, Heart, CheckCircle, Phone, ArrowRight, BookOpen, Music, Palette, Target } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const NidoSanGeminiPage = () => {
  const pillars = [
    { icon: BookOpen, title: 'Ascolto e Osservazione', text: 'Pedagogia dell\'ascolto con documentazione sistematica' },
    { icon: Users, title: 'Co-progettazione', text: 'Coinvolgimento attivo delle famiglie nella progettazione' },
    { icon: Palette, title: 'Documentazione', text: 'Portfolio pedagogico come strumento educativo' },
    { icon: TreePine, title: 'Atelier e Giardino', text: 'Ambienti progettati come terzo educatore' }
  ];

  const qualityTools = [
    'Supervisione pedagogica periodica da esperti Reggio Children',
    'Riunioni di équipe strutturate e supervisione settimanale',
    'Bilancio di qualità educativa annuale',
    'Piattaforma digitale Family Hub per condivisione con famiglie'
  ];

  const activities = [
    { icon: Music, title: 'Laboratorio Musicale', desc: 'Ritmo, canto, scoperta degli strumenti' },
    { icon: Palette, title: 'Atelier Creativo', desc: 'Pittura, manipolazione, espressione artistica' },
    { icon: Target, title: 'Motricità Consapevole', desc: 'Movimento, gioco corporeo, equilibrio' },
    { icon: TreePine, title: 'Outdoor Education', desc: 'Giardino pedagogico, naturalistico, sensoriale' }
  ];

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    'name': 'Nido d\'Infanzia – San Gemini - Cooperativa Emmanuel',
    'description': 'Un hub civico per l\'infanzia basato su approccio Reggio Children e Outdoor Education.',
    'provider': {
      '@type': 'Organization',
      'name': 'Cooperativa Sociale Emmanuel',
      'url': 'https://cooperativaemmanuel.it'
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'San Gemini',
      'addressRegion': 'Umbria',
      'addressCountry': 'IT'
    },
    'areaServed': 'San Gemini',
    'audience': {
      '@type': 'PeopleAudience',
      'suggestedMinAge': 0,
      'suggestedMaxAge': 3
    }
  };

  return (
    <>
      <Helmet>
        <title>Nido d'Infanzia San Gemini | Innovativo Reggio Children</title>
        <meta name="description" content="Nido d'Infanzia San Gemini: approccio Reggio Children e Outdoor Education. Hub civico per infanzia 0-3 anni. Reggio Children, atelier, giardino pedagogico." />
        <meta name="keywords" content="nido san gemini, asilo nido reggio children, educazione infanzia 0-3, outdoor education, cooperativa emmanuel, nido innovative umbria" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/nido-san-gemini" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nido d'Infanzia San Gemini | Innovativo Reggio Children" />
        <meta property="og:description" content="Nido 0-3 anni con approccio Reggio Children e Outdoor Education. San Gemini, Umbria." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/nido-san-gemini" />

        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
      </Helmet>

      <PageHeader
        title="Nido d'Infanzia – San Gemini"
        subtitle="Un ecosistema educativo 0-3 innovativo e sostenibile"
      />

      <main className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <FadeInSection>
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Un Nido Pensato Diversamente</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Il Nido d'Infanzia di San Gemini rappresenta un hub civico innovativo che integra l'approccio Reggio Children e l'Outdoor Education, promuovendo il bambino come protagonista attivo del proprio apprendimento in un ambiente dove la pedagogia incontra la sostenibilità.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Non semplice custode di bambini, ma comunità educante che accoglie, ascolta, osserva e documenta il processo di crescita in un contesto ricco di stimoli naturali e opportunità relazionali.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Il Modello Educativo</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Il servizio integra il pensiero di Reggio Emilia (bambino competente, ambiente come terzo educatore, documentazione pedagogica) con la pratica dell'Outdoor Education (apprendimento in natura, sostenibilità, benessere). L'approccio riconosce che il bambino apprende attraverso i sensi, l'esplorazione, il gioco libero e la relazione.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow">
                    <IconComponent className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-gray-700 text-sm">{pillar.text}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">I Nostri Pilastri Pedagogici</h2>
            <div className="space-y-8">
              {[
                {
                  num: '1',
                  title: 'Pedagogia dell\'Ascolto',
                  desc: 'L\'adulto osserva sistematicamente il bambino per comprendere gli interessi, le curiosità e il processo di apprendimento. L\'osservazione diventa base della progettazione.'
                },
                {
                  num: '2',
                  title: 'Co-progettazione con le Famiglie',
                  desc: 'Le famiglie non sono semplici fruitori, ma co-progettatori attivi del percorso educativo. Riunioni collaborative e Bilancio di qualità partecipato.'
                },
                {
                  num: '3',
                  title: 'Documentazione Pedagogica',
                  desc: 'Foto, video e diari narrano il processo di apprendimento. Ogni bambino ha un portfolio che racconta il suo percorso e diventa strumento di riflessione.'
                },
                {
                  num: '4',
                  title: 'Atelier e Giardino Pedagogico',
                  desc: 'Lo spazio è progettato come terzo educatore. Ambienti multisensoriali, atelier creativo, orto biologico e giardino naturalistico favoriscono scoperta e benessere.'
                }
              ].map((pillar, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex gap-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold flex-shrink-0">
                      {pillar.num}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                      <p className="text-gray-700">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Laboratori e Attività</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <IconComponent className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-700">{activity.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16 bg-teal-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Strumenti per la Qualità Educativa</h2>
            <ul className="space-y-4">
              {qualityTools.map((tool, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{tool}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Un Hub per la Comunità</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Family Hub</h3>
                <p className="text-gray-700 mb-4">
                  Uno spazio per le famiglie con incontri formativi, gruppi di discussione, consulenze pedagogiche e opportunità di connessione con altri genitori.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Incontri formativi tematici</li>
                  <li>✓ Sportello genitoriale</li>
                  <li>✓ Comunità genitoriale</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sostenibilità e Comunità</h3>
                <p className="text-gray-700 mb-4">
                  Il nido opera come hub civico: condivide spazi con la comunità, attiva progetti di volontariato, promuove sostenibilità ambientale.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Orto biologico condiviso</li>
                  <li>✓ Progetti ambientali</li>
                  <li>✓ Connessioni territoriali</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Chi Siamo Diventati</h2>
            <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-8">
              <p className="text-lg text-gray-800 leading-relaxed">
                Non un semplice nido, ma una comunità educante dove il bambino è ascoltato e valorizzato, dove la famiglia è co-progettista, dove lo spazio parla pedagogia e dove la sostenibilità è pratica quotidiana. Un luogo dove cresce non solo il bambino, ma la consapevolezza di una comunità che sa prendersi cura.
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white rounded-lg p-12 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Scopri il Nido d'Infanzia San Gemini</h2>
            <p className="text-xl mb-8 text-green-100">Visita il nido o contattaci per una consulenza gratuita</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white text-green-600 font-bold px-8 py-4 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
              <Link to="/contatti" className="bg-green-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2">
                Contattaci <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Servizi Educativi Correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/micronido-albisola-superiore" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Micronido – Albisola Superiore</h3>
                <p className="text-gray-700 mb-4">Educativa individualizzata nel nido</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
              <Link to="/educativa-domiciliare-ambito-n12" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Educativa Domiciliare – Ambito N12</h3>
                <p className="text-gray-700 mb-4">Modello ecosistemico per minori e famiglie</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>
    </>
  );
};

export default NidoSanGeminiPage;
