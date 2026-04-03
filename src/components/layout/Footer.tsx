import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CreditCard,
  Truck,
  RotateCcw,
  Shield
} from 'lucide-react';

import logo from '../../assets/images/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    collections: [
      { nom: 'Robes', href: '/categorie/robes' },
      { nom: 'Accessoires', href: '/categorie/accessoires' },
      { nom: 'Mariage', href: '/categorie/mariage' },
      { nom: 'Soirée', href: '/categorie/soiree' },
    ],
    service: [
      { nom: 'Contact', href: '/contact' },
      { nom: 'FAQ', href: '/faq' },
      { nom: 'Livraison', href: '/livraison' },
    ],
    legal: [
      { nom: 'Mentions légales', href: '/mentions-legales' },
      { nom: 'Politique de confidentialité', href: '/confidentialite' },
      { nom: 'CGV', href: '/cgv' },
      { nom: 'Cookies', href: '/cookies' },
    ],
  };

  const socials = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  const paiements = [
    { icon: CreditCard, label: 'Carte bancaire' },
    { icon: Shield, label: 'Paiement sécurisé' },
    { icon: Truck, label: 'Livraison offerte' },
    { icon: RotateCcw, label: 'Retours gratuits' },
  ];

  return (
    <footer className="relative bg-linear-to-b from-bordeaux to-bordeaux-dark pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center md:text-left"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link to="/">
                <img src={logo} alt="Eloria" className="h-12 w-auto mx-auto md:mx-0" />
              </Link>
            </motion.div>
            <p className="text-champagne/60 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Depuis 2020, Eloria habille les femmes avec élégance et raffinement.
              Des pièces uniques pour des moments exceptionnels.
            </p>
            <div className="flex space-x-4 pt-4 justify-center md:justify-start">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 hover:border-gold transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-champagne group-hover:text-gold transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-champagne/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h6 className="text-gold text-sm uppercase tracking-[0.2em] mb-6 relative inline-block">
              Collections
              <span className="absolute -bottom-2 left-0 right-0 md:left-0 md:right-auto w-8 h-px bg-gold/60 mx-auto md:mx-0" />
            </h6>
            <ul className="space-y-3">
              {navigation.collections.map((item) => (
                <li key={item.nom}>
                  <Link
                    to={item.href}
                    className="text-champagne/70 hover:text-gold text-sm transition-colors duration-300 flex items-center justify-center md:justify-start group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 mr-2 text-gold transition-all -translate-x-2 group-hover:translate-x-0 hidden md:block" />
                    {item.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h6 className="text-gold text-sm uppercase tracking-[0.2em] mb-6 relative inline-block">
              Service Client
              <span className="absolute -bottom-2 left-0 right-0 md:left-0 md:right-auto w-8 h-px bg-gold/60 mx-auto md:mx-0" />
            </h6>
            <ul className="space-y-3">
              {navigation.service.map((item) => (
                <li key={item.nom}>
                  <Link
                    to={item.href}
                    className="text-champagne/70 hover:text-gold text-sm transition-colors duration-300 flex items-center justify-center md:justify-start group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 mr-2 text-gold transition-all -translate-x-2 group-hover:translate-x-0 hidden md:block" />
                    {item.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 border-y border-gold/10"
        >
          <div className="space-y-3 text-center lg:text-left">
            <h6 className="text-champagne text-sm uppercase tracking-wider mb-4">Contactez-nous</h6>
            <a href="mailto:contact@eloria.com" className="flex items-center justify-center lg:justify-start text-champagne/70 hover:text-gold transition-colors group">
              <Mail size={16} className="mr-3 text-gold/60 group-hover:text-gold" />
              <span className="text-sm">contact@eloria.com</span>
            </a>
            <a href="tel:+261341234567" className="flex items-center justify-center lg:justify-start text-champagne/70 hover:text-gold transition-colors group">
              <Phone size={16} className="mr-3 text-gold/60 group-hover:text-gold" />
              <span className="text-sm">+261 34 12 345 67</span>
            </a>
            <div className="flex items-start justify-center lg:justify-start text-champagne/70">
              <MapPin size={16} className="mr-3 text-gold/60 mt-1 shrink-0" />
              <span className="text-sm">Eloria, Lot II M 75 Bis, Antanimena, Antananarivo 101</span>
            </div>
          </div>

          <div className="space-y-3 text-center lg:text-left">
            <h6 className="text-champagne text-sm uppercase tracking-wider mb-4">Horaires d'ouverture</h6>
            <p className="text-sm text-champagne/70">Lundi - Vendredi : 9h - 19h</p>
            <p className="text-sm text-champagne/70">Samedi : 10h - 18h</p>
            <p className="text-sm text-champagne/70">Dimanche : Fermé</p>
          </div>

          <div className="space-y-4 text-center lg:text-left">
            <h6 className="text-champagne text-sm uppercase tracking-wider mb-4">Paiements sécurisés</h6>
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto lg:mx-0">
              {paiements.map((item) => (
                <div key={item.label} className="flex items-center space-x-2 justify-center lg:justify-start">
                  <item.icon size={18} className="text-gold/60" />
                  <span className="text-xs text-champagne/60">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-champagne/40"
        >
          <p className="text-center md:text-left">© {currentYear} Eloria. Tous droits réservés.</p>
          <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
            {navigation.legal.map((item) => (
              <Link
                key={item.nom}
                to={item.href}
                className="hover:text-gold transition-colors"
              >
                {item.nom}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;