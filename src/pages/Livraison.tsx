import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Clock,
    CheckCircle,
    ChevronDown,
    X,
    Search
} from 'lucide-react';

const Livraison = () => {
    const [openFAQ, setOpenFAQ] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const deliveryMethods = [
        {
            id: 1,
            name: "Livraison Standard",
            icon: "🚚",
            description: "Livraison à domicile ou en point relais",
            delay: "3-5 jours ouvrés",
            price: 9900,
            freeFrom: 150000,
            isRecommended: true,
            isExpress: false,
            features: [
                "Suivi de colis en temps réel",
                "Livraison du lundi au samedi",
                "SMS et email de confirmation"
            ]
        },
        {
            id: 2,
            name: "Livraison Express",
            icon: "⚡",
            description: "Livraison prioritaire à domicile",
            delay: "24-48h",
            price: 19900,
            freeFrom: null,
            isRecommended: false,
            isExpress: true,
            features: [
                "Livraison le jour même possible",
                "Créneau horaire au choix",
                "Appel du livreur 30min avant"
            ]
        },
        {
            id: 3,
            name: "Point Relais",
            icon: "📦",
            description: "Retrait en point relais",
            delay: "3-5 jours ouvrés",
            price: 5900,
            freeFrom: 100000,
            isRecommended: false,
            isExpress: false,
            features: [
                "Plus de 500 points relais à Madagascar",
                "Retrait 7j/7",
                "Gratuit dès 100 000 Ar"
            ]
        },
        {
            id: 4,
            name: "Retrait en Boutique",
            icon: "🏪",
            description: "Retrait gratuit en boutique",
            delay: "24h",
            price: 0,
            freeFrom: null,
            isRecommended: true,
            isExpress: false,
            features: [
                "Retrait à Antananarivo",
                "Essayage sur place",
                "Paiement sur place possible"
            ]
        }
    ];

    const deliveryFAQ = [
        {
            id: 1,
            question: "Quels sont les délais de livraison à Madagascar ?",
            answer: "Les délais de livraison varient selon le mode choisi : Livraison Standard : 3-5 jours ouvrés, Livraison Express : 24-48h, Point Relais : 3-5 jours ouvrés. Les commandes sont préparées sous 24h."
        },
        {
            id: 2,
            question: "La livraison est-elle offerte à Madagascar ?",
            answer: "Oui, la livraison standard est offerte dès 150 000 Ar d'achat. La livraison en point relais est offerte dès 100 000 Ar d'achat."
        },
        {
            id: 3,
            question: "Quels sont les modes de livraison disponibles ?",
            answer: "Nous proposons 4 modes de livraison à Madagascar : Livraison Standard à domicile, Livraison Express, Retrait en Point Relais et Retrait en boutique à Antananarivo."
        },
        {
            id: 4,
            question: "Puis-je suivre ma commande ?",
            answer: "Oui, vous recevrez un email avec un numéro de suivi dès l'expédition de votre commande. Vous pouvez suivre votre colis en temps réel sur notre site ou sur le site du transporteur."
        },
        {
            id: 5,
            question: "Que faire si je ne suis pas présent lors de la livraison ?",
            answer: "Si vous n'êtes pas présent, le livreur déposera un avis de passage. Vous pourrez alors récupérer votre colis dans le point relais indiqué ou reprogrammer une livraison."
        },
        {
            id: 6,
            question: "Livrez-vous dans toutes les régions de Madagascar ?",
            answer: "Oui, nous livrons dans toutes les régions de Madagascar : Antananarivo, Toamasina, Mahajanga, Fianarantsoa, Antsiranana, Toliara et toutes les autres villes."
        }
    ];

    const deliveryStats = {
        satisfiedCustomers: 98,
        onTimeDelivery: 95,
        citiesServed: 25,
        pointsRelais: 500
    };

    const toggleFAQ = (id: number) => {
        setOpenFAQ(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const filteredFAQ = deliveryFAQ.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-10 w-64 h-64 border border-gold/5 rounded-full" />
                <div className="absolute bottom-40 right-10 w-96 h-96 border border-gold/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-gold/5 rounded-full" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
                        Livraison <span className="text-gold">Madagascar</span>
                    </h1>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <MapPin size={20} className="text-gold" />
                        <span className="text-champagne/70">Livraison dans toute l'île</span>
                    </div>
                    <p className="text-lg text-champagne/70 max-w-2xl mx-auto">
                        Une livraison rapide et fiable, adaptée à vos besoins, partout à Madagascar.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    <div className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 text-center">
                        <div className="text-3xl font-serif text-gold mb-2">{deliveryStats.satisfiedCustomers}%</div>
                        <p className="text-xs text-champagne/60">Clients satisfaits</p>
                    </div>
                    <div className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 text-center">
                        <div className="text-3xl font-serif text-gold mb-2">{deliveryStats.onTimeDelivery}%</div>
                        <p className="text-xs text-champagne/60">Livraisons à l'heure</p>
                    </div>
                    <div className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 text-center">
                        <div className="text-3xl font-serif text-gold mb-2">{deliveryStats.citiesServed}</div>
                        <p className="text-xs text-champagne/60">Villes desservies</p>
                    </div>
                    <div className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 text-center">
                        <div className="text-3xl font-serif text-gold mb-2">{deliveryStats.pointsRelais}+</div>
                        <p className="text-xs text-champagne/60">Points relais</p>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-serif text-champagne text-center mb-8"
                >
                    Choisissez votre <span className="text-gold">mode de livraison</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {deliveryMethods.map((method, index) => (
                        <motion.div
                            key={method.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="group relative"
                        >
                            <div className={`relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border transition-all duration-500 p-6 h-full ${method.isRecommended
                                ? 'border-gold shadow-lg shadow-gold/10'
                                : 'border-gold/10 hover:border-gold/30'
                                }`}>
                                {method.isRecommended && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-bordeaux-dark text-xs px-3 py-1 uppercase tracking-wider whitespace-nowrap">
                                        Recommandé
                                    </div>
                                )}

                                {method.isExpress && (
                                    <div className="absolute top-4 right-4 bg-gold/20 border border-gold/30 text-gold text-[10px] px-2 py-1 uppercase tracking-wider">
                                        Express
                                    </div>
                                )}

                                <div className="text-4xl mb-4 text-center">{method.icon}</div>

                                <h3 className="text-xl font-serif text-champagne mb-2 group-hover:text-gold transition-colors">
                                    {method.name}
                                </h3>

                                <p className="text-sm text-champagne/60 mb-4">
                                    {method.description}
                                </p>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-1">
                                        <Clock size={14} className="text-gold/60" />
                                        <span className="text-xs text-champagne/70">{method.delay}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xl font-serif text-gold">
                                            {method.price === 0 ? 'Gratuit' : `${method.price.toLocaleString()} Ar`}
                                        </span>
                                    </div>
                                </div>

                                {method.freeFrom && (
                                    <p className="text-xs text-champagne/40 mb-4">
                                        Offerte dès {method.freeFrom.toLocaleString()} Ar
                                    </p>
                                )}

                                <ul className="space-y-2 mb-4">
                                    {method.features.map((feature, i) => (
                                        <li key={i} className="flex items-start space-x-2 text-xs">
                                            <CheckCircle size={12} className="text-gold/60 mt-0.5 shrink-0" />
                                            <span className="text-champagne/60">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-champagne text-center mb-8">
                        Questions fréquentes sur la <span className="text-gold">livraison à Madagascar</span>
                    </h2>

                    <div className="max-w-md mx-auto relative mb-8">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher une question..."
                            className="w-full bg-bordeaux-dark/70 border border-gold/30 rounded-full py-3 pl-12 pr-4 text-champagne placeholder:text-champagne/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                        />
                        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-champagne/40 hover:text-gold"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* Liste FAQ */}
                    <div className="max-w-2xl mx-auto space-y-4">
                        {filteredFAQ.length === 0 ? (
                            <p className="text-center text-champagne/60 py-8">Aucune question trouvée</p>
                        ) : (
                            filteredFAQ.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="border border-gold/10 hover:border-gold/30 transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFAQ(item.id)}
                                        className="w-full flex items-center justify-between p-6 text-left group"
                                    >
                                        <h3 className="text-sm font-serif text-champagne group-hover:text-gold transition-colors pr-8">
                                            {item.question}
                                        </h3>
                                        <motion.div
                                            animate={{ rotate: openFAQ.includes(item.id) ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={16} className="text-gold/60 group-hover:text-gold" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {openFAQ.includes(item.id) && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="px-6 pb-6 text-sm text-champagne/70 border-t border-gold/10 pt-4">
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-linear-to-b from-gold/5 to-transparent border border-gold/20 p-8 text-center"
                >
                    <MapPin size={32} className="mx-auto text-gold/60 mb-4" />
                    <h3 className="text-xl font-serif text-champagne mb-2">Plus de 500 points relais à Madagascar</h3>
                    <p className="text-champagne/70 mb-6">
                        Retirez votre commande où et quand vous voulez dans toute l'île
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
                    >
                        <span>Trouver un point relais</span>
                        <span>→</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-4 mt-8"
                >
                    <Link to="/retours" className="text-xs text-champagne/40 hover:text-gold transition-colors">
                        Retours
                    </Link>
                    <span className="text-champagne/20">•</span>
                    <Link to="/faq" className="text-xs text-champagne/40 hover:text-gold transition-colors">
                        FAQ
                    </Link>
                    <span className="text-champagne/20">•</span>
                    <Link to="/contact" className="text-xs text-champagne/40 hover:text-gold transition-colors">
                        Contact
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Livraison;