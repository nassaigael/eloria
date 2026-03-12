import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { Star, Truck, Shield, RotateCcw, ShoppingBag } from 'lucide-react';
import Hero from './components/sections/Hero';
import Categories from './components/sections/Categories';
import PopularProducts from './components/sections/PopularProducts';


const avis = [
  {
    nom: "Sophie Martin",
    note: 5,
    commentaire: "Une qualité exceptionnelle ! La robe est encore plus belle en vrai.",
    date: "Il y a 2 jours"
  },
  {
    nom: "Marie Dubois",
    note: 5,
    commentaire: "Service client impeccable et livraison rapide. Je recommande !",
    date: "Il y a 1 semaine"
  },
  {
    nom: "Claire Bernard",
    note: 4,
    commentaire: "Très belle boutique, les matières sont nobles et le rendu est parfait.",
    date: "Il y a 3 jours"
  }
];

function App() {
  // Fonctions sans paramètres (pour correspondre aux props du Header)
  const handleSearchClick = () => {
    alert('Recherche - Fonctionnalité à venir !');
  };

  const handleCartClick = () => {
    alert('Panier - Fonctionnalité à venir !');
  };

  const handleFavoritesClick = () => {
    alert('Favoris - Fonctionnalité à venir !');
  };


  return (
    <div className="min-h-screen bg-bordeaux">
      <Header
        initialCartCount={3}
        initialFavoritesCount={2}
        onSearchClick={handleSearchClick}
        onCartClick={handleCartClick}
        onFavoritesClick={handleFavoritesClick}
      />

      <main>
        <Hero />

        <Categories />

        <PopularProducts />

        {/* Section Avantages */}
        <section className="bg-bordeaux-dark/50 py-16">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Truck className="mx-auto text-gold mb-4" size={32} />
                <h4 className="text-lg font-serif text-champagne mb-2">Livraison Offerte</h4>
                <p className="text-sm text-champagne/60">Dès 150€ d'achat</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto text-gold mb-4" size={32} />
                <h4 className="text-lg font-serif text-champagne mb-2">Paiement Sécurisé</h4>
                <p className="text-sm text-champagne/60">CB, PayPal, Apple Pay</p>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto text-gold mb-4" size={32} />
                <h4 className="text-lg font-serif text-champagne mb-2">Retours Gratuits</h4>
                <p className="text-sm text-champagne/60">Sous 30 jours</p>
              </div>
              <div className="text-center">
                <ShoppingBag className="mx-auto text-gold mb-4" size={32} />
                <h4 className="text-lg font-serif text-champagne mb-2">Service Premium</h4>
                <p className="text-sm text-champagne/60">7j/7 de 9h à 20h</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Avis Clients */}
        <section className="container-custom">
          <div className="section-title">
            <h2>Ce qu'elles disent</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {avis.map((avis, index) => (
              <div key={index} className="bg-beige/5 p-6 border border-gold/10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(avis.note)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-champagne/80 mb-4">"{avis.commentaire}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-gold">{avis.nom}</span>
                  <span className="text-xs text-champagne/50">{avis.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Newsletter */}
        <section className="container-custom">
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-12 text-center border border-gold/20">
            <h2 className="text-3xl md:text-4xl text-champagne mb-4">
              Restez Inspirée
            </h2>
            <p className="text-champagne/70 mb-8 max-w-lg mx-auto">
              Inscrivez-vous à notre newsletter et recevez -10% sur votre première commande
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="search-input flex-1"
              />
              <button className="btn-primary whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </div>
        </section>

        <Footer />

      </main>
    </div>
  );
}

export default App;