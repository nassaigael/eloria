import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import SearchModal from './SearchModal';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import { useSearch } from '../../context/SearchContext';

import logo from '../../assets/images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  
  const { cartCount } = useCart();
  const { favoritesCount } = useFavorites();
  const { setIsSearchOpen } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation principale
  const mainNav = [
    { nom: 'Accueil', slug: '', path: '/' },
    { nom: 'Boutique', slug: 'boutique', path: '/boutique' },
  ];

  // Catégories pour le dropdown
  const categories = [
    { nom: 'Robes', slug: 'robes', path: '/categorie/robes' },
    { nom: 'Ensembles', slug: 'ensembles', path: '/categorie/ensembles' },
    { nom: 'Hauts', slug: 'hauts', path: '/categorie/hauts' },
    { nom: 'Jupes', slug: 'jupes', path: '/categorie/jupes' },
    { nom: 'Pantalons', slug: 'pantalons', path: '/categorie/pantalons' },
    { nom: 'Accessoires', slug: 'accessoires', path: '/categorie/accessoires' },
    { nom: 'Chaussures', slug: 'chaussures', path: '/categorie/chaussures' },
    { nom: 'Mariage', slug: 'mariage', path: '/categorie/mariage' },
    { nom: 'Soirée', slug: 'soiree', path: '/categorie/soiree' },
  ];

  // Liens prioritaires
  const priorityLinks = [
    { nom: 'Contact', path: '/contact' },
    { nom: 'FAQ', path: '/faq' },
    { nom: 'Livraison', path: '/livraison' },
  ];

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-bordeaux-dark/98 backdrop-blur-xl py-2 shadow-2xl' 
            : 'bg-linear-to-b from-bordeaux-dark/90 via-bordeaux-dark/50 to-transparent py-3 md:py-4'
        }`}
      >
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent origin-left"
        />

        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Menu mobile button */}
            <motion.button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 bg-bordeaux-dark/20 backdrop-blur-sm"
              aria-label="Menu"
              whileHover={{ scale: 1.1, borderColor: "#D4AF37", backgroundColor: "rgba(212, 175, 55, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={20} className="text-champagne" />
            </motion.button>

            {/* Logo */}
            <motion.div 
              className="flex-1 lg:flex-none text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/" className="inline-block relative group">
                <motion.div 
                  className="absolute -inset-4 bg-gold/0 rounded-full blur-xl"
                  whileHover={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                  transition={{ duration: 0.5 }}
                />
                <img 
                  src={logo} 
                  alt="Eloria" 
                  className="relative h-12 md:h-12 lg:h-12 w-auto drop-shadow-2xl transition-all duration-700"
                />
              </Link>
            </motion.div>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Liens principaux */}
              {mainNav.map((item) => (
                <Link
                  key={item.nom}
                  to={item.path}
                  className="relative px-4 py-2 text-champagne/90 hover:text-gold text-sm uppercase tracking-wider font-medium transition-colors duration-300 group"
                >
                  {item.nom}
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  />
                </Link>
              ))}

              {/* Dropdown Catégories */}
              <div 
                className="relative"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <button
                  className="relative px-4 py-2 text-champagne/90 hover:text-gold text-sm uppercase tracking-wider font-medium transition-colors duration-300 group flex items-center space-x-1"
                >
                  <span>Catégories</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} 
                  />
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>

                <AnimatePresence>
                  {isCategoriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-linear-to-b from-bordeaux to-bordeaux-dark border border-gold/20 shadow-2xl z-50"
                    >
                      <div className="py-2">
                        {categories.map((category) => (
                          <Link
                            key={category.nom}
                            to={category.path}
                            className="block px-4 py-2 text-sm text-champagne/70 hover:text-gold hover:bg-gold/5 transition-colors"
                            onClick={() => setIsCategoriesOpen(false)}
                          >
                            {category.nom}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Liens prioritaires */}
              {priorityLinks.map((item) => (
                <Link
                  key={item.nom}
                  to={item.path}
                  className="relative px-4 py-2 text-champagne/90 hover:text-gold text-sm uppercase tracking-wider font-medium transition-colors duration-300 group"
                >
                  {item.nom}
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </nav>

            {/* Icônes d'action */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Recherche */}
              <div className="relative group">
                <motion.button 
                  onClick={handleSearchClick}
                  className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 bg-bordeaux-dark/20 backdrop-blur-sm"
                  aria-label="Rechercher"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -5, 5, 0], borderColor: "#D4AF37", backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                  transition={{ duration: 0.5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search size={18} className="text-champagne" />
                </motion.button>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-champagne/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Rechercher
                </span>
              </div>

              {/* Favoris */}
              <div className="relative group">
                <Link 
                  to="/favoris"
                  className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 bg-bordeaux-dark/20 backdrop-blur-sm"
                  aria-label="Favoris"
                >
                  <Heart size={18} className="text-champagne" />
                </Link>
                
                <AnimatePresence>
                  {favoritesCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-gold text-bordeaux-dark text-xs font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center border-2 border-bordeaux-dark shadow-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.2 }}
                    >
                      {favoritesCount}
                    </motion.span>
                  )}
                </AnimatePresence>

                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-champagne/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Favoris
                </span>
              </div>

              {/* Panier */}
              <div className="relative group">
                <Link 
                  to="/panier"
                  className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 bg-bordeaux-dark/20 backdrop-blur-sm"
                  aria-label="Panier"
                >
                  <ShoppingBag size={18} className="text-champagne" />
                </Link>
                
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-gold text-bordeaux-dark text-xs font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center border-2 border-bordeaux-dark shadow-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.2 }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>

                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-champagne/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Panier
                </span>
              </div>

              {/* Séparateur */}
              <motion.div 
                className="hidden md:block w-px h-6 bg-linear-to-b from-transparent via-gold/30 to-transparent"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </div>
          </div>

          {/* Barre de recherche mobile */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div 
                className="mt-3 lg:hidden"
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Rechercher un produit..."
                    className="w-full bg-bordeaux-dark/70 border border-gold/30 rounded-full py-3 pl-12 pr-4 text-champagne placeholder:text-champagne/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all backdrop-blur-sm"
                    onClick={handleSearchClick}
                    readOnly
                  />
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ligne dorée inférieure */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* Menu mobile (mis à jour) */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        mainNav={mainNav}
        categories={categories}
        priorityLinks={priorityLinks}
      />
      
      <SearchModal />
      <div className={`transition-all duration-700 ${isScrolled ? 'h-16' : 'h-20'}`} />
    </>
  );
};

export default Header;