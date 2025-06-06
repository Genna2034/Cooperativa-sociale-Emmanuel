import React, { useState } from 'react';
import { Star, Quote, Plus } from 'lucide-react';
import FadeInSection from './FadeInSection';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
  image?: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Maria R.",
    rating: 5,
    comment: "Servizio eccellente per mia madre anziana. Gli operatori sono professionali, gentili e sempre disponibili. Consiglio vivamente la Cooperativa Emmanuel.",
    date: "2024-01-10",
    service: "Assistenza Domiciliare",
    image: "/images/medium-shot-women-posing-together.jpg"
  },
  {
    id: 2,
    name: "Giuseppe L.",
    rating: 5,
    comment: "Dopo l'intervento di mio padre, l'assistenza domiciliare è stata fondamentale. Personale qualificato e grande umanità. Grazie di cuore.",
    date: "2024-01-05",
    service: "Fisioterapia Domiciliare",
    image: "/images/realistic-scene-with-health-worker-taking-care-elderly-patient.jpg"
  },
  {
    id: 3,
    name: "Anna M.",
    rating: 5,
    comment: "La professionalità e la dedizione del team Emmanuel hanno fatto la differenza per la cura di mia nonna. Servizio di altissima qualità.",
    date: "2023-12-28",
    service: "Assistenza Infermieristica",
    image: "/images/closeup-support-hands.jpg"
  }
];

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
    service: ''
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      service: newReview.service,
      image: "/images/closeup-support-hands.jpg" // Immagine di default
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '', service: '' });
    setShowForm(false);

    // Qui potresti inviare la recensione al backend
    console.log('Nuova recensione:', review);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cosa Dicono le Famiglie
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="text-lg font-medium text-gray-700">
                {averageRating.toFixed(1)} su 5
              </span>
              <span className="text-gray-500">
                ({reviews.length} recensioni)
              </span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le testimonianze delle famiglie che hanno scelto i nostri servizi
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.slice(0, 6).map((review, index) => (
            <FadeInSection key={review.id} direction="up" delay={index * 150}>
              <div className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-all duration-300">
                <Quote className="h-8 w-8 text-blue-200 absolute top-4 right-4" />
                
                {review.image && (
                  <img 
                    src={review.image}
                    alt="Testimonianza"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                )}
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{review.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-medium text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.service}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(review.date).toLocaleDateString('it-IT')}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection direction="up" delay={400}>
          <div className="text-center">
            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                <Plus className="h-5 w-5" />
                Lascia una Recensione
              </button>
            ) : (
              <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Condividi la Tua Esperienza
                </h3>
                
                <form onSubmit={handleSubmitReview} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Servizio Utilizzato
                      </label>
                      <select
                        required
                        value={newReview.service}
                        onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Seleziona servizio</option>
                        <option value="Assistenza Domiciliare">Assistenza Domiciliare</option>
                        <option value="Fisioterapia Domiciliare">Fisioterapia Domiciliare</option>
                        <option value="Assistenza Infermieristica">Assistenza Infermieristica</option>
                        <option value="Supporto Psicologico">Supporto Psicologico</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Valutazione
                    </label>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setNewReview({ ...newReview, rating: i + 1 })}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-8 w-8 ${
                              i < newReview.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            } hover:text-yellow-400 transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      La Tua Recensione
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="Condividi la tua esperienza con i nostri servizi..."
                    />
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Annulla
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                    >
                      Pubblica Recensione
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ReviewsSection;