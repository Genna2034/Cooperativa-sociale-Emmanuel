import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import PresidentSection from './components/PresidentSection';
import BlogSection from './components/BlogSection';
import ReviewsSection from './components/ReviewsSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AccessibilityWidget from './components/AccessibilityWidget';
import CookieConsent from './components/CookieConsent';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead />
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PresidentSection />
        <BlogSection />
        <ReviewsSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <AccessibilityWidget />
      <CookieConsent />
    </div>
  );
}

export default App;