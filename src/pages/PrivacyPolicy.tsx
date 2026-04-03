import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lock, Eye, Database, Shield, Mail, FileText, UserCheck, Trash2, Globe, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

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
          <span className="text-gold">Politique de confidentialité</span>
        </motion.div>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 mb-6">
            <Lock size={32} className="text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
            Politique de <span className="text-gold">confidentialité</span>
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
              Chez <span className="text-gold">Eloria</span>, la protection de vos données personnelles est une priorité. 
              Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons, partageons et protégeons 
              vos informations lorsque vous utilisez notre site web <span className="text-gold">www.eloria.com</span>.
            </p>
          </motion.div>

          {/* Collecte des données */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Database size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Données collectées</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>Nous collectons les informations suivantes :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-champagne">Informations d'identification :</strong> nom, prénom, adresse email, numéro de téléphone, adresse postale</li>
                    <li><strong className="text-champagne">Informations de commande :</strong> produits achetés, montants, historique d'achats</li>
                    <li><strong className="text-champagne">Informations de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
                    <li><strong className="text-champagne">Préférences :</strong> favoris, avis, paramètres de communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Utilisation des données */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Eye size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Utilisation de vos données</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>Vos données personnelles sont utilisées pour :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Traiter et livrer vos commandes</li>
                    <li>Gérer votre compte client</li>
                    <li>Vous informer sur l'état de vos commandes</li>
                    <li>Répondre à vos demandes de contact et service client</li>
                    <li>Personnaliser votre expérience sur notre site</li>
                    <li>Analyser et améliorer nos services</li>
                    <li>Vous envoyer des offres promotionnelles (avec votre consentement)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Base légale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <FileText size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Base légale du traitement</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>Conformément à la loi n° 2014-038 du 14 janvier 2015 sur la protection des données personnelles à Madagascar, nous traitons vos données sur la base de :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>L'exécution du contrat de vente</li>
                    <li>Votre consentement (pour les communications marketing)</li>
                    <li>Notre intérêt légitime (amélioration des services)</li>
                    <li>Obligations légales (facturation, comptabilité)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Partage des données */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Shield size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Partage des données</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>Nous ne vendons pas vos données personnelles. Vos informations peuvent être partagées avec :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nos prestataires de livraison (pour l'acheminement de vos commandes)</li>
                    <li>Nos partenaires de paiement sécurisé</li>
                    <li>Les autorités légales, si la loi l'exige</li>
                  </ul>
                  <p className="mt-3">Tous nos partenaires s'engagent à respecter la confidentialité de vos données.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Globe size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Cookies</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers 
                    textes déposés sur votre appareil.
                  </p>
                  <p>Types de cookies utilisés :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-champagne">Cookies essentiels :</strong> nécessaires au fonctionnement du site (panier, connexion)</li>
                    <li><strong className="text-champagne">Cookies analytiques :</strong> nous aident à comprendre l'utilisation du site</li>
                    <li><strong className="text-champagne">Cookies fonctionnels :</strong> mémorisent vos préférences</li>
                  </ul>
                  <p>
                    Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur ou notre 
                    <Link to="/cookies" className="text-gold hover:underline ml-1">Politique de cookies</Link>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sécurité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Lock size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Sécurité des données</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données 
                    contre tout accès non autorisé, perte, destruction ou divulgation :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Chiffrement SSL/TLS pour les transactions</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Surveillance et mise à jour régulière des systèmes</li>
                    <li>Formation du personnel à la confidentialité</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vos droits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <UserCheck size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Vos droits</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>Conformément à la loi sur la protection des données, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-champagne">Droit d'accès :</strong> connaître les données que nous détenons sur vous</li>
                    <li><strong className="text-champagne">Droit de rectification :</strong> modifier vos données inexactes</li>
                    <li><strong className="text-champagne">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                    <li><strong className="text-champagne">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                    <li><strong className="text-champagne">Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conservation des données */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Clock size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Conservation des données</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Données de compte : jusqu'à suppression de votre compte</li>
                    <li>Données de commande : 10 ans (obligation légale)</li>
                    <li>Données de navigation : 13 mois maximum</li>
                    <li>Données marketing : jusqu'à retrait de votre consentement</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact DPO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Mail size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Contact - Délégué à la protection des données</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>Pour toute question relative à cette politique ou pour exercer vos droits, vous pouvez contacter notre DPO :</p>
                  <div className="bg-gold/5 p-4 border border-gold/20 mt-3">
                    <p><strong className="text-champagne">Email :</strong> <a href="mailto:dpo@eloria.com" className="text-gold hover:underline">dpo@eloria.com</a></p>
                    <p><strong className="text-champagne">Adresse :</strong> Eloria - Service DPO, Lot II M 75 Bis, Antanimena, Antananarivo 101, Madagascar</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mise à jour */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Trash2 size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Mise à jour de la politique</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    Nous pouvons modifier cette politique de confidentialité pour refléter les évolutions de nos pratiques ou les exigences légales. 
                    La date de la dernière mise à jour est indiquée en haut de cette page.
                  </p>
                  <p>
                    Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;