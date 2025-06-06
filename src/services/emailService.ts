import emailjs from '@emailjs/browser';

// Configurazione EmailJS - AGGIORNA QUESTI VALORI CON I TUOI DATI REALI
const EMAILJS_SERVICE_ID = 'service_emmanuel'; // ⚠️ SOSTITUISCI con il tuo Service ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact'; // ⚠️ SOSTITUISCI con il tuo Template ID per contatti
const EMAILJS_TEMPLATE_ID_BOOKING = 'template_booking'; // ⚠️ SOSTITUISCI con il tuo Template ID per prenotazioni
const EMAILJS_TEMPLATE_ID_CAREER = 'template_career'; // ⚠️ SOSTITUISCI con il tuo Template ID per candidature
const EMAILJS_PUBLIC_KEY = 'WDkpZib98mtjthirk'; // ✅ LA TUA PUBLIC KEY È GIÀ INSERITA

// Inizializza EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

interface ContactData {
  name: string;
  phone: string;
  message: string;
}

interface BookingData {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

interface CareerData {
  name: string;
  email: string;
  phone: string;
  profession: string;
  experience: string;
  availability: string;
  motivation: string;
  hasLicense: string;
  hasTransport: string;
  cvAttached: string;
}

interface EmailParams {
  type: 'contact' | 'booking' | 'career';
  data: ContactData | BookingData | CareerData;
}

export const sendEmail = async ({ type, data }: EmailParams): Promise<void> => {
  try {
    let templateId: string;
    
    switch (type) {
      case 'contact':
        templateId = EMAILJS_TEMPLATE_ID_CONTACT;
        break;
      case 'booking':
        templateId = EMAILJS_TEMPLATE_ID_BOOKING;
        break;
      case 'career':
        templateId = EMAILJS_TEMPLATE_ID_CAREER;
        break;
      default:
        throw new Error('Tipo di email non supportato');
    }
    
    // Parametri del template che verranno inviati a cooperativa.emmanuel@outlook.it
    const templateParams = {
      // Destinatario (la tua email)
      to_email: 'cooperativa.emmanuel@outlook.it',
      to_name: 'Cooperativa Sociale Emmanuel',
      
      // Dati del mittente
      from_name: data.name || (data as any).firstName + ' ' + (data as any).lastName,
      from_phone: data.phone,
      from_email: (data as any).email || 'Non fornita',
      
      // Tipo di richiesta
      request_type: type === 'contact' ? 'Richiesta di Contatto' : 
                   type === 'booking' ? 'Prenotazione Appuntamento' : 
                   'Candidatura Lavoro',
      
      // Tutti i dati del form
      ...data,
      
      // Data e ora di invio
      sent_date: new Date().toLocaleDateString('it-IT'),
      sent_time: new Date().toLocaleTimeString('it-IT'),
    };

    console.log('Invio email con parametri:', templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      templateId,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error(`Errore EmailJS: ${response.status} - ${response.text}`);
    }

    console.log('✅ Email inviata con successo:', response);
    return response;
    
  } catch (error) {
    console.error('❌ Errore invio email:', error);
    
    // Fallback: apri client email predefinito
    sendEmailFallback({ type, data });
    throw error;
  }
};

// Funzione di fallback per inviare email tramite mailto
export const sendEmailFallback = ({ type, data }: EmailParams): void => {
  let subject: string;
  let body: string;
  
  switch (type) {
    case 'contact':
      subject = 'Richiesta di Contatto - Cooperativa Emmanuel';
      body = `NUOVA RICHIESTA DI CONTATTO\n\n`;
      body += `Nome: ${data.name}\n`;
      body += `Telefono: ${data.phone}\n`;
      body += `\nMessaggio:\n${(data as ContactData).message}\n`;
      break;
      
    case 'booking':
      subject = 'Prenotazione Appuntamento - Cooperativa Emmanuel';
      const bookingData = data as BookingData;
      body = `NUOVA PRENOTAZIONE\n\n`;
      body += `Nome: ${bookingData.name}\n`;
      body += `Telefono: ${bookingData.phone}\n`;
      body += `Email: ${bookingData.email || 'Non fornita'}\n`;
      body += `Servizio richiesto: ${bookingData.service}\n`;
      body += `Data preferita: ${bookingData.preferredDate}\n`;
      body += `Orario preferito: ${bookingData.preferredTime}\n`;
      if (bookingData.notes) {
        body += `\nNote aggiuntive:\n${bookingData.notes}\n`;
      }
      break;
      
    case 'career':
      subject = 'Nuova Candidatura - Cooperativa Emmanuel';
      const careerData = data as CareerData;
      body = `NUOVA CANDIDATURA\n\n`;
      body += `Nome: ${careerData.name}\n`;
      body += `Email: ${careerData.email}\n`;
      body += `Telefono: ${careerData.phone}\n`;
      body += `Professione: ${careerData.profession}\n`;
      body += `Esperienza: ${careerData.experience}\n`;
      body += `Disponibilità: ${careerData.availability}\n`;
      body += `Patente: ${careerData.hasLicense}\n`;
      body += `Mezzo proprio: ${careerData.hasTransport}\n`;
      body += `CV allegato: ${careerData.cvAttached}\n`;
      body += `\nLettera di motivazione:\n${careerData.motivation}\n`;
      break;
  }
  
  body += `\n---\nInviato il: ${new Date().toLocaleString('it-IT')}\n`;
  body += `Dal sito: ${window.location.href}`;

  const mailtoLink = `mailto:cooperativa.emmanuel@outlook.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};

// Funzione di test per verificare la configurazione
export const testEmailConfiguration = async (): Promise<boolean> => {
  try {
    const testData: ContactData = {
      name: 'Test Sistema',
      phone: '+39 000 0000000',
      message: 'Questo è un messaggio di test per verificare la configurazione EmailJS.'
    };

    await sendEmail({
      type: 'contact',
      data: testData
    });

    console.log('✅ Test email configurazione completato con successo!');
    return true;
  } catch (error) {
    console.error('❌ Test email fallito:', error);
    return false;
  }
};