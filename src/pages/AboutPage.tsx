import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Target, ArrowRight, MapPin, Calendar, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { STATS } from '../constants';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Luigi Borriello',
      role: 'Presidente',
      description: 'Cristiano convinto, ha trasformato la sua fede in un impegno quotidiano verso gli ultimi e i più fragili. Con oltre 15 anni di esperienza nel settore dell\'assistenza domiciliare.',
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      name: 'Dott. Gennaro Borriello',
      role: 'Socio',
      description: 'Professionista sanitario con esperienza pluriennale nel settore sociosanitario, specializzato in assistenza domiciliare integrata.',
      image: '/images/medium-shot-women-posing-together.jpg'
    },
    {
      name: 'Dott. Umberto Borriello',
      role: 'Socio',
      description: 'Esperto in gestione dei servizi sanitari territoriali, con particolare focus sui servizi ADI in Campania.',
      image: '/images/closeup-support-hands.jpg'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassione',
      description: 'Ogni intervento è guidato dall\'amore e dal rispetto per la dignità umana.'
    },
    {
      icon: Users,
      title: 'Professionalità',
      description: 'Team qualificato e costantemente aggiornato sulle migliori pratiche assistenziali.'
    },
    {
      icon: Award,
      title: 'Qualità',
      description: 'Standard elevati nei servizi, conformi alle normative regionali della Campania.'
    },
    {
      icon: Target,
      title: 'Personalizzazione',
      description: 'Ogni piano di assistenza è studiato sulle specifiche esigenze della persona.'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Fondazione della Cooperativa',
      description: 'Nasce la Cooperativa Sociale Emmanuel con la missione di assistere anziani e persone con disabilità.'
    },
    {
      year: '2012',
      title: 'Autorizzazione ADI',
      description: 'Ottenimento dell\'autorizzazione per i servizi di Assistenza Domiciliare Integrata dalla Regione Campania.'
    },
    {
      year: '2015',
      title: 'Espansione Territoriale',
      description: 'Estensione dei servizi a tutta la provincia di Napoli e aree limitrofe della Campania.'
    },
    {
      year: '2018',
      title: '1000 Famiglie Assistite',
      description: 'Raggiungimento del traguardo di 1000 famiglie assistite con servizi di qualità.'
    },
    {
      year: '2020',
      title: 'Servizi COVID-19',
      description: 'Adattamento dei servizi durante la pandemia, garantendo continuità assistenziale in sicurezza.'
    },
    {
      year: '2024',
      title: 'Oltre 5000 Persone Assistite',
      description: 'Consolidamento come punto di riferimento per l\'assistenza domiciliare in Campania.'
    }
  ];

  return (
    <>
      <PageHeader
        title="Chi Siamo"
        description="La storia, i valori e le persone che rendono Emmanuel un punto di riferimento per l'assistenza domiciliare in Campania"
        metaTitle="Chi Siamo - Cooperativa Sociale Emmanuel Napoli"
        metaDescription="Scopri la storia della Cooperativa Emmanuel, il nostro team e i valori che ci guidano nell'assistenza domiciliare a Napoli e in Campania."
        keywords="cooperativa sociale, Emmanuel, Napoli, assistenza domiciliare, Luigi Borriello, team sanitario"
      />

      {/* Sezione Presidente */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div>
                <img 
                  src="/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
                  alt="Luigi Borriello - Presidente Cooperativa Emmanuel"
                  className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[500px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                />
              </div>
            </FadeInSection>
            
            <div>
              <FadeInSection direction="right" delay={200}>
                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
                  Il Nostro Presidente
                </div>
              </FadeInSection>
              
              <FadeInSection direction="right" delay={300}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Luigi Borriello: Un Cuore al Servizio del Prossimo
                </h2>
              </FadeInSection>
              
              <div className="space-y-6 text-gray-600">
                <FadeInSection direction="right" delay={400}>
                  <p>
                    Luigi Borriello, presidente della Cooperativa Emmanuel, guida con passione e compassione una realtà che nasce dall'amore per il prossimo. Cristiano convinto, ha trasformato la sua fede in un impegno quotidiano verso gli ultimi e i più fragili.
                  </p>
                </FadeInSection>
                
                <FadeInSection direction="right" delay={500}>
                  <p>
                    Con oltre 15 anni di dedizione nel settore dell'assistenza domiciliare, Luigi è oggi punto di riferimento per centinaia di famiglie che si affidano alla sua visione umana, etica e solidale dell'assistenza.
                  </p>
                </FadeInSection>
                
                <FadeInSection direction="right" delay={600}>
                  <blockquote className="pl-4 border-l-4 border-blue-600 italic text-lg">
                    "La nostra missione è portare conforto, dignità e sostegno a chi è in difficoltà, trasformando la cura in un atto d'amore quotidiano."
                  </blockquote>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Il Nostro Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professionisti uniti dalla passione per l'assistenza e dal rispetto per la dignità umana
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <FadeInSection key={index} direction="up" delay={index * 200}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection direction="up" delay={600}>
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Team di Professionisti Sanitari
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                La Cooperativa Emmanuel si avvale di un team multidisciplinare di professionisti sanitari qualificati: 
                medici specialisti, infermieri professionali, fisioterapisti, operatori socio-sanitari e psicologi, 
                tutti formati e costantemente aggiornati per garantire il massimo livello di assistenza.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Infermieri</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">8+</div>
                  <div className="text-sm text-gray-600">Fisioterapisti</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-gray-600">OSS</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Specialisti</div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Valori */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                I Nostri Valori
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Principi che guidano ogni nostra azione nell'assistenza domiciliare
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={index} direction="up" delay={index * 150}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiche */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                I Nostri Numeri
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Oltre 15 anni di impegno nel territorio campano
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <FadeInSection key={stat.id} direction="up" delay={index * 150}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Storia e Milestones */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                La Nostra Storia
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un percorso di crescita e dedizione al servizio delle famiglie campane
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <FadeInSection key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 200}>
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-bold">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-grow bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti e Sede */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  La Nostra Sede
                </h2>
                <p className="text-gray-600 mb-6">
                  La Cooperativa Emmanuel ha sede nel cuore di Napoli, da dove coordina tutti i servizi 
                  di assistenza domiciliare per la Campania. La nostra posizione strategica ci permette 
                  di raggiungere rapidamente ogni zona della regione.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Napoli, Campania - Italia</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+39 081 7877064</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Lun-Ven: 9:00-18:00, Sab: 9:00-13:00</span>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={300}>
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Vuoi Conoscerci Meglio?
                </h3>
                <p className="text-gray-600 mb-6">
                  Siamo sempre disponibili per raccontarti la nostra storia e spiegarti 
                  come possiamo aiutarti nel percorso di assistenza.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contatti"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Contattaci <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link 
                    to="/prenotazioni"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors text-center"
                  >
                    Prenota Visita
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

export default AboutPage;