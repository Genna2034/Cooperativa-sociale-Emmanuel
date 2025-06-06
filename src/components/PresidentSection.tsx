import React from 'react';

const PresidentSection = () => {
  return (
    <section id="chi-siamo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/7551754/pexels-photo-7551754.jpeg"
              alt="Assistenza domiciliare professionale"
              className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[500px]"
            />
          </div>
          
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
              Il Nostro Presidente
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Un presidente mosso dalla fede e dall'amore per il prossimo
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                Luigi Borriello, presidente della Cooperativa Emmanuel, guida con passione e compassione una realtà che nasce dall'amore per il prossimo. Cristiano convinto, ha trasformato la sua fede in un impegno quotidiano verso gli ultimi e i più fragili.
              </p>
              
              <p>
                Con oltre 15 anni di dedizione nel settore dell'assistenza domiciliare, Luigi è oggi punto di riferimento per centinaia di famiglie che si affidano alla sua visione umana, etica e solidale dell'assistenza.
              </p>
              
              <blockquote className="pl-4 border-l-4 border-blue-600 italic">
                "La nostra missione è portare conforto, dignità e sostegno a chi è in difficoltà, trasformando la cura in un atto d'amore quotidiano."
              </blockquote>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="h-1 w-12 bg-blue-600 mr-4"></div>
              <span className="text-blue-700 font-medium">Luigi Borriello, Presidente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentSection;