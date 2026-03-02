import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Heart, CheckCircle, Phone, ArrowRight, Award, Target } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const MicronidoAlbiolaPage = () => {
  const guarantees = [
    { icon: Users, title: 'Educatore Dedicato', text: 'Professionista stabile e competente' },
    { icon: CheckCircle, title: 'Continuità Garantita', text: 'Senza interruzioni durante l\'anno educativo' },
    { icon: Award, title: 'Qualifica Pari', text: 'Sostituto con pari competenze in caso di assenza' },
    { icon: Heart, title: 'Monitoraggio Mensile', text: 'Report dettagliati delle attività svolte' }
  ];

  const networkActivities = [
    'Coordinamento con lo staff del nido',
    'Partecipazione alle riunioni di programmazione',
    'Comunicazione giornaliera famiglia-educatore',
    'Condivisione obiettivi pedagogici'
  ];

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    'name': 'Micronido – Albisola Superiore - Cooperativa Emmanuel',
    'description': 'Servizio di assistenza educativa individualizzata presso l\'asilo nido comunale per il sostegno allo sviluppo, all\'autonomia e al benessere della minore.',
    'provider': {
      '@type': 'Organization',
      'name': 'Cooperativa Sociale Emmanuel',
      'url': 'https://cooperativaemmanuel.it'
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Albisola Superiore',
      'addressRegion': 'Liguria',
      'addressCountry': 'IT'
    },
    'areaServed': 'Albisola Superiore',
    'audience': {
      '@type': 'PeopleAudience',
      'suggestedMinAge': 0,
      'suggestedMaxAge': 3
    }
  };

  return (
    <>
      <Helmet>
        <title>Micronido Albisola Superiore | Educativa Individualizzata</title>
        <meta name="description" content="Micronido Albisola Superiore: educativa individualizzata presso asilo nido comunale. Educatore dedicato, continuità garantita, rendicontazione mensile." />
        <meta name="keywords" content="micronido albisola, assistenza educativa nido, educativa individuale, asilo nido liguria" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/micronido-albisola-superiore" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Micronido Albisola Superiore | Educativa Individualizzata" />
        <meta property="og:description" content="Educativa individualizzata presso asilo nido comunale di Albisola Superiore." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/micronido-albisola-superiore" />

        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
      </Helmet>

      <PageHeader
        title="Micronido – Albisola Superiore"
        subtitle="Intervento educativo individualizzato nel contesto del nido"
      />

      <main className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <FadeInSection>
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Educativa Individualizzata al Nido</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Il servizio di assistenza educativa presso l'asilo nido comunale di Albisola Superiore rappresenta un intervento mirato allo sviluppo dell'autonomia, delle competenze relazionali e della partecipazione inclusiva del bambino alle attività didattiche ordinarie.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Un Servizio su Misura</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Il progetto prevede un intervento educativo personalizzato per <strong>6 ore settimanali</strong>, finalizzato allo sviluppo dell'autonomia, delle competenze relazionali e della partecipazione alle attività del nido in un contesto inclusivo e continuativo. L'educatore dedicato opera all'interno della struttura in coordinamento con lo staff pedagogico del nido.
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-4">Modalità di Intervento</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Affiancamento educativo individualizzato</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Facilitazione della partecipazione alle attività di gruppo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Supporto allo sviluppo di competenze autonome</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Coordinamento costante con la famiglia e lo staff del nido</span>
                </li>
              </ul>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Cosa Garantiamo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {guarantees.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Lavoro in Rete con il Nido</h2>
            <ul className="space-y-4">
              {networkActivities.map((activity, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{activity}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Rendicontazione Mensile</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                Ogni mese viene redatto un report dettagliato che documenta:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Aspetti Osservati</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Progressi nello sviluppo autonomia</li>
                    <li>✓ Qualità delle relazioni con pari e adulti</li>
                    <li>✓ Partecipazione alle attività</li>
                    <li>✓ Benessere e adattamento al contesto</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Condivisione con</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Famiglia</li>
                    <li>✓ Staff pedagogico del nido</li>
                    <li>✓ Coordinatore del servizio</li>
                    <li>✓ Équipe di supervisione</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Scopri il Nostro Intervento Educativo</h2>
            <p className="text-xl mb-8 text-blue-100">Contattaci per una consulenza gratuita su questo servizio</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
              <Link to="/contatti" className="bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors flex items-center justify-center gap-2">
                Contattaci <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Servizi Educativi Correlati</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/educativa-domiciliare-ambito-n12" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Educativa Domiciliare – Ambito N12</h3>
                <p className="text-gray-700 mb-4">Modello ecosistemico per minori e famiglie</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
              <Link to="/nido-san-gemini" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Nido d'Infanzia – San Gemini</h3>
                <p className="text-gray-700 mb-4">Ecosistema educativo 0-3 innovativo</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>
    </>
  );
};

export default MicronidoAlbiolaPage;
