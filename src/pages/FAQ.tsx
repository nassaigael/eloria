import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    ChevronDown,
    HelpCircle,
    MessageCircle,
    Clock,
    ThumbsUp,
    Award,
    X
} from 'lucide-react';
import { faqCategories, faqItems, faqStats } from '../data/faqData';

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [helpfulClicks, setHelpfulClicks] = useState<number[]>([]);

    // Filtrer les questions par catégorie et recherche
    const filteredQuestions = useMemo(() => {
        let filtered = faqItems;

        // Filtre par catégorie
        if (activeCategory !== 'all') {
            filtered = filtered.filter(item => item.category === activeCategory);
        }

        // Filtre par recherche
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.question.toLowerCase().includes(query) ||
                item.answer.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [activeCategory, searchQuery]);

    // Questions populaires
    const popularQuestions = useMemo(() => {
        return faqItems.filter(item => item.isPopular).slice(0, 4);
    }, []);

    const toggleItem = (itemId: number) => {
        setOpenItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const handleHelpful = (itemId: number) => {
        if (!helpfulClicks.includes(itemId)) {
            setHelpfulClicks([...helpfulClicks, itemId]);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-10 w-64 h-64 border border-gold/5 rounded-full" />
                <div className="absolute bottom-40 right-10 w-96 h-96 border border-gold/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-gold/5 rounded-full" />

                {/* Motif décoratif */}
                <div className="absolute top-20 right-20 text-gold/5 text-[200px] font-serif">?</div>
                <div className="absolute bottom-20 left-20 text-gold/5 text-[200px] font-serif">?</div>
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
                    <span className="text-gold">FAQ</span>
                </motion.div>

                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
                        Comment <span className="text-gold">pouvons-nous</span> vous aider ?
                    </h1>

                    <div className="flex justify-center items-center space-x-2 mb-8">
                        <div className="w-16 h-px bg-gold/40" />
                        <Award size={20} className="text-gold/60" />
                        <div className="w-16 h-px bg-gold/40" />
                    </div>

                    {/* Barre de recherche */}
                    <div className="max-w-2xl mx-auto relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher une question..."
                            className="w-full bg-bordeaux-dark/70 border border-gold/30 rounded-full py-4 pl-14 pr-4 text-champagne placeholder:text-champagne/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                        />
                        <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gold/60" />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-champagne/40 hover:text-gold"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* Statistiques rapides */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-8 mb-12"
                >
                    <div className="flex items-center space-x-3 bg-gold/5 border border-gold/20 px-6 py-3">
                        <HelpCircle size={20} className="text-gold/60" />
                        <div>
                            <p className="text-2xl font-serif text-gold">{faqStats.totalQuestions}</p>
                            <p className="text-xs text-champagne/60">Questions</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-gold/5 border border-gold/20 px-6 py-3">
                        <MessageCircle size={20} className="text-gold/60" />
                        <div>
                            <p className="text-2xl font-serif text-gold">{faqStats.categoriesCount}</p>
                            <p className="text-xs text-champagne/60">Catégories</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-gold/5 border border-gold/20 px-6 py-3">
                        <Clock size={20} className="text-gold/60" />
                        <div>
                            <p className="text-2xl font-serif text-gold">{faqStats.responseTime}</p>
                            <p className="text-xs text-champagne/60">Temps de réponse</p>
                        </div>
                    </div>
                </motion.div>

                {/* Questions populaires */}
                {!searchQuery && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-serif text-champagne mb-6 text-center">
                            Questions <span className="text-gold">populaires</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {popularQuestions.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveCategory(item.category);
                                        const element = document.getElementById(`question-${item.id}`);
                                        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="group flex items-center space-x-3 bg-gold/5 border border-gold/20 px-6 py-4 text-left transition-all duration-300 hover:border-gold/50"
                                >
                                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gold/30 group-hover:border-gold">
                                        <span className="text-gold">?</span>
                                    </div>
                                    <span className="text-sm text-champagne/70 group-hover:text-gold transition-colors flex-1">
                                        {item.question}
                                    </span>
                                    <ChevronDown size={16} className="text-gold/40 group-hover:text-gold transition-colors -rotate-90" />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Catégories */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-3 mb-8"
                >
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${activeCategory === 'all'
                                ? 'bg-gold text-bordeaux-dark'
                                : 'border border-gold/30 text-champagne/70 hover:border-gold hover:text-gold'
                            }`}
                    >
                        Toutes
                    </button>
                    {faqCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${activeCategory === category.id
                                    ? 'bg-gold text-bordeaux-dark'
                                    : 'border border-gold/30 text-champagne/70 hover:border-gold hover:text-gold'
                                }`}
                        >
                            <span>{category.icon}</span>
                            <span>{category.name}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Description de la catégorie */}
                {activeCategory !== 'all' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <p className="text-champagne/60">
                            {faqCategories.find(c => c.id === activeCategory)?.description}
                        </p>
                    </motion.div>
                )}

                {/* Liste des questions */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {filteredQuestions.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-champagne/60">Aucune question ne correspond à votre recherche.</p>
                            <p className="text-sm text-champagne/40 mt-2">Essayez d'autres mots-clés ou contactez-nous.</p>
                            <Link
                                to="/contact"
                                className="inline-block mt-6 px-6 py-3 border border-gold text-gold hover:bg-gold/10 transition-colors"
                            >
                                Contacter le support
                            </Link>
                        </motion.div>
                    ) : (
                        filteredQuestions.map((item, index) => (
                            <motion.div
                                key={item.id}
                                id={`question-${item.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="border border-gold/10 hover:border-gold/30 transition-all duration-300"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className="w-full flex items-center justify-between p-6 text-left group"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-lg font-serif text-champagne group-hover:text-gold transition-colors pr-8">
                                            {item.question}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown size={20} className="text-gold/60 group-hover:text-gold" />
                                    </motion.div>
                                </button>

                                {/* Réponse */}
                                <AnimatePresence>
                                    {openItems.includes(item.id) && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2 border-t border-gold/10">
                                                <p className="text-champagne/70 leading-relaxed mb-4">
                                                    {item.answer}
                                                </p>

                                                {/* Actions */}
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-xs text-champagne/40">
                                                        Catégorie : {faqCategories.find(c => c.id === item.category)?.name}
                                                    </span>
                                                    <button
                                                        onClick={() => handleHelpful(item.id)}
                                                        className={`flex items-center space-x-2 transition-colors ${helpfulClicks.includes(item.id)
                                                                ? 'text-gold'
                                                                : 'text-champagne/40 hover:text-gold'
                                                            }`}
                                                    >
                                                        <ThumbsUp size={14} />
                                                        <span>Utile ?</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))
                    )}
                </div>

                {/* Contact support */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16 p-8 bg-linear-to-b from-gold/5 to-transparent border border-gold/20"
                >
                    <h3 className="text-2xl font-serif text-champagne mb-2">
                        Vous n'avez pas trouvé votre réponse ?
                    </h3>
                    <p className="text-champagne/70 mb-6">
                        Notre équipe est à votre disposition pour vous aider
                    </p>
                    <Link
                        to="/contact"
                        className="group relative inline-flex items-center px-8 py-4 bg-gold text-bordeaux-dark text-sm uppercase tracking-wider font-medium overflow-hidden"
                    >
                        <motion.span
                            className="absolute inset-0 bg-linear-to-r from-gold-light to-gold"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                        <span className="relative z-10 flex items-center space-x-2">
                            <MessageCircle size={16} />
                            <span>Contacter le support</span>
                        </span>
                    </Link>
                </motion.div>

                {/* Liens rapides */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-4 mt-8"
                >
                    <Link to="/livraison" className="text-xs text-champagne/40 hover:text-gold transition-colors">
                        Livraison
                    </Link>
                    <span className="text-champagne/20">•</span>
                    <Link to="/retours" className="text-xs text-champagne/40 hover:text-gold transition-colors">
                        Retours
                    </Link>
                    <span className="text-champagne/20">•</span>
                    <Link to="/guide-tailles" className="text-xs text-champagne/40 hover:text-gold transition-colors">
                        Guide des tailles
                    </Link>
                    <span className="text-champagne/20">•</span>
                    <Link to="/cgv" className="text-xs text-champagne/40 hover:text-gold transition-colors">
                        CGV
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default FAQ;