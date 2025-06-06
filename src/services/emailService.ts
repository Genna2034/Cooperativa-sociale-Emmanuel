import emailjs from '@emailjs/browser';

// Configurazione EmailJS
const EMAILJS_SERVICE_ID = 'service_emmanuel';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact';
const EMAILJS_TEMPLATE_ID_BOOKING = 'template_booking';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

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

interface EmailParams {
  type: 'contact' | 'booking';
  data: ContactData | BookingData;
}

export const sendEmail = async ({ type, data }: EmailParams): Promise<void> => {
  try {
    const templateId = type === 'contact' ? EMAILJS_TEMPLATE_ID_CONTACT : EMAILJS_TEMPLATE_ID_BOOKING;
    
    const templateParams = {
      to_email: 'cooperativa.emmanuel@outlook.it',
      from_name: data.name,
      from_phone: data.phone,
      ...data
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      templateId,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error('Errore durante l\'invio dell\'email');
    }

    console.log('Email inviata con successo:', response);
  } catch (error) {
    console.error('Errore invio email:', error);
    throw error;
  }
};

// Funzione di fallback per inviare email tramite mailto
export const sendEmailFallback = ({ type, data }: EmailParams): void => {
  const subject = type === 'contact' 
    ? 'Richiesta di Contatto - Cooperativa Emmanuel'
    : 'Prenotazione Appuntamento - Cooperativa Emmanuel';
  
  let body = `Nome: ${data.name}\nTelefono: ${data.phone}\n\n`;
  
  if (type === 'contact') {
    const contactData = data as ContactData;
    body += `Messaggio:\n${contactData.message}`;
  } else {
    const bookingData = data as BookingData;
    body += `Email: ${bookingData.email}\n`;
    body += `Servizio: ${bookingData.service}\n`;
    body += `Data preferita: ${bookingData.preferredDate}\n`;
    body += `Orario preferito: ${bookingData.preferredTime}\n`;
    if (bookingData.notes) {
      body += `Note: ${bookingData.notes}`;
    }
  }

  const mailtoLink = `mailto:cooperativa.emmanuel@outlook.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};