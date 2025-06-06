import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import FadeInSection from './FadeInSection';
import { sendEmail } from '../services/emailService';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmail({
        type: 'newsletter',
        data: {
          email,
          subscriptionDate: new Date().toLocaleDateString('it-IT')
        }
      });

      setIsSubmitted(true);
      setEmail('');
      
      // Reset automatico dopo 5 secondi
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Errore iscrizione newsletter:', error);
      setError('Si è verificato un errore durante l\'iscrizione. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="max-w-2xl mx-auto text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Iscrizione Completata!
              </h2>
              <p className="text-xl text-gray-600">
                Grazie per esserti iscritto alla nostra newsletter. Riceverai aggiornamenti 
                sui nostri servizi e consigli utili per l'assistenza domiciliare.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="h-12 w-12 text-blue-200 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rimani Aggiornato
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Iscriviti alla nostra newsletter per ricevere consigli utili, 
              aggiornamenti sui servizi e novità dal mondo dell'assistenza domiciliare.
            </p>
            
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-md flex items-center justify-center gap-3 max-w-md mx-auto">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 text-gray-800"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 disabled:bg-gray-300 transition-colors whitespace-nowrap"
                >
                  {isSubmitting ? 'Iscrizione...' : 'Iscriviti'}
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">
                Niente spam, solo contenuti di valore. Puoi disiscriverti in qualsiasi momento.
              </p>
            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default NewsletterSection;