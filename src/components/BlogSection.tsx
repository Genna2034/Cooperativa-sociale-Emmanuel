import React from 'react';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import FadeInSection from './FadeInSection';

const HEALTH_ARTICLES = [
  {
    id: 1,
    title: "Assistenza Domiciliare Integrata: Guida Completa ai Servizi ADI in Campania",
    excerpt: "Tutto quello che devi sapere sui servizi di Assistenza Domiciliare Integrata nella regione Campania, requisiti e modalità di accesso.",
    date: "2024-01-15",
    category: "Servizi Sanitari",
    readTime: "5 min",
    external: true,
    url: "https://www.regione.campania.it/regione/it/tematiche/sanita-e-sociale/assistenza-domiciliare"
  },
  {
    id: 2,
    title: "Diritti degli Anziani: Normative e Tutele in Campania",
    excerpt: "Le normative regionali per la tutela degli anziani e delle persone fragili, con focus sui diritti all'assistenza domiciliare.",
    date: "2024-01-10",
    category: "Normative",
    readTime: "7 min",
    external: true,
    url: "https://www.regione.campania.it/regione/it/tematiche/sanita-e-sociale/anziani"
  },
  {
    id: 3,
    title: "Prevenzione e Benessere: Consigli per l'Assistenza Domiciliare",
    excerpt: "Strategie e consigli pratici per mantenere il benessere fisico e mentale durante l'assistenza domiciliare.",
    date: "2024-01-05",
    category: "Benessere",
    readTime: "4 min",
    external: false,
    content: `
      <h3>Importanza della Prevenzione</h3>
      <p>La prevenzione è fondamentale nell'assistenza domiciliare. Ecco alcuni consigli pratici:</p>
      <ul>
        <li>Mantenere una routine quotidiana strutturata</li>
        <li>Garantire un'alimentazione equilibrata</li>
        <li>Promuovere l'attività fisica adeguata</li>
        <li>Curare l'igiene personale e ambientale</li>
        <li>Stimolare le attività cognitive</li>
      </ul>
      
      <h3>Supporto Emotivo</h3>
      <p>L'aspetto emotivo è cruciale per il benessere della persona assistita:</p>
      <ul>
        <li>Mantenere i contatti sociali</li>
        <li>Rispettare le preferenze personali</li>
        <li>Coinvolgere la famiglia nelle decisioni</li>
        <li>Offrire ascolto e comprensione</li>
      </ul>
    `
  }
];

const BlogSection = () => {
  const handleArticleClick = (article: typeof HEALTH_ARTICLES[0]) => {
    if (article.external && article.url) {
      window.open(article.url, '_blank', 'noopener,noreferrer');
    } else {
      // Per articoli interni, potresti aprire un modal o navigare a una pagina dedicata
      console.log('Apertura articolo interno:', article.title);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Risorse e Informazioni
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Articoli informativi su salute, normative e consigli per l'assistenza domiciliare
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HEALTH_ARTICLES.map((article, index) => (
            <FadeInSection key={article.id} direction="up" delay={index * 200}>
              <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    {article.external && (
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString('it-IT')}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <button
                    onClick={() => handleArticleClick(article)}
                    className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Leggi di più
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection direction="up" delay={600}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vuoi rimanere aggiornato sulle ultime novità in ambito sanitario?
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
              Iscriviti alla Newsletter
            </button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default BlogSection;