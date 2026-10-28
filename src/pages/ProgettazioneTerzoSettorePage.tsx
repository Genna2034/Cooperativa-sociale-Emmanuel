import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Lightbulb, FileSearch, PenTool, Users, BarChart3, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Landmark, Euro, ClipboardCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const ProgettazioneTerzoSettorePage = () => {
  const services = [
    { icon: FileSearch, title: 'Analisi di bandi e avvisi', text: 'Monitoraggio delle opportunità (Comuni, Regioni, Ministeri, fondazioni, PNRR, fondi europei) e valutazione di ammissibilità e convenienza.' },
    { icon: PenTool, title: 'Scrittura del progetto', text: 'Idea progettuale, analisi del contesto e dei bisogni, obiettivi, attività, cronoprogramma, indicatori e piano economico.' },
    { icon: Users, title: 'Costruzione del partenariato', text: 'Individuazione dei partner, ATS/RTI, lettere di intenti, accordi di collaborazione con enti pubblici e terzo settore.' },
    { icon: ClipboardCheck, title: 'Gare e co-progettazione', text: 'Offerte tecniche per gare d\'appalto di servizi sociali ed educativi, istanze di co-progettazione e accreditamento.' },
    { icon: BarChart3, title: 'Gestione e monitoraggio', text: 'Avvio, coordinamento, rendicontazione fisica e finanziaria, relazioni intermedie e finali, valutazione d\'impatto.' },
    { icon: Lightbulb, title: 'Consulenza strategica', text: 'Accompagnamento di cooperative, associazioni, parrocchie e enti locali nella definizione di nuovi servizi e linee di sviluppo.' }
  ];

  const areas = [
    'Servizi educativi 0-6, asili nido e micronidi',
    'Assistenza domiciliare e servizi per anziani e disabilità',
    'Inclusione sociale e lavorativa, contrasto alla povertà educativa',
    'Progetti culturali e di comunità per i piccoli comuni',
    'Educativa territoriale e di strada, giovani a rischio',
    'Welfare di comunità e co-programmazione con gli enti locali'
  ];

  const track = [
    { title: 'SosteniAMO il quartiere', text: 'Città Metropolitana di Napoli – POC Legalità 2014-2020, RTI con Emmanuel mandataria', link: '/sosteniamo-il-quartiere' },
    { title: 'PALMULA. San Vitaliano si racconta', text: 'Avviso ministeriale "Cultura nei piccoli comuni", partner del Comune di San Vitaliano', link: '/palmula-san-vitaliano' },
    { title: 'Asilo Nido Comunale "De Baggis"', text: 'Gara per il servizio educativo per l\'infanzia del Comune di Isernia', link: '/nido-de-baggis-isernia' }
  ];

  return (
    <>
      <Helmet>
        <title>Progettazione per il Terzo Settore – Bandi, gare e co-progettazione | Cooperativa Emmanuel</title>
        <meta name="description" content="Progettazione sociale per cooperative, associazioni ed enti locali: analisi bandi, scrittura progetti, offerte tecniche per gare, partenariati, co-progettazione, rendicontazione. L'esperienza sul campo della Cooperativa Emmanuel al servizio del terzo settore." />
        <meta name="keywords" content="progettazione terzo settore, progettazione sociale, scrittura progetti bandi, europrogettazione sociale, offerta tecnica gara servizi sociali, co-progettazione, rendicontazione progetti, consulenza cooperative sociali, napoli campania" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/progettazione-terzo-settore" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Progettazione per il Terzo Settore | Cooperativa Emmanuel" />
        <meta property="og:description" content="Bandi, gare, partenariati e co-progettazione: accompagniamo enti del terzo settore e amministrazioni dalla idea alla rendicontazione." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/progettazione-terzo-settore" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Progettazione per il Terzo Settore",
          "serviceType": "Progettazione sociale e consulenza",
          "description": "Analisi bandi, scrittura progetti, offerte tecniche per gare, costruzione di partenariati, co-progettazione, gestione e rendicontazione per enti del terzo settore e amministrazioni pubbliche.",
          "provider": { "@type": "Organization", "name": "Cooperativa Sociale Emmanuel", "url": "https://cooperativaemmanuel.it" },
          "areaServed": { "@type": "Country", "name": "Italia" },
          "audience": { "@type": "Audience", "audienceType": "Cooperative sociali, associazioni, enti locali, parrocchie, fondazioni" }
        })}
        </script>
      </Helmet>

      <PageHeader
        manageMeta={false}
        title="Progettazione per il Terzo Settore"
        description="Dall'idea alla rendicontazione: bandi, gare, partenariati e co-progettazione per enti del terzo settore e amministrazioni"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Landmark className="h-8 w-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Progettisti che gestiscono i servizi che progettano</h2>
                    <p className="text-gray-700 leading-relaxed">
                      La Cooperativa Emmanuel partecipa da anni a gare, avvisi pubblici e co-progettazioni e gestisce direttamente
                      i servizi che ne derivano: nidi, assistenza domiciliare, educativa territoriale, progetti culturali e di
                      inclusione. Mettiamo questa esperienza a disposizione di <strong>cooperative, associazioni, parrocchie,
                      fondazioni ed enti locali</strong> che vogliono trasformare un'idea in un progetto finanziabile e gestibile.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cosa facciamo</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {services.map((s, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 h-full">
                    <s.icon className="h-8 w-8 text-amber-600 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Ambiti in cui lavoriamo</h2>
                  <ul className="space-y-3">
                    {areas.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border-2 border-amber-100 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Come lavoriamo</h2>
                  <ol className="space-y-4">
                    {[
                      ['Ascolto', 'Un primo incontro gratuito per capire l\'ente, i bisogni e le opportunità aperte.'],
                      ['Fattibilità', 'Verifica dei requisiti, dei tempi e della sostenibilità economica prima di iniziare a scrivere.'],
                      ['Scrittura', 'Redazione del progetto o dell\'offerta tecnica, con il piano economico e gli allegati.'],
                      ['Accompagnamento', 'Supporto nella presentazione, nell\'avvio e, se richiesto, nella gestione e rendicontazione.']
                    ].map(([title, text], index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-amber-500 text-white h-7 w-7 text-sm font-bold mr-3 flex-shrink-0">{index + 1}</span>
                        <span className="text-gray-700"><strong>{title}.</strong> {text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Progetti che abbiamo scritto e che gestiamo</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {track.map((t, index) => (
                  <Link key={index} to={t.link} className="group bg-gray-50 rounded-xl p-6 hover:bg-amber-50 transition-colors">
                    <Euro className="h-6 w-6 text-amber-600 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-amber-700">{t.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{t.text}</p>
                    <span className="text-amber-700 text-sm font-medium inline-flex items-center">Scopri <ArrowRight className="ml-1 h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={400}>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Hai un bando in scadenza o un'idea da sviluppare?</h2>
                <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
                  Raccontacela: il primo confronto è gratuito e senza impegno.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3"><Phone className="h-6 w-6 mr-3" /><h3 className="text-lg font-bold">Telefono</h3></div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold hover:text-amber-200 transition-colors block">{CONTACT_INFO.phone}</a>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3"><Mail className="h-6 w-6 mr-3" /><h3 className="text-lg font-bold">Email</h3></div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-amber-200 transition-colors break-all">{CONTACT_INFO.email}</a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul servizio di progettazione per il terzo settore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Scrivici su WhatsApp
                  </a>
                  <Link to="/contatti" className="inline-flex items-center px-8 py-4 bg-white text-amber-700 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
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

export default ProgettazioneTerzoSettorePage;
