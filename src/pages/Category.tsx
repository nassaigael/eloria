import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Filter, X, Heart, Star, ChevronDown } from 'lucide-react';
import { categoriesData } from '../data/categoriesData';
import { productsData, type Product } from '../data/productsData';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Utiliser useMemo pour les données qui ne changent pas
  const category = useMemo(() => 
    categoriesData.find(c => c.slug === slug), 
    [slug]
  );
  
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  // Filtrer les produits par catégorie - useMemo
  const categoryProducts = useMemo(() => {
    if (!category) return [];
    
    return productsData.filter(p => 
      p.category.toLowerCase() === category.name.toLowerCase()
    );
  }, [category]);

  // Filtrer et trier les produits - useMemo
  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    // Filtre par prix
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Tri
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'new':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // 'popular'
        result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [categoryProducts, sortBy, priceRange]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-bordeaux text-champagne flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Catégorie non trouvée</h1>
          <Link to="/" className="text-gold hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
      <div className="container-custom">
        {/* Fil d'Ariane */}
        <div className="flex items-center space-x-2 text-sm text-champagne/60 mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-gold">{category.name}</span>
        </div>

        {/* En-tête de la catégorie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-champagne/70 max-w-2xl">
            {category.description}
          </p>
          <div className="w-24 h-px bg-gold/40 mt-6" />
        </motion.div>

        {/* Barre d'outils */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gold/30 text-champagne hover:border-gold transition-colors md:hidden"
            >
              <Filter size={18} />
              <span>Filtres</span>
            </button>
            <p className="text-champagne/60">
              {filteredProducts.length} produits trouvés
            </p>
          </div>

          {/* Tri */}
          <div className="relative group">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-bordeaux-dark/50 border border-gold/30 text-champagne px-4 py-2 pr-10 focus:outline-none focus:border-gold cursor-pointer"
            >
              <option value="popular">Les plus populaires</option>
              <option value="new">Nouveautés</option>
              <option value="rating">Meilleures notes</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gold/60 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtres (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block w-64 space-y-6"
          >
            <div className="border border-gold/10 p-6">
              <h3 className="text-lg font-serif text-champagne mb-4">Prix</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-gold"
                />
                <div className="flex justify-between text-sm text-champagne/60">
                  <span>{priceRange[0]} €</span>
                  <span>{priceRange[1]} €</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Filtres (mobile) */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden w-full border border-gold/10 p-6 mb-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-serif text-champagne">Filtres</h3>
                  <button onClick={() => setShowFilters(false)}>
                    <X size={20} className="text-champagne/60 hover:text-gold" />
                  </button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm text-champagne/80">Prix maximum</h4>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-sm text-champagne/60">
                    <span>{priceRange[0]} €</span>
                    <span>{priceRange[1]} €</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grille des produits */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-champagne/60">Aucun produit trouvé</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
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
                      <button
                        onClick={() => isFavorite(product.id) 
                          ? removeFromFavorites(product.id)
                          : addToFavorites({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image,
                              category: product.category
                            })
                        }
                        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/50 backdrop-blur-sm transition-all duration-300"
                      >
                        <Heart 
                          size={18} 
                          className={isFavorite(product.id) ? 'fill-gold text-gold' : 'text-champagne'} 
                        />
                      </button>

                      {/* Image */}
                      <Link to={`/produit/${product.slug}`}>
                        <div className="relative aspect-3/4 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-bordeaux via-bordeaux/50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                        </div>
                      </Link>

                      {/* Informations */}
                      <div className="p-4">
                        <Link to={`/produit/${product.slug}`}>
                          <h3 className="text-lg font-serif text-champagne hover:text-gold transition-colors line-clamp-1">
                            {product.name}
                          </h3>
                        </Link>

                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-serif text-gold">
                              {product.price} €
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-champagne/50 line-through">
                                {product.originalPrice} €
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <Star size={14} className="fill-gold text-gold" />
                            <span className="text-xs text-champagne/70">
                              {product.rating}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full mt-4 bg-gold text-bordeaux-dark py-2 text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
                        >
                          Ajouter au panier
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;