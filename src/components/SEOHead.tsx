import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  return (
    <Helmet>
      <title>Cooperativa Sociale Emmanuel - Assistenza Domiciliare a Napoli</title>
      <meta name="description" content="Assistenza Domiciliare Integrata (ADI), supporto ad anziani e persone con disabilità. Servizi di qualità per il benessere dei tuoi cari a Napoli e in Campania." />
      <meta name="keywords" content="assistenza domiciliare, ADI, anziani, disabilità, Napoli, Campania, cooperativa sociale, assistenza sanitaria, fisioterapia domiciliare, infermiere a domicilio" />
      <link rel="canonical" href="https://cooperativa-emmanuel.netlify.app/" />
    </Helmet>
  );
};

export default SEOHead;