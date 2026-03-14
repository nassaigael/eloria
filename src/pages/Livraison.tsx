import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Clock,
    Package,
    Truck,
    CheckCircle,
    Award,
    ChevronDown,
    X,
    Search
} from 'lucide-react';
import {
    deliveryMethods,
    deliveryCountries,
    deliveryFAQ,
    deliveryStats
} from '../data/livraisonData';

const Livraison = () => {
    const [selectedCountry, setSelectedCountry] = useState('france');
    const [openFAQ, setOpenFAQ] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

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

    const selectedCountryData = deliveryCountries.find(c => c.id === selectedCountry);

    const newLocal = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-[800px] border border-gold/5 rounded-full";
    const newLocal_1 = "bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 text-center";
    const newLocal_2 = "bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 text-center";
    const newLocal_3 = "bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 text-center";
    return (
        <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-10 w-64 h-64 border border-gold/5 rounded-full" />
                <div className="absolute bottom-40 right-10 w-96 h-96 border border-gold/5 rounded-full" />
                <div className={newLocal} />

                {/* Motif décoratif */}
                <div className="absolute top-20 right-20 text-gold/5 text-[200px] font-serif">🚚</div>
                <div className="absolute bottom-20 left-20 text-gold/5 text-[200px] font-serif">📦</div>
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
                    <span className="text-gold">Livraison</span>
                </motion.div>

                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
                        Livraison <span className="text-gold">premium</span>
                    </h1>

                    <div className="flex justify-center items-center space-x-2 mb-8">
                        <div className="w-16 h-px bg-gold/40" />
                        <Award size={20} className="text-gold/60" />
                        <div className="w-16 h-px bg-gold/40" />
                    </div>

                    <p className="text-lg text-champagne/70 max-w-2xl mx-auto">
                        Une livraison à la hauteur de vos attentes. Rapide, soignée et sécurisée, partout dans le monde.
                    </p>
                </motion.div>

                {/* Statistiques */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    <div className={newLocal_1}>
                        <div className="text-3xl font-serif text-gold mb-2">{deliveryStats.satisfiedCustomers}%</div>
                        <p className="text-xs text-champagne/60">Clients satisfaits</p>
                    </div>
                    <div className={newLocal_2}>
                        <div className="text-3xl font-serif text-gold mb-2">{deliveryStats.onTimeDelivery}%</div>
                        <p className="text-xs text-champagne/60">Livraisons à l'heure</p>
                    </div>
                    <div className={newLocal_3}>
                        <div className="text-3xl font-serif text-gold mb-2">{deliveryStats.countriesServed}</div>
                        <p className="text-xs text-champagne/60">Pays desservis</p>
                    </div>
                    <div className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 text-center">
                        <div className="text-3xl font-serif text-gold mb-2">{deliveryStats.pointsRelais}+</div>
                        <p className="text-xs text-champagne/60">Points relais</p>
                    </div>
                </motion.div>

                {/* Modes de livraison */}
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
                                {/* Badge recommandé */}
                                {method.isRecommended && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-bordeaux-dark text-xs px-3 py-1 uppercase tracking-wider whitespace-nowrap">
                                        Recommandé
                                    </div>
                                )}

                                {/* Badge express */}
                                {method.isExpress && (
                                    <div className="absolute top-4 right-4 bg-gold/20 border border-gold/30 text-gold text-[10px] px-2 py-1 uppercase tracking-wider">
                                        Express
                                    </div>
                                )}

                                {/* Icône */}
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
                                            {method.price.toLocaleString()} Ar
                                        </span>
                                    </div>
                                </div>

                                {method.freeFrom && (
                                    <p className="text-xs text-champagne/40 mb-4">
                                        Offerte dès {method.freeFrom.toLocaleString()} Ar
                                    </p>
                                )}

                                {/* Caractéristiques */}
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

                {/* Livraison internationale */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-champagne text-center mb-8">
                        Livraison <span className="text-gold">internationale</span>
                    </h2>

                    {/* Sélecteur de pays */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {deliveryCountries.map((country) => (
                            <button
                                key={country.id}
                                onClick={() => setSelectedCountry(country.id)}
                                className={`px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${selectedCountry === country.id
                                        ? 'bg-gold text-bordeaux-dark'
                                        : 'border border-gold/30 text-champagne/70 hover:border-gold hover:text-gold'
                                    }`}
                            >
                                <span>{country.flag}</span>
                                <span>{country.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tableau des tarifs */}
                    {selectedCountryData && (
                        <motion.div
                            key={selectedCountry}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-3xl">{selectedCountryData.flag}</span>
                                <h3 className="text-xl font-serif text-champagne">{selectedCountryData.name}</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Standard */}
                                <div className="border border-gold/20 p-6">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <Package size={18} className="text-gold/60" />
                                        <h4 className="text-sm uppercase tracking-wider text-champagne">Standard</h4>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-champagne/60">Délai</span>
                                            <span className="text-champagne">{selectedCountryData.standardDelay}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-champagne/60">Tarif</span>
                                            <span className="text-xl font-serif text-gold">
                                                {selectedCountryData.standardPrice.toLocaleString()} Ar
                                            </span>
                                        </div>
                                        {selectedCountryData.freeFrom && (
                                            <p className="text-xs text-champagne/40 mt-2">
                                                Offerte dès {selectedCountryData.freeFrom.toLocaleString()} Ar
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Express */}
                                <div className="border border-gold/20 p-6">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <Truck size={18} className="text-gold/60" />
                                        <h4 className="text-sm uppercase tracking-wider text-champagne">Express</h4>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-champagne/60">Délai</span>
                                            <span className="text-champagne">{selectedCountryData.expressDelay}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-champagne/60">Tarif</span>
                                            <span className="text-xl font-serif text-gold">
                                                {selectedCountryData.expressPrice.toLocaleString()} Ar
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Zones desservies */}
                            <div className="mt-6 pt-6 border-t border-gold/10">
                                <h4 className="text-sm uppercase tracking-wider text-champagne mb-3">Zones desservies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedCountryData.zones.map((zone, i) => (
                                        <span key={i} className="text-xs bg-gold/10 border border-gold/20 px-3 py-1 text-champagne/70">
                                            {zone}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* FAQ Livraison */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-champagne text-center mb-8">
                        Questions fréquentes sur la <span className="text-gold">livraison</span>
                    </h2>

                    {/* Barre de recherche FAQ */}
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

                {/* Points relais */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-linear-to-b from-gold/5 to-transparent border border-gold/20 p-8 text-center"
                >
                    <MapPin size={32} className="mx-auto text-gold/60 mb-4" />
                    <h3 className="text-xl font-serif text-champagne mb-2">Plus de 5000 points relais</h3>
                    <p className="text-champagne/70 mb-6">
                        Retirez votre commande où et quand vous voulez
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 text-gold hover:text-gold-light transition-colors"
                    >
                        <span>Trouver un point relais</span>
                        <span>→</span>
                    </Link>
                </motion.div>

                {/* Liens utiles */}
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