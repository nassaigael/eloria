import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart, ShoppingBag, Star, Eye, X, ChevronLeft, ChevronRight, RotateCcw, Shield, Truck } from 'lucide-react';
import { productsData, type Product } from '../../data/productsData';

const PopularProducts = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProduct) {
      setSelectedImageIndex((prev) => 
        (prev + 1) % 3
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setSelectedImageIndex((prev) => 
        (prev - 1 + 3) % 3
      );
    }
  };

  // Produits populaires (les mieux notés)
  const popularProducts = productsData
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
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
              Les Plus Prisés
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-champagne mb-4">
              Nos <span className="text-gold">Incontournables</span>
            </h2>
            <div className="w-24 h-px bg-gold/40 mx-auto" />
          </motion.div>

          {/* Grille des produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {popularProducts.map((product, index) => (
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
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/50 backdrop-blur-sm transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart 
                      size={18} 
                      className={`transition-colors ${
                        favorites.includes(product.id) 
                          ? 'fill-gold text-gold' 
                          : 'text-champagne'
                      }`}
                    />
                  </motion.button>

                  {/* Image */}
                  <div className="relative aspect-3/4 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Overlay au hover */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-t from-bordeaux via-bordeaux/50 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Boutons d'action au hover */}
                    <motion.div
                      className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <div className="flex space-x-2">
                        <motion.button
                          className="flex-1 bg-gold text-bordeaux-dark py-3 text-sm uppercase tracking-wider font-medium flex items-center justify-center space-x-2 hover:bg-gold-light transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingBag size={16} />
                          <span>Ajouter</span>
                        </motion.button>
                        <motion.button
                          onClick={() => openQuickView(product)}
                          className="w-12 bg-champagne/20 backdrop-blur-sm border border-gold/30 text-champagne flex items-center justify-center hover:border-gold transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye size={16} />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Informations produit */}
                  <div className="p-4">
                    {/* Catégorie */}
                    <span className="text-xs text-gold/70 uppercase tracking-wider">
                      {product.category}
                    </span>

                    {/* Nom */}
                    <h3 className="text-lg font-serif text-champagne mt-1 mb-2 line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Prix et note */}
                    <div className="flex items-center justify-between">
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
            <motion.a
              href="/boutique"
              className="group relative inline-flex items-center px-10 py-4 border border-gold text-gold text-sm uppercase tracking-wider font-medium overflow-hidden"
              whileHover="hover"
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
              <span className="relative z-10 flex items-center group-hover:text-bordeaux-dark transition-colors duration-300">
                Découvrir toute la collection
                <motion.span
                  className="ml-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Modal Quick View */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-bordeaux-dark/95 backdrop-blur-xl z-50"
              onClick={closeQuickView}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 md:inset-10 lg:inset-x-20 lg:inset-y-10 z-50 overflow-auto"
            >
              <div className="min-h-full flex items-center justify-center">
                <div className="relative bg-linear-to-b from-bordeaux to-bordeaux-dark w-full max-w-6xl border border-gold/30 shadow-2xl">
                  {/* Bouton fermer */}
                  <motion.button
                    onClick={closeQuickView}
                    className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/50 backdrop-blur-sm transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={20} className="text-champagne" />
                  </motion.button>

                  {/* Contenu du modal */}
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Galerie d'images */}
                    <div className="space-y-4">
                      <div className="relative aspect-3/4 overflow-hidden border border-gold/20">
                        <motion.img
                          key={selectedImageIndex}
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col space-y-2">
                          {selectedProduct.isNew && (
                            <span className="bg-gold text-bordeaux-dark text-xs px-3 py-1 uppercase tracking-wider">
                              Nouveau
                            </span>
                          )}
                          {selectedProduct.originalPrice && (
                            <span className="bg-champagne text-bordeaux-dark text-xs px-3 py-1 uppercase tracking-wider">
                              -{Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}%
                            </span>
                          )}
                        </div>

                        {/* Navigation des images (simulée) */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
                          <motion.button
                            onClick={prevImage}
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/50 backdrop-blur-sm transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronLeft size={20} className="text-champagne" />
                          </motion.button>
                          <motion.button
                            onClick={nextImage}
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/50 backdrop-blur-sm transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ChevronRight size={20} className="text-champagne" />
                          </motion.button>
                        </div>

                        {/* Indicateurs d'images */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          {[0, 1, 2].map((i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedImageIndex(i)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i === selectedImageIndex 
                                  ? 'w-6 bg-gold' 
                                  : 'bg-gold/30 hover:bg-gold/50'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Informations détaillées */}
                    <div className="space-y-6">
                      {/* Catégorie */}
                      <span className="text-gold text-sm uppercase tracking-[0.2em]">
                        {selectedProduct.category}
                      </span>

                      {/* Titre */}
                      <h2 className="text-3xl md:text-4xl font-serif text-champagne">
                        {selectedProduct.name}
                      </h2>

                      {/* Prix */}
                      <div className="flex items-center space-x-4">
                        <span className="text-3xl font-serif text-gold">
                          {selectedProduct.price} €
                        </span>
                        {selectedProduct.originalPrice && (
                          <span className="text-lg text-champagne/50 line-through">
                            {selectedProduct.originalPrice} €
                          </span>
                        )}
                      </div>

                      {/* Note et avis */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star size={18} className="fill-gold text-gold" />
                          <span className="text-lg text-champagne">
                            {selectedProduct.rating}
                          </span>
                        </div>
                        <span className="text-champagne/50">
                          ({selectedProduct.reviewCount} avis)
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-champagne/70 leading-relaxed">
                        {selectedProduct.description}
                      </p>

                      {/* Couleurs disponibles */}
                      {selectedProduct.colors && (
                        <div className="space-y-3">
                          <h4 className="text-sm uppercase tracking-wider text-champagne">
                            Couleurs disponibles
                          </h4>
                          <div className="flex space-x-3">
                            {selectedProduct.colors.map((color, i) => (
                              <motion.button
                                key={i}
                                className="group relative"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <div
                                  className="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-gold transition-all duration-300"
                                  style={{ backgroundColor: color }}
                                />
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-champagne/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                  Couleur {i + 1}
                                </span>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tailles */}
                      <div className="space-y-3">
                        <h4 className="text-sm uppercase tracking-wider text-champagne">
                          Tailles disponibles
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                            <motion.button
                              key={size}
                              className="px-4 py-2 border border-gold/30 text-champagne hover:bg-gold hover:text-bordeaux-dark transition-all duration-300 text-sm"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {size}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-4 pt-6">
                        <motion.button
                          className="flex-1 bg-gold text-bordeaux-dark py-4 text-sm uppercase tracking-wider font-medium flex items-center justify-center space-x-3 hover:bg-gold-light transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingBag size={18} />
                          <span>Ajouter au panier</span>
                        </motion.button>
                        <motion.button
                          onClick={() => toggleFavorite(selectedProduct.id)}
                          className="w-14 h-14 flex items-center justify-center border border-gold/30 hover:border-gold transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Heart 
                            size={20} 
                            className={`transition-colors ${
                              favorites.includes(selectedProduct.id) 
                                ? 'fill-gold text-gold' 
                                : 'text-champagne'
                            }`}
                          />
                        </motion.button>
                      </div>

                      {/* Informations supplémentaires */}
                      <div className="border-t border-gold/10 pt-6 space-y-3">
                        <div className="flex items-center text-sm text-champagne/60">
                          <Truck size={16} className="mr-3 text-gold/60" />
                          Livraison offerte dès 150€ d'achat
                        </div>
                        <div className="flex items-center text-sm text-champagne/60">
                          <RotateCcw size={16} className="mr-3 text-gold/60" />
                          Retours gratuits sous 30 jours
                        </div>
                        <div className="flex items-center text-sm text-champagne/60">
                          <Shield size={16} className="mr-3 text-gold/60" />
                          Paiement 100% sécurisé
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PopularProducts;