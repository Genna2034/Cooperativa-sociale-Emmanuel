import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, MapPin, Target, FileText, Compass, Award, Hammer, ChefHat, Music, Wrench, LifeBuoy, HeartPulse, Monitor, Sprout, Dumbbell, Video, Printer, Handshake } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const SosteniamoIlQuartierePage = () => {
  const phases = [
    {
      icon: Compass,
      title: 'Aggancio e presa in carico',
      text: 'Un\'équipe di prossimità (coordinatrice, educatori-case manager) lavora nei luoghi di aggregazione dei quartieri, con le famiglie e con i Comuni, per incontrare e accompagnare i ragazzi.'
    },
    {
      icon: Briefcase,
      title: 'Laboratori e corsi',
      text: 'Percorsi di orientamento al mestiere condotti da esperti di mestiere affiancati da tutor d\'aula: teoria, dimostrazioni, sicurezza, esercitazioni e schede di valutazione delle competenze.'
    },
    {
      icon: Award,
      title: 'Restituzione',
      text: 'Ogni ragazzo riceve il Portfolio individuale delle competenze e un attestato di partecipazione; il percorso si chiude con un evento pubblico di restituzione.'
    }
  ];

  const emmanuelLabs = [
    { icon: Hammer, title: 'Bottega del fabbro', text: 'Orientamento al mestiere del fabbro, carpenteria e sartoria: sicurezza, materiali, lettura del disegno, misura e assemblaggio di piccoli manufatti, con esercitazioni a freddo e dimostrazioni dell\'esperto.' },
    { icon: ChefHat, title: 'Enogastronomia', text: 'Arte bianca e cucina di base: igiene, procedure igienico-sanitarie, farine, impasti e lievitazione, con ricettario didattico e scheda di orientamento alle professioni della ristorazione.' },
    { icon: Music, title: 'Musica e produzione audio', text: 'Dalle basi al brano strutturato: scrittura del testo, metrica, beat, voce, registrazione, editing e mix con strumentazione portatile. Il brano del gruppo viene presentato all\'evento di restituzione.' },
    { icon: Wrench, title: 'Motori – ciclomeccanica', text: 'Laboratorio teorico su funzionamento del ciclomotore, manutenzione ordinaria, diagnosi dei guasti più comuni e sicurezza su strada, con lezioni, schemi e dimostrazioni su componenti.' },
    { icon: LifeBuoy, title: 'Corso sportivo di salvamento e sicurezza acquatica', text: 'Percorso "a secco" con istruttore brevettato FIN: regole di sicurezza in acqua e in mare, riconoscimento del pericolo, catena dei soccorsi e primo soccorso di base, con orientamento al brevetto di assistente bagnanti.' },
    { icon: HeartPulse, title: 'Modulo orientativo di assistenza alla persona e primo soccorso', text: 'Le basi dell\'assistenza alla persona (igiene, mobilizzazione, parametri, manovre di emergenza) con docente infermiere e co-docenza di un Operatore Socio-Sanitario; orientamento ai profili socio-sanitari.' }
  ];

  const partnerLabs = [
    {
      partner: 'EITD S.r.l.',
      where: 'Giugliano in Campania (Casacelle) e Napoli-Ponticelli',
      labs: [
        { icon: Monitor, text: 'Alfabetizzazione digitale e orientamento all\'intelligenza artificiale' },
        { icon: HeartPulse, text: 'Assistenza alla persona e primo soccorso (modulo orientativo)' },
        { icon: Sprout, text: 'Giardinaggio' },
        { icon: Dumbbell, text: 'Educazione allo sport' }
      ]
    },
    {
      partner: 'Associazione Maestri di Strada ETS',
      where: 'Napoli-Ponticelli, Centro Ciro Colonna',
      labs: [
        { icon: Music, text: 'Musica e produzione audio' },
        { icon: Video, text: 'Video making e fotografia digitale' },
        { icon: Printer, text: 'Informatica e stampa 3D' },
        { icon: ChefHat, text: 'Enogastronomia' }
      ]
    }
  ];

  const territories = [
    { name: 'Afragola', note: 'Biblioteca Comunale' },
    { name: 'Castello di Cisterna', note: 'Spazio comunale' },
    { name: 'Marigliano', note: 'Presidio dell\'équipe di prossimità' },
    { name: 'Caivano', note: 'Sede in avvio' },
    { name: 'Giugliano in Campania', note: 'Quartiere Casacelle' },
    { name: 'Napoli', note: 'Ponticelli e San Giovanni a Teduccio' }
  ];

  const projectInfo = [
    { label: 'Titolo', value: 'SosteniAMO il quartiere' },
    { label: 'Ente', value: 'Città Metropolitana di Napoli' },
    { label: 'Programma', value: 'POC Legalità 2014-2020 – Asse IV, azione 4.1.2' },
    { label: 'CUP', value: 'H69G25000020001' },
    { label: 'CUI', value: 'S01263370635202500037' },
    { label: 'Raggruppamento', value: 'Cooperativa Sociale Emmanuel (mandataria), EITD S.r.l., Associazione Maestri di Strada ETS, Esculapio Cooperativa Sociale' }
  ];

  return (
    <>
      <Helmet>
        <title>SosteniAMO il quartiere – Percorsi per giovani a rischio | Cooperativa Emmanuel</title>
        <meta name="description" content="SosteniAMO il quartiere: progetto della Città Metropolitana di Napoli (POC Legalità 2014-2020) per percorsi personalizzati di inserimento sociale e lavorativo di giovani a rischio. Équipe di prossimità, laboratori di orientamento al mestiere e Portfolio delle competenze ad Afragola, Castello di Cisterna, Marigliano, Caivano, Giugliano e Napoli." />
        <meta name="keywords" content="sosteniamo il quartiere, poc legalità, città metropolitana di napoli, giovani a rischio, inserimento sociale e lavorativo, laboratori di orientamento, afragola, castello di cisterna, marigliano, caivano, giugliano, ponticelli, cooperativa emmanuel" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/sosteniamo-il-quartiere" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="SosteniAMO il quartiere – Cooperativa Emmanuel" />
        <meta property="og:description" content="Percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio nell'area metropolitana di Napoli. POC Legalità 2014-2020." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/sosteniamo-il-quartiere" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Project",
          "name": "SosteniAMO il quartiere",
          "description": "Percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio. Progetto della Città Metropolitana di Napoli finanziato dal POC Legalità 2014-2020 (Asse IV, azione 4.1.2), realizzato da un Raggruppamento Temporaneo di Imprese con mandataria Cooperativa Sociale Emmanuel.",
          "funder": {
            "@type": "GovernmentOrganization",
            "name": "Città Metropolitana di Napoli"
          },
          "member": [
            { "@type": "Organization", "name": "Cooperativa Sociale Emmanuel", "url": "https://cooperativaemmanuel.it" },
            { "@type": "Organization", "name": "EITD S.r.l." },
            { "@type": "Organization", "name": "Associazione Maestri di Strada ETS" },
            { "@type": "Organization", "name": "Esculapio Cooperativa Sociale" }
          ],
          "areaServed": territories.map((t) => ({ "@type": "City", "name": t.name }))
        })}
        </script>

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cooperativaemmanuel.it/" },
            { "@type": "ListItem", "position": 2, "name": "Servizi", "item": "https://cooperativaemmanuel.it/servizi" },
            { "@type": "ListItem", "position": 3, "name": "SosteniAMO il quartiere", "item": "https://cooperativaemmanuel.it/sosteniamo-il-quartiere" }
          ]
        })}
        </script>
      </Helmet>

      <PageHeader
        title="SosteniAMO il quartiere"
        description="Percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio – POC Legalità 2014-2020, Città Metropolitana di Napoli"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Target className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Il progetto in poche righe</h2>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>"SosteniAMO il quartiere"</strong> è un progetto della <strong>Città Metropolitana di Napoli</strong>,
                      finanziato dal <strong>POC Legalità 2014-2020</strong> (Asse IV, azione 4.1.2 – percorsi personalizzati di
                      inserimento sociale e lavorativo per giovani a rischio) e realizzato da un Raggruppamento Temporaneo di Imprese
                      con <strong>Cooperativa Sociale Emmanuel</strong> mandataria, insieme a EITD S.r.l., Associazione Maestri di Strada ETS
                      ed Esculapio Cooperativa Sociale.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">A chi si rivolge e come funziona</h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Il progetto si rivolge ad <strong>adolescenti e giovani</strong> dei quartieri dell'area metropolitana di Napoli,
                  incontrati attraverso i Comuni e l'<strong>educativa di strada</strong>, e propone un percorso in tre tempi che parte
                  dalla relazione e arriva a competenze riconosciute e documentate.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {phases.map((phase, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white h-8 w-8 font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <phase.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{phase.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{phase.text}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">I laboratori e i corsi della Cooperativa Emmanuel</h2>
              <p className="text-gray-600 mb-6">
                Afragola, Castello di Cisterna, Marigliano e Caivano. I laboratori sono percorsi teorico-pratici di avvicinamento
                al mestiere, con esercitazioni dimostrative e materiali portatili, condotti da esperti di mestiere con tutor d'aula in compresenza.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {emmanuelLabs.map((lab, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <lab.icon className="h-8 w-8 text-orange-500 mb-3" />
                    <h3 className="font-bold text-gray-800 mb-2">{lab.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{lab.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white border-2 border-orange-100 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Intorno ai laboratori: l'équipe di prossimità</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Coordinatrice ed educatori presenti nei luoghi di aggregazione dei quartieri (educativa di strada), in contatto con le famiglie e con i Comuni</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Servizio di ascolto e sostegno alla genitorialità con una psicologa, a cura del partner Esculapio Cooperativa Sociale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Documentazione individuale del percorso di ogni ragazzo: al termine, Portfolio delle competenze e attestato</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">I laboratori dei partner</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {partnerLabs.map((p, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-1">
                      <Handshake className="h-5 w-5 text-orange-500 mr-2" />
                      <h3 className="font-bold text-gray-800">{p.partner}</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{p.where}</p>
                    <ul className="space-y-2">
                      {p.labs.map((lab, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <lab.icon className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                          {lab.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">I territori</h2>
              <div className="bg-white border-2 border-orange-100 rounded-xl p-8 mb-12">
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {territories.map((t, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <MapPin className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium block">{t.name}</span>
                        <span className="text-sm text-gray-500">{t.note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Riferimenti del progetto</h2>
              <div className="bg-white border-2 border-orange-100 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-orange-500 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">
                    "Realizzazione di percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio devianza"
                  </h3>
                </div>
                <dl className="grid sm:grid-cols-2 gap-4">
                  {projectInfo.map((item, index) => (
                    <div key={index} className={`bg-gray-50 rounded-lg p-4 ${index === projectInfo.length - 1 ? 'sm:col-span-2' : ''}`}>
                      <dt className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{item.label}</dt>
                      <dd className="text-gray-800 font-medium mt-1 break-words">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={400}>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Richiedi Informazioni</h2>
                <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                  Per informazioni sul progetto SosteniAMO il quartiere e sulle attività nei territori, contattaci.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Phone className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Telefono</h3>
                    </div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold hover:text-orange-200 transition-colors block">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Mail className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Email</h3>
                    </div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-orange-200 transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul progetto SosteniAMO il quartiere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contattaci su WhatsApp
                  </a>
                  <Link
                    to="/contatti"
                    className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                  >
                    Vai ai Contatti <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>

              <p className="text-xs text-gray-500 text-center mt-6">
                Progetto finanziato dal POC Legalità 2014-2020 – Città Metropolitana di Napoli. Realizzato dal Raggruppamento Temporaneo di Imprese
                Cooperativa Sociale Emmanuel (mandataria), EITD S.r.l., Associazione Maestri di Strada ETS, Esculapio Cooperativa Sociale.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default SosteniamoIlQuartierePage;
