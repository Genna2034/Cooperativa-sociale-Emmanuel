export type ProjectArea = 'sanitario' | 'educativo' | 'inclusione';

export interface Project {
  title: string;
  description: string;
  features: string[];
  link: string;
  area: ProjectArea;
  territory: string;
  activationDate?: string; // ISO date: mostra il badge NEW per 6 mesi
}

export const PROJECT_AREAS: Record<ProjectArea, { label: string; description: string }> = {
  sanitario: {
    label: 'Assistenza domiciliare',
    description: 'ADI e SAD per anziani e persone con disabilità, in accreditamento con la Regione Campania e con i Comuni.'
  },
  educativo: {
    label: 'Servizi educativi e infanzia',
    description: 'Nidi e micronidi, educativa domiciliare e assistenza educativa scolastica.'
  },
  inclusione: {
    label: 'Inclusione sociale e cultura',
    description: 'Progetti con enti pubblici per giovani, persone fragili e comunità locali.'
  }
};

// Ordinati dal più recente: i primi vengono mostrati in home.
export const PROJECTS: Project[] = [
  {
    title: 'Asilo Nido Comunale "De Baggis" – Isernia',
    description: 'Servizio educativo per l\'infanzia 0-3 anni presso il nido comunale del Comune di Isernia, anno educativo 2026/27.',
    features: ['Educatori qualificati', 'Progetto pedagogico personalizzato', 'Alleanza con le famiglie'],
    link: '/nido-de-baggis-isernia',
    area: 'educativo',
    territory: 'Isernia (IS)',
    activationDate: '2026-10-19'
  },
  {
    title: 'SosteniAMO il quartiere',
    description: 'Progetto della Città Metropolitana di Napoli (POC Legalità 2014-2020): percorsi personalizzati di inserimento sociale e lavorativo per giovani a rischio, con Emmanuel mandataria del Raggruppamento.',
    features: ['Équipe di prossimità', 'Laboratori di orientamento al mestiere', 'Portfolio delle competenze'],
    link: '/sosteniamo-il-quartiere',
    area: 'inclusione',
    territory: 'Afragola, Castello di Cisterna, Marigliano, Caivano, Giugliano, Napoli',
    activationDate: '2026-10-19'
  },
  {
    title: 'PALMULA. San Vitaliano si racconta',
    description: 'Festival diffuso delle radici, delle voci e dei saperi di San Vitaliano: partner del Comune per l\'Avviso ministeriale "Cultura nei piccoli comuni".',
    features: ['Cantieri di comunità', 'Rassegna Palmula Live', 'Archivio della memoria e mappa narrativa'],
    link: '/palmula-san-vitaliano',
    area: 'inclusione',
    territory: 'San Vitaliano (NA)',
    activationDate: '2026-10-19'
  },
  {
    title: 'SAD anziani e disabili – Comune di Casoria',
    description: 'Assistenza domiciliare per anziani e persone con disabilità nel Comune di Casoria.',
    features: ['Supporto nelle attività quotidiane', 'Monitoraggio e continuità', 'Integrazione con i servizi'],
    link: '/sad-casoria',
    area: 'sanitario',
    territory: 'Casoria (NA)'
  },
  {
    title: 'SAD anziani e disabili – Comune di Portici',
    description: 'Servizio di assistenza domiciliare per supporto alla vita quotidiana e al benessere.',
    features: ['Cura della persona e igiene', 'Supporto domestico e relazionale', 'Piani personalizzati'],
    link: '/sad-portici',
    area: 'sanitario',
    territory: 'Portici (NA)'
  },
  {
    title: 'ADI anziani e disabili – Comune di Portici',
    description: 'Assistenza domiciliare integrata per anziani e persone con disabilità nel Comune di Portici.',
    features: ['Valutazione dei bisogni', 'Interventi sanitari e socio-assistenziali', 'Continuità e coordinamento'],
    link: '/adi-portici',
    area: 'sanitario',
    territory: 'Portici (NA)'
  },
  {
    title: 'Nido d\'Infanzia – San Gemini',
    description: 'Un ecosistema educativo 0-3 innovativo e sostenibile.',
    features: ['Approccio Reggio Children', 'Outdoor education', 'Family Hub per le famiglie'],
    link: '/nido-san-gemini',
    area: 'educativo',
    territory: 'San Gemini (TR)',
    activationDate: '2026-03-02'
  },
  {
    title: 'Educativa Domiciliare – Ambito N12',
    description: 'Percorsi educativi per minori e famiglie in situazione di fragilità.',
    features: ['PEI personalizzato', 'Lavoro di rete territoriale', 'Sviluppo dell\'autonomia'],
    link: '/educativa-domiciliare-ambito-n12',
    area: 'educativo',
    territory: 'Ambito N12 (NA)',
    activationDate: '2026-03-02'
  },
  {
    title: 'Micronido – Albisola Superiore',
    description: 'Servizio educativo individualizzato presso asilo nido comunale.',
    features: ['Educatore dedicato', 'Continuità garantita', 'Monitoraggio mensile'],
    link: '/micronido-albisola-superiore',
    area: 'educativo',
    territory: 'Albisola Superiore (SV)',
    activationDate: '2026-03-02'
  },
  {
    title: 'Micronido d\'Infanzia – Romagnano Sesia',
    description: 'Servizio educativo per bambini 0-3 anni con progetto pedagogico completo, educazione all\'aperto e laboratori specializzati.',
    features: ['Educatori qualificati 1:6', 'Laboratori creativi', 'Sportello psicopedagogico'],
    link: '/micronido-romagnano-sesia',
    area: 'educativo',
    territory: 'Romagnano Sesia (NO)'
  },
  {
    title: 'ADI Napoli – Assistenza Domiciliare Integrata',
    description: 'Servizi sanitari e socio-assistenziali a domicilio per anziani e persone con disabilità, accreditati con la Regione Campania.',
    features: ['Visite mediche specialistiche', 'Assistenza infermieristica', 'Fisioterapia domiciliare'],
    link: '/adi-napoli',
    area: 'sanitario',
    territory: 'Napoli e provincia'
  }
];

export const isProjectNew = (activationDate?: string, expiryMonths = 6) => {
  if (!activationDate) return false;
  const activation = new Date(activationDate);
  const now = new Date();
  const monthsDiff = (now.getFullYear() - activation.getFullYear()) * 12 + (now.getMonth() - activation.getMonth());
  return monthsDiff < expiryMonths;
};
