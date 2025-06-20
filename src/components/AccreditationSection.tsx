import React from 'react';
import { Shield, Award, CheckCircle, ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';

const AccreditationSection = () => {
  const accreditations = [
    {
      title: 'Accreditamento Regione Campania',
      description: 'Cooperativa accreditata per l\'erogazione di servizi di Assistenza Domiciliare Integrata (ADI) secondo le normative regionali della Campania.',
      authority: 'Regione Campania - Settore Sanità',
      validFrom: '2015',
      link: 'https://aslnapoli1centro.portaleamministrazionetrasparente.it/archivio28_provvedimenti-amministrativi_0_288592_725_1.html',
      logo: '/images/Logo.png'
    },
    {
      title: 'Certificazione ISO 9001:2015',
      description: 'Sistema di gestione qualità certificato secondo gli standard internazionali per garantire l\'eccellenza nei servizi socio-sanitari.',
      authority: 'Ente Certificatore Accreditato',
      validFrom: '2020',
      logo: '/images/Logo.png'
    },
    {
      title: 'Autorizzazione ASL Napoli 1 Centro',
      description: 'Autorizzazione per l\'erogazione di servizi sanitari domiciliari nell\'ambito territoriale dell\'ASL Napoli 1 Centro.',
      authority: 'ASL Napoli 1 Centro',
      validFrom: '2015',
      link: 'https://aslnapoli1centro.portaleamministrazionetrasparente.it/archivio28_provvedimenti-amministrativi_0_288592_725_1.html',
      logo: '/images/Logo.png'
    }
  ];

  const qualityStandards = [
    'Conformità alle normative regionali della Campania per l\'ADI',
    'Rispetto dei protocolli sanitari nazionali',
    'Formazione continua del personale sanitario',
    'Monitoraggio costante della qualità dei servizi',
    'Trasparenza amministrativa e gestionale',
    'Coordinamento con le strutture sanitarie territoriali'
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection direction="up">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Accreditamenti e Certificazioni Ufficiali
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La Cooperativa Emmanuel è ufficialmente accreditata con la Regione Campania 
              per l'erogazione di servizi di Assistenza Domiciliare Integrata dal 2015
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {accreditations.map((accreditation, index) => (
            <FadeInSection key={index} direction="up" delay={index * 200}>
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 h-full border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <img 
                    src={accreditation.logo}
                    alt={`Logo ${accreditation.title}`}
                    className="h-16 w-16 bg-white rounded-lg shadow-sm p-1 object-contain mr-4"
                  />
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{accreditation.title}</h3>
                <p className="text-gray-600 mb-4">{accreditation.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="text-sm">
                    <span className="font-semibold text-gray-700">Autorità:</span>
                    <span className="text-gray-600 ml-2">{accreditation.authority}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-700">Valido dal:</span>
                    <span className="text-gray-600 ml-2">{accreditation.validFrom}</span>
                  </div>
                </div>
                
                {accreditation.link && (
                  <a 
                    href={accreditation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Verifica Accreditamento <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection direction="up" delay={600}>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Standard di Qualità Garantiti
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualityStandards.map((standard, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{standard}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Riferimenti Normativi</h4>
              <div className="text-sm text-gray-600 space-y-2">
                <p>• <strong>Delibera Regione Campania n. 92/2015:</strong> Accreditamento per servizi ADI</p>
                <p>• <strong>D.G.R. Campania n. 445/2018:</strong> Aggiornamento requisiti strutturali e organizzativi</p>
                <p>• <strong>ASL Napoli 1 Centro:</strong> Autorizzazione servizi sanitari domiciliari</p>
                <p>• <strong>Certificazione ISO 9001:2015:</strong> Sistema di gestione qualità</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AccreditationSection;