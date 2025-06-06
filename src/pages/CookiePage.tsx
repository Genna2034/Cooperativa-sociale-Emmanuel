import React from 'react';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';

const CookiePage = () => {
  const cookieTypes = [
    {
      icon: Settings,
      title: 'Cookie Tecnici',
      description: 'Necessari per il funzionamento del sito',
      required: true,
      examples: ['Sessione utente', 'Preferenze lingua', 'Carrello acquisti']
    },
    {
      icon: BarChart,
      title: 'Cookie Analitici',
      description: 'Per migliorare le performance del sito',
      required: false,
      examples: ['Google Analytics', 'Statistiche visite', 'Comportamento utenti']
    },
    {
      icon: Shield,
      title: 'Cookie di Sicurezza',
      description: 'Per proteggere il sito da attacchi',
      required: true,
      examples: ['Protezione CSRF', 'Prevenzione bot', 'Sicurezza form']
    }
  ];

  return (
    <>
      <PageHeader
        title="Cookie Policy"
        description="Informazioni sui cookie utilizzati dal nostro sito web"
        metaTitle="Cookie Policy - Cooperativa Emmanuel"
        metaDescription="Cookie Policy della Cooperativa Emmanuel. Informazioni complete sui cookie utilizzati dal nostro sito web."
        keywords="cookie policy, cookie tecnici, privacy, cooperativa Emmanuel"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeInSection direction="up">
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <Cookie className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 mb-0">
                  Cosa sono i Cookie?
                </h2>
              </div>
              <p className="text-gray-600 mb-0">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo 
                quando visiti un sito web. Ci aiutano a migliorare la tua esperienza di navigazione.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection direction="up" delay={200}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Tipi di Cookie Utilizzati</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      <type.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{type.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        type.required ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {type.required ? 'Necessari' : 'Opzionali'}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Esempi:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection direction="up" delay={400}>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Cookie Specifici del Nostro Sito</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Nome Cookie</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Scopo</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Durata</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">cookieConsent</td>
                      <td className="border border-gray-300 px-4 py-2">Memorizza le preferenze sui cookie</td>
                      <td className="border border-gray-300 px-4 py-2">1 anno</td>
                      <td className="border border-gray-300 px-4 py-2">Tecnico</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - Identificazione utenti</td>
                      <td className="border border-gray-300 px-4 py-2">2 anni</td>
                      <td className="border border-gray-300 px-4 py-2">Analitico</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_gid</td>
                      <td className="border border-gray-300 px-4 py-2">Google Analytics - Identificazione sessioni</td>
                      <td className="border border-gray-300 px-4 py-2">24 ore</td>
                      <td className="border border-gray-300 px-4 py-2">Analitico</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Come Gestire i Cookie</h3>
              
              <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Impostazioni del Browser</h4>
                <p className="text-gray-600 mb-4">
                  Puoi gestire i cookie direttamente dalle impostazioni del tuo browser:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
                  <li><strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie</li>
                  <li><strong>Safari:</strong> Preferenze → Privacy → Cookie</li>
                  <li><strong>Edge:</strong> Impostazioni → Privacy → Cookie</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">I Tuoi Diritti</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Accettare o rifiutare i cookie non necessari</li>
                <li>Modificare le tue preferenze in qualsiasi momento</li>
                <li>Eliminare i cookie già memorizzati</li>
                <li>Navigare in modalità privata/incognito</li>
              </ul>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-3">Nota Importante</h4>
                <p className="text-gray-600 mb-0">
                  Disabilitare i cookie tecnici potrebbe compromettere il corretto funzionamento 
                  del sito web. I cookie analitici sono opzionali e puoi rifiutarli senza 
                  influire sulla navigazione.
                </p>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default CookiePage;