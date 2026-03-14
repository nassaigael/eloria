import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  ShoppingBag, 
  Eye, 
  X, 
  Heart, 
  Truck, 
  RotateCcw, 
  Shield 
} from 'lucide-react';
import { testimonialsData, globalStats } from '../../data/testimonialsData';
import { productsData, type Product } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  // Gestion du scroll avec useEffect
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 400;
      
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }

      setTimeout(() => {
        if (current) {
          setShowLeftArrow(current.scrollLeft > 0);
          setShowRightArrow(
            current.scrollLeft < current.scrollWidth - current.clientWidth
          );
        }
      }, 100);
    }
  };

  // Détecter les avis visibles dans le carrousel
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollLeft;
        const cardWidth = 450 + 24; // largeur carte + gap
        const startIndex = Math.floor(scrollPosition / cardWidth);
        const endIndex = startIndex + Math.ceil(container.clientWidth / cardWidth);
        
        setVisibleRange({
          start: startIndex,
          end: Math.min(endIndex, testimonialsData.length)
        });
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Appel initial
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Fonctions du modal
  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
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

  // Fonction pour trouver le produit à partir du nom
  const findProductByName = (productName: string): Product | undefined => {
    return productsData.find(p => 
      p.name.toLowerCase() === productName.toLowerCase() ||
      p.name.includes(productName)
    );
  };

  // Rendu des étoiles
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating 
            ? 'fill-gold text-gold' 
            : 'text-gold/20'
        } transition-colors`}
      />
    ));
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative py-24 md:py-32 overflow-hidden bg-linear-to-b from-bordeaux-dark to-bordeaux"
      >
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 opacity-10">
          {/* Cercles concentriques */}
          <div className="absolute top-40 right-20 w-80 h-80 border border-gold/20 rounded-full" />
          <div className="absolute bottom-40 left-20 w-96 h-96 border border-gold/20 rounded-full" />
          
          {/* Motif de guillemets */}
          <div className="absolute top-20 left-1/4 text-gold/5 text-[200px] font-serif">"</div>
          <div className="absolute bottom-20 right-1/4 text-gold/5 text-[200px] font-serif rotate-180">"</div>
        </div>

        {/* Motif de points dorés */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              style={{
                top: `${i * 3}%`,
                left: `${i * 7}%`,
                opacity: 0.3
              }}
            />
          ))}
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
              Ce qu'elles <span className="text-gold">disent</span>
            </h2>
            <div className="w-24 h-px bg-gold/40 mx-auto mb-8" />

            {/* Statistiques globales */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <span className="text-3xl font-serif text-gold">{globalStats.averageRating}</span>
                  <span className="text-champagne/60">/5</span>
                </div>
                <div className="flex space-x-1 justify-center">
                  {renderStars(Math.floor(globalStats.averageRating))}
                </div>
              </div>
              <div className="w-px h-10 bg-gold/20 hidden md:block" />
              <div className="text-center">
                <span className="text-3xl font-serif text-gold block mb-1">{globalStats.totalReviews}+</span>
                <span className="text-xs text-champagne/60">Avis vérifiés</span>
              </div>
              <div className="w-px h-10 bg-gold/20 hidden md:block" />
              <div className="text-center">
                <span className="text-3xl font-serif text-gold block mb-1">{globalStats.recommendedBy}%</span>
                <span className="text-xs text-champagne/60">Recommandent</span>
              </div>
            </div>
          </motion.div>

          {/* Carrousel d'avis */}
          <div className="relative group">
            {/* Flèches de navigation */}
            <AnimatePresence>
              {showLeftArrow && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/80 backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft size={20} className="text-champagne" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showRightArrow && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/80 backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight size={20} className="text-champagne" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Container scrollable */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-6 pb-8 snap-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonialsData.map((testimonial, index) => {
                const product = findProductByName(testimonial.productName || '');

                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={index >= visibleRange.start && index <= visibleRange.end 
                      ? { opacity: 1, scale: 1, y: 0 }
                      : { opacity: 0, scale: 0.8, y: -50 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      duration: 0.6
                    }}
                    className="flex-none w-full sm:w-112.5 snap-start"
                  >
                    {/* Carte d'avis */}
                    <div className="relative h-full bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 p-8">
                      
                      {/* Guillemet décoratif */}
                      <Quote className="absolute top-6 right-6 text-gold/10" size={60} />

                      {/* En-tête avec avatar */}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gold/20 rounded-full blur-md" />
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="relative w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-serif text-champagne">
                            {testimonial.firstName}
                          </h4>
                          <p className="text-xs text-champagne/50">{testimonial.location}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex space-x-0.5">
                              {renderStars(testimonial.rating)}
                            </div>
                            <span className="text-xs text-champagne/40">{testimonial.dateRelative || testimonial.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Commentaire */}
                      <p className="text-champagne/80 text-sm leading-relaxed mb-6 line-clamp-4">
                        "{testimonial.comment}"
                      </p>

                      {/* Produit associé - avec bouton Quick View */}
                      {product && (
                        <div className="flex items-center space-x-3 pt-4 border-t border-gold/10">
                          {testimonial.productImage && (
                            <img
                              src={testimonial.productImage}
                              alt={testimonial.productName}
                              className="w-10 h-10 object-cover border border-gold/20"
                            />
                          )}
                          <div className="flex-1">
                            <p className="text-xs text-champagne/40">Produit associé</p>
                            <p className="text-sm text-champagne">{testimonial.productName}</p>
                          </div>
                          <motion.button
                            onClick={() => openQuickView(product)}
                            className="w-8 h-8 flex items-center justify-center border border-gold/30 hover:border-gold transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            title="Voir le produit"
                          >
                            <Eye size={14} className="text-gold/60 hover:text-gold" />
                          </motion.button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Indicateurs de scroll */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonialsData.map((_, index) => (
                <motion.button
                  key={index}
                  className="group relative h-1 overflow-hidden rounded-full"
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollLeft = index * (450 + 24);
                    }
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className={`block w-8 h-0.5 transition-colors duration-300 ${
                    index >= visibleRange.start && index <= visibleRange.end 
                      ? 'bg-gold' 
                      : 'bg-gold/20 group-hover:bg-gold/40'
                  }`} />
                  {index === visibleRange.start && (
                    <motion.span
                      className="absolute top-0 left-0 h-full bg-gold"
                      initial={{ width: '0%' }}
                      animate={{
                        width: '100%',
                        transition: {
                          duration: 5,
                          ease: "linear",
                        }
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
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

                        {/* Navigation des images */}
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
                      <Link to={`/categorie/${selectedProduct.category.toLowerCase()}`} onClick={closeQuickView}>
                        <span className="text-gold text-sm uppercase tracking-[0.2em] hover:underline">
                          {selectedProduct.category}
                        </span>
                      </Link>

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

                      {/* Matière */}
                      {selectedProduct.material && (
                        <div className="space-y-2">
                          <h4 className="text-sm uppercase tracking-wider text-champagne">Matière</h4>
                          <p className="text-champagne/70">{selectedProduct.material}</p>
                        </div>
                      )}

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
                      {selectedProduct.sizes && (
                        <div className="space-y-3">
                          <h4 className="text-sm uppercase tracking-wider text-champagne">
                            Tailles disponibles
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProduct.sizes.map((size) => (
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
                      )}

                      {/* Détails */}
                      {selectedProduct.details && (
                        <div className="space-y-3">
                          <h4 className="text-sm uppercase tracking-wider text-champagne">Détails</h4>
                          <ul className="list-disc list-inside text-champagne/70 space-y-1">
                            {selectedProduct.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Entretien */}
                      {selectedProduct.care && (
                        <div className="space-y-3">
                          <h4 className="text-sm uppercase tracking-wider text-champagne">Entretien</h4>
                          <ul className="list-disc list-inside text-champagne/70 space-y-1">
                            {selectedProduct.care.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex space-x-4 pt-6">
                        <motion.button
                          onClick={() => {
                            handleAddToCart(selectedProduct);
                            closeQuickView();
                          }}
                          className="flex-1 bg-gold text-bordeaux-dark py-4 text-sm uppercase tracking-wider font-medium flex items-center justify-center space-x-3 hover:bg-gold-light transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingBag size={18} />
                          <span>Ajouter au panier</span>
                        </motion.button>
                        <motion.button
                          onClick={() => handleToggleFavorite(selectedProduct)}
                          className="w-14 h-14 flex items-center justify-center border border-gold/30 hover:border-gold transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Heart
                            size={20}
                            className={`transition-colors ${
                              isFavorite(selectedProduct.id) 
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

export default Testimonials;