import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { categoriesData } from '../../data/categoriesData';

const Categories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Animation variants simplifiés
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
    const newLocal_1 = "w-24 h-px bg-gold/40 mx-auto";
  return (
    <section 
      ref={sectionRef}
      className={newLocal}
    >
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 border border-gold/10 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold/10 rounded-full" />
      </div>

      {/* Ligne dorée animée en arrière-plan */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container-custom relative z-10">
        {/* En-tête de section */}
        <motion.div
          style={{ opacity, y }}
          className="text-center mb-16 md:mb-20"
        >

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-champagne mb-4"
          >
            L'Art de la <span className="text-gold">Féminité</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={newLocal_1}
          />
        </motion.div>

        {/* Grille des catégories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categoriesData.map((category, index) => (
            <motion.a
              key={category.id}
              href={`/categorie/${category.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative block overflow-hidden cursor-pointer"
            >
              {/* Conteneur de l'image avec effet de zoom */}
              <div className="relative aspect-4/5 overflow-hidden">
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-bordeaux via-bordeaux/50 to-transparent"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Badge nombre de produits */}
                <motion.div
                  className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm text-bordeaux-dark text-xs px-3 py-1 rounded-full border border-gold/30"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {category.productCount} pièces
                </motion.div>

                {/* Contenu de la catégorie */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <motion.h3
                    className="text-2xl md:text-3xl font-serif text-champagne mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {category.name}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-champagne/70 mb-4 max-w-62.5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {category.description}
                  </motion.p>

                  {/* Lien "Découvrir" avec animation */}
                  <motion.div
                    className="flex items-center text-gold text-sm uppercase tracking-wider group/link"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="relative overflow-hidden">
                      Découvrir
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={16} className="ml-2" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bordure dorée animée au hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500 pointer-events-none"
                  style={{ margin: '1px' }}
                />
              </div>

              {/* Éléments décoratifs au hover */}
              <motion.div
                className="absolute -inset-2 border border-gold/0 group-hover:border-gold/10 rounded-none transition-all duration-500 pointer-events-none"
                style={{ margin: '-1px' }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Bouton "Voir toutes les collections" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/collections"
            className="group relative inline-flex items-center px-10 py-4 border border-gold text-gold text-sm uppercase tracking-wider font-medium overflow-hidden"
            whileHover="hover"
          >
            {/* Effet de fond au hover */}
            <motion.span
              className="absolute inset-0 bg-gold"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.4 }
              }}
            />
            
            {/* Texte du bouton */}
            <span className="relative z-10 flex items-center group-hover:text-bordeaux-dark transition-colors duration-300">
              Explorer toutes nos collections
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

      {/* Ligne dorée décorative en bas */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"
        style={{ scaleX: scrollYProgress }}
      />
    </section>
  );
};

export default Categories;