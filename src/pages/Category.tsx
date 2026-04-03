import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Eye, Filter, ChevronDown } from 'lucide-react';
import { productsData, type Product } from '../data/productsData';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import ProductQuickView from '../components/modals/ProductQuickView';

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState('default');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 700000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  // Filtrer les produits par catégorie
  const categoryProducts = productsData.filter(
    product => product.category.toLowerCase() === slug?.toLowerCase()
  );

  // Options de tri
  const sortOptions = {
    default: 'Par défaut',
    priceAsc: 'Prix croissant',
    priceDesc: 'Prix décroissant',
    rating: 'Meilleures notes',
    newest: 'Plus récents'
  };

  // Trier les produits
  const getSortedProducts = () => {
    let sorted = [...categoryProducts];

    switch (sortBy) {
      case 'priceAsc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        sorted.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      default:
        break;
    }

    // Filtrer par prix
    sorted = sorted.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filtrer par tailles
    if (selectedSizes.length > 0) {
      sorted = sorted.filter(p => p.sizes?.some(size => selectedSizes.includes(size)));
    }

    // Filtrer par couleurs
    if (selectedColors.length > 0) {
      sorted = sorted.filter(p => p.colors?.some(color => selectedColors.includes(color)));
    }

    return sorted;
  };

  const sortedProducts = getSortedProducts();

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
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

  const handleToggleFavorite = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        slug: product.slug
      });
    }
  };

  // Toutes les tailles disponibles
  const allSizes = ['XS', 'S', 'M', 'L', 'XL', '34', '36', '38', '40', '42', '44'];
  
  // Toutes les couleurs disponibles
  const allColors = [
    { name: 'Noir', value: '#000000' },
    { name: 'Blanc', value: '#FFFFFF' },
    { name: 'Rouge', value: '#C41E3A' },
    { name: 'Bordeaux', value: '#800020' },
    { name: 'Or', value: '#D4AF37' },
    { name: 'Bleu', value: '#1E3A8A' },
    { name: 'Vert', value: '#0B4F6C' },
    { name: 'Beige', value: '#E8DCC6' },
    { name: 'Marron', value: '#8B4513' },
    { name: 'Rose', value: '#FFB6C1' }
  ];

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const resetFilters = () => {
    setPriceRange([0, 700000]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setSortBy('default');
  };

  // Nom de la catégorie affiché
  const categoryName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : '';

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-linear-to-b from-bordeaux to-bordeaux-dark">
        <div className="container-custom relative z-10">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-champagne mb-4">
              {categoryName}
            </h1>
            <div className="w-24 h-px bg-gold/40 mx-auto mb-4" />
            <p className="text-champagne/60">
              {sortedProducts.length} produits
            </p>
          </motion.div>

          {/* Barre de filtres et tri */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 pb-4 border-b border-gold/20">
            {/* Bouton filtres mobile */}
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gold/30 text-champagne"
            >
              <Filter size={18} />
              <span>Filtres</span>
              <ChevronDown size={16} className={`transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Filtres - Desktop toujours visible, Mobile conditionnel */}
            <div className={`${filterOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-6 w-full lg:w-auto`}>
              {/* Filtre prix */}
              <div className="space-y-2">
                <label className="text-xs text-champagne/60 uppercase tracking-wider">Prix</label>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-champagne">{priceRange[0].toLocaleString()} Ar</span>
                  <input
                    type="range"
                    min="0"
                    max="700000"
                    step="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-32 accent-gold"
                  />
                  <span className="text-xs text-champagne">{priceRange[1].toLocaleString()} Ar</span>
                </div>
              </div>

              {/* Filtre tailles */}
              <div className="space-y-2">
                <label className="text-xs text-champagne/60 uppercase tracking-wider">Tailles</label>
                <div className="flex flex-wrap gap-2">
                  {allSizes.slice(0, 6).map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-1 text-xs border transition-all ${
                        selectedSizes.includes(size)
                          ? 'border-gold bg-gold/20 text-gold'
                          : 'border-gold/30 text-champagne/70 hover:border-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtre couleurs */}
              <div className="space-y-2">
                <label className="text-xs text-champagne/60 uppercase tracking-wider">Couleurs</label>
                <div className="flex flex-wrap gap-2">
                  {allColors.slice(0, 6).map(color => (
                    <button
                      key={color.value}
                      onClick={() => toggleColor(color.value)}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        selectedColors.includes(color.value)
                          ? 'border-gold scale-110'
                          : 'border-transparent hover:scale-110'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Reset filtres */}
              <button
                onClick={resetFilters}
                className="text-xs text-champagne/50 hover:text-gold transition-colors"
              >
                Réinitialiser
              </button>
            </div>

            {/* Tri */}
            <div className="flex items-center space-x-2">
              <label className="text-xs text-champagne/60 uppercase tracking-wider">Trier par</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-gold/30 px-3 py-1 text-champagne text-sm focus:outline-none focus:border-gold"
              >
                {Object.entries(sortOptions).map(([value, label]) => (
                  <option key={value} value={value} className="bg-bordeaux">
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grille des produits */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-champagne/60">Aucun produit trouvé</p>
              <button
                onClick={resetFilters}
                className="mt-4 text-gold hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500">
                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                      {product.isNew && (
                        <span className="bg-gold text-bordeaux-dark text-xs px-3 py-1 uppercase tracking-wider">
                          Nouveau
                        </span>
                      )}
                      {product.originalPrice && (
                        <span className="bg-champagne text-bordeaux-dark text-xs px-3 py-1 uppercase tracking-wider">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                      )}
                    </div>

                    {/* Bouton favoris */}
                    <motion.button
                      onClick={() => handleToggleFavorite(product)}
                      className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/50 backdrop-blur-sm transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart
                        size={18}
                        className={`transition-colors ${isFavorite(product.id) ? 'fill-gold text-gold' : 'text-champagne'}`}
                      />
                    </motion.button>

                    {/* Image */}
                    <div className="relative aspect-3/4 overflow-hidden cursor-pointer">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                        onClick={() => openQuickView(product)}
                      />

                      {/* Boutons d'action au hover */}
                      <div className="absolute inset-x-0 bottom-0 p-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex space-x-2">
                          <motion.button
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToCart(product);
                            }}
                            className="flex-1 bg-gold text-bordeaux-dark py-3 text-sm uppercase tracking-wider font-medium flex items-center justify-center space-x-2 hover:bg-gold-light transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ShoppingBag size={16} />
                            <span>Ajouter</span>
                          </motion.button>
                          <motion.button
                            onClick={(e) => {
                              e.preventDefault();
                              openQuickView(product);
                            }}
                            className="w-12 bg-champagne/20 backdrop-blur-sm border border-gold/30 text-champagne flex items-center justify-center hover:border-gold transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Eye size={16} />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Informations produit */}
                    <div className="p-4">
                      <span className="text-xs text-gold/70 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-serif text-champagne hover:text-gold transition-colors mt-1 mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-serif text-gold">
                            {product.price.toLocaleString()} Ar
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-champagne/50 line-through">
                              {product.originalPrice.toLocaleString()} Ar
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star size={14} className="fill-gold text-gold" />
                          <span className="text-xs text-champagne/70">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal Quick View */}
      <ProductQuickView
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={closeQuickView}
      />
    </>
  );
};

export default Category;