import React from 'react';
import PageHeader from '../components/PageHeader';
import ReviewsSection from '../components/ReviewsSection';

const ReviewsPage = () => {
  return (
    <>
      <PageHeader
        title="Recensioni e Testimonianze"
        description="Scopri cosa dicono le famiglie che hanno scelto i nostri servizi di assistenza domiciliare"
        metaTitle="Recensioni Clienti - Cooperativa Emmanuel Napoli"
        metaDescription="Leggi le testimonianze delle famiglie assistite dalla Cooperativa Emmanuel. Recensioni verificate sui nostri servizi di assistenza domiciliare in Campania."
        keywords="recensioni Emmanuel, testimonianze assistenza domiciliare, opinioni clienti, Napoli, Campania"
      />
      
      <ReviewsSection />
    </>
  );
};

export default ReviewsPage;