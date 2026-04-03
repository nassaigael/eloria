import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cookie, 
  Settings, 
  Shield, 
  Target, 
  Globe, 
  AlertCircle,
  Info,
  Clock
} from 'lucide-react';
import { useState } from 'react';

const CookiesPolicy = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const currentYear = new Date().getFullYear();

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Vos préférences ont été sauvegardées');
  };

  const handleAcceptAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }));
    alert('Tous les cookies ont été acceptés');
  };

  const handleRejectAll = () => {
    setCookiePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    });
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }));
    alert('Seuls les cookies nécessaires sont activés');
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-bordeaux to-bordeaux-dark pt-32 pb-16">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 border border-gold/5 rounded-full" />
        <div className="absolute bottom-40 right-10 w-96 h-96 border border-gold/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-gold/5 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Fil d'Ariane */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center space-x-2 text-sm mb-8"
        >
          <Link to="/" className="text-champagne/40 hover:text-gold transition-colors">Accueil</Link>
          <span className="text-champagne/30">/</span>
          <span className="text-gold">Politique des Cookies</span>
        </motion.div>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 mb-6">
            <Cookie size={32} className="text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
            Politique des <span className="text-gold">Cookies</span>
          </h1>
          <div className="w-24 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-champagne/60 max-w-2xl mx-auto">
            Dernière mise à jour : {currentYear}
          </p>
        </motion.div>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <p className="text-champagne/70 text-sm leading-relaxed">
              Chez <span className="text-gold">Eloria</span>, nous utilisons des cookies pour améliorer votre expérience de navigation, 
              analyser le trafic du site et personnaliser nos offres. Cette politique vous explique ce que sont les cookies, 
              comment nous les utilisons et comment vous pouvez les contrôler.
            </p>
          </motion.div>

          {/* Qu'est-ce qu'un cookie ? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Info size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Qu'est-ce qu'un cookie ?</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou téléphone lorsque vous visitez un site web. 
                    Il permet de mémoriser des informations sur votre navigation pour faciliter votre expérience.
                  </p>
                  <p>
                    Les cookies ne contiennent pas de données personnelles sensibles et ne peuvent pas transmettre de virus.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Types de cookies utilisés */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Settings size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Types de cookies utilisés</h2>
                <div className="space-y-6">
                  {/* Cookies nécessaires */}
                  <div className="border-l-2 border-gold/30 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-md font-serif text-champagne">Cookies nécessaires</h3>
                      <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded">Toujours actifs</span>
                    </div>
                    <p className="text-champagne/60 text-sm">
                      Indispensables au fonctionnement du site. Ils permettent la navigation, l'ajout au panier et la connexion à votre compte.
                      Ils ne peuvent pas être désactivés.
                    </p>
                  </div>

                  {/* Cookies fonctionnels */}
                  <div className="border-l-2 border-gold/30 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-md font-serif text-champagne">Cookies fonctionnels</h3>
                      <button 
                        onClick={() => setCookiePreferences({...cookiePreferences, functional: !cookiePreferences.functional})}
                        className={`text-xs px-2 py-0.5 rounded transition-colors ${cookiePreferences.functional ? 'bg-gold text-bordeaux-dark' : 'border border-gold/30 text-champagne/60 hover:border-gold'}`}
                      >
                        {cookiePreferences.functional ? 'Activé' : 'Désactivé'}
                      </button>
                    </div>
                    <p className="text-champagne/60 text-sm">
                      Améliorent votre expérience en mémorisant vos préférences (langue, pays, panier sauvegardé).
                    </p>
                  </div>

                  {/* Cookies analytiques */}
                  <div className="border-l-2 border-gold/30 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-md font-serif text-champagne">Cookies analytiques</h3>
                      <button 
                        onClick={() => setCookiePreferences({...cookiePreferences, analytics: !cookiePreferences.analytics})}
                        className={`text-xs px-2 py-0.5 rounded transition-colors ${cookiePreferences.analytics ? 'bg-gold text-bordeaux-dark' : 'border border-gold/30 text-champagne/60 hover:border-gold'}`}
                      >
                        {cookiePreferences.analytics ? 'Activé' : 'Désactivé'}
                      </button>
                    </div>
                    <p className="text-champagne/60 text-sm">
                      Nous aident à comprendre comment les visiteurs interagissent avec le site (pages visitées, temps passé, etc.).
                      Ces données sont anonymisées.
                    </p>
                  </div>

                  {/* Cookies marketing */}
                  <div className="border-l-2 border-gold/30 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-md font-serif text-champagne">Cookies marketing</h3>
                      <button 
                        onClick={() => setCookiePreferences({...cookiePreferences, marketing: !cookiePreferences.marketing})}
                        className={`text-xs px-2 py-0.5 rounded transition-colors ${cookiePreferences.marketing ? 'bg-gold text-bordeaux-dark' : 'border border-gold/30 text-champagne/60 hover:border-gold'}`}
                      >
                        {cookiePreferences.marketing ? 'Activé' : 'Désactivé'}
                      </button>
                    </div>
                    <p className="text-champagne/60 text-sm">
                      Utilisés pour vous proposer des publicités personnalisées en fonction de vos centres d'intérêt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Gestion des préférences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Globe size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Gérez vos préférences</h2>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2 bg-gold text-bordeaux-dark text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
                    >
                      Tout accepter
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="px-6 py-2 border border-gold/30 text-champagne/70 text-sm uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                    >
                      Tout refuser
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="px-6 py-2 border border-gold text-gold text-sm uppercase tracking-wider hover:bg-gold/10 transition-colors"
                    >
                      Enregistrer mes préférences
                    </button>
                  </div>
                  <p className="text-champagne/50 text-xs">
                    Vous pouvez modifier vos préférences à tout moment via le lien "Gestion des cookies" en bas de page.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cookies tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Target size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Cookies tiers</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>Notre site utilise des cookies de nos partenaires :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-champagne">Google Analytics :</strong> analyse d'audience (données anonymisées)</li>
                    <li><strong className="text-champagne">Facebook Pixel :</strong> personnalisation des publicités</li>
                    <li><strong className="text-champagne">Instagram :</strong> partage de contenu et publicités</li>
                  </ul>
                  <p className="mt-3">
                    Ces tiers ont leurs propres politiques de confidentialité que nous vous invitons à consulter.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Durée de conservation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Clock size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Durée de conservation</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cookies de session : supprimés à la fermeture du navigateur</li>
                    <li>Cookies persistants : conservés jusqu'à 13 mois maximum</li>
                    <li>Vous pouvez les supprimer manuellement via les paramètres de votre navigateur</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comment contrôler les cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Settings size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Comment contrôler les cookies ?</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>Vous pouvez configurer votre navigateur pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Accepter ou refuser tous les cookies</li>
                    <li>Être averti avant l'installation d'un cookie</li>
                    <li>Supprimer les cookies existants</li>
                  </ul>
                  <p className="mt-3">
                    <strong className="text-champagne">Liens utiles selon votre navigateur :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                    <li><a href="https://support.google.com/chrome" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact du refus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <AlertCircle size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Impact du refus des cookies</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    Si vous refusez certains cookies, certaines fonctionnalités du site peuvent être altérées :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Impossibilité d'ajouter des produits au panier</li>
                    <li>Perte de vos préférences de navigation</li>
                    <li>Recommandations de produits moins pertinentes</li>
                  </ul>
                  <p className="mt-3">
                    Notez que les cookies nécessaires ne peuvent pas être désactivés car ils garantissent le fonctionnement technique du site.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mise à jour */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Shield size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Mise à jour de la politique</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    Nous pouvons modifier cette politique des cookies pour refléter les évolutions de nos pratiques ou les exigences légales.
                    La date de la dernière mise à jour est indiquée en haut de cette page.
                  </p>
                  <p>
                    Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center pt-8"
          >
            <p className="text-champagne/60 text-sm">
              Pour toute question relative aux cookies, vous pouvez nous contacter :
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="mailto:cookies@eloria.com"
                className="text-gold hover:text-gold-light transition-colors"
              >
                cookies@eloria.com
              </a>
              <span className="text-champagne/30">•</span>
              <a
                href="tel:+261341234567"
                className="text-gold hover:text-gold-light transition-colors"
              >
                +261 34 12 345 67
              </a>
            </div>
          </motion.div>
        </div>

        {/* Liens utiles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-gold/10"
        >
          <Link to="/" className="text-xs text-champagne/40 hover:text-gold transition-colors">
            Accueil
          </Link>
          <span className="text-champagne/20">•</span>
          <Link to="/mentions-legales" className="text-xs text-champagne/40 hover:text-gold transition-colors">
            Mentions légales
          </Link>
          <span className="text-champagne/20">•</span>
          <Link to="/confidentialite" className="text-xs text-champagne/40 hover:text-gold transition-colors">
            Politique de confidentialité
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

export default CookiesPolicy;