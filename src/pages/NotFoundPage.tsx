import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Pagina Non Trovata - Cooperativa Emmanuel</title>
        <meta name="description" content="La pagina che stai cercando non esiste. Torna alla homepage della Cooperativa Emmanuel." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <img 
              src="/images/Logo.png" 
              alt="Cooperativa Emmanuel" 
              className="h-20 w-20 mx-auto mb-6"
            />
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Pagina Non Trovata
            </h2>
            <p className="text-gray-600 mb-8">
              La pagina che stai cercando non esiste o è stata spostata. 
              Torna alla homepage per continuare la navigazione.
            </p>
          </div>

          <div className="space-y-4">
            <Link 
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Torna alla Homepage
            </Link>
            
            <div className="text-center">
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Torna Indietro
              </button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Hai bisogno di aiuto? Contattaci:
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <a href="tel:+390817877064" className="text-blue-600 hover:text-blue-700">
                  📞 +39 081 7877064
                </a>
              </div>
              <div>
                <a href="mailto:cooperativa.emmanuel@outlook.it" className="text-blue-600 hover:text-blue-700">
                  ✉️ cooperativa.emmanuel@outlook.it
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;