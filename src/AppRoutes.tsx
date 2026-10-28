import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityWidget from './components/AccessibilityWidget';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

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
import MicronidoRomaganoPage from './pages/MicronidoRomaganoPage';
import ADINapoliPage from './pages/ADINapoliPage';
import InfermiereDomicilioPage from './pages/InfermiereDomicilioPage';
import FisioterapiaDomicilioPage from './pages/FisioterapiaDomicilioPage';
import MicronidoAlbiolaPage from './pages/MicronidoAlbiolaPage';
import EducativaDomiciliareAmbito12Page from './pages/EducativaDomiciliareAmbito12Page';
import NidoSanGeminiPage from './pages/NidoSanGeminiPage';
import ADIPorticiPage from './pages/ADIPorticiPage';
import SADPorticiPage from './pages/SADPorticiPage';
import SADCasoriaPage from './pages/SADCasoriaPage';
import NidoDeBaggisIserniaPage from './pages/NidoDeBaggisIserniaPage';
import SosteniamoIlQuartierePage from './pages/SosteniamoIlQuartierePage';
import PalmulaSanVitalianoPage from './pages/PalmulaSanVitalianoPage';
import ProjectsPage from './pages/ProjectsPage';
import AssistenzaEducativaAlbisolaPage from './pages/AssistenzaEducativaAlbisolaPage';
// Pagina nascosta temporaneamente (file conservato): import ProgettazioneTerzoSettorePage from './pages/ProgettazioneTerzoSettorePage';
import SviluppoSoftwarePage from './pages/SviluppoSoftwarePage';


const AppRoutes = () => (
        <div className="min-h-screen bg-gray-50">
    <ScrollToTop />
    <Header />
    
    <main className="pt-20">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servizi" element={<ServicesPage />} />
        <Route path="/progetti" element={<ProjectsPage />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="/recensioni" element={<ReviewsPage />} />
        <Route path="/prenotazioni" element={<BookingPage />} />
        <Route path="/contatti" element={<ContactPage />} />
        <Route path="/lavora-con-noi" element={<CareersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/come-richiedere-adi" element={<ADIProcessPage />} />
        <Route path="/micronido-romagnano-sesia" element={<MicronidoRomaganoPage />} />
        <Route path="/adi-napoli" element={<ADINapoliPage />} />
        <Route path="/infermiere-domicilio-napoli" element={<InfermiereDomicilioPage />} />
        <Route path="/fisioterapia-domicilio-napoli" element={<FisioterapiaDomicilioPage />} />
        <Route path="/micronido-albisola-superiore" element={<MicronidoAlbiolaPage />} />
        <Route path="/educativa-domiciliare-ambito-n12" element={<EducativaDomiciliareAmbito12Page />} />
        <Route path="/nido-san-gemini" element={<NidoSanGeminiPage />} />
        <Route path="/adi-portici" element={<ADIPorticiPage />} />
        <Route path="/sad-portici" element={<SADPorticiPage />} />
        <Route path="/sad-casoria" element={<SADCasoriaPage />} />
        <Route path="/nido-de-baggis-isernia" element={<NidoDeBaggisIserniaPage />} />
        <Route path="/sosteniamo-il-quartiere" element={<SosteniamoIlQuartierePage />} />
        <Route path="/palmula-san-vitaliano" element={<PalmulaSanVitalianoPage />} />
      <Route path="/assistenza-educativa-specialistica-albisola-scuole" element={<AssistenzaEducativaAlbisolaPage />} />
      <Route path="/sviluppo-app-software-gestionali" element={<SviluppoSoftwarePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    
    <Footer />
    <AccessibilityWidget />
    <CookieConsent />
    <ChatWidget />
  </div>
);

export default AppRoutes;
