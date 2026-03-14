import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    X,
    ChevronLeft,
    ChevronRight,
    Heart,
    ShoppingBag,
    Star,
    Truck,
    RotateCcw,
    Shield
} from 'lucide-react';
import { type Product } from '../../data/productsData';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

interface ProductQuickViewProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProductQuickView = ({ product, isOpen, onClose }: ProductQuickViewProps) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const { addToCart } = useCart();
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

    // Gestion du scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Réinitialiser l'index quand le produit change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedImageIndex(0);
    }, [product]);

    if (!product) return null;

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % 3);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + 3) % 3);
    };

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    };

    const handleToggleFavorite = () => {
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

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-bordeaux-dark/95 backdrop-blur-xl z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed inset-0 md:inset-4 lg:inset-10 xl:inset-x-20 xl:inset-y-10 z-50 overflow-hidden flex items-center justify-center"
                    >
                        <div className="relative w-full h-full md:h-auto md:max-h-[90vh] bg-linear-to-b from-bordeaux to-bordeaux-dark border border-gold/30 shadow-2xl overflow-y-auto">
                            {/* Bouton fermer */}
                            <motion.button
                                onClick={onClose}
                                className="absolute top-2 right-2 md:top-4 md:right-4 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/80 backdrop-blur-sm transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <X size={18} className="md:w-5 md:h-5 text-champagne" />
                            </motion.button>

                            {/* Contenu du modal */}
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
                                {/* Galerie d'images */}
                                <div className="space-y-2 md:space-y-4">
                                    <div className="relative aspect-3/4 md:aspect-3/4 overflow-hidden border border-gold/20">
                                        <motion.img
                                            key={selectedImageIndex}
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />

                                        {/* Badges */}
                                        <div className="absolute top-2 left-2 md:top-4 md:left-4 flex flex-col space-y-1 md:space-y-2">
                                            {product.isNew && (
                                                <span className="bg-gold text-bordeaux-dark text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 uppercase tracking-wider">
                                                    Nouveau
                                                </span>
                                            )}
                                            {product.originalPrice && (
                                                <span className="bg-champagne text-bordeaux-dark text-[10px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 uppercase tracking-wider">
                                                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                                                </span>
                                            )}
                                        </div>

                                        {/* Navigation des images */}
                                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-1 md:px-4">
                                            <motion.button
                                                onClick={prevImage}
                                                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/70 backdrop-blur-sm transition-all duration-300"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ChevronLeft size={16} className="md:w-5 md:h-5 text-champagne" />
                                            </motion.button>
                                            <motion.button
                                                onClick={nextImage}
                                                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/70 backdrop-blur-sm transition-all duration-300"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ChevronRight size={16} className="md:w-5 md:h-5 text-champagne" />
                                            </motion.button>
                                        </div>

                                        {/* Indicateurs d'images */}
                                        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 md:space-x-2">
                                            {[0, 1, 2].map((i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setSelectedImageIndex(i)}
                                                    className={`transition-all duration-300 ${i === selectedImageIndex
                                                            ? 'w-4 md:w-6 h-1 md:h-1.5 bg-gold'
                                                            : 'w-1 md:w-1.5 h-1 md:h-1.5 bg-gold/30 hover:bg-gold/50'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Informations détaillées */}
                                <div className="space-y-3 md:space-y-6 overflow-y-auto max-h-[50vh] md:max-h-none md:overflow-visible px-1 md:px-0">
                                    {/* Catégorie */}
                                    <Link to={`/categorie/${product.category.toLowerCase()}`} onClick={onClose}>
                                        <span className="text-gold text-xs md:text-sm uppercase tracking-[0.2em] hover:underline">
                                            {product.category}
                                        </span>
                                    </Link>

                                    {/* Titre */}
                                    <h2 className="text-xl md:text-3xl lg:text-4xl font-serif text-champagne">
                                        {product.name}
                                    </h2>

                                    {/* Prix */}
                                    <div className="flex items-center space-x-2 md:space-x-4">
                                        <span className="text-xl md:text-2xl lg:text-3xl font-serif text-gold">
                                            {product.price} Ar
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm md:text-base lg:text-lg text-champagne/50 line-through">
                                                {product.originalPrice} Ar
                                            </span>
                                        )}
                                    </div>

                                    {/* Note et avis */}
                                    <div className="flex items-center space-x-2 md:space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <Star size={14} className="md:w-4 md:h-4 lg:w-5 lg:h-5 fill-gold text-gold" />
                                            <span className="text-sm md:text-base lg:text-lg text-champagne">
                                                {product.rating}
                                            </span>
                                        </div>
                                        <span className="text-xs md:text-sm text-champagne/50">
                                            ({product.reviewCount} avis)
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs md:text-sm lg:text-base text-champagne/70 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Matière */}
                                    {product.material && (
                                        <div className="space-y-1 md:space-y-2">
                                            <h4 className="text-xs md:text-sm uppercase tracking-wider text-champagne">Matière</h4>
                                            <p className="text-xs md:text-sm text-champagne/70">{product.material}</p>
                                        </div>
                                    )}

                                    {/* Couleurs disponibles */}
                                    {product.colors && (
                                        <div className="space-y-2 md:space-y-3">
                                            <h4 className="text-xs md:text-sm uppercase tracking-wider text-champagne">
                                                Couleurs disponibles
                                            </h4>
                                            <div className="flex space-x-2 md:space-x-3">
                                                {product.colors.map((color, i) => (
                                                    <motion.button
                                                        key={i}
                                                        className="group relative"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <div
                                                            className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full border-2 border-transparent group-hover:border-gold transition-all duration-300"
                                                            style={{ backgroundColor: color }}
                                                        />
                                                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] md:text-[10px] text-champagne/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                            Couleur {i + 1}
                                                        </span>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Tailles */}
                                    {product.sizes && (
                                        <div className="space-y-2 md:space-y-3">
                                            <h4 className="text-xs md:text-sm uppercase tracking-wider text-champagne">
                                                Tailles disponibles
                                            </h4>
                                            <div className="flex flex-wrap gap-1 md:gap-2">
                                                {product.sizes.map((size) => (
                                                    <motion.button
                                                        key={size}
                                                        className="px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 border border-gold/30 text-champagne hover:bg-gold hover:text-bordeaux-dark transition-all duration-300 text-xs md:text-sm"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {size}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 pt-3 md:pt-6 sticky bottom-0 bg-linear-to-t from-bordeaux to-transparent pb-2">
                                        <motion.button
                                            onClick={() => {
                                                handleAddToCart();
                                                onClose();
                                            }}
                                            className="flex-1 bg-gold text-bordeaux-dark py-2 md:py-3 lg:py-4 text-xs md:text-sm uppercase tracking-wider font-medium flex items-center justify-center space-x-2 hover:bg-gold-light transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <ShoppingBag size={14} className="md:w-4 md:h-4 lg:w-5 lg:h-5" />
                                            <span>Ajouter</span>
                                        </motion.button>
                                        <motion.button
                                            onClick={handleToggleFavorite}
                                            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center border border-gold/30 hover:border-gold transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Heart
                                                size={16}
                                                className={`md:w-5 md:h-5 lg:w-6 lg:h-6 transition-colors ${isFavorite(product.id)
                                                        ? 'fill-gold text-gold'
                                                        : 'text-champagne'
                                                    }`}
                                            />
                                        </motion.button>
                                    </div>

                                    {/* Informations supplémentaires */}
                                    <div className="border-t border-gold/10 pt-3 md:pt-6 space-y-1 md:space-y-2">
                                        <div className="flex items-center text-[10px] md:text-xs lg:text-sm text-champagne/60">
                                            <Truck size={12} className="mr-2 text-gold/60 shrink-0" />
                                            <span>Livraison offerte dès 150 000 Ar</span>
                                        </div>
                                        <div className="flex items-center text-[10px] md:text-xs lg:text-sm text-champagne/60">
                                            <RotateCcw size={12} className="mr-2 text-gold/60 shrink-0" />
                                            <span>Retours gratuits sous 30 jours</span>
                                        </div>
                                        <div className="flex items-center text-[10px] md:text-xs lg:text-sm text-champagne/60">
                                            <Shield size={12} className="mr-2 text-gold/60 shrink-0" />
                                            <span>Paiement 100% sécurisé</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProductQuickView;