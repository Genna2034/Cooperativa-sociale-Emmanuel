import React from 'react';
import { STATS } from '../constants';

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Una realtà concreta, radicata sul territorio campano
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {STATS.map((stat) => (
                <div 
                  key={stat.id}
                  className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100 transform transition-all duration-300 hover:scale-105 hover:bg-blue-100"
                >
                  <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <img 
              src="https://images.pexels.com/photos/7551838/pexels-photo-7551838.jpeg"
              alt="Assistenza domiciliare qualificata"
              className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[500px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;