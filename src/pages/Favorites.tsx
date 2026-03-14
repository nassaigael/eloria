import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, X, Trash2, ArrowLeft, Star } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [showClearModal, setShowClearModal] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    });
    // Optionnel : retirer des favoris après ajout au panier
    // removeFromFavorites(item.id);
  };

  const handleSelectAll = () => {
    if (selectedItems.length === favorites.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(favorites.map(item => item.id));
    }
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach(id => removeFromFavorites(id));
    setSelectedItems([]);
  };

  const handleClearAll = () => {
    favorites.forEach(item => removeFromFavorites(item.id));
    setShowClearModal(false);
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
        <div className="container-custom">
          <Link to="/" className="inline-flex items-center text-gold hover:text-gold-light transition-colors mb-8 group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            {/* Icône décorative */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl" />
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center rounded-full border-2 border-gold/30 bg-bordeaux-dark/50">
                <Heart size={48} className="text-gold/60" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-champagne mb-4">
              Votre liste d'envies est vide
            </h1>
            <p className="text-lg text-champagne/70 mb-8">
              Découvrez nos collections et ajoutez vos coups de cœur à vos favoris.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 bg-gold text-bordeaux-dark text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
              >
                Découvrir nos collections
              </Link>
              <Link
                to="/nouveautes"
                className="px-8 py-4 border border-gold text-gold text-sm uppercase tracking-wider font-medium hover:bg-gold/10 transition-colors"
              >
                Voir les nouveautés
              </Link>
            </div>

            {/* Suggestions */}
            <div className="mt-16 pt-16 border-t border-gold/10">
              <h2 className="text-2xl font-serif text-champagne mb-8">
                Suggestions pour vous
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Link
                    key={i}
                    to="/categorie/robes"
                    className="group"
                  >
                    <div className="aspect-3/4 bg-linear-to-b from-gold/5 to-transparent border border-gold/10 group-hover:border-gold/30 transition-all duration-500" />
                    <p className="text-sm text-champagne/70 mt-2 group-hover:text-gold transition-colors">
                      Collection Printemps
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-bb from-bordeaux to-bordeaux-dark pt-32 pb-16">
      <div className="container-custom">
        {/* Fil d'Ariane */}
        <div className="flex items-center space-x-2 text-sm text-champagne/60 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-gold">Mes favoris</span>
        </div>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-champagne mb-2">
              Mes favoris
            </h1>
            <p className="text-champagne/70">
              {favorites.length} article{favorites.length > 1 ? 's' : ''} dans votre liste
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {favorites.length > 0 && (
              <>
                <button
                  onClick={handleSelectAll}
                  className="text-sm text-champagne/60 hover:text-gold transition-colors"
                >
                  {selectedItems.length === favorites.length ? 'Tout désélectionner' : 'Tout sélectionner'}
                </button>
                {selectedItems.length > 0 && (
                  <button
                    onClick={handleRemoveSelected}
                    className="flex items-center space-x-2 px-4 py-2 border border-gold/30 text-champagne hover:border-gold hover:text-gold transition-colors"
                  >
                    <Trash2 size={16} />
                    <span>Supprimer ({selectedItems.length})</span>
                  </button>
                )}
                <button
                  onClick={() => setShowClearModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gold/30 text-champagne hover:border-gold hover:text-gold transition-colors"
                >
                  <X size={16} />
                  <span>Tout supprimer</span>
                </button>
              </>
            )}
          </div>
        </motion.div>

        {/* Grille des favoris */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              {/* Checkbox de sélection */}
              <div className="absolute top-4 left-4 z-20">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border transition-colors ${selectedItems.includes(item.id)
                      ? 'border-gold bg-gold'
                      : 'border-gold/30 hover:border-gold/60'
                    }`}>
                    {selectedItems.includes(item.id) && (
                      <svg className="w-5 h-5 text-bordeaux-dark" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    )}
                  </div>
                </label>
              </div>

              {/* Bouton supprimer */}
              <button
                onClick={() => removeFromFavorites(item.id)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/50 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Supprimer des favoris"
              >
                <X size={18} className="text-champagne" />
              </button>

              {/* Carte produit */}
              <div className="relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500">
                {/* Image */}
                <Link to={`/produit/${item.slug || item.id}`}>
                  <div className="relative aspect-3/4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bordeaux via-bordeaux/50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                  </div>
                </Link>

                {/* Informations */}
                <div className="p-4">
                  {/* Catégorie */}
                  <Link to={`/categorie/${item.category?.toLowerCase() || 'robes'}`}>
                    <span className="text-xs text-gold/70 uppercase tracking-wider hover:text-gold transition-colors">
                      {item.category || 'Collection'}
                    </span>
                  </Link>

                  {/* Nom */}
                  <Link to={`/produit/${item.slug || item.id}`}>
                    <h3 className="text-lg font-serif text-champagne hover:text-gold transition-colors mt-1 mb-2 line-clamp-1">
                      {item.name}
                    </h3>
                  </Link>

                  {/* Prix */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-serif text-gold">
                      {item.price} Ar
                    </span>

                    {/* Note simulée */}
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="fill-gold text-gold" />
                      <span className="text-xs text-champagne/70">4.8</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-gold text-bordeaux-dark py-2 text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingBag size={16} />
                      <span>Ajouter</span>
                    </button>
                    <Link
                      to={`/produit/${item.slug || item.id}`}
                      className="flex-1 border border-gold/30 text-champagne py-2 text-sm uppercase tracking-wider font-medium hover:border-gold hover:text-gold transition-colors text-center"
                    >
                      Détails
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Résumé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 border border-gold/10 bg-linear-to-b from-gold/5 to-transparent"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-serif text-champagne mb-2">Résumé</h3>
              <p className="text-champagne/70">
                {favorites.length} article{favorites.length > 1 ? 's' : ''} dans votre liste
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  favorites.forEach(item => handleAddToCart(item));
                }}
                className="px-8 py-3 bg-gold text-bordeaux-dark text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
              >
                Tout ajouter au panier
              </button>
              <Link
                to="/"
                className="px-8 py-3 border border-gold text-gold text-sm uppercase tracking-wider font-medium hover:bg-gold/10 transition-colors"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal de confirmation - Tout supprimer */}
      <AnimatePresence>
        {showClearModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-bordeaux-dark/80 backdrop-blur-sm z-50"
              onClick={() => setShowClearModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-md w-full bg-linear-to-b from-bordeaux to-bordeaux-dark border border-gold/30 shadow-2xl z-50 p-8"
            >
              <h3 className="text-2xl font-serif text-gold mb-4">
                Vider la liste ?
              </h3>
              <p className="text-champagne/70 mb-8">
                Êtes-vous sûr de vouloir supprimer tous vos favoris ? Cette action est irréversible.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleClearAll}
                  className="flex-1 bg-gold text-bordeaux-dark py-3 text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
                >
                  Oui, vider
                </button>
                <button
                  onClick={() => setShowClearModal(false)}
                  className="flex-1 border border-gold text-gold py-3 text-sm uppercase tracking-wider font-medium hover:bg-gold/10 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Favorites;