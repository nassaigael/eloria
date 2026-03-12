import { Heart, ShoppingBag, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ nom: string; href: string }>;
}

const MobileMenu = ({ isOpen, onClose, navigation }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu lg:hidden">
      <div className="container-custom h-full flex flex-col">
        {/* En-tête du menu mobile */}
        <div className="flex items-center justify-between py-4 border-b border-gold/20">
          <span className="logo text-xl">Menu</span>
          <button 
            onClick={onClose}
            className="text-champagne hover:text-gold transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-8">
          <ul className="space-y-6">
            {navigation.map((item) => (
              <li key={item.nom}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="text-2xl font-serif text-champagne hover:text-gold transition-colors block"
                >
                  {item.nom}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer du menu mobile */}
        <div className="py-6 border-t border-gold/20">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Rechercher..."
              className="search-input w-full"
            />
          </div>
          <div className="flex justify-around">
            <a href="/favoris" className="text-champagne hover:text-gold transition-colors flex flex-col items-center">
              <Heart size={20} />
              <span className="text-xs mt-1">Favoris</span>
            </a>
            <a href="/panier" className="text-champagne hover:text-gold transition-colors flex flex-col items-center">
              <ShoppingBag size={20} />
              <span className="text-xs mt-1">Panier</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;