import React from 'react';
import PageHeader from '../components/PageHeader';
import BookingSection from '../components/BookingSection';

const BookingPage = () => {
  return (
    <>
      <PageHeader
        title="Prenota il Tuo Appuntamento"
        description="Scegli il giorno e l'orario che preferisci per la tua consulenza gratuita o per iniziare il percorso di assistenza"
        metaTitle="Prenotazione Online - Cooperativa Emmanuel Napoli"
        metaDescription="Prenota online la tua consulenza gratuita con la Cooperativa Emmanuel. Assistenza domiciliare personalizzata a Napoli e in Campania."
        keywords="prenotazione online, consulenza gratuita, appuntamento assistenza domiciliare, Napoli"
      />
      
      <BookingSection />
    </>
  );
};

export default BookingPage;