import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Baby, Users, Heart, Sun, Music, Palette, Target, MessageCircle, Award, Phone, Mail, Calendar, ArrowRight, CheckCircle, Sparkles, TreePine, BookOpen, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const MicronidoRomaganoPage = () => {
  const teamFeatures = [
    { icon: Users, text: '4 educatrici qualificate (3 full-time + 1 part-time)' },
    { icon: Target, text: 'Rapporto educatore/bambino 1:6 (1:4 per lattanti)' },
    { icon: Heart, text: 'Coordinatore pedagogico 10 ore/settimana' },
    { icon: CheckCircle, text: '2 ausiliarie per pulizie e routine' }
  ];

  const outdoorActivities = [
    'Orto didattico e cura delle piante',
    'Percorsi sensoriali naturali',
    'Giochi con materiali naturali',
    'Esplorazione stagionale',
    'Osservazione di piccoli animali'
  ];

  const laboratoryPrograms = [
    { icon: Music, title: 'Musica', description: 'Ritmo, canto, strumenti musicali' },
    { icon: Palette, title: 'Arte', description: 'Manipolazione, pittura, espressione creativa' },
    { icon: Target, title: 'Psicomotricità', description: 'Movimento, coordinazione, schema corporeo' },
    { icon: Globe, title: 'Inglese Ludico', description: 'Avvicinamento alla lingua attraverso il gioco' }
  ];

  const qualityServices = [
    'Osservazioni sistematiche e portfolio personalizzato',
    'Questionari di soddisfazione annuali',
    'Focus group con le famiglie',
    'Audit interni e supervisione pedagogica',
    'Protocollo PDCA per miglioramento continuo',
    'Riunioni di équipe settimanali'
  ];

  const familyServices = [
    { icon: MessageCircle, title: 'Sportello Psicopedagogico', text: 'Minimo 6 ore/mese per consulenze' },
    { icon: Users, title: 'Incontri Formativi', text: 'Minimo 4 incontri tematici all\'anno' },
    { icon: Calendar, title: 'Colloqui Individuali', text: '2 colloqui personalizzati per famiglia' },
    { icon: CheckCircle, title: 'Piattaforma Digitale', text: 'Sistema "Nido Connesso" con foto e aggiornamenti' }
  ];

  return (
    <>
      <Helmet>
        <title>Micronido d'Infanzia Romagnano Sesia | Cooperativa Emmanuel</title>
        <meta name="description" content="Micronido 0-3 anni a Romagnano Sesia: progetto pedagogico innovativo, educazione all'aperto, laboratori specializzati. Educatori qualificati 1:6." />
        <meta name="keywords" content="micronido romagnano sesia, asilo nido 0-3 anni, educazione infanzia, nido d'infanzia piemonte, cooperativa emmanuel, educazione all'aperto, giardino delle meraviglie" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/micronido-romagnano-sesia" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ChildCare",
          "name": "Micronido d'Infanzia Romagnano Sesia - Cooperativa Emmanuel",
          "description": "Servizio educativo per bambini 0-3 anni con progetto pedagogico innovativo, educazione all'aperto e laboratori specializzati.",
          "provider": {
            "@type": "Organization",
            "name": "Cooperativa Sociale Emmanuel",
            "url": "https://cooperativaemmanuel.it"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Romagnano Sesia",
            "addressRegion": "Piemonte",
            "addressCountry": "IT"
          },
          "areaServed": "Romagnano Sesia",
          "audience": {
            "@type": "PeopleAudience",
            "suggestedMinAge": 0,
            "suggestedMaxAge": 3
          }
        })}
        </script>

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://cooperativaemmanuel.it/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Servizi",
              "item": "https://cooperativaemmanuel.it/servizi"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Micronido Romagnano Sesia",
              "item": "https://cooperativaemmanuel.it/micronido-romagnano-sesia"
            }
          ]
        })}
        </script>
      </Helmet>

      <PageHeader
        title="Micronido d'Infanzia – Romagnano Sesia"
        description="Un ambiente educativo accogliente per bambini 0-3 anni"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Servizi', href: '/servizi' },
          { label: 'Micronido Romagnano Sesia' }
        ]}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Baby className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Un luogo speciale per crescere</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Il Micronido d'Infanzia di Romagnano Sesia della Cooperativa Sociale Emmanuel è un servizio educativo innovativo dedicato ai bambini da 0 a 3 anni,
                      progettato per garantire benessere, sviluppo armonico e continuità educativa in un ambiente sicuro, stimolante e accogliente.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cos'è il Micronido</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Il nostro micronido è molto più di un semplice servizio di custodia: è un <strong>ambiente educativo qualificato</strong> dove ogni bambino
                  è accolto come individuo unico, con i suoi tempi, bisogni ed emozioni.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Accogliamo bambini <strong>da 0 a 3 anni</strong> in piccoli gruppi, garantendo:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Routine personalizzate che rispettano i ritmi individuali</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Continuità affettiva con educatori di riferimento stabili</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Ambienti curati e flessibili che fungono da "terzo educatore"</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Sicurezza affettiva e relazioni significative</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Il nostro obiettivo è accompagnare i bambini nella costruzione della loro <strong>identità, autonomia e competenze sociali</strong>,
                  in stretta collaborazione con le famiglie.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cosa offre il servizio</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                    Routine Quotidiane
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Accoglienza personalizzata
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Gestione pasti equilibrati
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Cambio e cura dell'igiene
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Riposo individualizzato
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Gioco libero e strutturato
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                    Attività Educative
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Laboratori di manipolazione
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Gioco simbolico e sensoriale
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Lettura animata
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Attività motorie
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Esplorazione e scoperta
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Gestione Completa del Servizio</h3>
                <p className="text-gray-600">
                  La Cooperativa Sociale Emmanuel garantisce la <strong>gestione amministrativa, organizzativa e pedagogica completa</strong> del servizio,
                  occupandosi di tutti gli aspetti: dal coordinamento educativo alla gestione del personale, dalla sanificazione degli ambienti
                  alla consulenza nutrizionale per i menu.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Il nostro approccio pedagogico</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Il progetto pedagogico del micronido si fonda sullo <strong>sviluppo integrato</strong> di tutte le dimensioni della personalità infantile:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-blue-600 mb-3">Sviluppo Motorio</h3>
                  <p className="text-gray-600">
                    Coordinazione, equilibrio, motricità fine e grossolana attraverso gioco libero, percorsi psicomotori e manipolazione.
                  </p>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-green-600 mb-3">Sviluppo Cognitivo</h3>
                  <p className="text-gray-600">
                    Esplorazione, problem solving, memoria e attenzione attraverso giochi euristici, costruzioni e attività sensoriali.
                  </p>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-purple-600 mb-3">Sviluppo Emotivo</h3>
                  <p className="text-gray-600">
                    Riconoscimento e gestione delle emozioni, sicurezza affettiva, costruzione dell'identità personale e autostima.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-orange-600 mb-3">Sviluppo Linguistico</h3>
                  <p className="text-gray-600">
                    Comunicazione verbale e non verbale, ascolto, comprensione, arricchimento lessicale attraverso letture, canzoni e conversazioni.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <Sparkles className="h-6 w-6 text-purple-600 mr-2" />
                  Metodologia
                </h3>
                <p className="text-gray-700 mb-4">
                  Utilizziamo una metodologia attiva e partecipativa che valorizza:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Gioco</strong> come strumento privilegiato di apprendimento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Osservazione sistematica</strong> per conoscere ogni bambino</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Documentazione pedagogica</strong> per tracciare i percorsi di crescita</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Ambiente come terzo educatore</strong>, curato e stimolante</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={400}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Team Educativo</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Il nostro team è composto da professionisti qualificati e appassionati, selezionati per competenza, esperienza e sensibilità educativa.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {teamFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 mb-12">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Organizzazione e Continuità</h3>
                <p className="text-gray-600 mb-4">
                  Per garantire la massima continuità educativa e relazionale, abbiamo implementato:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Sistema di turnazione strutturato</strong> che assicura la presenza costante degli educatori di riferimento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Personale di riserva qualificato</strong> per copertura immediata delle assenze</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Riunioni di équipe settimanali</strong> per coordinamento e progettazione condivisa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Formazione continua</strong> su metodologie innovative e bisogni educativi speciali</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={500}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <TreePine className="h-8 w-8 text-green-600 mr-3" />
                Educazione all'Aperto – Il Giardino delle Meraviglie
              </h2>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Una delle nostre <strong>innovazioni più significative</strong> è il progetto di <strong>educazione all'aperto "Il Giardino delle Meraviglie"</strong>,
                  con <strong>3 sessioni settimanali</strong> dedicate all'esplorazione e al contatto con la natura.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Attività Outdoor</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {outdoorActivities.map((activity, index) => (
                    <div key={index} className="flex items-start bg-white rounded-lg p-4">
                      <Sun className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-800 mb-3">Obiettivi Educativi</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Sviluppare il rispetto per l'ambiente e gli esseri viventi
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Stimolare curiosità scientifica e spirito di osservazione
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Favorire il movimento libero e lo sviluppo motorio
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Rafforzare il sistema immunitario attraverso l'esposizione naturale
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Promuovere benessere psicofisico e serenità
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={600}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Laboratori Settimanali con Esperti</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Per arricchire l'offerta educativa, proponiamo <strong>laboratori specializzati condotti da professionisti esterni</strong>,
                integrati nel progetto pedagogico annuale.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {laboratoryPrograms.map((lab, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <lab.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{lab.title}</h3>
                    </div>
                    <p className="text-gray-600">{lab.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Progetto Educativo Annuale:</strong> Ogni anno sviluppiamo un tema conduttore che attraversa tutte le attività,
                  garantendo coerenza pedagogica e continuità educativa.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={700}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Inclusione Bambini con BES e Disabilità</h2>
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8 mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Il nostro micronido è un <strong>ambiente inclusivo</strong> che accoglie bambini con Bisogni Educativi Speciali (BES) e disabilità,
                  garantendo pari opportunità di partecipazione e crescita.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">PEI e PDP Personalizzati</h3>
                    <p className="text-gray-600 mb-3">
                      Elaboriamo Piani Educativi Individualizzati (PEI) e Piani Didattici Personalizzati (PDP) in collaborazione con:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Famiglie</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                        <span>ASL e specialisti di riferimento</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Équipe educativa del nido</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Supporto Specialistico</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Ambienti accessibili e adattati</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Materiali didattici specifici</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Formazione continua del personale</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Monitoraggio costante dei progressi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={800}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Rapporto con le Famiglie</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                La <strong>partnership educativa con le famiglie</strong> è al centro del nostro progetto. Crediamo nella condivisione quotidiana
                e nella costruzione di un rapporto di fiducia reciproca.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {familyServices.map((service, index) => (
                  <div key={index} className="bg-white border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-50 rounded-full p-3 mr-4">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Eventi Pubblici</h3>
                  <p className="text-gray-600">2 eventi all'anno aperti alla comunità</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Laboratori Condivisi</h3>
                  <p className="text-gray-600">Attività genitori-bambini durante l'anno</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Canale Feedback</h3>
                  <p className="text-gray-600">Sistema strutturato per segnalazioni e reclami</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <Sparkles className="h-6 w-6 text-blue-600 mr-2" />
                  Sistema "Nido Connesso"
                </h3>
                <p className="text-gray-700">
                  Attraverso la nostra <strong>piattaforma digitale</strong>, le famiglie ricevono quotidianamente aggiornamenti sulle attività,
                  foto dei momenti più belli, report sulle routine (pasti, sonno, cambio) e comunicazioni dirette con le educatrici.
                  Un modo moderno e trasparente per rimanere sempre connessi con il nido.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={900}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="h-8 w-8 text-yellow-600 mr-3" />
                Qualità del Servizio
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                La qualità è garantita attraverso un <strong>sistema di monitoraggio continuo</strong> basato sul metodo PDCA
                (Plan-Do-Check-Act) e su strumenti di valutazione costanti.
              </p>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Strumenti di Monitoraggio</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {qualityServices.map((service, index) => (
                    <div key={index} className="flex items-start bg-white rounded-lg p-4">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-white border-2 border-yellow-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Portfolio Bambino</h3>
                  <p className="text-gray-600">
                    Per ogni bambino viene creato un <strong>portfolio personalizzato</strong> che documenta il percorso di crescita attraverso
                    osservazioni, foto, elaborati e note educative. Un prezioso ricordo che viene consegnato alla famiglia al termine del percorso.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Supervisione Pedagogica</h3>
                  <p className="text-gray-600">
                    Il <strong>coordinatore pedagogico</strong> è presente 10 ore/settimana per supervisione, formazione in servizio,
                    supporto alla progettazione e verifica della qualità educativa. Un presidio costante di competenza e professionalità.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
                <p className="text-gray-700">
                  <strong>Consulenza Nutrizionale:</strong> Collaboriamo con un nutrizionista che verifica annualmente i menu,
                  garantendo pasti equilibrati, variati e adeguati alle esigenze nutrizionali dei bambini 0-3 anni,
                  con attenzione a intolleranze e allergie alimentari.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={1000}>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Iscrizioni e Contatti</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Vuoi conoscere meglio il nostro micronido? Prenota una visita senza impegno e scopri l'ambiente dove il tuo bambino potrà crescere sereno e felice.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Phone className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Telefono</h3>
                    </div>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-xl font-bold hover:text-blue-200 transition-colors block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Mail className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Email</h3>
                    </div>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-lg hover:text-blue-200 transition-colors break-all"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={`https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul Micronido di Romagnano Sesia`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contattaci su WhatsApp
                  </a>

                  <Link
                    to="/prenotazioni"
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    Prenota Visita
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-blue-100 text-sm">
                    <strong>Orari di apertura:</strong> Lunedì - Venerdì | 7:30 - 18:00
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={1100}>
              <div className="mt-12 bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Perché scegliere il Micronido della Cooperativa Emmanuel?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Professionalità</h4>
                    <p className="text-gray-600 text-sm">15+ anni di esperienza nei servizi educativi e sociali</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Qualità Certificata</h4>
                    <p className="text-gray-600 text-sm">Certificazione ISO 9001:2015 per la gestione dei servizi</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Innovazione</h4>
                    <p className="text-gray-600 text-sm">Metodologie moderne e attenzione alle nuove esigenze educative</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicronidoRomaganoPage;
