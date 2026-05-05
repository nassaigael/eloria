import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Smartphone,
  CheckCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import type { CartItem } from '../context/CartContext';

// Étendre le type CartItem pour inclure slug optionnel
interface CartItemWithSlug extends CartItem {
  slug?: string;
}

// Interface pour la modale de paiement
interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const { addToFavorites, isFavorite } = useFavorites();
  const [showClearModal, setShowClearModal] = useState(false);
  const [giftWrap, setGiftWrap] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [orderComplete, setOrderComplete] = useState(false);

  const shippingCost = cartTotal > 200000 ? 0 : 10000;
  const giftWrapCost = giftWrap ? 5000 : 0;
  const orderTotal = cartTotal + shippingCost + giftWrapCost;

  // Méthodes de paiement disponibles à Madagascar
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'mobile_money',
      name: 'Mobile Money',
      icon: <Smartphone size={24} />,
      description: 'MVola, Airtel Money'
    },
    {
      id: 'bank_transfer',
      name: 'Virement bancaire',
      icon: <CreditCard size={24} />,
      description: 'Transfert direct'
    },
    {
      id: 'cash_on_delivery',
      name: 'Paiement à la livraison',
      icon: <Truck size={24} />,
      description: '+5 000 Ar (Antananarivo uniquement)'
    }
  ];

  const handleAddToFavorites = (item: CartItemWithSlug) => {
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

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert('Veuillez sélectionner un moyen de paiement');
      return;
    }
    setShowPaymentModal(false);
    setOrderComplete(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (cartItems.length === 0 && !orderComplete) {
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
          </motion.div>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-500/20 border border-green-500/50"
            >
              <CheckCircle size={48} className="text-green-500" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-serif text-champagne mb-4">
              Commande <span className="text-gold">confirmée !</span>
            </h1>
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-12 h-px bg-gold/40" />
              <Sparkles size={16} className="text-gold/60" />
              <div className="w-12 h-px bg-gold/40" />
            </div>
            <p className="text-lg text-champagne/70 mb-8">
              Merci pour votre commande. Vous allez recevoir un email de confirmation dans quelques instants.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-gold text-bordeaux-dark text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
            >
              Retour à l'accueil
            </Link>
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
            {/* En-tête */}
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
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="relative bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <Link to={`/produit/${item.id}`} className="sm:w-28 shrink-0 group/image">
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </Link>

                      <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex-1">
                          <Link to={`/produit/${item.id}`}>
                            <h3 className="text-xl font-serif text-champagne hover:text-gold transition-colors line-clamp-1 mb-2">
                              {item.name}
                            </h3>
                          </Link>
                          <div className="flex flex-wrap gap-3 mb-3">
                            {item.size && (
                              <span className="inline-flex items-center px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold">
                                Taille {item.size}
                              </span>
                            )}
                            {item.color && (
                              <span className="inline-flex items-center px-3 py-1 bg-gold/10 border border-gold/30 text-xs text-gold">
                                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                                {item.color}
                              </span>
                            )}
                          </div>
                          <span className="text-2xl font-serif text-gold">
                            {item.price.toLocaleString()} Ar
                          </span>
                        </div>

                        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4">
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

                          <span className="text-xl font-serif text-gold">
                            {(item.price * item.quantity).toLocaleString()} Ar
                          </span>

                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleAddToFavorites(item)}
                              className="w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold transition-all duration-300"
                            >
                              <Heart size={16} className={isFavorite(item.id) ? 'fill-gold text-gold' : 'text-champagne'} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => removeFromCart(item.id)}
                              className="w-10 h-10 flex items-center justify-center border border-gold/30 hover:border-gold hover:text-gold transition-all duration-300"
                            >
                              <Trash2 size={16} />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Résumé de la commande */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-96"
          >
            <div className="sticky top-32">
              <div className="relative bg-linear-to-b from-gold/10 via-gold/5 to-transparent backdrop-blur-md border border-gold/20 p-8">
                <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-gold/30" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-gold/30" />

                <h2 className="text-2xl font-serif text-gold mb-6 relative">
                  Récapitulatif
                  <span className="absolute -bottom-2 left-0 w-12 h-px bg-gold/60" />
                </h2>

                {/* Option cadeau */}
                <div className="mb-6">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 border transition-colors ${giftWrap ? 'border-gold bg-gold' : 'border-gold/30 group-hover:border-gold/60'}`}>
                      {giftWrap && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-full h-full flex items-center justify-center">
                          <Gift size={12} className="text-bordeaux-dark" />
                        </motion.div>
                      )}
                    </div>
                    <span className="flex-1 text-sm text-champagne/70 group-hover:text-champagne transition-colors">
                      Emballage cadeau (+5 000 Ar)
                    </span>
                  </label>
                </div>

                {/* Détails des prix */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-champagne/70">
                    <span>Sous-total</span>
                    <span className="font-serif">{cartTotal.toLocaleString()} Ar</span>
                  </div>

                  <div className="flex justify-between text-champagne/70">
                    <span>Livraison</span>
                    {shippingCost === 0 ? (
                      <span className="text-gold font-medium">OFFERTE</span>
                    ) : (
                      <span>{shippingCost.toLocaleString()} Ar</span>
                    )}
                  </div>

                  {giftWrap && (
                    <div className="flex justify-between text-champagne/70">
                      <span>Emballage cadeau</span>
                      <span>{giftWrapCost.toLocaleString()} Ar</span>
                    </div>
                  )}

                  <div className="border-t border-gold/20 my-4 pt-4">
                    <div className="flex justify-between text-xl font-serif">
                      <span className="text-champagne">Total</span>
                      <span className="text-gold text-2xl">
                        {orderTotal.toLocaleString()} Ar
                      </span>
                    </div>
                  </div>
                </div>

                {/* Barre de progression livraison */}
                {cartTotal < 200000 && (
                  <div className="mb-8 p-4 bg-gold/5 border border-gold/20">
                    <div className="flex items-center justify-between mb-2">
                      <Truck size={16} className="text-gold/60" />
                      <span className="text-xs text-champagne/60">
                        Plus que <span className="text-gold font-serif">{(200000 - cartTotal).toLocaleString()} Ar</span> pour la livraison offerte
                      </span>
                    </div>
                    <div className="w-full h-1 bg-gold/20">
                      <div className="h-full bg-linear-to-r from-gold to-gold-light" style={{ width: `${Math.min((cartTotal / 200000) * 100, 100)}%` }} />
                    </div>
                  </div>
                )}

                {/* Bouton de paiement */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full bg-linear-to-r from-gold to-gold-light text-bordeaux-dark py-5 text-sm uppercase tracking-wider font-medium mb-6 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <Lock size={16} />
                    <span>Procéder au paiement</span>
                  </span>
                </motion.button>

                {/* Moyens de paiement */}
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <CreditCard size={20} className="text-champagne/30 hover:text-gold/60 transition-colors" />
                  <span className="text-xs text-champagne/30">•</span>
                  <Smartphone size={20} className="text-champagne/30 hover:text-gold/60 transition-colors" />
                  <span className="text-xs text-champagne/30">•</span>
                  <Shield size={20} className="text-champagne/30 hover:text-gold/60 transition-colors" />
                </div>

                {/* Garanties */}
                <div className="space-y-3">
                  <div className="flex items-center text-xs text-champagne/40">
                    <Truck size={14} className="mr-2 text-gold/40" />
                    Livraison offerte dès 200 000 Ar
                  </div>
                  <div className="flex items-center text-xs text-champagne/40">
                    <RotateCcw size={14} className="mr-2 text-gold/40" />
                    Retours gratuits sous 14 jours
                  </div>
                  <div className="flex items-center text-xs text-champagne/40">
                    <Shield size={14} className="mr-2 text-gold/40" />
                    Paiement 100% sécurisé
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de paiement */}
      <AnimatePresence>
        {showPaymentModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-bordeaux-dark/90 backdrop-blur-md z-50"
              onClick={() => setShowPaymentModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg w-full bg-linear-to-b from-bordeaux to-bordeaux-dark border border-gold/30 shadow-2xl z-50"
            >
              <div className="relative p-8">
                <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-gold/30" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-gold/30" />

                <h3 className="text-2xl font-serif text-gold text-center mb-2">
                  Choisissez votre moyen de paiement
                </h3>
                <p className="text-champagne/60 text-center mb-6">
                  Montant total : <span className="text-gold font-serif text-xl">{orderTotal.toLocaleString()} Ar</span>
                </p>

                <div className="space-y-4 mb-8">
                  {paymentMethods.map((method) => (
                    <motion.button
                      key={method.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      className={`w-full flex items-center space-x-4 p-4 border transition-all duration-300 ${selectedPaymentMethod === method.id ? 'border-gold bg-gold/10' : 'border-gold/30 hover:border-gold/60'}`}
                    >
                      <div className={`w-12 h-12 flex items-center justify-center rounded-full border ${selectedPaymentMethod === method.id ? 'border-gold text-gold' : 'border-gold/30 text-champagne/50'}`}>
                        {method.icon}
                      </div>
                      <div className="text-left flex-1">
                        <h4 className={`font-serif ${selectedPaymentMethod === method.id ? 'text-gold' : 'text-champagne'}`}>{method.name}</h4>
                        <p className="text-xs text-champagne/50">{method.description}</p>
                      </div>
                      {selectedPaymentMethod === method.id && (
                        <CheckCircle size={20} className="text-gold" />
                      )}
                    </motion.button>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePayment}
                    className="flex-1 bg-gold text-bordeaux-dark py-3 text-sm uppercase tracking-wider font-medium hover:bg-gold-light transition-colors"
                  >
                    Confirmer le paiement
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowPaymentModal(false)}
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

      {/* Modal de confirmation de vidage */}
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
                <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-gold/30" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-gold/30" />

                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10">
                  <Trash2 size={32} className="text-gold/80" />
                </div>

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