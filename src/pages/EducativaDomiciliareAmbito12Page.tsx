import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Target, Heart, Users, CheckCircle, Phone, ArrowRight, BookOpen, Network } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const EducativaDomiciliareAmbito12Page = () => {
  const objectives = [
    { icon: Heart, title: 'Competenze Genitoriali', text: 'Supporto al ruolo genitoriale e empowerment familiare' },
    { icon: BookOpen, title: 'Percorso Scolastico', text: 'Accompagnamento e supporto al successo formativo' },
    { icon: Target, title: 'Autonomia Personale', text: 'Sviluppo di competenze autonome e autodeterminazione' },
    { icon: Users, title: 'Inclusione Sociale', text: 'Accesso a opportunità e contesti sociali' }
  ];

  const tools = [
    'Piano Educativo Individualizzato (PEI) digitale e condiviso',
    'Monitoraggio sistematico di indicatori di progresso',
    'Incontri di rete periodici con scuola e servizi territoriali',
    'Attivazione di opportunità educative e ricreative sul territorio'
  ];

  const approaches = [
    { title: 'Ecosistemico', description: 'Minore, famiglia, scuola, territorio come sistemi interconnessi' },
    { title: 'Partecipativo', description: 'Co-progettazione con la famiglia e la rete territoriale' },
    { title: 'Empowering', description: 'Valorizzazione delle risorse familiari e comunitarie' },
    { title: 'Data-driven', description: 'Monitoraggio sistematico e adattamento continuo' }
  ];

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Servizio Educativo Domiciliare – Ambito N12 Pozzuoli',
    'description': 'Percorsi di educativa domiciliare ecosistemica per minori e famiglie in condizioni di fragilità.',
    'provider': {
      '@type': 'Organization',
      'name': 'Cooperativa Sociale Emmanuel',
      'url': 'https://cooperativaemmanuel.it'
    },
    'areaServed': 'Pozzuoli, Campania',
    'audience': {
      '@type': 'PeopleAudience',
      'name': 'Minori e famiglie in situazioni di fragilità'
    }
  };

  return (
    <>
      <Helmet>
        <title>Educativa Domiciliare Ambito N12 Pozzuoli | Modello Ecosistemico</title>
        <meta name="description" content="Educativa domiciliare ecosistemica per minori e famiglie - Ambito N12 Pozzuoli. PEI, empowerment familiare, supporto scolastico. Cooperativa Emmanuel." />
        <meta name="keywords" content="educativa domiciliare pozzuoli, educativa minori, intervento educativo famiglia, ambito n12, minori in difficoltà" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/educativa-domiciliare-ambito-n12" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Educativa Domiciliare Ambito N12 | Modello Ecosistemico" />
        <meta property="og:description" content="Educativa domiciliare per minori e famiglie con approccio ecosistemico. Pozzuoli, Campania." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/educativa-domiciliare-ambito-n12" />

        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
      </Helmet>

      <PageHeader
        title="Educativa Domiciliare – Ambito N12"
        subtitle="Un modello ecosistemico per minori e famiglie"
      />

      <main className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <FadeInSection>
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Educativa Domiciliare Ecosistemica</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Il servizio di educativa domiciliare dell'Ambito N12 Pozzuoli rappresenta un intervento innovativo basato sul modello ecosistemico, che mette al centro il minore e la sua famiglia come parte di una rete di sistemi interconnessi: scuola, servizi sanitari, territorio.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Destinato a minori e famiglie in situazioni di fragilità, il servizio prevede percorsi personalizzati che combinano supporto educativo, accompagnamento alla scolarità e attivazione delle risorse territoriali.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Il Nostro Approccio</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Il modello di Educazione Domiciliare Ecosistemica riconosce che il benessere del minore dipende dall'interazione positiva tra più sistemi: la famiglia, la scuola, la comunità, i servizi. L'intervento educativo non si limita al domicilio, ma attiva una rete di relazioni e risorse territoriali.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {approaches.map((approach, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{approach.title}</h3>
                  <p className="text-gray-700">{approach.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Obiettivi del Servizio</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {objectives.map((obj, index) => {
                const IconComponent = obj.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{obj.title}</h3>
                    <p className="text-gray-700">{obj.text}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Strumenti Operativi</h2>
            <ul className="space-y-4">
              {tools.map((tool, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Chi Può Accedere</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                Il servizio è rivolto a minori e famiglie che si trovano in situazioni di fragilità socio-educativa, quali:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Difficoltà di scolarizzazione o abbandono scolastico',
                  'Situazioni di disagio familiare o economico',
                  'Minori con esigenze educative speciali',
                  'Famiglie monoparentali in difficoltà',
                  'Minori con comportamenti problematici',
                  'Situazioni di isolamento sociale'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Il Processo di Intervento</h2>
            <div className="space-y-6">
              {[
                { num: '1', title: 'Presa in carico', desc: 'Valutazione dei bisogni della famiglia e del minore' },
                { num: '2', title: 'Co-progettazione', desc: 'Elaborazione partecipata del Piano Educativo Individualizzato' },
                { num: '3', title: 'Intervento educativo', desc: 'Affiancamento e supporto nel domicilio e sul territorio' },
                { num: '4', title: 'Monitoraggio', desc: 'Osservazione sistematica del progresso verso gli obiettivi' },
                { num: '5', title: 'Rete territoriale', desc: 'Incontri periodici con scuola, servizi e comunità' },
                { num: '6', title: 'Valutazione', desc: 'Verifica degli obiettivi raggiunti e prosecuzione o chiusura' }
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Scopri se il Servizio Fa per Te</h2>
            <p className="text-xl mb-8 text-blue-100">Contattaci per una valutazione gratuita e senza impegno</p>
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
              <Link to="/micronido-albisola-superiore" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Micronido – Albisola Superiore</h3>
                <p className="text-gray-700 mb-4">Educativa individualizzata nel nido</p>
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

export default EducativaDomiciliareAmbito12Page;
