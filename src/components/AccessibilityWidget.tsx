import React, { useState } from 'react';
import { Settings, Type, Eye, Volume2 } from 'lucide-react';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const adjustFontSize = (increment: number) => {
    const newSize = Math.max(80, Math.min(150, fontSize + increment));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast', !highContrast);
  };

  const toggleTextToSpeech = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    } else {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'it-IT';
      utterance.onend = () => setIsReading(false);
      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };

  const resetSettings = () => {
    setFontSize(100);
    setHighContrast(false);
    setIsReading(false);
    document.documentElement.style.fontSize = '100%';
    document.documentElement.classList.remove('high-contrast');
    window.speechSynthesis.cancel();
  };

  return (
    <>
      <style>
        {`
          .high-contrast {
            filter: contrast(150%) brightness(120%);
          }
          .high-contrast * {
            background-color: #000 !important;
            color: #fff !important;
            border-color: #fff !important;
          }
          .high-contrast img {
            filter: contrast(120%) brightness(80%);
          }
        `}
      </style>
      
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Apri strumenti di accessibilità"
        >
          <Settings className="h-6 w-6" />
        </button>

        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64 border">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Accessibilità</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dimensione testo: {fontSize}%
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => adjustFontSize(-10)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => adjustFontSize(10)}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
                  >
                    A+
                  </button>
                </div>
              </div>

              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  highContrast ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Eye className="h-4 w-4" />
                Alto contrasto
              </button>

              <button
                onClick={toggleTextToSpeech}
                className={`w-full flex items-center gap-2 p-2 rounded ${
                  isReading ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Volume2 className="h-4 w-4" />
                {isReading ? 'Ferma lettura' : 'Leggi pagina'}
              </button>

              <button
                onClick={resetSettings}
                className="w-full p-2 bg-red-100 hover:bg-red-200 text-red-700 rounded text-sm"
              >
                Ripristina impostazioni
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AccessibilityWidget;