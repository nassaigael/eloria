import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye} from 'lucide-react';
import { Link } from 'react-router-dom';
import { productsData, type Product } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import ProductQuickView from '../modals/ProductQuickView';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

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

  // Produits populaires (les mieux notés)
  const Products = productsData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-linear-to-b from-bordeaux-dark to-bordeaux">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-40 -left-20 w-80 h-80 border border-gold/10 rounded-full" />
          <div className="absolute bottom-40 -right-20 w-96 h-96 border border-gold/10 rounded-full" />
        </div>

        {/* Motif de points dorés */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-1 h-1 bg-gold rounded-full" />
          <div className="absolute top-40 right-1/3 w-2 h-2 bg-gold rounded-full" />
          <div className="absolute bottom-60 left-1/2 w-1 h-1 bg-gold rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          {/* En-tête de section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-champagne mb-4">
              Nos <span className="text-gold">Incontournables</span>
            </h2>
            <div className="w-24 h-px bg-gold/40 mx-auto" />
          </motion.div>

          {/* Grille des produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {Products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Carte produit */}
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
                      className={`transition-colors ${isFavorite(product.id)
                        ? 'fill-gold text-gold'
                        : 'text-champagne'
                        }`}
                    />
                  </motion.button>

                  {/* Image - onClick ouvre le quick view */}
                  <div 
                    onClick={() => openQuickView(product)}
                    className="relative aspect-3/4 overflow-hidden cursor-pointer"
                  >
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Overlay au hover (seulement sur desktop) */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-t from-bordeaux via-bordeaux/50 to-transparent hidden md:block"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Boutons d'action - TOUJOURS VISIBLES SUR MOBILE/TABLETTE */}
                    <div className="absolute inset-x-0 bottom-0 p-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex space-x-2">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
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
                            e.stopPropagation();
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
                    {/* Catégorie - Lien vers la page catégorie */}
                    <Link to={`/categorie/${product.category.toLowerCase()}`}>
                      <span className="text-xs text-gold/70 uppercase tracking-wider hover:text-gold transition-colors">
                        {product.category}
                      </span>
                    </Link>

                    {/* Nom - Lien vers la page produit détaillée */}
                    <Link to={`/produit/${product.slug}`}>
                      <h3 className="text-lg font-serif text-champagne hover:text-gold transition-colors mt-1 mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Prix et note */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-serif text-gold">
                          {product.price} Ar
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-champagne/50 line-through">
                            {product.originalPrice} Ar
                          </span>
                        )}
                      </div>

                      {/* Note */}
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="fill-gold text-gold" />
                        <span className="text-xs text-champagne/70">
                          {product.rating}
                        </span>
                        <span className="text-xs text-champagne/50">
                          ({product.reviewCount})
                        </span>
                      </div>
                    </div>

                    {/* Couleurs disponibles */}
                    {product.colors && (
                      <div className="flex items-center space-x-2 mt-3">
                        {product.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full border border-gold/30 cursor-pointer hover:scale-110 transition-transform"
                            style={{ backgroundColor: color }}
                            title={`Couleur ${i + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bouton "Voir tout" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              to="/boutique"
              className="group relative inline-flex items-center px-10 py-4 border border-gold text-gold text-sm uppercase tracking-wider font-medium overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gold"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.4 }
                }}
              />
              <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-300">
                Découvrir toute la collection
                <motion.span
                  className="ml-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </span>
            </Link>
          </motion.div>
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

export default Products;