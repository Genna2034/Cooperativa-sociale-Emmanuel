import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, Clock, Users, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const InfermiereDomicilioPage = () => {
  const services = [
    {
      title: 'Somministrazione Terapie',
      description: 'Iniezioni, infusioni endovenose, pompe infusionali, gestione farmaci e controllo assunzione',
      icon: Stethoscope
    },
    {
      title: 'Monitoraggio Clinico',
      description: 'Pressione arteriosa, frequenza cardiaca, saturazione ossigeno, glicemia, parametri vitali',
      icon: Clock
    },
    {
      title: 'Medicazioni Specializzate',
      description: 'Post-chirurgiche, piaghe, ferite, cambio medicazioni, prevenzione infezioni',
      icon: CheckCircle
    }
  ];

  const faqs = [
    {
      question: 'Cos\'è l\'assistenza infermieristica domiciliare?',
      answer: 'È un servizio sanitario professionale erogato da infermieri certificati a domicilio, non semplice badanza ma intervento medico coordinato con il medico curante.'
    },
    {
      question: 'Chi sono gli infermieri?',
      answer: 'Professionisti laureati e iscritti all\'ordine, specializzati in geriatria e assistenza domiciliare con formazione continua.'
    },
    {
      question: 'Quando è necessaria l\'infermieristica domiciliare?',
      answer: 'Dopo dimissioni ospedaliere, malattie croniche, terapie complesse, gestione ferite, prevenzione piaghe, pazienti allettati a lungo termine.'
    },
    {
      question: 'Quanto dura una visita?',
      answer: 'Mediamente 30-45 minuti a seconda dell\'intervento necessario. Alcuni pazienti richiedono visite più brevi, altri più lunghe.'
    },
    {
      question: 'Come prenoto un infermiere?',
      answer: 'Chiama 081 7877064 oppure scrivi email a cooperativa.emmanuel@outlook.it. Risposta garantita entro 2 ore.'
    },
    {
      question: 'È disponibile anche festivi e notte?',
      answer: 'Sì, disponibilità 24/7 inclusi festivi per esigenze urgenti di pazienti in condizioni critiche.'
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
    'name': 'Assistenza Infermieristica Domiciliare Napoli',
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
        <title>Infermiere a Domicilio Napoli | Assistenza 24/7 Professionale</title>
        <meta name="description" content="Infermieri professionali a domicilio a Napoli disponibili 24 ore. Medicazioni, terapie, monitoraggio. Cooperativa Emmanuel accreditata Regione Campania." />
        <meta name="keywords" content="infermiere domicilio Napoli, infermiere a casa Napoli, assistenza infermieristica domiciliare, cure infermieristiche Napoli" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/infermiere-domicilio-napoli" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Infermiere a Domicilio Napoli | Assistenza 24/7" />
        <meta property="og:description" content="Infermieri qualificati a domicilio a Napoli. Medicazioni, terapie, monitoraggio. Disponibilità 24 ore." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/infermiere-domicilio-napoli" />

        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
      </Helmet>

      <PageHeader
        title="Infermiere a Domicilio a Napoli"
        subtitle="Assistenza infermieristica professionale 24/7"
      />

      <main className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <FadeInSection>
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Assistenza Infermieristica Domiciliare a Napoli</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Un infermiere a domicilio rappresenta la soluzione ideale quando la salute richiede monitoraggio medico costante, ma il ricovero non è necessario. La Cooperativa Sociale Emmanuel mette a disposizione infermieri professionali qualificati, disponibili 24 ore su 24 a Napoli e provincia.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Dalla somministrazione di terapie farmacologiche al cambio di medicazioni, dal monitoraggio di parametri vitali alle gestioni di accessi vascolari: i nostri infermieri sanno come prendersi cura con dedizione e professionalità.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Servizi Infermieristici Principali</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">I Nostri Infermieri Sono Diversi</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Professionisti Certificati</h3>
                  <p className="text-gray-700">Laureati e iscritti all\'ordine nazionale degli infermieri</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Disponibilità 24/7</h3>
                  <p className="text-gray-700">Interventi urgenti garantiti tutti i giorni inclusi festivi</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Continuità Relazionale</h3>
                  <p className="text-gray-700">Stessi professionisti quando possibile per fiducia e relazione</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Stethoscope className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900">Coordinamento Medico</h3>
                  <p className="text-gray-700">Contatto costante con medico curante e strutture sanitarie</p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Per Chi È Necessaria l'Infermieristica Domiciliare?</h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                'Pazienti in dimissione ospedaliera',
                'Anziani con malattie croniche',
                'Persone con disabilità motoria',
                'Pazienti post-operatori',
                'Persone allettate a lungo termine',
                'Chi ha terapie endovenose a domicilio',
                'Pazienti terminali in cure palliative',
                'Famiglie che non possono gestire terapie complesse'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Domande Frequenti su Infermieri a Domicilio</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Aree di Intervento a Napoli</h2>
            <p className="text-lg text-gray-700 mb-6">Copriamo l'intera provincia di Napoli con tempi di risposta garantiti:</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Napoli Città</h3>
                <p className="text-gray-700 text-sm">Vomero, Chiaia, Posillipo, Fuorigrotta, Arenella, Colli Aminei, Centro Storico, Soccavo, Pianura, Bagnoli, Ponticelli, San Giovanni a Teduccio, Secondigliano, Scampia</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Provincia Campania</h3>
                <p className="text-gray-700 text-sm">Pozzuoli, Portici, Ercolano, Torre del Greco, Giugliano in Campania, Casoria, Afragola, Acerra e limitrofi</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Hai Bisogno di un Infermiere Domiciliare?</h2>
            <p className="text-xl mb-8 text-blue-100">Chiama subito o compila il form di contatto per ricevere una valutazione gratuita</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
              <Link to="/contatti" className="bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors">
                Richiedi Assistenza
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
              <Link to="/fisioterapia-domicilio-napoli" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fisioterapia Domiciliare</h3>
                <p className="text-gray-700 mb-4">Riabilitazione professionale personalizzata</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
              <Link to="/servizi" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Tutti i Servizi</h3>
                <p className="text-gray-700 mb-4">Scopri l\'intera gamma di servizi</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>
    </>
  );
};

export default InfermiereDomicilioPage;
