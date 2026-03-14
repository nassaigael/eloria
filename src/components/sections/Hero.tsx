import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'; // ← Ajout des icônes Pause/Play
import { Link } from 'react-router-dom';
import { heroSlides } from '../../data/heroData';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = heroSlides;

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-bordeaux">
      {/* Slides avec animation */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ 
            x: direction > 0 ? '100%' : '-100%', 
            opacity: 0, 
            scale: 0.95 
          }}
          animate={{ 
            x: 0, 
            opacity: 1, 
            scale: 1,
            transition: {
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }
          }}
          exit={{ 
            x: direction < 0 ? '100%' : '-100%', 
            opacity: 0, 
            scale: 0.95,
            transition: {
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }
          }}
          className="absolute inset-0"
        >
          {/* Image de fond avec overlay */}
          <div className="absolute inset-0">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient premium */}
            <div className="absolute inset-0 bg-linear-to-r from-bordeaux/90 via-bordeaux/50 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-bordeaux/90 via-bordeaux/20 to-transparent" />
          </div>

          {/* Contenu textuel */}
          <div className="relative h-full container-custom flex items-center">
            <motion.div 
              className="max-w-2xl text-champagne"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Badge collection */}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
                }}
                className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-4 relative"
              >
                {currentSlide.collection}
                <span className="absolute -bottom-2 left-0 w-12 h-px bg-gold/60" />
              </motion.span>

              {/* Titre principal */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
                }}
                className="text-5xl md:text-7xl font-serif mb-2"
              >
                {currentSlide.title}
              </motion.h1>

              {/* Sous-titre */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.6, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
                }}
                className="text-3xl md:text-5xl font-serif text-gold mb-6"
              >
                {currentSlide.subtitle}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.8, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
                }}
                className="text-lg md:text-xl text-champagne/80 mb-8 leading-relaxed"
              >
                {currentSlide.description}
              </motion.p>

              {/* Bouton CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 1.0, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
                }}
              >
                <Link
                  to={currentSlide.buttonLink}
                  className="group relative inline-flex items-center px-8 py-4 bg-gold text-bordeaux-dark text-sm uppercase tracking-wider font-medium overflow-hidden"
                >
                  {/* Effet de background animé */}
                  <motion.span
                    className="absolute inset-0 bg-gold-light"
                    initial={{ x: '-100%' }}
                    whileHover={{ 
                      x: '0%',
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  />
                  
                  {/* Contenu du bouton */}
                  <span className="relative z-10 flex items-center">
                    {currentSlide.buttonText}
                    <motion.span
                      className="ml-2"
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Boutons de navigation - design premium */}
      <div className="absolute bottom-12 right-12 flex items-center space-x-4 z-20">
        {/* Indicateur de slide */}
        <div className="flex items-center space-x-2 mr-4">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="group relative h-1 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`block w-12 h-px transition-colors ${
                index === currentIndex ? 'bg-gold' : 'bg-gold/30'
              }`} />
              <motion.span
                className="absolute top-0 left-0 h-full bg-gold"
                initial={{ width: '0%' }}
                animate={{ 
                  width: index === currentIndex ? '100%' : '0%',
                  transition: { duration: 5, ease: "linear" }
                }}
              />
            </motion.button>
          ))}
        </div>

        {/* Bouton pause/play */}
        <motion.button
          onClick={toggleAutoPlay}
          className="group relative w-14 h-14 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-500 bg-bordeaux-dark/20 backdrop-blur-sm"
          whileHover={{ scale: 1.1, borderColor: '#D4AF37' }}
          whileTap={{ scale: 0.95 }}
          aria-label={isAutoPlaying ? "Pause" : "Lecture"}
        >
          {isAutoPlaying ? (
            <Pause size={20} className="text-champagne group-hover:text-gold transition-colors" />
          ) : (
            <Play size={20} className="text-champagne group-hover:text-gold transition-colors" />
          )}
          <span className="absolute inset-0 rounded-full bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />
        </motion.button>

        {/* Bouton précédent */}
        <motion.button
          onClick={handlePrev}
          className="group relative w-14 h-14 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-500 bg-bordeaux-dark/20 backdrop-blur-sm"
          whileHover={{ scale: 1.1, borderColor: '#D4AF37' }}
          whileTap={{ scale: 0.95 }}
          aria-label="Slide précédent"
        >
          <ChevronLeft size={24} className="text-champagne group-hover:text-gold transition-colors" />
          <span className="absolute inset-0 rounded-full bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />
        </motion.button>

        {/* Bouton suivant */}
        <motion.button
          onClick={handleNext}
          className="group relative w-14 h-14 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-500 bg-bordeaux-dark/20 backdrop-blur-sm"
          whileHover={{ scale: 1.1, borderColor: '#D4AF37' }}
          whileTap={{ scale: 0.95 }}
          aria-label="Slide suivant"
        >
          <ChevronRight size={24} className="text-champagne group-hover:text-gold transition-colors" />
          <span className="absolute inset-0 rounded-full bg-gold/0 group-hover:bg-gold/10 transition-all duration-500" />
        </motion.button>
      </div>

      {/* Indicateur de slide (version mobile) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 lg:hidden">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-gold' : 'bg-gold/30'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Effet de lumière animé */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent"
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default Hero;