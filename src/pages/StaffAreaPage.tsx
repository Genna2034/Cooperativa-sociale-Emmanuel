import React from 'react';
import { Helmet } from 'react-helmet-async';
import StaffManagement from '../components/StaffManagement';

const StaffAreaPage = () => {
  return (
    <>
      <Helmet>
        <title>Area Riservata Staff - Cooperativa Emmanuel</title>
        <meta name="description" content="Area riservata per il personale della Cooperativa Emmanuel. Gestione presenze, turni e attività." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <StaffManagement />
    </>
  );
};

export default StaffAreaPage;