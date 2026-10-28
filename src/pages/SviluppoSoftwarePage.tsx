import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, Database, Globe, ShieldCheck, Workflow, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Monitor } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const SviluppoSoftwarePage = () => {
  const services = [
    { icon: Database, title: 'Gestionali per servizi sociali ed educativi', text: 'Cartella dell\'utente, piani individualizzati (PAI/PEI), turni e timesheet degli operatori, presenze, diario degli interventi, rendicontazione verso Comuni e ASL.' },
    { icon: Smartphone, title: 'App per operatori e famiglie', text: 'App mobile per la registrazione degli accessi a domicilio, firma e geolocalizzazione, comunicazioni scuola-famiglia e nido-famiglia, notifiche e documenti.' },
    { icon: Globe, title: 'Siti web e portali', text: 'Siti istituzionali, aree riservate per soci e dipendenti, portali di prenotazione e moduli online, ottimizzati per i motori di ricerca.' },
    { icon: Workflow, title: 'Automazione e integrazione', text: 'Flussi documentali, generazione automatica di report e fatture, integrazione con software di contabilità, paghe, PEC e firma digitale.' },
    { icon: ShieldCheck, title: 'Privacy e sicurezza', text: 'Progettazione conforme al GDPR per dati sanitari e di minori: ruoli e permessi, log degli accessi, backup e conservazione.' },
    { icon: Monitor, title: 'Cruscotti e monitoraggio', text: 'Dashboard con indicatori di servizio e di progetto, utili per la direzione, per le relazioni agli enti e per la valutazione d\'impatto.' }
  ];

  const whyUs = [
    'Conosciamo dall\'interno i servizi che informatizziamo: ADI, SAD, nidi, educativa, progetti finanziati',
    'Strumenti pensati per operatori sul campo, non per tecnici: semplici da usare da telefono',
    'Dati pronti per la rendicontazione a Comuni, ASL, Regione e Ministeri',
    'Sviluppo su misura: niente licenze sovradimensionate, paghi ciò che usi',
    'Assistenza e formazione del personale inclusi'
  ];

  const process = [
    ['Analisi', 'Mappiamo insieme il flusso di lavoro reale del servizio e i documenti richiesti dagli enti.'],
    ['Prototipo', 'Una prima versione navigabile in poche settimane, da provare con gli operatori.'],
    ['Sviluppo e test', 'Rilasci progressivi, test con il personale, correzioni rapide.'],
    ['Avvio e supporto', 'Formazione, migrazione dei dati, assistenza continuativa e nuove funzionalità.']
  ];

  return (
    <>
      <Helmet>
        <title>Sviluppo App e Software Gestionali per Cooperative e Terzo Settore | Emmanuel</title>
        <meta name="description" content="Sviluppo di app e software gestionali su misura per cooperative sociali, enti del terzo settore e servizi educativi e socio-sanitari: cartella utente, turni operatori, rendicontazione, app per famiglie, siti web. Conformi GDPR." />
        <meta name="keywords" content="software gestionale cooperativa sociale, gestionale assistenza domiciliare, app operatori domiciliari, software servizi sociali, gestionale asilo nido, sviluppo app terzo settore, sviluppo software napoli, cooperativa emmanuel" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/sviluppo-app-software-gestionali" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sviluppo App e Software Gestionali | Cooperativa Emmanuel" />
        <meta property="og:description" content="Gestionali, app e portali su misura per cooperative sociali, servizi educativi e socio-sanitari. Progettati da chi quei servizi li gestisce." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/sviluppo-app-software-gestionali" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Sviluppo app e software gestionali",
          "serviceType": "Sviluppo software",
          "description": "Sviluppo di app, software gestionali, siti e portali su misura per cooperative sociali, enti del terzo settore, servizi educativi e socio-sanitari.",
          "provider": { "@type": "Organization", "name": "Cooperativa Sociale Emmanuel", "url": "https://cooperativaemmanuel.it" },
          "areaServed": { "@type": "Country", "name": "Italia" },
          "audience": { "@type": "Audience", "audienceType": "Cooperative sociali, associazioni, enti locali, servizi educativi e socio-sanitari" }
        })}
        </script>
      </Helmet>

      <PageHeader
        manageMeta={false}
        title="Sviluppo App e Software Gestionali"
        description="Strumenti digitali su misura per cooperative sociali, servizi educativi e socio-sanitari, progettati da chi quei servizi li gestisce ogni giorno"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-slate-50 border-l-4 border-slate-700 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Code2 className="h-8 w-8 text-slate-700 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Il software che serve davvero a chi lavora sul campo</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Turni da coprire, accessi a domicilio da registrare, PEI da aggiornare, rendiconti da consegnare al Comune:
                      la Cooperativa Emmanuel ha costruito per i propri servizi gli strumenti digitali che non trovava sul mercato,
                      e oggi li sviluppa <strong>su misura per altre cooperative, associazioni ed enti locali</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cosa realizziamo</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {services.map((s, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 h-full">
                    <s.icon className="h-8 w-8 text-slate-700 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Perché scegliere noi</h2>
                  <ul className="space-y-3">
                    {whyUs.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-slate-700 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Come lavoriamo</h2>
                  <ol className="space-y-4">
                    {process.map(([title, text], index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-slate-700 text-white h-7 w-7 text-sm font-bold mr-3 flex-shrink-0">{index + 1}</span>
                        <span className="text-gray-700"><strong>{title}.</strong> {text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <div className="bg-gradient-to-br from-slate-700 to-blue-800 text-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Parliamo del tuo gestionale</h2>
                <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                  Descrivici come lavorate oggi: ti proponiamo una soluzione e un preventivo senza impegno.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3"><Phone className="h-6 w-6 mr-3" /><h3 className="text-lg font-bold">Telefono</h3></div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold hover:text-slate-300 transition-colors block">{CONTACT_INFO.phone}</a>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3"><Mail className="h-6 w-6 mr-3" /><h3 className="text-lg font-bold">Email</h3></div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-slate-300 transition-colors break-all">{CONTACT_INFO.email}</a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/390817877064?text=Ciao! Vorrei informazioni sullo sviluppo di app e software gestionali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Scrivici su WhatsApp
                  </a>
                  <Link to="/contatti" className="inline-flex items-center px-8 py-4 bg-white text-slate-800 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
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

export default SviluppoSoftwarePage;
