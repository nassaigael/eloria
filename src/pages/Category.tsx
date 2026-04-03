import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Heart,
    ShoppingBag,
    Star,
    Eye,
    Filter,
    ChevronDown,
    ArrowUpDown,
    Sparkles
} from 'lucide-react';
import { productsData, type Product } from '../data/productsData';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import ProductQuickView from '../components/modals/ProductQuickView';

const Category = () => {
    const { slug } = useParams<{ slug: string }>();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [sortBy, setSortBy] = useState('default');
    const [filterOpen, setFilterOpen] = useState(false);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 700000]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [activeFilterCount, setActiveFilterCount] = useState(0);

    const { addToCart } = useCart();
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

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

    useEffect(() => {
        let count = 0;
        if (priceRange[1] < 700000) count++;
        if (selectedSizes.length > 0) count += selectedSizes.length;
        if (selectedColors.length > 0) count += selectedColors.length;
        if (sortBy !== 'default') count++;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveFilterCount(count);
    }, [priceRange, selectedSizes, selectedColors, sortBy]);

    const categoryProducts = productsData.filter(
        product => product.category.toLowerCase() === slug?.toLowerCase()
    );

    const sortOptions = {
        default: 'Par défaut',
        priceAsc: 'Prix croissant',
        priceDesc: 'Prix décroissant',
        rating: 'Meilleures notes',
        newest: 'Plus récents'
    };

    const getSortedProducts = () => {
        let sorted = [...categoryProducts];

        switch (sortBy) {
            case 'priceAsc':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                sorted.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                sorted.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
                break;
            default:
                break;
        }

        sorted = sorted.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        if (selectedSizes.length > 0) {
            sorted = sorted.filter(p => p.sizes?.some(size => selectedSizes.includes(size)));
        }

        if (selectedColors.length > 0) {
            sorted = sorted.filter(p => p.colors?.some(color => selectedColors.includes(color)));
        }

        return sorted;
    };

    const sortedProducts = getSortedProducts();

    const openQuickView = (product: Product) => {
        setSelectedProduct(product);
    };

    const closeQuickView = () => {
        setSelectedProduct(null);
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

    const allSizes = ['XS', 'S', 'M', 'L', 'XL', '34', '36', '38', '40', '42', '44'];

    const allColors = [
        { name: 'Noir', value: '#000000' },
        { name: 'Blanc', value: '#FFFFFF' },
        { name: 'Rouge', value: '#C41E3A' },
        { name: 'Bordeaux', value: '#800020' },
        { name: 'Or', value: '#D4AF37' },
        { name: 'Bleu', value: '#1E3A8A' },
        { name: 'Vert', value: '#0B4F6C' },
        { name: 'Beige', value: '#E8DCC6' },
        { name: 'Marron', value: '#8B4513' },
        { name: 'Rose', value: '#FFB6C1' }
    ];

    const toggleSize = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const toggleColor = (color: string) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    const resetFilters = () => {
        setPriceRange([0, 700000]);
        setSelectedSizes([]);
        setSelectedColors([]);
        setSortBy('default');
    };

    const categoryName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : '';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <>
            <section className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-linear-to-b from-bordeaux-dark via-bordeaux to-bordeaux-dark">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent" />
                    <div className="absolute top-20 left-10 w-72 h-72 border border-gold/5 rounded-full" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 border border-gold/5 rounded-full" />
                    <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-gold/20 rounded-full" />
                    <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-gold/20 rounded-full" />
                    <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-gold/15 rounded-full" />
                </div>

                <div className="container-custom relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12 relative"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                            className="inline-block mb-4"
                        >
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-champagne mb-4 relative inline-block">
                            {categoryName}
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold to-transparent"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            />
                        </h1>
                        <p className="text-champagne/50 mt-6 text-lg">
                            Une sélection exclusive de pièces d'exception
                        </p>
                    </motion.div>

                    <div className="sticky top-20 z-20 bg-bordeaux-dark/80 backdrop-blur-md border border-gold/10 rounded-none mb-8 p-4">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                            <div className="flex items-center space-x-4 w-full lg:w-auto">
                                <button
                                    onClick={() => setFilterOpen(!filterOpen)}
                                    className="flex items-center space-x-3 px-5 py-2.5 border border-gold/30 hover:border-gold text-champagne transition-all duration-300 group"
                                >
                                    <Filter size={18} className="group-hover:text-gold transition-colors" />
                                    <span className="text-sm uppercase tracking-wider">Filtres</span>
                                    <ChevronDown size={16} className={`transition-transform duration-300 ${filterOpen ? 'rotate-180' : ''}`} />
                                    {activeFilterCount > 0 && (
                                        <span className="ml-2 w-5 h-5 rounded-full bg-gold text-bordeaux-dark text-xs flex items-center justify-center">
                                            {activeFilterCount}
                                        </span>
                                    )}
                                </button>

                                <div className="hidden md:flex items-center space-x-2 border-l border-gold/20 pl-4">
                                    <button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 transition-all ${viewMode === 'grid' ? 'text-gold border-b border-gold' : 'text-champagne/40 hover:text-champagne'}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 transition-all ${viewMode === 'list' ? 'text-gold border-b border-gold' : 'text-champagne/40 hover:text-champagne'}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>

                                <p className="hidden lg:block text-sm text-champagne/50 ml-4">
                                    <span className="text-gold font-serif">{sortedProducts.length}</span> articles
                                </p>
                            </div>

                            <div className="relative group w-full lg:w-auto">
                                <div className="flex items-center space-x-2">
                                    <ArrowUpDown size={14} className="text-gold/60" />
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="appearance-none bg-transparent border border-gold/30 text-champagne px-5 py-2.5 pr-10 focus:outline-none focus:border-gold cursor-pointer text-sm uppercase tracking-wider"
                                    >
                                        {Object.entries(sortOptions).map(([value, label]) => (
                                            <option key={value} value={value} className="bg-bordeaux">
                                                {label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold/60 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {activeFilterCount > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gold/10"
                            >
                                {priceRange[1] < 700000 && (
                                    <span className="flex items-center space-x-2 px-3 py-1 bg-gold/10 border border-gold/30 text-champagne text-xs">
                                        <span>Prix max: {priceRange[1].toLocaleString()} Ar</span>
                                        <button onClick={() => setPriceRange([0, 700000])} className="hover:text-gold">×</button>
                                    </span>
                                )}
                                {selectedSizes.map(size => (
                                    <span key={size} className="flex items-center space-x-2 px-3 py-1 bg-gold/10 border border-gold/30 text-champagne text-xs">
                                        <span>Taille: {size}</span>
                                        <button onClick={() => toggleSize(size)} className="hover:text-gold">×</button>
                                    </span>
                                ))}
                                {selectedColors.map(color => {
                                    const colorName = allColors.find(c => c.value === color)?.name;
                                    return (
                                        <span key={color} className="flex items-center space-x-2 px-3 py-1 bg-gold/10 border border-gold/30 text-champagne text-xs">
                                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                                            <span>Couleur: {colorName}</span>
                                            <button onClick={() => toggleColor(color)} className="hover:text-gold">×</button>
                                        </span>
                                    );
                                })}
                                <button onClick={resetFilters} className="text-xs text-gold/60 hover:text-gold underline">
                                    Tout effacer
                                </button>
                            </motion.div>
                        )}
                    </div>

                    <AnimatePresence>
                        {filterOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden mb-8"
                            >
                                <div className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/20 p-6 md:p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div className="space-y-4">
                                            <h3 className="text-sm uppercase tracking-wider text-gold flex items-center space-x-2">
                                                <span className="w-6 h-px bg-gold/60" />
                                                <span>Fourchette de prix</span>
                                            </h3>
                                            <div className="space-y-4">
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="700000"
                                                    step="10000"
                                                    value={priceRange[1]}
                                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                    className="w-full h-px accent-gold bg-gold/30 rounded-none appearance-none cursor-pointer"
                                                    style={{ background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${(priceRange[1] / 700000) * 100}%, rgba(212,175,55,0.3) ${(priceRange[1] / 700000) * 100}%)` }}
                                                />
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-champagne/50">0 Ar</span>
                                                    <span className="text-lg font-serif text-gold">{priceRange[1].toLocaleString()} Ar</span>
                                                    <span className="text-xs text-champagne/50">700 000 Ar</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-sm uppercase tracking-wider text-gold flex items-center space-x-2">
                                                <span className="w-6 h-px bg-gold/60" />
                                                <span>Tailles</span>
                                            </h3>
                                            <div className="flex flex-wrap gap-3">
                                                {allSizes.map(size => (
                                                    <motion.button
                                                        key={size}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => toggleSize(size)}
                                                        className={`relative w-12 py-2 text-sm font-medium transition-all duration-300 ${selectedSizes.includes(size)
                                                            ? 'bg-gold text-bordeaux-dark'
                                                            : 'border border-gold/30 text-champagne/70 hover:border-gold'
                                                            }`}
                                                    >
                                                        {size}
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-sm uppercase tracking-wider text-gold flex items-center space-x-2">
                                                <span className="w-6 h-px bg-gold/60" />
                                                <span>Couleurs</span>
                                            </h3>
                                            <div className="flex flex-wrap gap-3">
                                                {allColors.map(color => (
                                                    <motion.button
                                                        key={color.value}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => toggleColor(color.value)}
                                                        className={`relative group`}
                                                        title={color.name}
                                                    >
                                                        <div
                                                            className={`w-8 h-8 rounded-full transition-all duration-300 ${selectedColors.includes(color.value)
                                                                ? 'ring-2 ring-gold ring-offset-2 ring-offset-bordeaux scale-110'
                                                                : 'hover:scale-110'
                                                                }`}
                                                            style={{ backgroundColor: color.value, border: color.value === '#FFFFFF' ? '1px solid rgba(212,175,55,0.3)' : 'none' }}
                                                        />
                                                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-champagne/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                            {color.name}
                                                        </span>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-8 pt-6 border-t border-gold/10">
                                        <button
                                            onClick={resetFilters}
                                            className="px-6 py-2 text-sm uppercase tracking-wider text-champagne/60 hover:text-gold transition-colors"
                                        >
                                            Réinitialiser tous les filtres
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {sortedProducts.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-24"
                        >
                            <div className="inline-block p-6 border border-gold/20 mb-6">
                                <Sparkles size={48} className="text-gold/40" />
                            </div>
                            <p className="text-champagne/60 text-lg">Aucun produit trouvé</p>
                            <button
                                onClick={resetFilters}
                                className="mt-6 px-8 py-3 border border-gold text-gold hover:bg-gold/10 transition-colors uppercase tracking-wider text-sm"
                            >
                                Réinitialiser les filtres
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className={viewMode === 'grid'
                                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                                : "space-y-6"
                            }
                        >
                            {sortedProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    variants={itemVariants}
                                    custom={index}
                                    className="group"
                                >
                                    {viewMode === 'grid' ? (
                                        <div className="relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl">
                                            {/* Badges premium */}
                                            <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                                                {product.isNew && (
                                                    <motion.span
                                                        initial={{ x: -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        className="bg-gold text-bordeaux-dark text-[10px] px-3 py-1 uppercase tracking-wider"
                                                    >
                                                        Nouveauté
                                                    </motion.span>
                                                )}
                                                {product.originalPrice && (
                                                    <motion.span
                                                        initial={{ x: -20, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: 0.1 }}
                                                        className="bg-champagne text-bordeaux-dark text-[10px] px-3 py-1 uppercase tracking-wider"
                                                    >
                                                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                                                    </motion.span>
                                                )}
                                            </div>

                                            <motion.button
                                                onClick={() => handleToggleFavorite(product)}
                                                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/50 backdrop-blur-sm transition-all duration-300"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Heart
                                                    size={18}
                                                    className={`transition-colors ${isFavorite(product.id) ? 'fill-gold text-gold' : 'text-champagne'}`}
                                                />
                                            </motion.button>

                                            <div
                                                onClick={() => openQuickView(product)}
                                                className="relative aspect-3/4 overflow-hidden cursor-pointer"
                                            >
                                                <motion.img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.08 }}
                                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                                />

                                                <div className="absolute inset-0 bg-linear-to-t from-bordeaux via-bordeaux/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                                    <div className="flex space-x-2">
                                                        <motion.button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleAddToCart(product);
                                                            }}
                                                            className="flex-1 bg-gold text-bordeaux-dark py-2.5 text-xs uppercase tracking-wider font-medium flex items-center justify-center space-x-2 hover:bg-gold-light transition-colors"
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                        >
                                                            <ShoppingBag size={14} />
                                                            <span>Ajouter au panier</span>
                                                        </motion.button>
                                                        <motion.button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                openQuickView(product);
                                                            }}
                                                            className="w-10 bg-champagne/20 backdrop-blur-sm border border-gold/30 text-champagne flex items-center justify-center hover:border-gold transition-colors"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Eye size={14} />
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-5">
                                                <span className="text-[10px] text-gold/60 uppercase tracking-[0.2em]">
                                                    {product.category}
                                                </span>
                                                <h3 className="text-base font-serif text-champagne hover:text-gold transition-colors mt-2 mb-2 line-clamp-1 cursor-pointer" onClick={() => openQuickView(product)}>
                                                    {product.name}
                                                </h3>
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex items-baseline space-x-2">
                                                        <span className="text-xl font-serif text-gold">
                                                            {product.price.toLocaleString()} Ar
                                                        </span>
                                                        {product.originalPrice && (
                                                            <span className="text-xs text-champagne/40 line-through">
                                                                {product.originalPrice.toLocaleString()} Ar
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Star size={12} className="fill-gold text-gold" />
                                                        <span className="text-xs text-champagne/60">{product.rating}</span>
                                                    </div>
                                                </div>

                                                {product.colors && product.colors.length > 0 && (
                                                    <div className="flex items-center space-x-1.5 mt-3 pt-3 border-t border-gold/10">
                                                        {product.colors.slice(0, 4).map((color, i) => (
                                                            <div
                                                                key={i}
                                                                className="w-3 h-3 rounded-full border border-gold/30"
                                                                style={{ backgroundColor: color }}
                                                                title={`Couleur ${i + 1}`}
                                                            />
                                                        ))}
                                                        {product.colors.length > 4 && (
                                                            <span className="text-[9px] text-champagne/40">+{product.colors.length - 4}</span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative bg-linear-to-r from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 p-4 flex flex-col sm:flex-row gap-6">
                                            <div
                                                onClick={() => openQuickView(product)}
                                                className="relative w-full sm:w-48 h-48 overflow-hidden cursor-pointer shrink-0"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                />
                                                {product.isNew && (
                                                    <span className="absolute top-2 left-2 bg-gold text-bordeaux-dark text-[10px] px-2 py-0.5 uppercase tracking-wider">
                                                        Nouveau
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div>
                                                    <span className="text-[10px] text-gold/60 uppercase tracking-[0.2em]">{product.category}</span>
                                                    <h3 className="text-xl font-serif text-champagne hover:text-gold transition-colors mt-1 cursor-pointer" onClick={() => openQuickView(product)}>
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-sm text-champagne/50 mt-2 line-clamp-2">{product.description}</p>
                                                    <div className="flex items-center space-x-4 mt-3">
                                                        <div className="flex items-center space-x-1">
                                                            <Star size={14} className="fill-gold text-gold" />
                                                            <span className="text-sm text-champagne/70">{product.rating}</span>
                                                            <span className="text-xs text-champagne/40">({product.reviewCount} avis)</span>
                                                        </div>
                                                        {product.sizes && (
                                                            <div className="flex items-center space-x-1">
                                                                <span className="text-xs text-champagne/40">Tailles:</span>
                                                                <span className="text-xs text-champagne/70">{product.sizes.slice(0, 3).join(', ')}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="flex items-baseline justify-end space-x-2">
                                                        <span className="text-2xl font-serif text-gold">{product.price.toLocaleString()} Ar</span>
                                                        {product.originalPrice && (
                                                            <span className="text-sm text-champagne/40 line-through">{product.originalPrice.toLocaleString()} Ar</span>
                                                        )}
                                                    </div>
                                                    <div className="flex space-x-2 mt-4">
                                                        <button
                                                            onClick={() => handleAddToCart(product)}
                                                            className="px-5 py-2 bg-gold text-bordeaux-dark text-xs uppercase tracking-wider font-medium hover:bg-gold-light transition-colors flex items-center space-x-2"
                                                        >
                                                            <ShoppingBag size={14} />
                                                            <span>Ajouter</span>
                                                        </button>
                                                        <button
                                                            onClick={() => handleToggleFavorite(product)}
                                                            className="w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold transition-colors"
                                                        >
                                                            <Heart size={16} className={isFavorite(product.id) ? 'fill-gold text-gold' : 'text-champagne'} />
                                                        </button>
                                                        <button
                                                            onClick={() => openQuickView(product)}
                                                            className="w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold transition-colors"
                                                        >
                                                            <Eye size={16} className="text-champagne" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            <ProductQuickView
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={closeQuickView}
            />
        </>
    );
};

export default Category;