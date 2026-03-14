import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Heart,
    Star,
    Filter,
    X,
    ChevronDown,
} from 'lucide-react';
import { productsData, type Product } from '../data/productsData';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const Shop = () => {
    const [sortBy, setSortBy] = useState('popular');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const { addToCart } = useCart();
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

    // Obtenir toutes les catégories uniques
    const categories = useMemo(() => {
        const cats = productsData.map(p => p.category);
        return [...new Set(cats)];
    }, []);

    // Filtrer et trier les produits
    const filteredProducts = useMemo(() => {
        let result = [...productsData];

        // Filtre par catégorie
        if (selectedCategories.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category));
        }

        // Filtre par prix
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Tri
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'new':
                result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
                break;
            default:
                result.sort((a, b) => b.reviewCount - a.reviewCount);
        }

        return result;
    }, [selectedCategories, priceRange, sortBy]);

    const handleCategoryToggle = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
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

    return (
        <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-10 w-64 h-64 border border-gold/5 rounded-full" />
                <div className="absolute bottom-40 right-10 w-96 h-96 border border-gold/5 rounded-full" />
            </div>

            <div className="container-custom relative z-10">
                {/* Fil d'Ariane */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-3 text-sm mb-8"
                >
                    <Link to="/" className="text-champagne/50 hover:text-gold transition-colors">Accueil</Link>
                    <span className="text-champagne/30">/</span>
                    <span className="text-gold">Boutique</span>
                </motion.div>

                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
                        Toute la <span className="text-gold">collection</span>
                    </h1>
                    <div className="w-24 h-px bg-gold/40" />
                </motion.div>

                {/* Barre d'outils */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setMobileFiltersOpen(true)}
                            className="md:hidden flex items-center space-x-2 px-4 py-2 border border-gold/30 text-champagne hover:border-gold transition-colors"
                        >
                            <Filter size={18} />
                            <span>Filtres</span>
                        </button>
                        <p className="text-champagne/60">
                            <span className="text-gold font-serif">{filteredProducts.length}</span> produits trouvés
                        </p>
                    </div>

                    {/* Tri */}
                    <div className="relative group w-full md:w-auto">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full md:w-64 appearance-none bg-bordeaux-dark/50 border border-gold/30 text-champagne px-4 py-2 pr-10 focus:outline-none focus:border-gold cursor-pointer"
                        >
                            <option value="popular">Les plus populaires</option>
                            <option value="new">Nouveautés</option>
                            <option value="rating">Meilleures notes</option>
                            <option value="price-asc">Prix croissant</option>
                            <option value="price-desc">Prix décroissant</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gold/60 pointer-events-none" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filtres desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:block w-64 space-y-6"
                    >
                        {/* Filtre catégories */}
                        <div className="border border-gold/10 p-6">
                            <h3 className="text-lg font-serif text-gold mb-4 relative">
                                Catégories
                                <span className="absolute -bottom-2 left-0 w-8 h-px bg-gold/60" />
                            </h3>
                            <div className="space-y-3">
                                {categories.map((category) => (
                                    <label key={category} className="flex items-center space-x-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => handleCategoryToggle(category)}
                                            className="sr-only"
                                        />
                                        <div className={`w-4 h-4 border transition-colors ${selectedCategories.includes(category)
                                                ? 'border-gold bg-gold'
                                                : 'border-gold/30 group-hover:border-gold/60'
                                            }`}>
                                            {selectedCategories.includes(category) && (
                                                <svg className="w-4 h-4 text-bordeaux-dark" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="flex-1 text-sm text-champagne/70 group-hover:text-champagne transition-colors">
                                            {category}
                                        </span>
                                        <span className="text-xs text-gold/60">
                                            ({productsData.filter(p => p.category === category).length})
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Filtre prix */}
                        <div className="border border-gold/10 p-6">
                            <h3 className="text-lg font-serif text-gold mb-4 relative">
                                Prix
                                <span className="absolute -bottom-2 left-0 w-8 h-px bg-gold/60" />
                            </h3>
                            <div className="space-y-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                    className="w-full accent-gold"
                                />
                                <div className="flex justify-between text-sm text-champagne/60">
                                    <span>{priceRange[0]} Ar</span>
                                    <span>{priceRange[1]} Ar</span>
                                </div>
                            </div>
                        </div>

                        {/* Bouton réinitialiser */}
                        <button
                            onClick={() => {
                                setSelectedCategories([]);
                                setPriceRange([0, 1000]);
                                setSortBy('popular');
                            }}
                            className="w-full px-4 py-2 border border-gold/30 text-champagne/70 hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider"
                        >
                            Réinitialiser les filtres
                        </button>
                    </motion.div>

                    {/* Filtres mobile */}
                    <AnimatePresence>
                        {mobileFiltersOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-bordeaux-dark/80 backdrop-blur-sm z-50 md:hidden"
                                    onClick={() => setMobileFiltersOpen(false)}
                                />
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '-100%' }}
                                    transition={{ type: "spring", damping: 30 }}
                                    className="fixed top-0 left-0 bottom-0 w-80 bg-linear-to-b from-bordeaux to-bordeaux-dark border-r border-gold/20 z-50 md:hidden overflow-y-auto"
                                >
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-xl font-serif text-gold">Filtres</h3>
                                            <button onClick={() => setMobileFiltersOpen(false)}>
                                                <X size={20} className="text-champagne/60 hover:text-gold" />
                                            </button>
                                        </div>

                                        {/* Catégories mobile */}
                                        <div className="mb-6">
                                            <h4 className="text-sm uppercase tracking-wider text-champagne/70 mb-3">Catégories</h4>
                                            <div className="space-y-2">
                                                {categories.map((category) => (
                                                    <button
                                                        key={category}
                                                        onClick={() => handleCategoryToggle(category)}
                                                        className={`w-full text-left px-3 py-2 text-sm transition-colors ${selectedCategories.includes(category)
                                                                ? 'bg-gold/10 text-gold border-l-2 border-gold'
                                                                : 'text-champagne/70 hover:text-champagne hover:bg-gold/5'
                                                            }`}
                                                    >
                                                        {category} ({productsData.filter(p => p.category === category).length})
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Prix mobile */}
                                        <div className="mb-6">
                                            <h4 className="text-sm uppercase tracking-wider text-champagne/70 mb-3">Prix maximum</h4>
                                            <input
                                                type="range"
                                                min="0"
                                                max="1000"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                className="w-full accent-gold"
                                            />
                                            <div className="flex justify-between text-sm text-champagne/60 mt-2">
                                                <span>{priceRange[0]} Ar</span>
                                                <span>{priceRange[1]} Ar</span>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => {
                                                setSelectedCategories([]);
                                                setPriceRange([0, 1000]);
                                            }}
                                            className="w-full px-4 py-2 border border-gold/30 text-gold hover:bg-gold/10 transition-colors text-sm uppercase tracking-wider"
                                        >
                                            Réinitialiser
                                        </button>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                    {/* Grille des produits */}
                    <div className="flex-1">
                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-champagne/60">Aucun produit ne correspond à vos critères</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group relative"
                                    >
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
                                            <button
                                                onClick={() => handleToggleFavorite(product)}
                                                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold bg-bordeaux-dark/50 backdrop-blur-sm transition-all duration-300"
                                            >
                                                <Heart
                                                    size={18}
                                                    className={isFavorite(product.id) ? 'fill-gold text-gold' : 'text-champagne'}
                                                />
                                            </button>

                                            {/* Image */}
                                            <Link to={`/produit/${product.slug}`}>
                                                <div className="relative aspect-3/4 overflow-hidden">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-bordeaux via-bordeaux/50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                                                </div>
                                            </Link>

                                            {/* Informations */}
                                            <div className="p-4">
                                                <Link to={`/categorie/${product.category.toLowerCase()}`}>
                                                    <span className="text-xs text-gold/70 uppercase tracking-wider hover:text-gold transition-colors">
                                                        {product.category}
                                                    </span>
                                                </Link>

                                                <Link to={`/produit/${product.slug}`}>
                                                    <h3 className="text-lg font-serif text-champagne hover:text-gold transition-colors mt-1 mb-2 line-clamp-1">
                                                        {product.name}
                                                    </h3>
                                                </Link>

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

                                                    <div className="flex items-center space-x-1">
                                                        <Star size={14} className="fill-gold text-gold" />
                                                        <span className="text-xs text-champagne/70">
                                                            {product.rating}
                                                        </span>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => handleAddToCart(product)}
                                                    className="w-full mt-4 bg-gold text-bordeaux-dark py-2 text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
                                                >
                                                    Ajouter au panier
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;