import React from 'react';
import { STATS } from '../constants';
import FadeInSection from './FadeInSection';

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <FadeInSection direction="left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Una realtà concreta, radicata sul territorio campano
              </h2>
            </FadeInSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {STATS.map((stat, index) => (
                <FadeInSection 
                  key={stat.id}
                  direction="up"
                  delay={index * 150}
                >
                  <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:bg-blue-100">
                    <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeInSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/medium-shot-women-posing-together.jpg"
                  alt="Team professionale Emmanuel"
                  className="rounded-lg shadow-xl w-full h-48 object-cover transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                />
                <img 
                  src="/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
                  alt="Assistenza domiciliare qualificata"
                  className="rounded-lg shadow-xl w-full h-48 object-cover transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] mt-8"
                />
                <img 
                  src="/images/closeup-support-hands.jpg"
                  alt="Supporto e cura"
                  className="rounded-lg shadow-xl w-full h-48 object-cover transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] -mt-8"
                />
                <img 
                  src="/images/Logo.png"
                  alt="Logo Emmanuel"
                  className="rounded-lg shadow-xl w-full h-48 object-contain bg-white p-4 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;