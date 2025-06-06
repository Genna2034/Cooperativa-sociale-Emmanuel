import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  
  const pathMap: Record<string, string> = {
    '/': 'Home',
    '/servizi': 'Servizi',
    '/chi-siamo': 'Chi Siamo',
    '/recensioni': 'Recensioni',
    '/prenotazioni': 'Prenotazioni',
    '/contatti': 'Contatti'
  };

  const currentPath = location.pathname;
  const currentLabel = pathMap[currentPath];

  // Non mostrare breadcrumb nella homepage
  if (currentPath === '/') return null;

  return (
    <nav className="bg-gray-100 py-3 border-b" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 md:px-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
            <span className="text-gray-800 font-medium">{currentLabel}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;