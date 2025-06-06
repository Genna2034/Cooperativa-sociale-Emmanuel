import React from 'react';
import { Shield, Eye, Cookie, Mail, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import FadeInSection from '../components/FadeInSection';

const PrivacyPage = () => {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Informazioni sul trattamento dei dati personali secondo il GDPR"
        metaTitle="Privacy Policy - Cooperativa Emmanuel"
        metaDescription="Privacy Policy della Cooperativa Emmanuel. Informazioni complete sul trattamento dei dati personali secondo il GDPR."
        keywords="privacy policy, GDPR, trattamento dati, cooperativa Emmanuel"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeInSection direction="up">
            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-800 mb-0">
                    Informativa sulla Privacy
                  </h2>
                </div>
                <p className="text-gray-600 mb-0">
                  La Cooperativa Sociale Emmanuel rispetta la tua privacy e si impegna a proteggere i tuoi dati personali.
                  Questa informativa descrive come raccogliamo, utilizziamo e proteggiamo le tue informazioni.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">1. Titolare del Trattamento</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p><strong>Cooperativa Sociale Emmanuel</strong></p>
                <p>Sede: Napoli, Italia</p>
                <p>Email: cooperativa.emmanuel@outlook.it</p>
                <p>Telefono: +39 081 7877064</p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">2. Dati Raccolti</h3>
              <p className="mb-4">Raccogliamo i seguenti tipi di dati personali:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Dati di contatto:</strong> nome, cognome, telefono, email</li>
                <li><strong>Dati professionali:</strong> professione, esperienza, CV (solo per candidature)</li>
                <li><strong>Dati di navigazione:</strong> indirizzo IP, browser, pagine visitate</li>
                <li><strong>Cookie tecnici:</strong> per il funzionamento del sito</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">3. Finalità del Trattamento</h3>
              <p className="mb-4">I tuoi dati vengono utilizzati per:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Rispondere alle tue richieste di informazioni</li>
                <li>Gestire prenotazioni e appuntamenti</li>
                <li>Valutare candidature lavorative</li>
                <li>Migliorare i nostri servizi</li>
                <li>Adempiere agli obblighi di legge</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">4. Base Giuridica</h3>
              <p className="mb-6">
                Il trattamento dei dati è basato sul consenso dell'interessato (art. 6, par. 1, lett. a GDPR) 
                e sull'interesse legittimo del titolare (art. 6, par. 1, lett. f GDPR).
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">5. Conservazione dei Dati</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Richieste di contatto:</strong> 2 anni dalla richiesta</li>
                <li><strong>Candidature:</strong> 2 anni dalla candidatura</li>
                <li><strong>Dati di navigazione:</strong> 13 mesi</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">6. I Tuoi Diritti</h3>
              <p className="mb-4">Hai diritto a:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Accedere ai tuoi dati personali</li>
                <li>Rettificare dati inesatti</li>
                <li>Cancellare i tuoi dati</li>
                <li>Limitare il trattamento</li>
                <li>Portabilità dei dati</li>
                <li>Opporti al trattamento</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">7. Cookie</h3>
              <p className="mb-6">
                Utilizziamo cookie tecnici necessari per il funzionamento del sito. 
                Non utilizziamo cookie di profilazione senza il tuo consenso esplicito.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">8. Sicurezza</h3>
              <p className="mb-6">
                Adottiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati 
                da accessi non autorizzati, perdita o distruzione.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contattaci</h3>
                <p className="mb-4">
                  Per esercitare i tuoi diritti o per qualsiasi domanda sulla privacy:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:cooperativa.emmanuel@outlook.it"
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    cooperativa.emmanuel@outlook.it
                  </a>
                  <a 
                    href="tel:+390817877064"
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +39 081 7877064
                  </a>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;