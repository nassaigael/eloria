import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
    Star,
    ChevronLeft,
    ChevronRight,
    Quote,
    Filter,
    X,
    ThumbsUp,
    Share2,
    Award,
    CheckCircle,
    Clock
} from 'lucide-react';
import { testimonialsData, globalStats } from '../data/testimonialsData';

const Reviews = () => {
    const [filterRating, setFilterRating] = useState<number | null>(null);
    const [sortBy, setSortBy] = useState('recent');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedReview, setSelectedReview] = useState<number | null>(null);
    const [helpfulClicks, setHelpfulClicks] = useState<number[]>([]);

    // Statistiques détaillées
    const ratingCounts = useMemo(() => {
        const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        testimonialsData.forEach(review => {
            counts[review.rating as keyof typeof counts]++;
        });
        return counts;
    }, []);

    // Filtrer et trier les avis
    const filteredReviews = useMemo(() => {
        let filtered = [...testimonialsData];

        // Filtre par note
        if (filterRating) {
            filtered = filtered.filter(review => review.rating === filterRating);
        }

        // Tri
        switch (sortBy) {
            case 'recent':
                filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                break;
            case 'oldest':
                filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                break;
            case 'highest':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'lowest':
                filtered.sort((a, b) => a.rating - b.rating);
                break;
            case 'helpful':
                filtered.sort((a, b) => (b.helpful || 0) - (a.helpful || 0));
                break;
            default:
                break;
        }

        return filtered;
    }, [filterRating, sortBy]);

    const handleHelpful = (reviewId: number) => {
        if (!helpfulClicks.includes(reviewId)) {
            setHelpfulClicks([...helpfulClicks, reviewId]);
        }
    };

    // Rendu des étoiles
    const renderStars = (rating: number, size: number = 16) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={size}
                className={`${i < rating
                        ? 'fill-gold text-gold'
                        : 'text-gold/20'
                    } transition-colors`}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-10 w-64 h-64 border border-gold/5 rounded-full" />
                <div className="absolute bottom-40 right-10 w-96 h-96 border border-gold/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-gold/5 rounded-full" />

                {/* Motif de guillemets */}
                <div className="absolute top-20 left-1/4 text-gold/5 text-[200px] font-serif">"</div>
                <div className="absolute bottom-20 right-1/4 text-gold/5 text-[200px] font-serif rotate-180">"</div>
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
                    <span className="text-gold">Avis clients</span>
                </motion.div>

                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >

                    <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
                        Ce qu'elles <span className="text-gold">disent</span>
                    </h1>

                    <div className="flex justify-center items-center space-x-2 mb-8">
                        <div className="w-16 h-px bg-gold/40" />
                        <Award size={20} className="text-gold/60" />
                        <div className="w-16 h-px bg-gold/40" />
                    </div>

                    {/* Statistiques globales améliorées */}
                    <div className="max-w-4xl mx-auto bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Note moyenne */}
                            <div className="text-center">
                                <div className="text-5xl font-serif text-gold mb-2">
                                    {globalStats.averageRating}
                                </div>
                                <div className="flex justify-center space-x-1 mb-2">
                                    {renderStars(Math.floor(globalStats.averageRating), 20)}
                                </div>
                                <p className="text-sm text-champagne/60">
                                    sur 5
                                </p>
                            </div>

                            {/* Total avis */}
                            <div className="text-center border-l border-r border-gold/20">
                                <div className="text-5xl font-serif text-gold mb-2">
                                    {globalStats.totalReviews}
                                </div>
                                <p className="text-sm text-champagne/60 mb-2">
                                    avis vérifiés
                                </p>
                                <div className="flex items-center justify-center space-x-1">
                                    <CheckCircle size={14} className="text-gold/60" />
                                    <span className="text-xs text-champagne/40">100% authentiques</span>
                                </div>
                            </div>

                            {/* Recommandation */}
                            <div className="text-center">
                                <div className="text-5xl font-serif text-gold mb-2">
                                    {globalStats.recommendedBy}%
                                </div>
                                <p className="text-sm text-champagne/60 mb-2">
                                    recommandent
                                </p>
                                <div className="flex items-center justify-center space-x-1">
                                    <ThumbsUp size={14} className="text-gold/60" />
                                    <span className="text-xs text-champagne/40">satisfaction client</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Barre d'outils */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    {/* Filtres par note */}
                    <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
                        <button
                            onClick={() => setFilterRating(null)}
                            className={`px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${filterRating === null
                                    ? 'bg-gold text-bordeaux-dark'
                                    : 'border border-gold/30 text-champagne/70 hover:border-gold hover:text-gold'
                                }`}
                        >
                            Tous
                        </button>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => setFilterRating(rating)}
                                className={`px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 flex items-center space-x-1 whitespace-nowrap ${filterRating === rating
                                        ? 'bg-gold text-bordeaux-dark'
                                        : 'border border-gold/30 text-champagne/70 hover:border-gold hover:text-gold'
                                    }`}
                            >
                                <span>{rating}</span>
                                <Star size={12} className={filterRating === rating ? 'text-bordeaux-dark' : 'text-gold/60'} />
                                <span className="text-xs opacity-60">({ratingCounts[rating as keyof typeof ratingCounts]})</span>
                            </button>
                        ))}
                    </div>

                    {/* Tri et filtres mobile */}
                    <div className="flex items-center space-x-4 w-full md:w-auto">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="flex-1 md:flex-none bg-bordeaux-dark/50 border border-gold/30 text-champagne px-4 py-2 focus:outline-none focus:border-gold cursor-pointer"
                        >
                            <option value="recent">Plus récents</option>
                            <option value="oldest">Plus anciens</option>
                            <option value="highest">Meilleures notes</option>
                            <option value="lowest">Notes les plus basses</option>
                            <option value="helpful">Les plus utiles</option>
                        </select>

                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="md:hidden flex items-center space-x-2 px-4 py-2 border border-gold/30 text-champagne hover:border-gold transition-colors"
                        >
                            <Filter size={18} />
                            <span>Filtres</span>
                        </button>
                    </div>
                </div>

                {/* Filtres mobiles */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mb-8"
                        >
                            <div className="bg-linear-to-b from-gold/5 to-transparent border border-gold/10 p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-serif text-champagne">Filtres</h3>
                                    <button onClick={() => setShowFilters(false)}>
                                        <X size={20} className="text-champagne/60 hover:text-gold" />
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm text-champagne/70">Note</p>
                                    <div className="flex flex-wrap gap-2">
                                        {[5, 4, 3, 2, 1].map((rating) => (
                                            <button
                                                key={rating}
                                                onClick={() => {
                                                    setFilterRating(rating);
                                                    setShowFilters(false);
                                                }}
                                                className={`px-4 py-2 text-sm border transition-colors ${filterRating === rating
                                                        ? 'bg-gold text-bordeaux-dark border-gold'
                                                        : 'border-gold/30 text-champagne/70 hover:border-gold'
                                                    }`}
                                            >
                                                {rating} étoile{rating > 1 ? 's' : ''}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Grille des avis */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            <div
                                className={`relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border transition-all duration-500 p-6 cursor-pointer ${selectedReview === review.id
                                        ? 'border-gold scale-[1.02] shadow-2xl'
                                        : 'border-gold/10 hover:border-gold/30'
                                    }`}
                                onClick={() => setSelectedReview(selectedReview === review.id ? null : review.id)}
                            >
                                {/* Guillemet décoratif */}
                                <Quote className="absolute top-4 right-4 text-gold/10" size={40} />

                                {/* En-tête */}
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gold/20 rounded-full blur-md" />
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="relative w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                                        />
                                        {review.verified && (
                                            <div className="absolute -bottom-1 -right-1 bg-gold rounded-full p-1">
                                                <CheckCircle size={12} className="text-bordeaux-dark" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-serif text-champagne">
                                            {review.firstName}
                                        </h4>
                                        <p className="text-xs text-champagne/50">{review.location}</p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <div className="flex space-x-0.5">
                                                {renderStars(review.rating)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Commentaire */}
                                <p className={`text-champagne/70 text-sm leading-relaxed mb-4 transition-all duration-300 ${selectedReview === review.id ? '' : 'line-clamp-3'
                                    }`}>
                                    "{review.comment}"
                                </p>

                                {/* Date et actions */}
                                <div className="flex items-center justify-between text-xs">
                                    <div className="flex items-center space-x-2 text-champagne/40">
                                        <Clock size={12} />
                                        <span>{review.date}</span>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        {/* Utile */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleHelpful(review.id);
                                            }}
                                            className={`flex items-center space-x-1 transition-colors ${helpfulClicks.includes(review.id)
                                                    ? 'text-gold'
                                                    : 'text-champagne/40 hover:text-gold'
                                                }`}
                                        >
                                            <ThumbsUp size={12} />
                                            <span>{helpfulClicks.includes(review.id) ? (review.helpful || 0) + 1 : review.helpful || 0}</span>
                                        </button>

                                        {/* Partager (simulé) */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                alert('Fonctionnalité de partage à venir !');
                                            }}
                                            className="text-champagne/40 hover:text-gold transition-colors"
                                        >
                                            <Share2 size={12} />
                                        </button>
                                    </div>
                                </div>

                                {/* Produit associé (affiché seulement si sélectionné) */}
                                <AnimatePresence>
                                    {selectedReview === review.id && review.productName && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-4 pt-4 border-t border-gold/10"
                                        >
                                            <Link
                                                to={`/produit/${review.productName?.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="flex items-center space-x-3 group/link"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {review.productImage && (
                                                    <img
                                                        src={review.productImage}
                                                        alt={review.productName}
                                                        className="w-12 h-12 object-cover border border-gold/20"
                                                    />
                                                )}
                                                <div className="flex-1">
                                                    <p className="text-xs text-champagne/40">Produit associé</p>
                                                    <p className="text-sm text-champagne group-hover/link:text-gold transition-colors">
                                                        {review.productName}
                                                    </p>
                                                </div>
                                                <ChevronRight size={16} className="text-gold/40 group-hover/link:text-gold transition-colors" />
                                            </Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination (simulée) */}
                {filteredReviews.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center items-center space-x-4 mt-12"
                    >
                        <button className="w-10 h-10 flex items-center justify-center border border-gold/30 text-champagne hover:border-gold hover:text-gold transition-colors">
                            <ChevronLeft size={18} />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center bg-gold text-bordeaux-dark">
                            1
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center border border-gold/30 text-champagne hover:border-gold hover:text-gold transition-colors">
                            2
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center border border-gold/30 text-champagne hover:border-gold hover:text-gold transition-colors">
                            3
                        </button>
                        <span className="text-champagne/30">...</span>
                        <button className="w-10 h-10 flex items-center justify-center border border-gold/30 text-champagne hover:border-gold hover:text-gold transition-colors">
                            12
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center border border-gold/30 text-champagne hover:border-gold hover:text-gold transition-colors">
                            <ChevronRight size={18} />
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Reviews;