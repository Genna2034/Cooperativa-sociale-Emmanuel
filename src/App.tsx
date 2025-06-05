import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import PresidentSection from './components/PresidentSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PresidentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;