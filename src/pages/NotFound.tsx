import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Home,
} from 'lucide-react';
import {
    notFoundMessages,
} from '../data/notFoundData';

const NotFound = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16 overflow-hidden">
            {/* Éléments décoratifs animés */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Cercles concentriques */}
                <motion.div
                    className="absolute top-20 -left-20 w-80 h-80 border border-gold/10 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 -right-20 w-96 h-96 border border-gold/10 rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Fil d'Ariane */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-3 text-sm mb-8"
                    >
                        <Link to="/" className="text-champagne/50 hover:text-gold transition-colors flex items-center space-x-1">
                            <Home size={14} />
                            <span>Accueil</span>
                        </Link>
                        <span className="text-champagne/30">/</span>
                        <span className="text-gold">404</span>
                    </motion.div>

                    {/* Contenu principal */}
                    <div className="text-center mb-12">
                        {/* Nombre 404 animé */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="relative inline-block mb-8"
                        >
                            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
                            <h1 className="relative text-9xl md:text-[200px] font-serif text-gold leading-none">
                                404
                            </h1>
                        </motion.div>

                        {/* Sous-titre animé */}
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            className="space-y-4"
                        >
                            <h2 className="text-4xl md:text-5xl font-serif text-champagne">
                                {notFoundMessages.heading}
                            </h2>

                            <p className="text-lg text-champagne/70 max-w-lg mx-auto">
                                {notFoundMessages.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;