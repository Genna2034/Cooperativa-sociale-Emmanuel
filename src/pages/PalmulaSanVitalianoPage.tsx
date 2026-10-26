import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Landmark, Users, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, FileText, Mic, Drama, Camera, Wheat, Music, Database, Map, PartyPopper, Accessibility, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const PalmulaSanVitalianoPage = () => {
  const cantieri = [
    { icon: Mic, title: 'La Banca della Memoria', text: 'Laboratorio di storia orale: studenti e volontari adulti, guidati da un antropologo e da un videomaker, raccolgono le video-testimonianze degli anziani del paese. Chi non può raggiungere le sedi viene intervistato a domicilio.' },
    { icon: Drama, title: 'Il Teatro delle Radici', text: 'Laboratorio di teatro di comunità, intergenerazionale e aperto a tutti dai 14 anni in su, che trasforma le memorie raccolte in uno spettacolo originale sulla storia di Palmola.' },
    { icon: Camera, title: 'Obiettivo Palmula', text: 'Laboratorio di fotografia partecipata con un fotografo documentarista: adolescenti e adulti ritraggono il paese, dalle chiese ai casolari dei Regi Lagni, per una mostra diffusa nelle piazze e nelle vetrine.' },
    { icon: Wheat, title: 'Sapori e Saperi', text: 'Incontri con agricoltori, pasticcieri e custodi delle ricette di casa sulla tradizione corilicola e la cucina della piana, con sessioni per le famiglie e per le scuole.' }
  ];

  const lines = [
    { icon: Music, title: 'Palmula Live', text: 'Una rassegna di serate gratuite di musica popolare, musica sacra, cinema, reading teatrali e narrazione popolare in piazze, chiese e spazi civici del capoluogo e della frazione Frascatoli.' },
    { icon: Database, title: 'Palmula Digitale', text: 'L\'Archivio della Memoria di Palmola, una serie podcast scritta con i giovani dei laboratori e la Mappa Narrativa: dieci luoghi con segnaletica permanente e codici QR che rimandano alle voci dell\'archivio.' },
    { icon: PartyPopper, title: 'La Festa di Palmula', text: 'Le giornate conclusive: inaugurazione della mostra e della segnaletica, debutto dello spettacolo, presentazione dell\'archivio e del podcast, giornata per le scuole, concerto finale e forum di restituzione.' }
  ];

  const accessibility = [
    'Tutte le attività sono gratuite, con iscrizioni ai laboratori anche cartacee presso la casa comunale',
    'Sedi accessibili e servizio di accompagnamento con mezzo attrezzato per persone con mobilità ridotta',
    'Interpretariato in lingua dei segni italiana per i principali eventi e materiali ad alta leggibilità',
    'Video-testimonianze sottotitolate e contenuti digitali conformi ai requisiti di accessibilità',
    'Interviste a domicilio per gli anziani che non possono spostarsi'
  ];

  const phases = [
    { period: 'Novembre 2026', title: 'Cantieri di comunità', text: 'Avvio dei quattro laboratori e prime sessioni della Banca della Memoria' },
    { period: 'Dicembre 2026', title: 'Palmula Live d\'inverno', text: 'Serate di rassegna, concerto di musica sacra, evento natalizio per le famiglie' },
    { period: 'Gennaio 2027', title: 'Voci e Mappe', text: 'Completamento dei laboratori, registrazione del podcast, prove teatrali, passeggiata ai Regi Lagni' },
    { period: 'Febbraio 2027', title: 'Festa di Palmula', text: 'Le giornate conclusive di restituzione alla comunità' }
  ];

  const projectInfo = [
    { label: 'Progetto', value: 'PALMULA. San Vitaliano si racconta' },
    { label: 'Ente capofila', value: 'Comune di San Vitaliano (NA)' },
    { label: 'Ruolo della Cooperativa', value: 'Partner di progetto' },
    { label: 'Avviso', value: 'Avviso ministeriale "Cultura nei piccoli comuni" – Manifestazione di interesse approvata con Determinazione n. gen. 303 / n. sett. 104 del 16/07/2026' }
  ];

  return (
    <>
      <Helmet>
        <title>PALMULA. San Vitaliano si racconta – Festival diffuso | Cooperativa Emmanuel</title>
        <meta name="description" content="PALMULA. San Vitaliano si racconta: festival diffuso delle radici, delle voci e dei saperi della comunità sanvitalianese. Cantieri di comunità, rassegna Palmula Live, archivio digitale e mappa narrativa. Cooperativa Emmanuel partner del Comune di San Vitaliano per l'Avviso Cultura nei piccoli comuni." />
        <meta name="keywords" content="palmula, san vitaliano si racconta, cultura nei piccoli comuni, festival diffuso san vitaliano, banca della memoria, teatro di comunità, comune di san vitaliano, agro nolano, cooperativa emmanuel" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/palmula-san-vitaliano" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="PALMULA. San Vitaliano si racconta | Cooperativa Emmanuel" />
        <meta property="og:description" content="Festival diffuso delle radici, delle voci e dei saperi di San Vitaliano. Cooperativa Emmanuel partner del Comune per l'Avviso Cultura nei piccoli comuni." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/palmula-san-vitaliano" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Project",
          "name": "PALMULA. San Vitaliano si racconta",
          "alternateName": "Festival diffuso delle radici, delle voci e dei saperi della comunità sanvitalianese",
          "description": "Festival diffuso con Cantieri di comunità, rassegna Palmula Live, archivio digitale della memoria e mappa narrativa. Proposta culturale del Comune di San Vitaliano per l'Avviso ministeriale Cultura nei piccoli comuni, con la Cooperativa Sociale Emmanuel come partner di progetto.",
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
        manageMeta={false}
        title="PALMULA. San Vitaliano si racconta"
        description="Festival diffuso delle radici, delle voci e dei saperi della comunità sanvitalianese"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Landmark className="h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Il nome più antico del paese</h2>
                    <p className="text-gray-700 leading-relaxed">
                      <em>Palmula Pristinum Nomen Meum</em>: la formula incisa nello stemma comunale ricorda che San Vitaliano nacque
                      come Palmola, casale agricolo dell'agro nolano. <strong>PALMULA</strong> riporta quel nome al centro della scena
                      pubblica con un festival diffuso in cui la comunità raccoglie le proprie memorie, le trasforma in teatro,
                      fotografia e musica e le consegna a un archivio permanente. La <strong>Cooperativa Emmanuel</strong> è partner
                      di progetto del <strong>Comune di San Vitaliano</strong> nell'ambito dell'Avviso ministeriale "Cultura nei piccoli comuni".
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Perché questo progetto</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed mb-4">
                  San Vitaliano è un comune giovane e in rapida crescita: in cinquant'anni la popolazione è più che raddoppiata, con
                  molte famiglie di recente residenza che conoscono poco la storia del luogo che abitano, mentre gli anziani delle
                  famiglie contadine, custodi della memoria, si assottigliano di anno in anno.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Il paese non ha un teatro, un cinema o una programmazione culturale continuativa al di fuori delle feste patronali,
                  ma possiede un patrimonio denso: la Chiesa Madre di piazza Nicola Tufano, la Chiesa dell'Immacolata Concezione con
                  la tela del Mozzillo, il paesaggio dei Regi Lagni, la tradizione della nocciola, il dialetto, i canti e i saperi
                  della civiltà contadina.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  PALMULA nasce all'incrocio di questi bisogni: <strong>salvare la memoria</strong>, creare occasioni culturali
                  strutturate, far incontrare vecchi e nuovi residenti, generazioni e frazioni, e dotare il Comune di strumenti
                  permanenti per raccontarsi.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">I Cantieri di comunità</h2>
              <p className="text-gray-600 mb-6">Quattro laboratori gratuiti e aperti che trasformano i cittadini da spettatori in autori dell'offerta culturale.</p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {cantieri.map((c, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <c.icon className="h-8 w-8 text-teal-600 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">{c.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Rassegna, archivio e restituzione</h2>
              <div className="space-y-4 mb-12">
                {lines.map((l, index) => (
                  <div key={index} className="flex items-start bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6">
                    <l.icon className="h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{l.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{l.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Il calendario</h2>
              <div className="bg-white border-2 border-teal-100 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-teal-600 mr-3" />
                  <p className="text-gray-700">Ventiquattro giornate di attività, non consecutive, tra novembre 2026 e febbraio 2027, con conclusione entro il 28 febbraio 2027.</p>
                </div>
                <ol className="grid sm:grid-cols-2 gap-4">
                  {phases.map((p, index) => (
                    <li key={index} className="bg-gray-50 rounded-lg p-4">
                      <span className="text-xs uppercase tracking-wide text-teal-700 font-semibold">{p.period}</span>
                      <h3 className="font-bold text-gray-800 mt-1">{p.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{p.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Partecipazione e accessibilità</h2>
              <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <Accessibility className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Perché nessuno resti fuori</h3>
                </div>
                <ul className="space-y-3">
                  {accessibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Il ruolo della Cooperativa Emmanuel</h2>
              <div className="bg-white border-2 border-teal-100 rounded-xl p-8 mb-12">
                <div className="flex items-start">
                  <Users className="h-8 w-8 text-teal-600 mr-4 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">
                    Un festival che fa della partecipazione degli anziani, dell'inclusione delle persone fragili e del lavoro
                    intergenerazionale la propria cifra richiede competenze di prossimità, ascolto e mediazione. Nel progetto la
                    cooperativa cura il <strong>coordinamento organizzativo</strong>, la <strong>conduzione educativa dei Cantieri
                    di comunità</strong>, il <strong>servizio di accompagnamento e accessibilità</strong>, la mediazione con le
                    famiglie e i servizi sociali per l'inclusione delle persone fragili e il monitoraggio partecipativo, insieme
                    al reperimento delle professionalità artistiche e tecniche secondo gli indirizzi della cabina di regia.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Riferimenti del progetto</h2>
              <div className="bg-white border-2 border-teal-100 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-teal-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Partenariato con il Comune di San Vitaliano</h3>
                </div>
                <dl className="grid sm:grid-cols-2 gap-4">
                  {projectInfo.map((item, index) => (
                    <div key={index} className={`bg-gray-50 rounded-lg p-4 ${index === projectInfo.length - 1 ? 'sm:col-span-2' : ''}`}>
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
                  Hai una storia da raccontare, vuoi iscriverti a un Cantiere di comunità o collaborare come associazione o
                  esercizio commerciale? Contattaci.
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
