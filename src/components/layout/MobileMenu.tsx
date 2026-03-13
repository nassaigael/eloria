import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ nom: string; slug: string }>; // Changé de href à slug
}

const MobileMenu = ({ isOpen, onClose, navigation }: MobileMenuProps) => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bordeaux-dark/80 backdrop-blur-md z-40 lg:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-linear-to-b from-bordeaux to-bordeaux-dark z-50 lg:hidden shadow-2xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="h-full flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gold/20">
                <Link to="/" onClick={onClose} className="inline-block">
                  <span className="text-2xl font-serif text-gold">Eloria</span>
                </Link>
                <motion.button 
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} className="text-champagne" />
                </motion.button>
              </div>

              <nav className="flex-1 py-8 px-6 overflow-y-auto">
                <ul className="space-y-6">
                  {navigation.map((item) => (
                    <li key={item.nom}>
                      <Link
                        to={`/categorie/${item.slug}`} // Utilisation de slug pour construire l'URL
                        onClick={onClose}
                        className="text-2xl font-serif text-champagne hover:text-gold transition-colors block border-l-2 border-transparent hover:border-gold pl-4"
                      >
                        {item.nom}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-6 border-t border-gold/20">
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full bg-bordeaux-dark/70 border border-gold/30 rounded-full py-3 pl-12 pr-4 text-champagne placeholder:text-champagne/50 focus:outline-none focus:border-gold transition-all"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                  <Search 
                    size={18} 
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                      searchFocused ? 'text-gold' : 'text-gold/60'
                    }`}
                  />
                </div>

                <div className="flex justify-around">
                  <Link 
                    to="/favoris" 
                    onClick={onClose}
                    className="flex flex-col items-center group"
                  >
                    <Heart size={24} className="text-champagne group-hover:text-gold transition-colors" />
                    <span className="text-xs mt-2 text-champagne/70 group-hover:text-gold">
                      Favoris
                    </span>
                  </Link>

                  <Link 
                    to="/panier" 
                    onClick={onClose}
                    className="flex flex-col items-center group"
                  >
                    <ShoppingBag size={24} className="text-champagne group-hover:text-gold transition-colors" />
                    <span className="text-xs mt-2 text-champagne/70 group-hover:text-gold">
                      Panier
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;