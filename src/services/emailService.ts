import emailjs from '@emailjs/browser';

// Configurazione EmailJS - AGGIORNA QUESTI VALORI CON I TUOI DATI REALI
const EMAILJS_SERVICE_ID = 'service_emmanuel'; // ⚠️ SOSTITUISCI con il tuo Service ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact'; // ⚠️ SOSTITUISCI con il tuo Template ID per contatti
const EMAILJS_TEMPLATE_ID_BOOKING = 'template_booking'; // ⚠️ SOSTITUISCI con il tuo Template ID per prenotazioni
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

interface EmailParams {
  type: 'contact' | 'booking';
  data: ContactData | BookingData;
}

export const sendEmail = async ({ type, data }: EmailParams): Promise<void> => {
  try {
    const templateId = type === 'contact' ? EMAILJS_TEMPLATE_ID_CONTACT : EMAILJS_TEMPLATE_ID_BOOKING;
    
    // Parametri del template che verranno inviati a cooperativa.emmanuel@outlook.it
    const templateParams = {
      // Destinatario (la tua email)
      to_email: 'cooperativa.emmanuel@outlook.it',
      to_name: 'Cooperativa Sociale Emmanuel',
      
      // Dati del mittente
      from_name: data.name,
      from_phone: data.phone,
      
      // Tipo di richiesta
      request_type: type === 'contact' ? 'Richiesta di Contatto' : 'Prenotazione Appuntamento',
      
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
  const subject = type === 'contact' 
    ? 'Richiesta di Contatto - Cooperativa Emmanuel'
    : 'Prenotazione Appuntamento - Cooperativa Emmanuel';
  
  let body = `NUOVA ${type === 'contact' ? 'RICHIESTA DI CONTATTO' : 'PRENOTAZIONE'}\n\n`;
  body += `Nome: ${data.name}\n`;
  body += `Telefono: ${data.phone}\n`;
  
  if (type === 'contact') {
    const contactData = data as ContactData;
    body += `\nMessaggio:\n${contactData.message}\n`;
  } else {
    const bookingData = data as BookingData;
    body += `Email: ${bookingData.email || 'Non fornita'}\n`;
    body += `Servizio richiesto: ${bookingData.service}\n`;
    body += `Data preferita: ${bookingData.preferredDate}\n`;
    body += `Orario preferito: ${bookingData.preferredTime}\n`;
    if (bookingData.notes) {
      body += `\nNote aggiuntive:\n${bookingData.notes}\n`;
    }
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