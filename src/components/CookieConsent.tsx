import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
    // Attiva Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
            Continuando a navigare, accetti la nostra{' '}
            <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
              politica sui cookie
            </a>.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
          >
            Rifiuta
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;