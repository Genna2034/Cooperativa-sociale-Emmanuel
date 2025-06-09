import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityWidget from './components/AccessibilityWidget';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

// Lazy loading delle pagine per performance ottimali
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePage from './pages/CookiePage';
import NotFoundPage from './pages/NotFoundPage';
import ADIProcessPage from './pages/ADIProcessPage';
import StaffAreaPage from './pages/StaffAreaPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <ScrollToTop />
          
          <Routes>
            {/* Area Staff - Layout separato senza header/footer */}
            <Route path="/staff" element={<StaffAreaPage />} />
            
            {/* Pagine pubbliche con layout normale */}
            <Route path="/*" element={
              <>
                <Header />
                <main className="pt-20">
                  <Routes>
                    <Route path="/\" element={<HomePage />} />
                    <Route path="/servizi" element={<ServicesPage />} />
                    <Route path="/chi-siamo" element={<AboutPage />} />
                    <Route path="/recensioni" element={<ReviewsPage />} />
                    <Route path="/prenotazioni" element={<BookingPage />} />
                    <Route path="/contatti" element={<ContactPage />} />
                    <Route path="/lavora-con-noi" element={<CareersPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/cookie" element={<CookiePage />} />
                    <Route path="/come-richiedere-adi" element={<ADIProcessPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </main>
                <Footer />
                <AccessibilityWidget />
                <CookieConsent />
                <ChatWidget />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;