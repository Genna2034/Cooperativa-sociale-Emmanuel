import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import FadeInSection from './FadeInSection';
import { sendEmail } from '../services/emailService';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Rimuovi errore quando l'utente inizia a digitare
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmail({
        type: 'contact',
        data: formData
      });

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
      
      // Reset automatico dopo 5 secondi
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Errore invio contatto:', error);
      setError('Si è verificato un errore durante l\'invio. Il tuo client email si aprirà come alternativa.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contatti" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeInSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Il primo passo verso un'assistenza sicura, amorevole e personalizzata
            </h2>
          </FadeInSection>
          <FadeInSection direction="up" delay={200}>
            <p className="text-xl text-gray-600">
              Hai un familiare anziano o con disabilità che necessita di cure? Vuoi conoscere le opportunità offerte dall'Assistenza Domiciliare Integrata?
            </p>
          </FadeInSection>
        </div>
        
        <FadeInSection direction="up" delay={400}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 bg-blue-600">
                <h3 className="text-2xl font-bold text-white mb-6">Contattaci</h3>
                
                <div className="space-y-6 text-white">
                  <p className="text-blue-100">
                    Non aspettare: la prima consulenza è completamente gratuita. Scopri come possiamo aiutarti con amore, competenza e rispetto.
                  </p>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-200 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefono</p>
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-blue-100 hover:text-white transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-200 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-blue-100 hover:text-white transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-200 mt-0.5" />
                    <div>
                      <p className="font-medium">Sede</p>
                      <p className="text-blue-100">Napoli, Italia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-200 mt-0.5" />
                    <div>
                      <p className="font-medium">Orari</p>
                      <p className="text-blue-100">Lun-Ven: 9:00-18:00</p>
                      <p className="text-blue-100">Sab: 9:00-13:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Messaggio Inviato!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Grazie per averci contattato. Ti risponderemo entro 24 ore all'indirizzo cooperativa.emmanuel@outlook.it
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                      Invia un Altro Messaggio
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Richiedi informazioni</h3>
                    
                    {error && (
                      <div className="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-md flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                        <p className="text-orange-700 text-sm">{error}</p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome e Cognome *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Inserisci il tuo nome"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefono *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Inserisci il tuo numero"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Messaggio *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                          placeholder="Come possiamo aiutarti?"
                        />
                      </div>
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md font-medium transition-colors shadow-sm flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                              Invio in corso...
                            </>
                          ) : (
                            'Invia richiesta'
                          )}
                        </button>
                      </div>
                      
                      <p className="text-xs text-gray-500 mt-4">
                        * Campi obbligatori. Inviando questo modulo acconsenti al trattamento dei tuoi dati personali in conformità con la nostra politica sulla privacy.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;