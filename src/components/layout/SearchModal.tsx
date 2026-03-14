import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Star, Heart } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/productsData';

const SearchModal = () => {
  const { 
    isSearchOpen, 
    setIsSearchOpen, 
    searchQuery, 
    searchResults, 
    performSearch,
    clearSearch 
  } = useSearch();
  
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleClose = () => {
    setIsSearchOpen(false);
    clearSearch();
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bordeaux-dark/95 backdrop-blur-xl z-50"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-4 top-20 md:inset-x-10 lg:inset-x-20 z-50"
          >
            <div className="bg-linear-to-b from-bordeaux to-bordeaux-dark border border-gold/30 shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-gold/20">
                <h3 className="text-2xl font-serif text-gold">Rechercher</h3>
                <motion.button
                  onClick={handleClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} className="text-champagne" />
                </motion.button>
              </div>

              <div className="p-6">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => performSearch(e.target.value)}
                    placeholder="Que cherchez-vous ? (robe, accessoire, etc.)"
                    className="w-full bg-bordeaux-dark/70 border border-gold/30 rounded-none py-4 pl-14 pr-4 text-champagne placeholder:text-champagne/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                  />
                  <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gold/60" />
                </div>

                <div className="mt-8 max-h-96 overflow-y-auto scrollbar-hide">
                  {searchQuery && searchResults.length === 0 && (
                    <p className="text-center text-champagne/50 py-8">
                      Aucun résultat pour "{searchQuery}"
                    </p>
                  )}

                  {!searchQuery && (
                    <p className="text-center text-champagne/50 py-8">
                      Commencez à taper pour rechercher un produit
                    </p>
                  )}

                  <div className="space-y-4">
                    {searchResults.map((product: Product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 border border-gold/10 hover:border-gold/30 transition-all duration-300"
                      >
                        <Link to={`/produit/${product.slug}`} onClick={handleClose} className="shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover"
                          />
                        </Link>
                        <div className="flex-1">
                          <Link to={`/produit/${product.slug}`} onClick={handleClose}>
                            <span className="text-xs text-gold/70 uppercase tracking-wider">
                              {product.category}
                            </span>
                            <h4 className="text-lg font-serif text-champagne hover:text-gold transition-colors">
                              {product.name}
                            </h4>
                          </Link>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-xl font-serif text-gold">
                              {product.price} Ar
                            </span>
                            <div className="flex items-center space-x-1">
                              <Star size={14} className="fill-gold text-gold" />
                              <span className="text-xs text-champagne/70">
                                {product.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 w-full sm:w-auto">
                          <motion.button
                            onClick={() => {
                              handleAddToCart(product);
                              handleClose();
                            }}
                            className="flex-1 sm:flex-none px-4 py-2 bg-gold text-bordeaux-dark text-xs uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Ajouter
                          </motion.button>
                          <motion.button
                            onClick={() => {
                              if (isFavorite(product.id)) {
                                removeFromFavorites(product.id);
                              } else {
                                addToFavorites({
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  image: product.image,
                                  category: product.category,
                                  slug: product.slug // slug est string, conforme à l'interface
                                });
                              }
                            }}
                            className="w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Heart 
                              size={18} 
                              className={isFavorite(product.id) ? 'fill-gold text-gold' : 'text-champagne'} 
                            />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;