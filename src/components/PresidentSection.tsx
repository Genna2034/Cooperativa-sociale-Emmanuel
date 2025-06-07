import React from 'react';
import FadeInSection from './FadeInSection';

const PresidentSection = () => {
  return (
    <section id="chi-siamo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection direction="left">
            <div>
              <img 
                src="/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
                alt="Assistenza domiciliare professionale"
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
                Un presidente mosso dalla fede e dall'amore per il prossimo
              </h2>
            </FadeInSection>
            
            <div className="space-y-6 text-gray-600">
              <FadeInSection direction="right" delay={400}>
                <p>
                  Luigi Borriello, presidente della Cooperativa Emmanuel, guida con passione e compassione una realtà che nasce dall'amore per il prossimo. Cristiano convinto, ha trasformato la sua fede in un impegno quotidiano verso gli ultimi e i più fragili, ispirandosi al comandamento biblico <em>"Ama il tuo prossimo come te stesso"</em> (Matteo 22:39).
                </p>
              </FadeInSection>
              
              <FadeInSection direction="right" delay={500}>
                <p>
                  Con oltre 15 anni di dedizione nel settore dell'assistenza domiciliare, Luigi è oggi punto di riferimento per centinaia di famiglie che si affidano alla sua visione umana, etica e solidale dell'assistenza. La sua missione trova fondamento nelle parole di Gesù: <em>"Tutto quello che avete fatto a uno solo di questi miei fratelli più piccoli, l'avete fatto a me"</em> (Matteo 25:40).
                </p>
              </FadeInSection>
              
              <FadeInSection direction="right" delay={600}>
                <blockquote className="pl-4 border-l-4 border-blue-600 italic">
                  "La nostra missione è portare conforto, dignità e sostegno a chi è in difficoltà, trasformando la cura in un atto d'amore quotidiano, seguendo l'insegnamento di Cristo di amare il prossimo come noi stessi."
                </blockquote>
              </FadeInSection>
              
              <FadeInSection direction="right" delay={700}>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Fondamento Spirituale</h4>
                  <p className="text-sm text-gray-600">
                    La Cooperativa Emmanuel trova la sua ispirazione nel Vangelo e nei valori cristiani di solidarietà, 
                    compassione e servizio verso chi ha più bisogno, rendendo concreto ogni giorno il messaggio d'amore di Cristo.
                  </p>
                </div>
              </FadeInSection>
            </div>
            
            <FadeInSection direction="right" delay={800}>
              <div className="mt-8 flex items-center">
                <div className="h-1 w-12 bg-blue-600 mr-4"></div>
                <span className="text-blue-700 font-medium">Luigi Borriello, Presidente</span>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentSection;