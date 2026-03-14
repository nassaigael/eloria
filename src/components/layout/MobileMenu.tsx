import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart, ShoppingBag, X, Search, ChevronDown, Contact } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  mainNav: Array<{ nom: string; path: string }>;
  categories: Array<{ nom: string; path: string }>;
  priorityLinks: Array<{ nom: string; path: string }>;
}

const MobileMenu = ({ isOpen, onClose, mainNav, categories, priorityLinks }: MobileMenuProps) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

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
            className="fixed top-0 left-0 bottom-0 w-full max-w-sm bg-linear-to-b from-bordeaux to-bordeaux-dark z-50 lg:hidden shadow-2xl overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="h-full flex flex-col"
            >
              {/* En-tête */}
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

              {/* Navigation */}
              <nav className="flex-1 py-8 px-6 overflow-y-auto">
                <ul className="space-y-4">
                  {/* Liens principaux */}
                  {mainNav.map((item) => (
                    <li key={item.nom}>
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="text-xl font-serif text-champagne hover:text-gold transition-colors block border-l-2 border-transparent hover:border-gold pl-4"
                      >
                        {item.nom}
                      </Link>
                    </li>
                  ))}

                  {/* Catégories avec dropdown */}
                  <li>
                    <button
                      onClick={() => setCategoriesOpen(!categoriesOpen)}
                      className="w-full flex items-center justify-between text-xl font-serif text-champagne hover:text-gold transition-colors border-l-2 border-transparent hover:border-gold pl-4"
                    >
                      <span>CATEGORIES</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${categoriesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {categoriesOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-6 mt-2 space-y-2 overflow-hidden"
                        >
                          {categories.map((category) => (
                            <li key={category.nom}>
                              <Link
                                to={category.path}
                                onClick={onClose}
                                className="block py-1 text-champagne/70 hover:text-gold transition-colors text-sm"
                              >
                                {category.nom}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Liens prioritaires */}
                  {priorityLinks.map((item) => (
                    <li key={item.nom}>
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="text-xl font-serif text-champagne hover:text-gold transition-colors block border-l-2 border-transparent hover:border-gold pl-4"
                      >
                        {item.nom}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-gold/20">
                {/* Recherche */}
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
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${searchFocused ? 'text-gold' : 'text-gold/60'
                      }`}
                  />
                </div>

                {/* Liens rapides */}
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

                  <Link
                    to="/contact"
                    onClick={onClose}
                    className="flex flex-col items-center group"
                  >
                    <Contact size={24} className="text-champagne group-hover:text-gold transition-colors" />
                    <span className="text-xs mt-2 text-champagne/70 group-hover:text-gold">
                      Contact
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