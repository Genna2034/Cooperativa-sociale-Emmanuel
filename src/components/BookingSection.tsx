import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { sendEmail } from '../services/emailService';

interface BookingForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

const SERVICES = [
  'Consulenza gratuita',
  'Assistenza domiciliare',
  'Fisioterapia domiciliare',
  'Assistenza infermieristica',
  'Supporto psicologico',
  'Valutazione multidimensionale'
];

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
];

const BookingSection = () => {
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        type: 'booking',
        data: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          notes: formData.notes
        }
      });

      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        notes: ''
      });
      
      // Reset automatico dopo 5 secondi
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Errore invio prenotazione:', error);
      setError('Si è verificato un errore durante l\'invio. Il tuo client email si aprirà come alternativa.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <section id="prenotazioni\" className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="max-w-2xl mx-auto text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Prenotazione Ricevuta!
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Grazie per aver scelto la Cooperativa Emmanuel. Ti contatteremo entro 24 ore per confermare l'appuntamento all'indirizzo cooperativa.emmanuel@outlook.it
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Prenota un Altro Appuntamento
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>
    );
  }

  return (
    <section id="prenotazioni" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Prenota il Tuo Appuntamento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scegli il giorno e l'orario che preferisci per la tua consulenza gratuita o per iniziare il percorso di assistenza
            </p>
          </div>
        </FadeInSection>

        <FadeInSection direction="up" delay={200}>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-10 bg-blue-600">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Perché Prenotare Online?
                </h3>
                
                <div className="space-y-6 text-white">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-blue-200 mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">Flessibilità Totale</h4>
                      <p className="text-blue-100">
                        Scegli il giorno e l'orario più comodo per te, anche nei weekend
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-blue-200 mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">Risposta Rapida</h4>
                      <p className="text-blue-100">
                        Ti contatteremo entro 24 ore per confermare l'appuntamento
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <User className="h-6 w-6 text-blue-200 mt-1" />
                    <div>
                      <h4 className="font-medium mb-2">Consulenza Personalizzata</h4>
                      <p className="text-blue-100">
                        Ogni appuntamento è studiato sulle tue specifiche esigenze
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-700 rounded-lg">
                  <p className="text-blue-100 text-sm">
                    <strong>Nota:</strong> La prima consulenza è sempre gratuita e senza impegno. 
                    Valuteremo insieme il percorso di assistenza più adatto.
                  </p>
                </div>
              </div>
              
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Compila il Modulo
                </h3>
                
                {error && (
                  <div className="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-md flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <p className="text-orange-700 text-sm">{error}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                        placeholder="Il tuo nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
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
                        placeholder="Il tuo numero di telefono"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="La tua email (opzionale)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servizio Richiesto *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Seleziona un servizio</option>
                      {SERVICES.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Data Preferita *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        required
                        min={getMinDate()}
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Orario Preferito *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Seleziona orario</option>
                        {TIME_SLOTS.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                      Note Aggiuntive
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Descrivi brevemente le tue esigenze o richieste particolari..."
                    />
                  </div>
                  
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
                      'Prenota Appuntamento'
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500">
                    * Campi obbligatori. Inviando questo modulo acconsenti al trattamento dei tuoi dati personali.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default BookingSection;