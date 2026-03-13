import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Heart, 
  Shield, 
  Truck, 
  RotateCcw,
  CreditCard,
  Lock,
  Gift,
  Sparkles,
  Award
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import type { CartItem } from '../context/CartContext';

// Étendre le type CartItem pour inclure slug optionnel
interface CartItemWithSlug extends CartItem {
  slug?: string;
}

const Cart = () => {
  const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();
  const [showClearModal, setShowClearModal] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [giftWrap, setGiftWrap] = useState(false);

  const shippingCost = cartTotal > 150 ? 0 : 9.90;
  const giftWrapCost = giftWrap ? 4.90 : 0;
  const tax = (cartTotal + shippingCost + giftWrapCost) * 0.20;
  const orderTotal = cartTotal + shippingCost + giftWrapCost + tax;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'ELORIA10') {
      setPromoApplied(true);
      setPromoError('');
    } else if (promoCode.toUpperCase() === 'BIENVENUE') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Code promo invalide');
    }
  };

  const handleAddToFavorites = (item: CartItemWithSlug) => {
    // Utiliser l'id comme slug si non disponible
    const slug = String(item.id);
    
    addToFavorites({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.slug || 'Collection',
      slug: slug
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
        <div className="container-custom">
          <Link 
            to="/" 
            className="inline-flex items-center text-gold/70 hover:text-gold transition-all duration-300 mb-8 group relative overflow-hidden"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            {/* Icône décorative avec animation */}
            <motion.div 
              className="relative inline-block mb-8"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-28 h-28 mx-auto flex items-center justify-center rounded-full border-2 border-gold/30 bg-linear-to-b from-gold/10 to-transparent backdrop-blur-sm">
                <ShoppingBag size={56} className="text-gold/80" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
              Votre panier est <span className="text-gold">vide</span>
            </h1>
            
            {/* Ligne décorative */}
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-12 h-px bg-gold/40" />
              <Sparkles size={16} className="text-gold/60" />
              <div className="w-12 h-px bg-gold/40" />
            </div>

            <p className="text-lg text-champagne/70 mb-10 max-w-md mx-auto">
              Découvrez nos collections exclusives et laissez-vous séduire par l'élégance intemporelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="group relative px-8 py-4 bg-gold text-bordeaux-dark text-sm uppercase tracking-wider font-medium overflow-hidden"
              >
                <span className="absolute inset-0 bg-linear-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center">
                  <ShoppingBag size={16} className="mr-2" />
                  Découvrir nos collections
                </span>
              </Link>
              <Link
                to="/favoris"
                className="group relative px-8 py-4 border border-gold text-gold text-sm uppercase tracking-wider font-medium overflow-hidden"
              >
                <span className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center">
                  <Heart size={16} className="mr-2" />
                  Voir mes favoris
                </span>
              </Link>
            </div>

            {/* Suggestions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 pt-16 border-t border-gold/10"
            >
              <h2 className="text-2xl font-serif text-champagne/80 mb-8">
                Suggestions pour vous
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Link
                    key={i}
                    to="/categorie/robes"
                    className="group relative overflow-hidden"
                  >
                    <div className="aspect-3/4 bg-linear-to-b from-gold/5 to-transparent border border-gold/10 group-hover:border-gold/30 transition-all duration-500">
                      <div className="absolute inset-0 bg-linear-to-t from-bordeaux via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>
                    <p className="text-sm text-champagne/50 mt-2 group-hover:text-gold transition-colors">
                      Collection Printemps
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 border border-gold/5 rounded-full" />
        <div className="absolute bottom-40 right-10 w-96 h-96 border border-gold/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-gold/5 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Fil d'Ariane stylisé */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-3 text-sm mb-8"
        >
          <Link to="/" className="text-champagne/50 hover:text-gold transition-colors">Accueil</Link>
          <span className="text-champagne/30">/</span>
          <span className="text-gold">Panier</span>
          {cartCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-2 px-2 py-0.5 bg-gold/20 border border-gold/30 text-gold text-xs rounded-full"
            >
              {cartCount} articles
            </motion.span>
          )}
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Liste des produits */}
          <div className="flex-1">
            {/* En-tête avec animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-between items-center mb-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-serif text-champagne mb-2">
                  Votre <span className="text-gold">panier</span>
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-px bg-gold/40" />
                  <span className="text-xs text-champagne/40 uppercase tracking-wider">
                    {cartCount} article{cartCount > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowClearModal(true)}
                className="group relative flex items-center space-x-2 px-6 py-3 border border-gold/30 text-champagne/70 hover:text-gold hover:border-gold transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Trash2 size={16} className="relative z-10" />
                <span className="relative z-10 text-sm uppercase tracking-wider">Vider</span>
              </motion.button>
            </motion.div>

            {/* Produits */}
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className="group relative"
                >
                  <div className="relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 p-6">
                    {/* Ligne décorative animée */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/40 to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />

                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Image avec overlay au hover */}
                      <Link to={`/produit/${item.id}`} className="sm:w-28 shrink-0 group/image">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
                          />
                          <motion.div
                            className="absolute inset-0 bg-linear-to-t from-bordeaux via-transparent to-transparent"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.5 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </Link>

                      {/* Détails */}
                      <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex-1">
                          <Link to={`/produit/${item.id}`}>
                            <h3 className="text-xl font-serif text-champagne hover:text-gold transition-colors line-clamp-1 mb-2">
                              {item.name}
                            </h3>
                          </Link>
                          
                          {/* Options avec badges stylisés */}
                          <div className="flex flex-wrap gap-3 mb-3">
                            {item.size && (
                              <span className="inline-flex items-center px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold">
                                Taille {item.size}
                              </span>
                            )}
                            {item.color && (
                              <span className="inline-flex items-center px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold">
                                <span 
                                  className="w-3 h-3 rounded-full mr-2"
                                  style={{ backgroundColor: item.color }}
                                />
                                {item.color}
                              </span>
                            )}
                          </div>

                          {/* Prix unitaire avec animation */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-block"
                          >
                            <span className="text-2xl font-serif text-gold">
                              {item.price.toFixed(2)} €
                            </span>
                            <span className="ml-2 text-xs text-champagne/40">/ unité</span>
                          </motion.div>
                        </div>

                        {/* Quantité et actions */}
                        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4">
                          {/* Quantité avec design premium */}
                          <div className="flex items-center border border-gold/30 bg-bordeaux-dark/30">
                            <motion.button
                              whileHover={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="w-10 h-10 flex items-center justify-center text-champagne hover:text-gold transition-colors"
                            >
                              <Minus size={14} />
                            </motion.button>
                            <span className="w-12 text-center text-champagne font-serif">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileHover={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center text-champagne hover:text-gold transition-colors"
                            >
                              <Plus size={14} />
                            </motion.button>
                          </div>

                          {/* Prix total avec animation */}
                          <motion.div
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ duration: 0.3 }}
                            className="text-right"
                          >
                            <span className="text-xl font-serif text-gold">
                              {(item.price * item.quantity).toFixed(2)} €
                            </span>
                          </motion.div>

                          {/* Actions avec tooltips */}
                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleAddToFavorites(item)}
                              className="relative group/action w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold transition-all duration-300"
                              title="Ajouter aux favoris"
                            >
                              <Heart 
                                size={16} 
                                className={isFavorite(item.id) ? 'fill-gold text-gold' : 'text-champagne'} 
                              />
                              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-champagne/40 opacity-0 group-hover/action:opacity-100 transition-opacity whitespace-nowrap">
                                Favoris
                              </span>
                            </motion.button>
                            
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => removeFromCart(item.id)}
                              className="relative group/action w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold hover:text-gold transition-all duration-300"
                              title="Supprimer"
                            >
                              <Trash2 size={16} />
                              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-champagne/40 opacity-0 group-hover/action:opacity-100 transition-opacity whitespace-nowrap">
                                Supprimer
                              </span>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ligne décorative inférieure */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Résumé de la commande - Design amélioré */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-96"
          >
            <div className="sticky top-32">
              {/* Badge premium */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-3 right-4 z-10"
              >
                <span className="bg-gold text-bordeaux-dark text-[10px] px-3 py-1 uppercase tracking-wider font-medium">
                  Paiement sécurisé
                </span>
              </motion.div>

              <div className="relative bg-linear-to-b from-gold/10 via-gold/5 to-transparent backdrop-blur-md border border-gold/20 p-8">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-gold/30" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-gold/30" />

                <h2 className="text-2xl font-serif text-gold mb-6 relative">
                  Récapitulatif
                  <span className="absolute -bottom-2 left-0 w-12 h-px bg-gold/60" />
                </h2>

                {/* Code promo avec animation */}
                <div className="mb-8">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Code promo"
                      className="flex-1 bg-bordeaux-dark/50 border border-gold/30 px-4 py-3 text-champagne placeholder:text-champagne/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleApplyPromo}
                      className="px-6 py-3 border border-gold text-gold hover:bg-gold/10 transition-colors uppercase tracking-wider text-sm"
                    >
                      OK
                    </motion.button>
                  </div>
                  <AnimatePresence>
                    {promoError && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-red-400 mt-2"
                      >
                        {promoError}
                      </motion.p>
                    )}
                    {promoApplied && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-green-400 mt-2 flex items-center"
                      >
                        <Award size={14} className="mr-1" />
                        Code promo appliqué !
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Option cadeau */}
                <div className="mb-6">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 border transition-colors ${
                      giftWrap 
                        ? 'border-gold bg-gold' 
                        : 'border-gold/30 group-hover:border-gold/60'
                    }`}>
                      {giftWrap && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <Gift size={12} className="text-bordeaux-dark" />
                        </motion.div>
                      )}
                    </div>
                    <span className="flex-1 text-sm text-champagne/70 group-hover:text-champagne transition-colors">
                      Emballage cadeau (+4.90€)
                    </span>
                  </label>
                </div>

                {/* Détails des prix avec animations */}
                <div className="space-y-4 mb-8">
                  <motion.div 
                    className="flex justify-between text-champagne/70"
                    whileHover={{ x: 5 }}
                  >
                    <span>Sous-total</span>
                    <span className="font-serif">{cartTotal.toFixed(2)} €</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-between text-champagne/70"
                    whileHover={{ x: 5 }}
                  >
                    <span>Livraison</span>
                    {shippingCost === 0 ? (
                      <motion.span 
                        className="text-gold"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        OFFERTE
                      </motion.span>
                    ) : (
                      <span>{shippingCost.toFixed(2)} €</span>
                    )}
                  </motion.div>

                  {giftWrap && (
                    <motion.div 
                      className="flex justify-between text-champagne/70"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <span>Emballage cadeau</span>
                      <span>{giftWrapCost.toFixed(2)} €</span>
                    </motion.div>
                  )}

                  <motion.div 
                    className="flex justify-between text-champagne/70"
                    whileHover={{ x: 5 }}
                  >
                    <span>TVA (20%)</span>
                    <span>{tax.toFixed(2)} €</span>
                  </motion.div>

                  {promoApplied && (
                    <motion.div 
                      className="flex justify-between text-gold"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <span>Réduction (ELORIA10)</span>
                      <span>-{(orderTotal * 0.1).toFixed(2)} €</span>
                    </motion.div>
                  )}

                  <motion.div 
                    className="border-t border-gold/20 my-4 pt-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between text-xl font-serif">
                      <span className="text-champagne">Total</span>
                      <span className="text-gold text-2xl">
                        {promoApplied 
                          ? (orderTotal * 0.9).toFixed(2)
                          : orderTotal.toFixed(2)} €
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Barre de progression livraison */}
                {cartTotal < 150 && (
                  <div className="mb-8 p-4 bg-gold/5 border border-gold/20">
                    <div className="flex items-center justify-between mb-2">
                      <Truck size={16} className="text-gold/60" />
                      <span className="text-xs text-champagne/60">
                        Plus que <span className="text-gold font-serif">{(150 - cartTotal).toFixed(2)} €</span>
                      </span>
                    </div>
                    <div className="w-full h-1 bg-gold/20">
                      <motion.div 
                        className="h-full bg-linear-to-r from-gold to-gold-light"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((cartTotal / 150) * 100, 100)}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                )}

                {/* Bouton de commande premium */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r from-gold to-gold-light text-bordeaux-dark py-5 text-sm uppercase tracking-wider font-medium mb-6 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-linear-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <Lock size={16} />
                    <span>Procéder au paiement</span>
                  </span>
                </motion.button>

                {/* Moyens de paiement */}
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <CreditCard size={20} className="text-champagne/30 hover:text-gold/60 transition-colors cursor-pointer" />
                  <span className="text-xs text-champagne/30">•</span>
                  <Shield size={20} className="text-champagne/30 hover:text-gold/60 transition-colors cursor-pointer" />
                  <span className="text-xs text-champagne/30">•</span>
                  <Lock size={20} className="text-champagne/30 hover:text-gold/60 transition-colors cursor-pointer" />
                </div>

                {/* Garanties */}
                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center text-xs text-champagne/40 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <Truck size={14} className="mr-2 text-gold/40 group-hover:text-gold/60 transition-colors" />
                    Livraison offerte dès 150€
                  </motion.div>
                  <motion.div 
                    className="flex items-center text-xs text-champagne/40 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <RotateCcw size={14} className="mr-2 text-gold/40 group-hover:text-gold/60 transition-colors" />
                    Retours gratuits 30 jours
                  </motion.div>
                  <motion.div 
                    className="flex items-center text-xs text-champagne/40 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <Shield size={14} className="mr-2 text-gold/40 group-hover:text-gold/60 transition-colors" />
                    Paiement 3D Secure
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de confirmation premium */}
      <AnimatePresence>
        {showClearModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-bordeaux-dark/90 backdrop-blur-md z-50"
              onClick={() => setShowClearModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-md w-full bg-linear-to-b from-bordeaux to-bordeaux-dark border border-gold/30 shadow-2xl z-50"
            >
              <div className="relative p-8">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-gold/30" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-gold/30" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10"
                >
                  <Trash2 size={32} className="text-gold/80" />
                </motion.div>

                <h3 className="text-2xl font-serif text-gold text-center mb-2">
                  Vider le panier ?
                </h3>
                <p className="text-champagne/60 text-center mb-8">
                  Cette action est irréversible. Tous vos articles seront supprimés.
                </p>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      clearCart();
                      setShowClearModal(false);
                    }}
                    className="flex-1 bg-gold text-bordeaux-dark py-3 text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
                  >
                    Confirmer
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowClearModal(false)}
                    className="flex-1 border border-gold text-gold py-3 text-sm uppercase tracking-wider font-medium hover:bg-gold/10 transition-colors"
                  >
                    Annuler
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;