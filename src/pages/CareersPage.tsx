import React, { useState } from 'react';
import { Upload, FileText, User, Mail, Phone, Briefcase, GraduationCap, CheckCircle, AlertCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';
import { sendEmail } from '../services/emailService';

interface CareerForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profession: string;
  experience: string;
  availability: string;
  motivation: string;
  hasLicense: boolean;
  hasTransport: boolean;
  cvFile: File | null;
}

const CareersPage = () => {
  const [formData, setFormData] = useState<CareerForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profession: '',
    experience: '',
    availability: '',
    motivation: '',
    hasLicense: true,
    hasTransport: true,
    cvFile: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const professions = [
    'Infermiere/a Professionale',
    'Fisioterapista',
    'Operatore Socio Sanitario (OSS)',
    'Medico Specialista',
    'Psicologo/a',
    'Assistente Sociale',
    'Operatore di Assistenza',
    'Coordinatore Sanitario',
    'Altro (specificare nella motivazione)'
  ];

  const experienceLevels = [
    'Neolaureato/a',
    '1-2 anni',
    '3-5 anni',
    '5-10 anni',
    'Oltre 10 anni'
  ];

  const availabilityOptions = [
    'Full-time (40 ore/settimana)',
    'Part-time mattino',
    'Part-time pomeriggio',
    'Weekend',
    'Turni notturni',
    'Disponibilità flessibile'
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: 'Contratto Regolare',
      description: 'CCNL Cooperative Sociali, contributi e ferie pagate'
    },
    {
      icon: GraduationCap,
      title: 'Formazione Continua',
      description: 'Corsi di aggiornamento e specializzazione gratuiti'
    },
    {
      icon: User,
      title: 'Ambiente Stimolante',
      description: 'Team affiatato e supporto costante nella crescita professionale'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (error) setError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('Il file CV non può superare i 5MB');
      return;
    }
    setFormData(prev => ({ ...prev, cvFile: file }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepara i dati per l'email
      const emailData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        profession: formData.profession,
        experience: formData.experience,
        availability: formData.availability,
        motivation: formData.motivation,
        hasLicense: formData.hasLicense ? 'Sì' : 'No',
        hasTransport: formData.hasTransport ? 'Sì' : 'No',
        cvAttached: formData.cvFile ? 'Sì (file allegato)' : 'No'
      };

      await sendEmail({
        type: 'career',
        data: emailData
      });

      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        profession: '',
        experience: '',
        availability: '',
        motivation: '',
        hasLicense: true,
        hasTransport: true,
        cvFile: null
      });

      // Reset automatico dopo 5 secondi
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Errore invio candidatura:', error);
      setError('Si è verificato un errore durante l\'invio. Il tuo client email si aprirà come alternativa.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <PageHeader
          title="Candidatura Inviata!"
          description="Grazie per il tuo interesse. Ti contatteremo presto per valutare la tua candidatura."
          showBreadcrumb={false}
        />
        
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeInSection direction="up">
              <div className="max-w-2xl mx-auto text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Candidatura Ricevuta!
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Grazie per aver scelto di candidarti con la Cooperativa Emmanuel. 
                  Il nostro team HR esaminerà la tua candidatura e ti contatterà entro 7 giorni lavorativi.
                </p>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="font-bold text-gray-800 mb-2">Prossimi Passi:</h3>
                  <ul className="text-left text-gray-600 space-y-2">
                    <li>✅ Revisione del CV e della candidatura</li>
                    <li>📞 Eventuale colloquio telefonico preliminare</li>
                    <li>🤝 Colloquio in sede (se selezionato/a)</li>
                    <li>📋 Verifica referenze e documentazione</li>
                  </ul>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Invia Altra Candidatura
                </button>
              </div>
            </FadeInSection>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Lavora Con Noi"
        description="Unisciti al nostro team di professionisti sanitari. Insieme possiamo fare la differenza nella vita delle persone."
        metaTitle="Lavora Con Noi - Cooperativa Emmanuel Napoli"
        metaDescription="Candidati per lavorare con la Cooperativa Emmanuel. Cerchiamo infermieri, fisioterapisti, OSS e altri professionisti sanitari per l'assistenza domiciliare in Campania."
        keywords="lavoro infermiere Napoli, lavoro fisioterapista, lavoro OSS, cooperativa sociale, assistenza domiciliare, carriere sanitarie"
      />

      {/* Sezione Introduttiva */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Fai Parte della Famiglia Emmanuel
                </h2>
                <p className="text-gray-600 mb-6">
                  Cerchiamo professionisti sanitari motivati e competenti che condividano i nostri valori 
                  di compassione, professionalità e dedizione verso chi ha più bisogno.
                </p>
                <p className="text-gray-600 mb-6">
                  Lavorare con Emmanuel significa entrare a far parte di un team che considera 
                  l'assistenza domiciliare non solo un lavoro, ma una missione di vita.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-3">Profili Ricercati:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Infermieri Professionali</li>
                    <li>• Fisioterapisti</li>
                    <li>• Operatori Socio Sanitari (OSS)</li>
                    <li>• Medici Specialisti</li>
                    <li>• Psicologi</li>
                    <li>• Coordinatori Sanitari</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={200}>
              <img 
                src="/images/medium-shot-women-posing-together.jpg"
                alt="Team Cooperativa Emmanuel"
                className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[500px]"
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Benefici */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Perché Scegliere Emmanuel
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Offriamo un ambiente di lavoro stimolante e gratificante
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeInSection key={index} direction="up" delay={index * 200}>
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form Candidatura */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Invia la Tua Candidatura
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compila il modulo sottostante per candidarti. Ti contatteremo entro 7 giorni lavorativi.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection direction="up" delay={200}>
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Modulo di Candidatura</h3>
                <p className="text-blue-100">
                  Tutti i campi contrassegnati con * sono obbligatori
                </p>
              </div>

              <div className="p-8">
                {error && (
                  <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-md flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <p className="text-orange-700 text-sm">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Dati Personali */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Dati Personali</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Il tuo nome"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Cognome *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Il tuo cognome"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contatti */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Contatti</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="la.tua.email@esempio.com"
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
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="+39 123 456 7890"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Informazioni Professionali */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Informazioni Professionali</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                          Professione *
                        </label>
                        <select
                          id="profession"
                          name="profession"
                          required
                          value={formData.profession}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Seleziona la tua professione</option>
                          {professions.map(prof => (
                            <option key={prof} value={prof}>{prof}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                          Esperienza *
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          required
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="">Seleziona anni di esperienza</option>
                          {experienceLevels.map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Disponibilità */}
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                      Disponibilità *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Seleziona la tua disponibilità</option>
                      {availabilityOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  {/* Requisiti */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Requisiti</h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="hasLicense"
                          checked={formData.hasLicense}
                          onChange={handleInputChange}
                          className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">Possiedo patente di guida</span>
                      </label>
                      
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="hasTransport"
                          checked={formData.hasTransport}
                          onChange={handleInputChange}
                          className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="text-gray-700">Ho un mezzo di trasporto proprio</span>
                      </label>
                    </div>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label htmlFor="cvFile" className="block text-sm font-medium text-gray-700 mb-2">
                      Curriculum Vitae (PDF, max 5MB)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        id="cvFile"
                        name="cvFile"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="cvFile" className="cursor-pointer">
                        <span className="text-blue-600 hover:text-blue-700 font-medium">
                          Clicca per caricare il CV
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          {formData.cvFile ? formData.cvFile.name : 'PDF, DOC, DOCX fino a 5MB'}
                        </p>
                      </label>
                    </div>
                  </div>

                  {/* Motivazione */}
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                      Lettera di Motivazione *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows={5}
                      required
                      value={formData.motivation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="Raccontaci perché vuoi lavorare con noi, le tue motivazioni e cosa puoi portare al nostro team..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
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
                        <>
                          <FileText className="h-4 w-4" />
                          Invia Candidatura
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Inviando questo modulo acconsenti al trattamento dei tuoi dati personali secondo la nostra 
                    <a href="/privacy" className="text-blue-600 hover:text-blue-700 ml-1">Privacy Policy</a>.
                    <br />
                    I dati saranno utilizzati esclusivamente per la valutazione della candidatura.
                  </p>
                </form>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default CareersPage;