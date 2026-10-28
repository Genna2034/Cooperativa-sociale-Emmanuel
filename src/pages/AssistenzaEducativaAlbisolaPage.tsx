import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Heart, Phone, Mail, MessageCircle, ArrowRight, CheckCircle, Target, FileText, School, HandHeart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { CONTACT_INFO } from '../constants';

const AssistenzaEducativaAlbisolaPage = () => {
  const serviceFeatures = [
    { icon: Users, text: 'Educatori professionali dedicati, in rapporto individualizzato con l\'alunno' },
    { icon: Target, text: 'Interventi coerenti con il PEI e con gli obiettivi definiti dal GLO' },
    { icon: School, text: 'Collaborazione con docenti di sostegno, curricolari e dirigenza scolastica' },
    { icon: Heart, text: 'Alleanza educativa con le famiglie e con i servizi socio-sanitari' }
  ];

  const activities = [
    'Supporto all\'autonomia personale, alla comunicazione e alla relazione con i compagni',
    'Mediazione e facilitazione della partecipazione alle attività didattiche e laboratoriali',
    'Accompagnamento nei momenti della giornata scolastica: ingresso, intervallo, mensa, uscite didattiche',
    'Affiancamento nell\'uso di ausili e strumenti compensativi',
    'Osservazione, documentazione e verifica periodica degli obiettivi educativi',
    'Continuità dell\'operatore nel corso dell\'anno scolastico e sostituzione con pari qualifica'
  ];

  const projectInfo = [
    { label: 'Servizio', value: 'Assistenza educativa specialistica per l\'integrazione degli alunni diversamente abili' },
    { label: 'Ente', value: 'Comune di Albisola Superiore (SV)' },
    { label: 'Destinatari', value: 'Alunni con disabilità residenti nel Comune di Albisola Superiore, aventi diritto e frequentanti le scuole' },
    { label: 'Territorio', value: 'Albisola Superiore e Albissola Marina' }
  ];

  return (
    <>
      <Helmet>
        <title>Assistenza Educativa Specialistica Scuole – Albisola Superiore | Cooperativa Emmanuel</title>
        <meta name="description" content="Servizio di assistenza educativa specialistica per l'integrazione degli alunni diversamente abili residenti nel Comune di Albisola Superiore: educatori dedicati, PEI, collaborazione con scuole e famiglie." />
        <meta name="keywords" content="assistenza educativa specialistica albisola, integrazione alunni disabili albisola superiore, educatore scolastico albisola, assistenza scolastica disabilità savona, albissola marina, cooperativa emmanuel" />
        <link rel="canonical" href="https://cooperativaemmanuel.it/assistenza-educativa-specialistica-albisola-scuole" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Assistenza Educativa Specialistica Scuole – Albisola Superiore | Cooperativa Emmanuel" />
        <meta property="og:description" content="Educatori specializzati per l'integrazione scolastica degli alunni con disabilità del Comune di Albisola Superiore." />
        <meta property="og:url" content="https://cooperativaemmanuel.it/assistenza-educativa-specialistica-albisola-scuole" />

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Assistenza educativa specialistica per l'integrazione degli alunni diversamente abili – Albisola Superiore",
          "serviceType": "Assistenza educativa scolastica",
          "description": "Servizio di assistenza educativa specialistica per l'integrazione degli alunni diversamente abili residenti nel Comune di Albisola Superiore, aventi diritto e frequentanti le scuole.",
          "provider": { "@type": "Organization", "name": "Cooperativa Sociale Emmanuel", "url": "https://cooperativaemmanuel.it" },
          "areaServed": [
            { "@type": "City", "name": "Albisola Superiore" },
            { "@type": "City", "name": "Albissola Marina" }
          ],
          "audience": { "@type": "PeopleAudience", "audienceType": "Alunni con disabilità e loro famiglie" }
        })}
        </script>

        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cooperativaemmanuel.it/" },
            { "@type": "ListItem", "position": 2, "name": "Progetti", "item": "https://cooperativaemmanuel.it/progetti" },
            { "@type": "ListItem", "position": 3, "name": "Assistenza educativa Albisola", "item": "https://cooperativaemmanuel.it/assistenza-educativa-specialistica-albisola-scuole" }
          ]
        })}
        </script>
      </Helmet>

      <PageHeader
        manageMeta={false}
        title="Assistenza Educativa Specialistica – Albisola Superiore"
        description="Integrazione scolastica degli alunni diversamente abili residenti nel Comune di Albisola Superiore"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg mb-12">
                <div className="flex items-start">
                  <GraduationCap className="h-8 w-8 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Un educatore accanto a ogni alunno</h2>
                    <p className="text-gray-700 leading-relaxed">
                      La Cooperativa Emmanuel gestisce per il <strong>Comune di Albisola Superiore</strong> il servizio di
                      <strong> assistenza educativa specialistica per l'integrazione degli alunni diversamente abili</strong>,
                      rivolto agli alunni residenti nel Comune, aventi diritto e frequentanti le scuole del territorio di
                      Albisola Superiore e Albissola Marina.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={100}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Cos'è il servizio</h2>
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-600 leading-relaxed mb-4">
                  L'assistenza educativa specialistica è il servizio con cui il Comune garantisce agli alunni con disabilità il
                  <strong> diritto allo studio e alla piena partecipazione alla vita scolastica</strong>, in attuazione della
                  normativa sull'inclusione (L. 104/1992 e D.Lgs. 66/2017). L'educatore affianca l'alunno a scuola, in modo
                  distinto e complementare rispetto al docente di sostegno, lavorando su autonomia, comunicazione, relazione e
                  partecipazione.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ogni intervento è costruito sul <strong>Piano Educativo Individualizzato (PEI)</strong> e condiviso nel
                  Gruppo di Lavoro Operativo con docenti, famiglia e servizi sanitari: obiettivi chiari, strumenti adeguati e
                  verifiche periodiche.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  La Cooperativa assicura la <strong>continuità dell'educatore</strong> per tutto l'anno scolastico, la
                  sostituzione con personale di pari qualifica in caso di assenza e il coordinamento pedagogico del servizio.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={200}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Come lavoriamo</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {serviceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-gray-50 rounded-xl p-6">
                    <feature.icon className="h-8 w-8 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <HandHeart className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Le attività dell'educatore</h3>
                </div>
                <ul className="space-y-3">
                  {activities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Riferimenti del servizio</h2>
              <div className="bg-white border-2 border-purple-100 rounded-xl p-8 mb-12">
                <div className="flex items-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-800">Affidamento del Comune di Albisola Superiore</h3>
                </div>
                <dl className="grid sm:grid-cols-2 gap-4">
                  {projectInfo.map((item, index) => (
                    <div key={index} className={`bg-gray-50 rounded-lg p-4 ${index === 0 || index === 2 ? 'sm:col-span-2' : ''}`}>
                      <dt className="text-xs uppercase tracking-wide text-gray-500 font-semibold">{item.label}</dt>
                      <dd className="text-gray-800 font-medium mt-1">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={400}>
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Richiedi Informazioni</h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Sei un genitore, un insegnante o un referente del Comune? Contattaci per informazioni sul servizio ad Albisola.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Phone className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Telefono</h3>
                    </div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold hover:text-purple-200 transition-colors block">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Mail className="h-6 w-6 mr-3" />
                      <h3 className="text-lg font-bold">Email</h3>
                    </div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-purple-200 transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/390817877064?text=Ciao! Vorrei informazioni sull'assistenza educativa specialistica ad Albisola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contattaci su WhatsApp
                  </a>
                  <Link
                    to="/micronido-albisola-superiore"
                    className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                  >
                    Micronido Albisola <ArrowRight className="ml-2 h-5 w-5" />
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

export default AssistenzaEducativaAlbisolaPage;
