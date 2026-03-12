import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

// Import du logo (ajustez le chemin selon votre structure)
import logo from '../../assets/images/logo.jpg';

interface HeaderProps {
  initialCartCount?: number;
  initialFavoritesCount?: number;
  onSearchClick?: () => void;
  onCartClick?: () => void;
  onFavoritesClick?: () => void;
}

const Header = ({ 
  initialCartCount = 0, 
  initialFavoritesCount = 0,
  onSearchClick,
  onCartClick,
  onFavoritesClick 
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount] = useState(initialCartCount);
  const [favoritesCount] = useState(initialFavoritesCount);

  // Détection du scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { nom: 'Nouveautés', href: '/nouveautes' },
    { nom: 'Robes', href: '/robes' },
    { nom: 'Accessoires', href: '/accessoires' },
    { nom: 'Mariage', href: '/mariage' },
    { nom: 'Soirée', href: '/soiree' },
  ];

  // Variants sans types explicites pour éviter les erreurs
  const headerVariants = {
    hidden: { 
      y: -100, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 20,
        duration: 0.8 
      }
    }
  };

  return (
    <>
      <motion.header 
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-bordeaux-dark/98 backdrop-blur-xl py-2 shadow-2xl' 
            : 'bg-linear-to-b from-bordeaux-dark/90 via-bordeaux-dark/50 to-transparent py-3 md:py-4'
        }`}
      >
        {/* Ligne dorée supérieure avec effet de lumière */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent origin-left"
        />

        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Menu mobile - design premium */}
            <motion.button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 bg-bordeaux-dark/20 backdrop-blur-sm"
              aria-label="Menu"
              whileHover={{ 
                scale: 1.1,
                borderColor: "#D4AF37",
                backgroundColor: "rgba(212, 175, 55, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Menu size={20} className="text-champagne" />
            </motion.button>

            {/* Logo - taille fixe sur tous les écrans */}
            <motion.div 
              className="flex-1 lg:flex-none text-center lg:text-left"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href="/" className="inline-block relative group">
                {/* Halo effect au hover */}
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
              </a>
            </motion.div>

            {/* Navigation desktop - animation inline sans variants */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.nom}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 text-champagne/90 hover:text-gold text-sm uppercase tracking-wider font-medium transition-colors duration-300 group"
                >
                  {item.nom}
                  {/* Soulignement animé premium */}
                  <motion.span 
                    className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Point doré au centre */}
                  <motion.span 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Icônes d'action - design premium */}
            <div className="flex items-center space-x-2 md:space-x-3">
              {/* Recherche avec tooltip */}
              <div className="relative group">
                <motion.button 
                  onClick={onSearchClick}
                  className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 bg-bordeaux-dark/20 backdrop-blur-sm"
                  aria-label="Rechercher"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, -5, 5, 0],
                    borderColor: "#D4AF37",
                    backgroundColor: "rgba(212, 175, 55, 0.1)"
                  }}
                  transition={{ duration: 0.5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search size={18} className="text-champagne" />
                </motion.button>
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-champagne/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Rechercher
                </span>
              </div>

              {/* Favoris avec badge */}
              <div className="relative group">
                <motion.a 
                  href="/favoris" 
                  onClick={onFavoritesClick}
                  className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 bg-bordeaux-dark/20 backdrop-blur-sm"
                  aria-label="Favoris"
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: "#D4AF37",
                    backgroundColor: "rgba(212, 175, 55, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart size={18} className="text-champagne" />
                </motion.a>
                
                {/* Badge favoris avec animation */}
                <AnimatePresence>
                  {favoritesCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-gold text-bordeaux-dark text-xs font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center border-2 border-bordeaux-dark shadow-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ 
                        type: "spring" as const, 
                        stiffness: 500, 
                        damping: 20,
                        delay: 0.2 
                      }}
                    >
                      {favoritesCount}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-champagne/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Favoris
                </span>
              </div>

              {/* Panier avec badge */}
              <div className="relative group">
                <motion.a 
                  href="/panier" 
                  onClick={onCartClick}
                  className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 bg-bordeaux-dark/20 backdrop-blur-sm"
                  aria-label="Panier"
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: "#D4AF37",
                    backgroundColor: "rgba(212, 175, 55, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingBag size={18} className="text-champagne" />
                </motion.a>
                
                {/* Badge panier avec animation */}
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span 
                      className="absolute -top-1 -right-1 bg-gold text-bordeaux-dark text-xs font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center border-2 border-bordeaux-dark shadow-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ 
                        type: "spring" as const, 
                        stiffness: 500, 
                        damping: 20,
                        delay: 0.2 
                      }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-champagne/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Panier
                </span>
              </div>

              {/* Séparateur doré avec animation */}
              <motion.div 
                className="hidden md:block w-px h-6 bg-linear-to-b from-transparent via-gold/30 to-transparent"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </div>
          </div>

          {/* Barre de recherche mobile - apparaît uniquement quand scrolled */}
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
                    onClick={onSearchClick}
                    readOnly
                  />
                  <Search 
                    size={18} 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60 group-focus-within:text-gold transition-colors" 
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ligne dorée inférieure - apparaît uniquement quand scrolled */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* Menu mobile */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navigation={navigation}
      />

      {/* Spacer pour compenser le header fixed */}
      <div 
        className={`transition-all duration-700 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      />
    </>
  );
};

export default Header;