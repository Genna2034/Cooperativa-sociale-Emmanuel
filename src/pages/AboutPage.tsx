import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Target, ArrowRight, MapPin, Calendar, Phone, Shield, Stethoscope, Home as HomeIcon, GraduationCap, Briefcase, BookOpen, Scale } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { STATS, COOPERATIVE_PRINCIPLES, COOPERATIVE_ACTIVITIES } from '../constants';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Luigi Borriello',
      role: 'Presidente e Fondatore',
      qualifications: 'Imprenditore Sociale',
      description: 'Cristiano convinto, ha trasformato la sua fede in un impegno quotidiano verso gli ultimi e i più fragili. Con oltre 15 anni di esperienza nel settore dell\'assistenza domiciliare, è il visionario che ha fondato la Cooperativa Emmanuel nel 2010.',
      specialties: ['Leadership aziendale', 'Gestione servizi socio-sanitari', 'Relazioni istituzionali', 'Sviluppo strategico'],
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      name: 'Dott. Gennaro Borriello',
      role: 'Socio e Coordinatore Sanitario',
      qualifications: 'Infermiere Professionale',
      description: 'Infermiere professionale specializzato nel coordinamento e management dei servizi socio-sanitari. Si occupa della supervisione clinica di tutti i servizi ADI e della formazione continua del personale sanitario.',
      specialties: ['Coordinamento sanitario', 'Management ADI', 'Supervisione clinica', 'Formazione personale sanitario'],
      image: '/images/medium-shot-women-posing-together.jpg'
    },
    {
      name: 'Dott. Umberto Borriello',
      role: 'Socio e Responsabile Amministrativo',
      qualifications: 'Laureato in Economia',
      description: 'Laureato in Economia con specializzazione in gestione delle organizzazioni sanitarie. Si occupa della pianificazione economica, del controllo di gestione e dell\'ottimizzazione dei processi amministrativi della cooperativa.',
      specialties: ['Controllo di gestione', 'Pianificazione economica', 'Amministrazione sanitaria', 'Ottimizzazione processi'],
      image: '/images/closeup-support-hands.jpg'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassione',
      description: 'Ogni intervento è guidato dall\'amore e dal rispetto per la dignità umana.',
      image: '/images/closeup-support-hands.jpg'
    },
    {
      icon: Users,
      title: 'Professionalità',
      description: 'Team qualificato e costantemente aggiornato sulle migliori pratiche assistenziali.',
      image: '/images/medium-shot-women-posing-together.jpg'
    },
    {
      icon: Award,
      title: 'Qualità Certificata ISO 9001',
      description: 'Standard elevati nei servizi, conformi alle normative regionali della Campania con certificazione ISO 9001:2015.',
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      icon: Target,
      title: 'Personalizzazione',
      description: 'Ogni piano di assistenza è studiato sulle specifiche esigenze della persona.',
      image: '/images/closeup-support-hands.jpg'
    }
  ];

  const missionAreas = [
    {
      icon: Stethoscope,
      title: 'Assistenza Domiciliare Integrata (ADI)',
      description: 'Servizi sanitari autorizzati dalla Regione Campania per garantire cure mediche e infermieristiche professionali direttamente a domicilio.',
      features: [
        'Visite mediche specialistiche',
        'Assistenza infermieristica 24/7',
        'Fisioterapia e riabilitazione',
        'Supporto psicologico',
        'Coordinamento con medici di famiglia'
      ],
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      icon: Heart,
      title: 'Assistenza agli Anziani e Persone con Disabilità',
      description: 'Supporto completo per persone anziane e con disabilità, garantendo dignità, autonomia e qualità della vita nel proprio ambiente familiare.',
      features: [
        'Assistenza nelle attività quotidiane',
        'Compagnia e socializzazione',
        'Controllo parametri vitali',
        'Gestione terapie farmacologiche',
        'Supporto nutrizionale'
      ],
      image: '/images/medium-shot-women-posing-together.jpg'
    },
    {
      icon: BookOpen,
      title: 'Servizi Educativi e Assistenza Scolastica',
      description: 'Servizi educativi specialistici, supporto scolastico e attività formative per contrastare la dispersione scolastica e la povertà educativa.',
      features: [
        'Servizi pre e post scuola',
        'Tutoraggio educativo e doposcuola',
        'Supporto didattico personalizzato',
        'Laboratori creativi e didattici',
        'Mediazione culturale per stranieri'
      ],
      image: '/images/closeup-support-hands.jpg'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Fondazione della Cooperativa',
      description: 'Nasce la Cooperativa Sociale Emmanuel secondo la Legge 381/91, con la missione di assistere anziani, persone con disabilità e minori.',
      image: '/images/Logo.png'
    },
    {
      year: '2015',
      title: 'Accreditamento Regione Campania',
      description: 'Ottenimento dell\'accreditamento ufficiale per i servizi di Assistenza Domiciliare Integrata dalla Regione Campania.',
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      year: '2015',
      title: 'Autorizzazione ASL Napoli 1 Centro',
      description: 'Autorizzazione per l\'erogazione di servizi sanitari domiciliari nell\'ambito territoriale dell\'ASL Napoli 1 Centro.',
      image: '/images/medium-shot-women-posing-together.jpg'
    },
    {
      year: '2018',
      title: '1000 Famiglie Assistite',
      description: 'Raggiungimento del traguardo di 1000 famiglie assistite con servizi di qualità certificata.',
      image: '/images/closeup-support-hands.jpg'
    },
    {
      year: '2020',
      title: 'Certificazione ISO 9001:2015',
      description: 'Ottenimento della certificazione ISO 9001:2015 per il sistema di gestione qualità nei servizi socio-sanitari.',
      image: '/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg'
    },
    {
      year: '2024',
      title: 'Oltre 5000 Persone Assistite',
      description: 'Consolidamento come punto di riferimento per l\'assistenza domiciliare e i servizi educativi in Campania.',
      image: '/images/medium-shot-women-posing-together.jpg'
    }
  ];

  return (
    <>
      <PageHeader
        title="Chi Siamo"
        description="La storia, i valori e le persone che rendono Emmanuel un punto di riferimento per l'assistenza domiciliare e i servizi educativi in Campania"
        metaTitle="Chi Siamo - Cooperativa Sociale Emmanuel Napoli"
        metaDescription="Scopri la storia della Cooperativa Emmanuel, i nostri principi cooperativi, il team qualificato e i valori che ci guidano nell'assistenza domiciliare e nei servizi educativi."
        keywords="cooperativa sociale, Emmanuel, Napoli, assistenza domiciliare, Luigi Borriello, Gennaro Borriello infermiere, Umberto Borriello economia, team sanitario, legge 381/91"
      />

      {/* La Nostra Mission secondo la Legge 381/91 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Scale className="h-10 w-10 text-blue-600 mr-4" />
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                La Nostra Mission
              </h2>
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
                🏛️ Cooperativa Sociale secondo la Legge 381/91
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                La Cooperativa Sociale Emmanuel opera senza scopo di lucro in conformità alla Legge 381/91. 
                Il nostro obiettivo principale è perseguire l'interesse generale della comunità promuovendo 
                l'integrazione sociale e umana dei cittadini.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {missionAreas.map((area, index) => (
              <FadeInSection key={index} direction="up" delay={index * 200}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="mb-6">
                    <img 
                      src={area.image}
                      alt={area.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto">
                      <area.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{area.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{area.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Servizi Offerti:</h4>
                    <ul className="space-y-1">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principi Cooperativi */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                I Nostri Principi Cooperativi
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La Cooperativa si fonda sui principi cooperativi mondiali che guidano ogni nostra azione
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COOPERATIVE_PRINCIPLES.map((principle, index) => (
              <FadeInSection key={index} direction="up" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection direction="up" delay={600}>
            <div className="mt-12 bg-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Collaborazione e Autogestione
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                Per raggiungere i nostri scopi, la cooperativa coopera attivamente con altri enti del terzo settore. 
                Intendiamo realizzare i nostri obiettivi coinvolgendo volontari ed enti con finalità di solidarietà sociale, 
                promuovendo l'autogestione responsabile dell'impresa, anche grazie ai soci lavoratori che instaurano 
                un ulteriore rapporto di lavoro con la cooperativa, regolato da un apposito statuto.
              </p>
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium">
                🤝 Aderente alla Confederazione Cooperative Italiane
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Attività della Cooperativa */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Le Nostre Attività
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Servizi dedicati prioritariamente alla promozione di servizi sociali, sociosanitari, 
                assistenziali ed educativi per diverse categorie di persone vulnerabili
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COOPERATIVE_ACTIVITIES.map((category, index) => (
              <FadeInSection key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 200}>
                <div className="bg-gray-50 rounded-xl p-8 h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-6 w-6 text-blue-600 font-medium text-xs mr-3 mt-0.5 flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection direction="up" delay={800}>
            <div className="mt-12 bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Categorie di Persone Assistite
              </h3>
              <p className="text-gray-600 text-center mb-6">
                La cooperativa si dedica prioritariamente a diverse categorie di persone vulnerabili:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl mb-2">👴</div>
                  <div className="text-sm font-medium text-gray-800">Anziani</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl mb-2">♿</div>
                  <div className="text-sm font-medium text-gray-800">Disabili</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl mb-2">👶</div>
                  <div className="text-sm font-medium text-gray-800">Minori</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl mb-2">👩</div>
                  <div className="text-sm font-medium text-gray-800">Donne vittime di violenza</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="text-sm font-medium text-gray-800">Immigrati</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl mb-2">🏥</div>
                  <div className="text-sm font-medium text-gray-800">Tossicodipendenti</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl mb-2">🏛️</div>
                  <div className="text-sm font-medium text-gray-800">Detenuti</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl mb-2">🏠</div>
                  <div className="text-sm font-medium text-gray-800">Rifugiati</div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Team Dirigenziale */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Il Team Dirigenziale
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professionisti qualificati uniti dalla passione per l'assistenza e dal rispetto per la dignità umana
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <FadeInSection key={index} direction="up" delay={index * 200}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      {member.qualifications.includes('Infermiere') && <Stethoscope className="h-5 w-5 text-blue-600 mr-2" />}
                      {member.qualifications.includes('Economia') && <Briefcase className="h-5 w-5 text-green-600 mr-2" />}
                      {member.qualifications.includes('Imprenditore') && <Users className="h-5 w-5 text-purple-600 mr-2" />}
                      <span className="text-sm font-medium text-gray-600">{member.qualifications}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Competenze Specialistiche:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection direction="up" delay={600}>
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Team di Professionisti Qualificati
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                La Cooperativa Emmanuel si avvale di un team multidisciplinare di professionisti qualificati: 
                medici specialisti, infermieri professionali, fisioterapisti, operatori socio-sanitari, psicologi 
                ed educatori, tutti formati e costantemente aggiornati per garantire il massimo livello di assistenza.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Infermieri Professionali</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">8+</div>
                  <div className="text-sm text-gray-600">Fisioterapisti</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-gray-600">OSS Qualificati</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Educatori</div>
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
                Principi che guidano ogni nostra azione nell'assistenza domiciliare e nei servizi educativi
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeInSection key={index} direction="up" delay={index * 150}>
                <div className="text-center bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
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
                Oltre 15 anni di impegno nel territorio campano secondo la Legge 381/91
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
                Un percorso di crescita e dedizione al servizio delle famiglie campane secondo i principi cooperativi
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
                  <div className="flex-grow bg-white rounded-lg shadow-md p-6 flex items-center gap-6">
                    <img 
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
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
                  di assistenza domiciliare e educativi per la Campania. La nostra posizione strategica 
                  ci permette di raggiungere rapidamente ogni zona della regione con servizi certificati.
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
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Certificazione ISO 9001:2015</span>
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
                  come possiamo aiutarti con i nostri servizi secondo i principi cooperativi.
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