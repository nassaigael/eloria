import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // ← Import Link
import { Star, Quote, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { testimonialsData, globalStats } from '../../data/testimonialsData';
import { productsData } from '../../data/productsData'; // ← Import pour trouver les slugs

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });

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
        const cardWidth = 450 + 24;
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
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Fonction pour trouver le slug du produit à partir du nom
  const findProductSlug = (productName: string): string => {
    const product = productsData.find(p => 
      p.name.toLowerCase() === productName.toLowerCase() ||
      p.name.includes(productName)
    );
    return product?.slug || productName.toLowerCase().replace(/\s+/g, '-');
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
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-linear-to-b from-bordeaux-dark to-bordeaux"
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 right-20 w-80 h-80 border border-gold/20 rounded-full" />
        <div className="absolute bottom-40 left-20 w-96 h-96 border border-gold/20 rounded-full" />
        
        <div className="absolute top-20 left-1/4 text-gold/5 text-[200px] font-serif">"</div>
        <div className="absolute bottom-20 right-1/4 text-gold/5 text-[200px] font-serif rotate-180">"</div>
      </div>

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
            {testimonialsData.map((testimonial, index) => (
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

                  {/* Produit associé - AVEC LIEN */}
                  {testimonial.productName && (
                    <Link
                      to={`/produit/${testimonial.productSlug || findProductSlug(testimonial.productName)}`}
                      className="flex items-center space-x-3 pt-4 border-t border-gold/10 group/link hover:bg-gold/5 transition-all duration-300"
                    >
                      {testimonial.productImage && (
                        <div className="relative overflow-hidden">
                          <img
                            src={testimonial.productImage}
                            alt={testimonial.productName}
                            className="w-10 h-10 object-cover border border-gold/20 group-hover/link:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-xs text-champagne/40">Produit associé</p>
                        <p className="text-sm text-champagne group-hover/link:text-gold transition-colors">
                          {testimonial.productName}
                        </p>
                      </div>
                      <ShoppingBag size={16} className="text-gold/40 group-hover/link:text-gold transition-colors" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
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

        {/* Bouton pour voir tous les avis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/avis"
            className="group relative inline-flex items-center px-8 py-3 border border-gold text-gold text-sm uppercase tracking-wider font-medium overflow-hidden"
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
              Voir tous les avis
              <motion.span
                className="ml-2"
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
  );
};

export default Testimonials;