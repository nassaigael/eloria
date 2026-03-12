import Header from './components/layout/Header';
import { Heart, Star, Truck, Shield, RotateCcw, ShoppingBag } from 'lucide-react';

// Données factices pour les produits (inchangé)
const produitsPopulaires = [
  {
    id: 1,
    nom: "Robe de Soirée Émeraude",
    prix: 299,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format",
    categorie: "Robes"
  },
  {
    id: 2,
    nom: "Ensemble Chic Doré",
    prix: 449,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&auto=format",
    categorie: "Ensembles"
  },
  {
    id: 3,
    nom: "Blouse en Soie",
    prix: 189,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=400&auto=format",
    categorie: "Hauts"
  },
  {
    id: 4,
    nom: "Jupe Plissée Rubis",
    prix: 159,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&auto=format",
    categorie: "Jupes"
  },
  {
    id: 5,
    nom: "Robe de Cocktail Noire",
    prix: 259,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&auto=format",
    categorie: "Robes"
  },
  {
    id: 6,
    nom: "Pantalon Tailleur",
    prix: 199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format",
    categorie: "Pantalons"
  },
  {
    id: 7,
    nom: "Blazer Cérémonie",
    prix: 349,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format",
    categorie: "Vestes"
  },
  {
    id: 8,
    nom: "Roche de Bal Rose",
    prix: 399,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&auto=format",
    categorie: "Robes"
  }
];

const categories = [
  { nom: "Robes", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&auto=format" },
  { nom: "Accessoires", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&auto=format" },
  { nom: "Mariage", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&auto=format" },
  { nom: "Soirée", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format" },
];

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

  // Fonction pour gérer l'ajout au panier depuis les cartes produits
  const handleAddToCart = (produitId: number) => {
    alert(`Produit ${produitId} ajouté au panier !`);
  };

  // Fonction pour gérer les favoris depuis les cartes produits
  const handleToggleFavorite = (produitId: number) => {
    alert(`Produit ${produitId} ajouté aux favoris !`);
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
        {/* Hero Section avec grande image pour tester le scroll */}
        <section className="relative h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&auto=format)',
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bordeaux/90" />
          
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="container-custom">
              <span className="label mb-4 block">COLLECTION PRINTEMPS-ÉTÉ 2024</span>
              <h1 className="text-5xl md:text-7xl text-champagne mb-6">
                L'Élégance <br />à l'État Pur
              </h1>
              <p className="text-lg md:text-xl text-champagne/80 mb-8 max-w-2xl mx-auto">
                Découvrez notre nouvelle collection de prêt-à-porter premium,
                conçue pour les femmes qui aiment allier sophistication et confort.
              </p>
              <button className="btn-primary">
                Découvrir
              </button>
            </div>
          </div>
        </section>

        {/* Section Catégories */}
        <section className="container-custom">
          <div className="section-title">
            <h2>Nos Catégories</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((categorie, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => alert(`Catégorie ${categorie.nom} sélectionnée`)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={categorie.image} 
                    alt={categorie.nom}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-xl font-serif text-champagne">{categorie.nom}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Produits Populaires */}
        <section className="container-custom">
          <div className="section-title">
            <h2>Nos Produits Populaires</h2>
            <p className="text-champagne/70 max-w-2xl mx-auto">
              Découvrez les pièces les plus appréciées de notre collection
            </p>
          </div>

          <div className="grid-products">
            {produitsPopulaires.map((produit) => (
              <div key={produit.id} className="product-card group">
                <div className="relative overflow-hidden">
                  <img 
                    src={produit.image} 
                    alt={produit.nom}
                    className="product-image w-full aspect-[3/4] object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 favorite-inactive"
                    onClick={() => handleToggleFavorite(produit.id)}
                  >
                    <Heart size={20} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button 
                      className="btn-primary w-full"
                      onClick={() => handleAddToCart(produit.id)}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <span className="product-category">{produit.categorie}</span>
                  <h3 className="product-title mt-1">{produit.nom}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="price">{produit.prix.toFixed(2)} €</span>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="fill-gold text-gold" />
                      <span className="text-sm text-champagne/70">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              Voir tous les produits
            </button>
          </div>
        </section>

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

        {/* Footer */}
        <footer className="bg-bordeaux-dark border-t border-gold/10 mt-16">
          <div className="container-custom py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h6 className="text-gold mb-4">Eloria</h6>
                <ul className="space-y-2">
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Notre histoire'); }}>Notre histoire</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Nos boutiques'); }}>Nos boutiques</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Carrières'); }}>Carrières</a></li>
                </ul>
              </div>
              <div>
                <h6 className="text-gold mb-4">Service client</h6>
                <ul className="space-y-2">
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Contact'); }}>Contact</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Livraison'); }}>Livraison</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Retours'); }}>Retours</a></li>
                </ul>
              </div>
              <div>
                <h6 className="text-gold mb-4">Informations</h6>
                <ul className="space-y-2">
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page FAQ'); }}>FAQ</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Guide des tailles'); }}>Guide des tailles</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Mentions légales'); }}>Mentions légales</a></li>
                </ul>
              </div>
              <div>
                <h6 className="text-gold mb-4">Suivez-nous</h6>
                <ul className="space-y-2">
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Instagram'); }}>Instagram</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Facebook'); }}>Facebook</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Page Pinterest'); }}>Pinterest</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gold/10 mt-8 pt-8 text-center">
              <p className="text-sm text-champagne/50">
                © 2024 Eloria. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;