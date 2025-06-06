import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityWidget from './components/AccessibilityWidget';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading delle pagine per performance ottimali
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <ScrollToTop />
          <Header />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/servizi" element={<ServicesPage />} />
              <Route path="/chi-siamo" element={<AboutPage />} />
              <Route path="/recensioni" element={<ReviewsPage />} />
              <Route path="/prenotazioni" element={<BookingPage />} />
              <Route path="/contatti" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <AccessibilityWidget />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;