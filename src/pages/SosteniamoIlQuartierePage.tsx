import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Heart, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, MapPin, Target, FileText, Compass } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const SosteniamoIlQuartierePage = () => {
  const municipalities = ['Napoli', 'Afragola', 'Caivano', 'Castello di Cisterna', 'Giugliano in Campania', 'Marigliano'];

  const serviceFeatures = [
    { icon: Compass, text: 'Percorsi personalizzati costruiti con il giovane' },
    { icon: Briefcase, text: 'Orientamento, formazione e inserimento lavorativo' },
    { icon: Users, text: 'Educativa di strada e presenza nel quartiere' },
    { icon: Heart, text: 'Sostegno alle famiglie e lavoro di rete' }
  ];

  const steps = [
    { title: 'Aggancio e ascolto', text: 'Intercettazione dei giovani a rischio attraverso la rete territoriale (scuole, servizi sociali, parrocchie, associazioni) e primi colloqui di conoscenza.' },
    { title: 'Progetto individuale', text: 'Definizione, insieme al giovane e alla famiglia, di un percorso con obiettivi concreti di crescita personale, formativa e lavorativa.' },
    { title: 'Accompagnamento', text: 'Tutoraggio educativo, laboratori, orientamento professionale, tirocini e inserimenti in contesti lavorativi del territorio.' },
    { title: 'Autonomia e monitoraggio', text: 'Verifica dei risultati e sostegno nella fase di uscita, per consolidare l\'inserimento sociale e lavorativo raggiunto.' }
  ];

  const projectInfo = [
    { label: 'Progetto', value: 'SOSTENIAMO IL QUARTIERE' },
    { label: 'CUP', value: 'H69G25000020001' },
    { label: 'CUI', value: 'S01263370635202500037' },
    { label: 'Territorio', value: 'Napoli, Afragola, Caivano, Castello di Cisterna, Giugliano in Campania, Marigliano' }
  ];

  return (
    <>
      <Helmet>
        <title>Sosteniamo il Quartiere – Inserimento sociale e lavorativo giovani | Cooperativa Emmanuel</title>
        <meta name="description" content="Progetto Sosteniamo il Quartiere: percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio devianza nei Comuni di Napoli, Afragola, Caivano, Castello di Cisterna, Giugliano in Campania e Marigliano." />
        <meta name="keywords" content="sosteniamo il quartiere, giovani a rischio devianza, inserimento lavorativo giovani napoli, inclusione sociale giovani, caivano, afragola, giugliano, marigliano, castello di cisterna, cooperativa emmanuel" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/sosteniamo-il-quartiere" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sosteniamo il Quartiere – Cooperativa Emmanuel" />
        <meta property="og:description" content="Percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio devianza nell'area metropolitana di Napoli." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/sosteniamo-il-quartiere" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Sosteniamo il Quartiere – Percorsi di inserimento sociale e lavorativo per giovani a rischio devianza",
          "serviceType": "Inclusione sociale e lavorativa",
          "description": "Realizzazione di percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio devianza nei Comuni di Napoli, Afragola, Caivano, Castello di Cisterna, Giugliano in Campania e Marigliano.",
          "provider": {
            "@type": "Organization",
            "name": "Cooperativa Sociale Emmanuel",
            "url": "https://cooperativaemmanuel.it"
          },
          "areaServed": municipalities.map((name) => ({ "@type": "City", "name": name })),
          "audience": {
            "@type": "PeopleAudience",
            "audienceType": "Giovani a rischio devianza"
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
            { "@type": "ListItem", "position": 3, "name": "Sosteniamo il Quartiere", "item": "https://cooperativaemmanuel.it/sosteniamo-il-quartiere" }
          ]
        })}
        </script>
      </Helmet>

      <PageHeader
        title="Sosteniamo il Quartiere"
        description="Percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio devianza"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <Target className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Ripartire dal quartiere, insieme ai giovani</h2>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Sosteniamo il Quartiere</strong> è un progetto che realizza percorsi personalizzati di inserimento
                      sociale e lavorativo per giovani a rischio di devianza, nei Comuni di Napoli, Afragola, Caivano, Castello di
                      Cisterna, Giugliano in Campania e Marigliano. L'obiettivo è offrire un'alternativa concreta, costruita su misura
                      e radicata nel territorio.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Il progetto</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Molti ragazzi dei quartieri più fragili dell'area metropolitana di Napoli vivono situazioni di abbandono scolastico,
                  assenza di prospettive e esposizione a contesti devianti. Il progetto interviene su questa fragilità con un
                  <strong> approccio educativo e di prossimità</strong>: operatori presenti nel quartiere, relazioni di fiducia e
                  percorsi individuali che partono dai talenti e dai desideri di ciascun giovane.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ogni percorso integra <strong>sostegno educativo, orientamento, formazione e accompagnamento al lavoro</strong>,
                  attivando la rete di scuole, servizi sociali, imprese, associazioni e realtà del terzo settore presenti sul
                  territorio dei sei Comuni coinvolti.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  La Cooperativa Emmanuel mette in campo la propria esperienza nei servizi educativi e nel lavoro di rete per
                  trasformare il rischio in opportunità, restituendo ai giovani un ruolo attivo nella propria comunità.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cosa offriamo</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                    <feature.icon className="h-8 w-8 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Come funziona il percorso</h2>
              <div className="space-y-4 mb-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6">
                    <span className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white h-8 w-8 font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">I Comuni coinvolti</h2>
              <div className="bg-white border-2 border-orange-100 rounded-xl p-8 mb-12">
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {municipalities.map((city, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                      <span className="font-medium">{city}</span>
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
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
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
                  Sei un giovane, un genitore, un insegnante o un operatore? Contattaci per saperne di più sul progetto
                  Sosteniamo il Quartiere.
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
                    href="https://wa.me/390817877064?text=Ciao! Vorrei informazioni sul progetto Sosteniamo il Quartiere"
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
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default SosteniamoIlQuartierePage;
