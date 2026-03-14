import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    Award
} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simuler l'envoi du formulaire
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 5000);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            details: "contact@eloria.com",
            subdetails: "support@eloria.com",
            action: "mailto:contact@eloria.com",
            color: "from-gold/20 to-transparent"
        },
        {
            icon: Phone,
            title: "Téléphone",
            details: "+33 1 23 45 67 89",
            subdetails: "Lun-Ven, 9h-19h",
            action: "tel:+33123456789",
            color: "from-gold/20 to-transparent"
        },
        {
            icon: MapPin,
            title: "Boutique",
            details: "123 Rue de la Paix",
            subdetails: "75001 Paris, France",
            action: "https://maps.google.com",
            color: "from-gold/20 to-transparent"
        },
        {
            icon: Clock,
            title: "Horaires",
            details: "Lundi - Vendredi: 9h - 19h",
            subdetails: "Samedi: 10h - 18h",
            color: "from-gold/20 to-transparent"
        }
    ];

    const socials = [
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' }
    ];

    const newLocal = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-200 border border-gold/5 rounded-full";
    const newLocal_1 = "relative bg-gradient-to-b from-gold/10 via-gold/5 to-transparent backdrop-blur-md border border-gold/20 p-8";
    return (
        <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 -left-20 w-80 h-80 border border-gold/10 rounded-full" />
                <div className="absolute bottom-40 -right-20 w-96 h-96 border border-gold/10 rounded-full" />
                <div className={newLocal} />
                
                {/* Motif décoratif */}
                <div className="absolute top-20 right-20 text-gold/5 text-[200px] font-serif">✧</div>
                <div className="absolute bottom-20 left-20 text-gold/5 text-[200px] font-serif">✧</div>
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
                    <span className="text-gold">Contact</span>
                </motion.div>

                {/* En-tête */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
                        Contactez-<span className="text-gold">nous</span>
                    </h1>

                    <div className="flex justify-center items-center space-x-2 mb-8">
                        <div className="w-16 h-px bg-gold/40" />
                        <Award size={20} className="text-gold/60" />
                        <div className="w-16 h-px bg-gold/40" />
                    </div>

                    <p className="text-lg text-champagne/70 max-w-2xl mx-auto">
                        Une question, une suggestion ? Notre équipe est à votre écoute pour vous offrir l'expérience Eloria la plus premium possible.
                    </p>
                </motion.div>

                {/* Grille d'informations de contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={info.title}
                            href={info.action}
                            target={info.action?.startsWith('http') ? '_blank' : undefined}
                            rel={info.action?.startsWith('http') ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative block"
                        >
                            <div className="relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 p-6 text-center overflow-hidden">
                                {/* Effet de lumière au hover */}
                                <motion.div
                                    className="absolute inset-0 bg-linear-to-br from-gold/0 via-gold/5 to-gold/0"
                                    initial={{ x: '-100%', y: '-100%' }}
                                    whileHover={{ x: '100%', y: '100%' }}
                                    transition={{ duration: 0.8 }}
                                />

                                {/* Icône avec animation */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative inline-block mb-4"
                                >
                                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl group-hover:bg-gold/30 transition-all duration-500" />
                                    <div className="relative w-16 h-16 mx-auto flex items-center justify-center rounded-full border-2 border-gold/30 group-hover:border-gold transition-all duration-500">
                                        <info.icon size={24} className="text-gold group-hover:text-gold-light transition-colors duration-500" />
                                    </div>
                                </motion.div>

                                <h3 className="text-lg font-serif text-champagne mb-2 group-hover:text-gold transition-colors">
                                    {info.title}
                                </h3>
                                <p className="text-sm text-champagne/70 mb-1">{info.details}</p>
                                <p className="text-xs text-champagne/50">{info.subdetails}</p>

                                {/* Ligne décorative */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/30 to-transparent"
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    whileHover={{ scaleX: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Formulaire de contact et carte */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={newLocal_1}>
                            {/* Éléments décoratifs */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-gold/30" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-gold/30" />

                            <h2 className="text-2xl font-serif text-gold mb-6 relative">
                                Envoyez-nous un message
                                <span className="absolute -bottom-2 left-0 w-12 h-px bg-gold/60" />
                            </h2>

                            {formStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-500/10 border border-green-500/30 p-6 text-center"
                                >
                                    <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                                    <h3 className="text-xl font-serif text-champagne mb-2">Message envoyé !</h3>
                                    <p className="text-champagne/70">Notre équipe vous répondra dans les plus brefs délais.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Nom */}
                                        <div className="space-y-2">
                                            <label className="text-sm text-champagne/60">Nom complet</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-bordeaux-dark/50 border border-gold/30 px-4 py-3 text-champagne placeholder:text-champagne/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                                                placeholder="Sophie Martin"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label className="text-sm text-champagne/60">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-bordeaux-dark/50 border border-gold/30 px-4 py-3 text-champagne placeholder:text-champagne/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                                                placeholder="sophie@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Sujet */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-champagne/60">Sujet</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-bordeaux-dark/50 border border-gold/30 px-4 py-3 text-champagne focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="info">Demande d'information</option>
                                            <option value="commande">Question sur une commande</option>
                                            <option value="retour">Retour ou échange</option>
                                            <option value="partenariat">Partenariat</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-champagne/60">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full bg-bordeaux-dark/50 border border-gold/30 px-4 py-3 text-champagne placeholder:text-champagne/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                                            placeholder="Bonjour, j'aimerais en savoir plus sur..."
                                        />
                                    </div>

                                    {/* Bouton d'envoi */}
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-linear-to-r from-gold to-gold-light text-bordeaux-dark py-4 text-sm uppercase tracking-wider font-medium flex items-center justify-center space-x-3 group relative overflow-hidden"
                                    >
                                        <motion.span
                                            className="absolute inset-0 bg-linear-to-r from-gold-light to-gold"
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                        <span className="relative z-10 flex items-center space-x-2">
                                            <Send size={16} />
                                            <span>Envoyer le message</span>
                                        </span>
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Carte / Informations supplémentaires */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        {/* Carte */}
                        <div className="relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 h-75 overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <img
                                    src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&auto=format"
                                    alt="Paris map"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-t from-bordeaux via-bordeaux/50 to-transparent" />
                            
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <h3 className="text-xl font-serif text-champagne mb-2">Notre boutique</h3>
                                <p className="text-sm text-champagne/70 mb-1">123 Rue de la Paix</p>
                                <p className="text-sm text-champagne/70 mb-3">75001 Paris, France</p>
                                <motion.a
                                    href="https://maps.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center text-gold text-sm group"
                                >
                                    <span>Voir sur Google Maps</span>
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </motion.a>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6">
                            <h3 className="text-lg font-serif text-champagne mb-4">Suivez-nous</h3>
                            <div className="flex flex-wrap gap-4">
                                {socials.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative w-12 h-12 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 group"
                                    >
                                        <social.icon size={20} className="text-champagne group-hover:text-gold transition-colors" />
                                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-champagne/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Horaires d'ouverture détaillés */}
                            <div className="mt-6 pt-6 border-t border-gold/10">
                                <h4 className="text-sm uppercase tracking-wider text-champagne/70 mb-3">Service client</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-champagne/50">Lundi - Vendredi</span>
                                        <span className="text-champagne">9h00 - 19h00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-champagne/50">Samedi</span>
                                        <span className="text-champagne">10h00 - 18h00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-champagne/50">Dimanche</span>
                                        <span className="text-champagne/30">Fermé</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ rapide */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <p className="text-champagne/70">
                        Vous préférez consulter notre FAQ ? 
                        <Link to="/faq" className="text-gold hover:underline ml-2">
                            Cliquez ici
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;