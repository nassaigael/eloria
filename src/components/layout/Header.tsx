import { useState, useEffect } from 'react';
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
    // Appel initial pour définir l'état au chargement
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

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-bordeaux-dark/95 backdrop-blur-md py-2 shadow-lg' 
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Menu mobile button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-champagne hover:text-gold transition-colors"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <div className="flex-1 lg:flex-none text-center lg:text-left">
              <a href="/" className="inline-block">
                <img 
                  src={logo} 
                  alt="Eloria" 
                  className={`transition-all duration-500 ${
                    isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'
                  } w-auto`}
                />
              </a>
            </div>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.nom}
                  href={item.href}
                  className="text-champagne hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium"
                >
                  {item.nom}
                </a>
              ))}
            </nav>

            {/* Icônes actions */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Recherche */}
              <button 
                onClick={onSearchClick}
                className="text-champagne hover:text-gold transition-colors"
                aria-label="Rechercher"
              >
                <Search size={20} className="md:w-5 md:h-5" />
              </button>

              {/* Favoris */}
              <a 
                href="/favoris" 
                onClick={onFavoritesClick}
                className="relative text-champagne hover:text-gold transition-colors"
                aria-label="Favoris"
              >
                <Heart size={20} className="md:w-5 md:h-5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-bordeaux-dark text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </a>

              {/* Panier */}
              <a 
                href="/panier" 
                onClick={onCartClick}
                className="relative text-champagne hover:text-gold transition-colors"
                aria-label="Panier"
              >
                <ShoppingBag size={20} className="md:w-5 md:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-bordeaux-dark text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </a>
            </div>
          </div>

          {/* Barre de recherche (optionnelle - apparaît en dessous) */}
          {isScrolled && (
            <div className="mt-2 lg:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className="search-input w-full"
                  onClick={onSearchClick}
                />
                <Search 
                  size={18} 
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/60" 
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Menu mobile */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navigation={navigation}
      />

      {/* Spacer pour compenser le header fixed */}
      <div className={`${isScrolled ? 'h-16' : 'h-20'} lg:h-24`} />
    </>
  );
};

export default Header;