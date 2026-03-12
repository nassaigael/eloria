import { motion } from 'framer-motion';
import { useRef } from 'react';
import { benefitsData } from '../../data/benefitsData';

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Positions fixes pour les points décoratifs (pas de Math.random)
  const dotPositions = [
    { top: 10, left: 15, opacity: 0.4 },
    { top: 25, left: 45, opacity: 0.6 },
    { top: 35, left: 75, opacity: 0.3 },
    { top: 45, left: 25, opacity: 0.5 },
    { top: 55, left: 85, opacity: 0.4 },
    { top: 65, left: 35, opacity: 0.7 },
    { top: 75, left: 55, opacity: 0.3 },
    { top: 85, left: 15, opacity: 0.5 },
    { top: 15, left: 65, opacity: 0.4 },
    { top: 30, left: 95, opacity: 0.6 },
    { top: 50, left: 5, opacity: 0.4 },
    { top: 70, left: 45, opacity: 0.5 },
    { top: 80, left: 75, opacity: 0.3 },
    { top: 20, left: 85, opacity: 0.6 },
    { top: 40, left: 55, opacity: 0.4 },
    { top: 60, left: 25, opacity: 0.5 },
    { top: 90, left: 35, opacity: 0.3 },
    { top: 5, left: 45, opacity: 0.6 },
    { top: 95, left: 65, opacity: 0.4 },
    { top: 45, left: 95, opacity: 0.5 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const newLocal = "relative py-24 md:py-32 overflow-hidden bg-linear-to-b from-bordeaux to-bordeaux-dark";
  const newLocal_1 = "absolute top-40 right-1/4 w-px h-48 bg-linear-to-b from-transparent via-gold/20 to-transparent transform rotate-45";
  return (
    <section 
      ref={sectionRef}
      className={newLocal}
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        {/* Cercles concentriques */}
        <div className="absolute top-20 left-10 w-72 h-72 border border-gold/20 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold/20 rounded-full" />
        
        {/* Lignes diagonales */}
        <div className={newLocal_1} />
        <div className="absolute bottom-40 left-1/4 w-px h-48 bg-linear-to-b from-transparent via-gold/20 to-transparent transform -rotate-45" />
      </div>

      {/* Motif de points dorés - avec positions fixes */}
      <div className="absolute inset-0 opacity-5">
        {dotPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              opacity: pos.opacity
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
            Un Service <span className="text-gold">d'Exception</span>
          </h2>
          <div className="w-24 h-px bg-gold/40 mx-auto" />
        </motion.div>

        {/* Grille des avantages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {benefitsData.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
              className="group relative"
            >
              {/* Carte avantage */}
              <div className="relative h-full bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 p-8 text-center overflow-hidden">
                
                {/* Effet de lumière au hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-gold/0 via-gold/5 to-gold/0"
                  initial={{ x: '-100%', y: '-100%' }}
                  whileHover={{ x: '100%', y: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                {/* Icône avec animation */}
                <motion.div
                  className="relative inline-block mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-all duration-500" />
                  <div className="relative w-20 h-20 mx-auto flex items-center justify-center rounded-full border-2 border-gold/30 group-hover:border-gold transition-all duration-500">
                    <benefit.icon 
                      size={32} 
                      className="text-gold group-hover:text-gold-light transition-colors duration-500" 
                    />
                  </div>
                </motion.div>

                {/* Titre */}
                <h3 className="text-xl font-serif text-champagne mb-3 group-hover:text-gold transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-champagne/60 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Highlight (badge) */}
                {benefit.highlight && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block"
                  >
                    <span className="text-[10px] uppercase tracking-wider text-gold/70 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                      {benefit.highlight}
                    </span>
                  </motion.div>
                )}

                {/* Ligne décorative en bas */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Éléments décoratifs au hover */}
              <motion.div
                className="absolute -inset-2 border border-gold/0 group-hover:border-gold/10 rounded-none transition-all duration-500 pointer-events-none"
                style={{ margin: '-1px' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bandeau de confiance supplémentaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-linear-to-r from-gold/5 via-gold/10 to-gold/5 border border-gold/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Statistiques */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <span className="text-3xl font-serif text-gold">50k+</span>
                <p className="text-xs text-champagne/60 mt-1">Clientes satisfaites</p>
              </div>
              <div className="w-px h-10 bg-gold/20" />
              <div className="text-center">
                <span className="text-3xl font-serif text-gold">4.8/5</span>
                <p className="text-xs text-champagne/60 mt-1">Note moyenne</p>
              </div>
              <div className="w-px h-10 bg-gold/20" />
              <div className="text-center">
                <span className="text-3xl font-serif text-gold">24h</span>
                <p className="text-xs text-champagne/60 mt-1">Expédition</p>
              </div>
            </div>

            {/* Badges de confiance */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-bordeaux bg-gold/20 flex items-center justify-center"
                  >
                    <span className="text-xs text-gold">✓</span>
                  </div>
                ))}
              </div>
              <span className="text-xs text-champagne/60">
                Certifié par nos clientes
              </span>
            </div>
          </div>
        </motion.div>

        {/* Ligne de séparation décorative */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full h-px bg-linear-to-r from-transparent via-gold/30 to-transparent mt-16"
        />
      </div>
    </section>
  );
};

export default Benefits;