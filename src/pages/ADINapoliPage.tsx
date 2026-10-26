import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Phone, MapPin, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const ADINapoliPage = () => {
  const services = [
    {
      title: 'Assistenza Infermieristica',
      description: 'Visite mediche, somministrazione terapie, monitoraggio parametri vitali, medicazioni specializzate',
      icon: CheckCircle
    },
    {
      title: 'Fisioterapia Domiciliare',
      description: 'Esercizi terapeutici, recupero post-operatorio, prevenzione complicanze, rieducazione funzionale',
      icon: Heart
    },
    {
      title: 'Assistenza Socio-Sanitaria',
      description: 'Aiuto attività quotidiane, supporto mobilità, accompagnamento visite, sostegno psicologico',
      icon: Award
    }
  ];

  const faqs = [
    {
      question: 'Cos\'è l\'ADI e come accedervi?',
      answer: 'L\'ADI è l\'Assistenza Domiciliare Integrata, un servizio sanitario che garantisce cure mediche professionali a domicilio. Accedi attraverso il medico di famiglia che prescrive il servizio all\'ASL.'
    },
    {
      question: 'Quanto tempo prima iniziano i servizi?',
      answer: 'Con SSN: 5-10 giorni lavorativi dopo autorizzazione ASL. Percorso privato: entro 24-48 ore dal primo contatto.'
    },
    {
      question: 'Quali professionisti intervengono?',
      answer: 'Infermieri professionali, fisioterapisti, operatori socio-sanitari (OSS), medici, e quando necessario psicologi.'
    },
    {
      question: 'Posso scegliere i professionisti?',
      answer: 'Sì, valutiamo le preferenze personali e garantiamo continuità con gli stessi operatori per favorire la relazione terapeutica.'
    },
    {
      question: 'A chi è rivolta l\'ADI?',
      answer: 'Anziani con patologie croniche, persone con disabilità, pazienti post-operatori, malati cronici non autosufficienti, persone in cure palliative.'
    },
    {
      question: 'L\'ADI a Napoli è gratuita?',
      answer: 'Sì: l\'Assistenza Domiciliare Integrata erogata tramite l\'ASL è a carico del Servizio Sanitario Nazionale e gratuita per gli aventi diritto. La Cooperativa Emmanuel è ente accreditato dalla Regione Campania: dopo l\'autorizzazione dell\'ASL, le prestazioni di infermieri, fisioterapisti e OSS a domicilio non hanno alcun costo per la famiglia.'
    },
    {
      question: 'Come si richiede un infermiere a domicilio tramite l\'ASL di Napoli?',
      answer: 'Il medico di medicina generale (o il medico ospedaliero alla dimissione) compila la richiesta di ADI e la invia al Distretto sanitario dell\'ASL di residenza (ASL Napoli 1 Centro per la città, ASL Napoli 2 Nord e ASL Napoli 3 Sud per la provincia). Dopo la valutazione dell\'UVM viene definito il piano assistenziale e la famiglia può indicare la Cooperativa Emmanuel come ente erogatore.'
    },
    {
      question: 'Quale zone di Napoli servite?',
      answer: 'Copriamo Napoli centro e provincia: Vomero, Chiaia, Posillipo, Pozzuoli, Portici, Ercolano, Torre del Greco e altri comuni della Campania.'
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
    '@type': 'MedicalBusiness',
    '@id': 'https://cooperativaemmanuel.it/adi-napoli#service',
    'name': 'Assistenza Domiciliare Integrata (ADI) Napoli – Cooperativa Sociale Emmanuel',
    'url': 'https://cooperativaemmanuel.it/adi-napoli',
    'description': 'Assistenza Domiciliare Integrata a Napoli e provincia: infermieri, fisioterapisti e operatori socio-sanitari a domicilio. Ente accreditato dalla Regione Campania, servizio gratuito tramite ASL per gli aventi diritto.',
    'telephone': '+39-081-7877064',
    'email': 'cooperativa.emmanuel@outlook.it',
    'image': 'https://cooperativaemmanuel.it/images/Logo.png',
    'priceRange': 'Gratuito tramite ASL',
    'address': { '@type': 'PostalAddress', 'addressLocality': 'Napoli', 'addressRegion': 'Campania', 'addressCountry': 'IT' },
    'areaServed': ['Napoli', 'Pozzuoli', 'Portici', 'Ercolano', 'Torre del Greco', 'Giugliano in Campania', 'Casoria', 'Afragola', 'Acerra', 'Frattamaggiore'].map((name) => ({ '@type': 'City', 'name': name })),
    'parentOrganization': { '@type': 'Organization', 'name': 'Cooperativa Sociale Emmanuel', 'url': 'https://cooperativaemmanuel.it' },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Prestazioni ADI',
      'itemListElement': ['Assistenza infermieristica domiciliare', 'Fisioterapia domiciliare', 'Assistenza socio-sanitaria (OSS)', 'Visite mediche specialistiche a domicilio'].map((name) => ({
        '@type': 'Offer',
        'itemOffered': { '@type': 'MedicalProcedure', 'name': name }
      }))
    }
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://cooperativaemmanuel.it/' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Servizi', 'item': 'https://cooperativaemmanuel.it/servizi' },
      { '@type': 'ListItem', 'position': 3, 'name': 'ADI Napoli', 'item': 'https://cooperativaemmanuel.it/adi-napoli' }
    ]
  };

  return (
    <>
      <Helmet>
        <title>ADI Napoli – Assistenza Domiciliare Integrata | Cooperativa Emmanuel</title>
        <meta name="description" content="Assistenza Domiciliare Integrata (ADI) a Napoli accreditata Regione Campania: infermieri, fisioterapisti e OSS a domicilio, gratuita tramite ASL per gli aventi diritto. ☎ 081 7877064" />
        <meta name="keywords" content="ADI Napoli, assistenza domiciliare integrata Napoli, assistenza domiciliare Napoli, ADI ASL Napoli, infermiere domicilio ASL Napoli, cure domiciliari Napoli, assistenza domiciliare anziani Napoli" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/adi-napoli" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="ADI Napoli – Assistenza Domiciliare Integrata | Cooperativa Emmanuel" />
        <meta property="og:description" content="Assistenza Domiciliare Integrata a Napoli accreditata Regione Campania. Infermieri, fisioterapisti e OSS a casa tua, gratuita tramite ASL per gli aventi diritto." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/adi-napoli" />

        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <PageHeader
        manageMeta={false}
        title="Assistenza Domiciliare Integrata (ADI) a Napoli"
        subtitle="Servizi sanitari certificati dalla Regione Campania"
      />

      <main className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">ADI Napoli: Assistenza Domiciliare Certificata</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              L'Assistenza Domiciliare Integrata (ADI) è il servizio sanitario completo per anziani, persone con disabilità e pazienti in convalescenza che desiderano ricevere cure professionali a domicilio. La Cooperativa Sociale Emmanuel è accreditata dalla Regione Campania dal 2015.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I nostri team multidisciplinari garantiscono infermieri professionali, fisioterapisti e operatori socio-sanitari qualificati, disponibili 24 ore su 24. Con 185 persone assistite e 15 anni di esperienza, sappiamo come prendersi cura chi ha più bisogno.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16 bg-blue-50 rounded-lg p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ADI tramite ASL Napoli: gratuita per chi ne ha diritto</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              L'Assistenza Domiciliare Integrata è un servizio del Servizio Sanitario Nazionale: viene attivata dall'<strong>ASL</strong> su
              richiesta del medico di famiglia o del medico ospedaliero e, per gli aventi diritto, <strong>non ha alcun costo per la famiglia</strong>.
              La Cooperativa Emmanuel è <strong>ente accreditato dalla Regione Campania</strong> per l'erogazione dell'ADI e lavora con i Distretti
              sanitari dell'<strong>ASL Napoli 1 Centro</strong> (città di Napoli), dell'<strong>ASL Napoli 2 Nord</strong> e dell'<strong>ASL Napoli 3 Sud</strong> (provincia).
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Richiesta del medico</strong>: il medico di medicina generale (o il reparto alla dimissione) compila la richiesta di ADI.</li>
              <li><strong>Valutazione dell'ASL</strong>: l'Unità di Valutazione Multidimensionale (UVM) del Distretto valuta i bisogni e definisce il Piano Assistenziale Individuale.</li>
              <li><strong>Scelta dell'ente erogatore</strong>: la famiglia può indicare la Cooperativa Emmanuel tra gli enti accreditati.</li>
              <li><strong>Avvio a domicilio</strong>: infermieri, fisioterapisti e OSS iniziano le prestazioni previste dal piano, coordinandosi con il medico curante.</li>
            </ol>
            <p className="text-gray-700">
              Se i requisiti per l'ADI non sono presenti, o nell'attesa dell'autorizzazione, è possibile attivare <Link to="/infermiere-domicilio-napoli" className="text-blue-700 underline font-medium">l'infermiere a domicilio in forma privata</Link> entro 24-48 ore.
              Qui trovi la <Link to="/come-richiedere-adi" className="text-blue-700 underline font-medium">procedura completa per richiedere l'ADI in Campania</Link>.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Servizi ADI Inclusi</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Perché Scegliere Emmanuel per l'ADI?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Accreditata Regione Campania</h3>
                  <p className="text-gray-700">Certificazione ufficiale dal 2015 per erogazione ADI</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Team Multidisciplinare</h3>
                  <p className="text-gray-700">Infermieri, fisioterapisti, OSS, medici coordinati</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Heart className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Disponibilità 24/7</h3>
                  <p className="text-gray-700">Assistenza continua per emergenze e necessità</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Copertura Completa</h3>
                  <p className="text-gray-700">Napoli, provincia e Campania</p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">A Chi È Rivolta l'ADI?</h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                'Anziani 65+ con malattie croniche',
                'Persone con disabilità che necessitano monitoraggio',
                'Pazienti post-operatori in fase di recupero',
                'Malati cronici non autosufficienti',
                'Persone in convalescenza da malattie gravi',
                'Pazienti terminali in cure palliative'
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
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Domande Frequenti su ADI Napoli</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Aree Servite a Napoli e Provincia</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Napoli Quartieri</h3>
                <p className="text-gray-700">Vomero, Chiaia, Posillipo, Fuorigrotta, Arenella, Colli Aminei, Centro Storico, Soccavo, Pianura, Bagnoli, Ponticelli, San Giovanni a Teduccio, Secondigliano, Scampia</p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Provincia Campania</h3>
                <p className="text-gray-700">Pozzuoli, Portici, Ercolano, Torre del Greco, Giugliano in Campania, Casoria, Afragola, Acerra, Frattamaggiore, Frattaminore</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6">Garantiamo intervento rapido (24-48 ore) su tutto il territorio con team coordinati e professionali.</p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Inizia Oggi la Tua Assistenza Domiciliare</h2>
            <p className="text-xl mb-8 text-blue-100">Una valutazione gratuita a domicilio per comprendere le tue necessità</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${CONTACT_INFO.phone}`} className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {CONTACT_INFO.phone}
              </a>
              <Link to="/contatti" className="bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors">
                Compila il Modulo di Contatto
              </Link>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Correlati</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/infermiere-domicilio-napoli" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Infermiere a Domicilio</h3>
                <p className="text-gray-700 mb-4">Assistenza infermieristica 24/7 a Napoli</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
              <Link to="/fisioterapia-domicilio-napoli" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Fisioterapia Domiciliare</h3>
                <p className="text-gray-700 mb-4">Riabilitazione professionale a casa tua</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
              <Link to="/come-richiedere-adi" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Come Richiedere ADI</h3>
                <p className="text-gray-700 mb-4">Procedura completa step-by-step</p>
                <span className="text-blue-600 font-bold">Scopri di più →</span>
              </Link>
            </div>
          </section>
        </FadeInSection>
      </main>
    </>
  );
};

export default ADINapoliPage;
