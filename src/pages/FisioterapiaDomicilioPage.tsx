import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, Heart, Activity, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const FisioterapiaDomicilioPage = () => {
  const services = [
    {
      title: 'Valutazione Iniziale',
      description: 'Anamnesi clinica completa, test forza muscolare, valutazione equilibrio e deambulazione, identificazione deficit',
      icon: Activity
    },
    {
      title: 'Esercizi Terapeutici',
      description: 'Mobilizzazione, esercizi attivi, rinforzo muscolare, rieducazione deambulazione, propriocettività',
      icon: TrendingUp
    },
    {
      title: 'Tecniche Specializzate',
      description: 'Massoterapia terapeutica, terapia manuale, stretching, tecniche posturali, elettroterapia',
      icon: Heart
    }
  ];

  const faqs = [
    {
      question: 'Quando si vedono i risultati dalla fisioterapia?',
      answer: 'Percezione soggettiva dopo 2-3 settimane. Miglioramenti oggettivi e misurabili dopo 4-6 settimane di trattamento regolare.'
    },
    {
      question: 'Cos\'è la fisioterapia domiciliare?',
      answer: 'È un trattamento riabilitativo presso il domicilio del paziente con scopo di migliorare mobilità, forza, equilibrio e indipendenza nelle attività quotidiane.'
    },
    {
      question: 'Quanto dura una seduta di fisioterapia?',
      answer: 'Generalmente 45-60 minuti, a seconda del programma personalizzato e della patologia del paziente.'
    },
    {
      question: 'Devo avere prescrizione medica?',
      answer: 'Non obbligatoria, ma consigliata per continuità clinica. Contattaci per coordinamento con il tuo medico.'
    },
    {
      question: 'Posso fare fisioterapia se sono allettato?',
      answer: 'Sì, abbiamo protocolli specifici per pazienti con mobilità molto ridotta o completamente allettati.'
    },
    {
      question: 'Sarà sempre lo stesso fisioterapista?',
      answer: 'Sì, garantiamo continuità professionale per favorire il rapporto terapeutico e il monitoraggio dei progressi.'
    }
  ];

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Fisioterapia Domiciliare Napoli',
    'provider': {
      '@type': 'Organization',
      'name': 'Cooperativa Sociale Emmanuel',
      'telephone': '+39-081-7877064',
      'url': 'https://cooperativaemmanuel.it'
    },
    'areaServed': 'Napoli, Campania, Italia',
    'availableLanguage': 'it'
  };

  return (
    <>
      <Helmet>
        <title>Fisioterapia a Domicilio Napoli | Riabilitazione Professionale Personalizzata</title>
        <meta name="description" content="Fisioterapia a domicilio a Napoli con fisioterapisti qualificati. Post-operatorio, anziani, disabili. Riabilitazione personalizzata. Cooperativa Emmanuel." />
        <meta name="keywords" content="fisioterapia domicilio Napoli, fisioterapia domiciliare Napoli, riabilitazione domiciliare Napoli, fisioterapista Napoli" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/fisioterapia-domicilio-napoli" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fisioterapia a Domicilio Napoli | Riabilitazione Professionale" />
        <meta property="og:description" content="Fisioterapisti qualificati a domicilio a Napoli. Riabilitazione personalizzata, post-operatorio, anziani. Contatta Emmanuel." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/fisioterapia-domicilio-napoli" />

        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
      </Helmet>

      <PageHeader
        title="Fisioterapia a Domicilio a Napoli"
        subtitle="Riabilitazione professionale personalizzata"
      />

      <main className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <FadeInSection>
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Fisioterapia Domiciliare a Napoli</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              La fisioterapia domiciliare rappresenta il modo migliore per recuperare mobilità e autonomia personale senza lo stress di raggiungere strutture sanitarie. La Cooperativa Sociale Emmanuel mette a disposizione fisioterapisti certificati che si recano direttamente a casa tua.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Che si tratti di recupero post-operatorio, miglioramento della mobilità in anziani, supporto per disabilità motoria o trattamento di patologie croniche: i nostri professionisti sanno come restituire qualità della vita e autonomia funzionale.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Servizi Fisioterapici Domiciliari</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <IconComponent className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">I Nostri Fisioterapisti</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Laureati Specializzati</h3>
                  <p className="text-gray-700">Fisioterapisti con formazione universitaria e specializzazione geriatrica</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Activity className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Approccio Personalizzato</h3>
                  <p className="text-gray-700">Ogni programma è costruito sulle necessità specifiche del singolo paziente</p>
                </div>
              </div>
              <div className="flex gap-4">
                <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Risultati Misurabili</h3>
                  <p className="text-gray-700">Monitoraggio costante dei progressi con valutazioni mensili e adattamenti</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Continuità Terapeutica</h3>
                  <p className="text-gray-700">Stesso professionista quando possibile per relazione continuativa e fiducia</p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Per Chi È Indicata la Fisioterapia?</h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                'Persone in recupero post-operatorio',
                'Anziani con problemi di mobilità',
                'Pazienti affetti da ictus',
                'Persone con disabilità fisica',
                'Pazienti con artrosi e patologie articolari',
                'Chi ha difficoltà a deambulare',
                'Persone che desiderano prevenire cadute',
                'Famiglie che cercano riabilitazione domiciliare'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Patologie Trattate</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Post-Operatorio</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Protesi d'anca e ginocchio</li>
                  <li>• Fratture e interventi ortopedici</li>
                  <li>• Interventi addominali</li>
                  <li>• Riabilitazione post-chirurgica</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Patologie Croniche</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Ictus e esiti neurologici</li>
                  <li>• Artrosi e artriti</li>
                  <li>• Disabilità motoria</li>
                  <li>• Rigidità e limitazioni articolari</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Domande Frequenti su Fisioterapia Domiciliare</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow group">
                  <summary className="font-bold text-gray-900 text-lg flex items-center justify-between">
                    {faq.question}
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 pl-4 border-l-4 border-blue-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Aree di Servizio a Napoli</h2>
            <p className="text-lg text-gray-700 mb-6">Garantiamo intervento rapido in tutta la provincia:</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Napoli Città</h3>
                <p className="text-gray-700 text-sm">Vomero, Chiaia, Posillipo, Fuorigrotta, Arenella, Colli Aminei, Centro Storico, Soccavo, Pianura, Bagnoli, Ponticelli, San Giovanni a Teduccio, Secondigliano, Scampia</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Provincia Campania</h3>
                <p className="text-gray-700 text-sm">Pozzuoli, Portici, Ercolano, Torre del Greco, Giugliano, Casoria, Afragola, Acerra, Frattamaggiore, Frattaminore</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recupera Mobilità e Autonomia</h2>
            <p className="text-xl mb-8 text-blue-100">Una valutazione fisioterapica gratuita a domicilio</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
              <Link to="/contatti" className="bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors">
                Richiedi Valutazione
              </Link>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Servizi Correlati</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/adi-napoli" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">ADI Napoli</h3>
                <p className="text-gray-700 mb-4">Assistenza Domiciliare Integrata Certificata</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
              <Link to="/infermiere-domicilio-napoli" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Infermiere a Domicilio</h3>
                <p className="text-gray-700 mb-4">Assistenza infermieristica 24/7</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
              <Link to="/servizi" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Tutti i Servizi</h3>
                <p className="text-gray-700 mb-4">Scopra l\'intera gamma di servizi</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>
    </>
  );
};

export default FisioterapiaDomicilioPage;
