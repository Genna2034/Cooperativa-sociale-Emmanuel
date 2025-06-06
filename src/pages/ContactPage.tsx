import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title="Contattaci"
        description="Siamo qui per aiutarti. Contatta la Cooperativa Emmanuel per informazioni sui nostri servizi di assistenza domiciliare"
        metaTitle="Contatti - Cooperativa Emmanuel Napoli"
        metaDescription="Contatta la Cooperativa Emmanuel per informazioni sui servizi di assistenza domiciliare a Napoli e in Campania. Consulenza gratuita disponibile."
        keywords="contatti Emmanuel, assistenza domiciliare Napoli, telefono, email, informazioni"
      />
      
      <ContactSection />
    </>
  );
};

export default ContactPage;