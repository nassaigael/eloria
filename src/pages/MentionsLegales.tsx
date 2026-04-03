import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, FileText, Building, Globe, Printer, Scale, Users, Clock } from 'lucide-react';

const LegalMentions = () => {
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

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/30 mb-6">
            <Shield size={32} className="text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
            Mentions <span className="text-gold">légales</span>
          </h1>
          <div className="w-24 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-champagne/60 max-w-2xl mx-auto">
            Dernière mise à jour : {currentYear}
          </p>
        </motion.div>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Éditeur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Building size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Éditeur du site</h2>
                <div className="space-y-2 text-champagne/70 text-sm leading-relaxed">
                  <p><strong className="text-champagne">Raison sociale :</strong> ELORIA SARL</p>
                  <p><strong className="text-champagne">Forme juridique :</strong> Société à Responsabilité Limitée</p>
                  <p><strong className="text-champagne">Capital social :</strong> 10 000 000 Ar</p>
                  <p><strong className="text-champagne">RCS :</strong> 2024 B 00123 Antananarivo</p>
                  <p><strong className="text-champagne">NIF :</strong> 4001234567</p>
                  <p><strong className="text-champagne">STAT :</strong> 1234567890123</p>
                  <p><strong className="text-champagne">Siège social :</strong> Lot II M 75 Bis, Antanimena, Antananarivo 101, Madagascar</p>
                  <p><strong className="text-champagne">Téléphone :</strong> +261 34 12 345 67</p>
                  <p><strong className="text-champagne">Email :</strong> legal@eloria.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Directeur de publication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Users size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Directeur de publication</h2>
                <div className="space-y-2 text-champagne/70 text-sm leading-relaxed">
                  <p><strong className="text-champagne">Nom :</strong> Sarah Rakoto</p>
                  <p><strong className="text-champagne">Fonction :</strong> Directrice Générale</p>
                  <p><strong className="text-champagne">Email :</strong> sarah.rakoto@eloria.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hébergement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Globe size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Hébergement</h2>
                <div className="space-y-2 text-champagne/70 text-sm leading-relaxed">
                  <p><strong className="text-champagne">Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong className="text-champagne">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p><strong className="text-champagne">Téléphone :</strong> +1 559 288 7060</p>
                  <p><strong className="text-champagne">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">vercel.com</a></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Propriété intellectuelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Scale size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Propriété intellectuelle</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                  </p>
                  <p>
                    Les marques, logos, signes distinctifs et contenus de toute nature présents sur le site <span className="text-gold">www.eloria.com</span> sont la propriété exclusive 
                    d'ELORIA SARL ou font l'objet d'une licence d'utilisation.
                  </p>
                  <p>
                    Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, 
                    sans l'accord écrit préalable d'ELORIA SARL, est strictement interdite.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Données personnelles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <FileText size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Données personnelles</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    Conformément à la loi n° 2014-038 du 14 janvier 2015 sur la protection des données personnelles à Madagascar, 
                    vous disposez d'un droit d'accès, de rectification, de modification et de suppression des données qui vous concernent.
                  </p>
                  <p>
                    Pour exercer ce droit, veuillez nous contacter à l'adresse : <a href="mailto:privacy@eloria.com" className="text-gold hover:underline">privacy@eloria.com</a>
                  </p>
                  <p>
                    Pour plus d'informations, consultez notre <Link to="/confidentialite" className="text-gold hover:underline">Politique de confidentialité</Link>.
                  </p>
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
              <Printer size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Cookies</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    Le site www.eloria.com utilise des cookies pour améliorer l'expérience utilisateur, réaliser des statistiques de visites 
                    et personnaliser les contenus.
                  </p>
                  <p>
                    En naviguant sur notre site, vous acceptez l'utilisation de cookies conformément à notre 
                    <Link to="/cookies" className="text-gold hover:underline ml-1">Politique de cookies</Link>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Limitation de responsabilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
          >
            <div className="flex items-start space-x-4">
              <Clock size={24} className="text-gold shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-serif text-gold mb-4">Limitation de responsabilité</h2>
                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                  <p>
                    ELORIA SARL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. 
                    Toutefois, ELORIA SARL ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                  </p>
                  <p>
                    ELORIA SARL décline toute responsabilité pour toute interruption du site, bugs, erreurs ou omissions, 
                    ainsi que pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center pt-8"
          >
            <p className="text-champagne/60 text-sm">
              Pour toute question relative aux mentions légales, vous pouvez nous contacter à :
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="mailto:legal@eloria.com"
                className="text-gold hover:text-gold-light transition-colors"
              >
                legal@eloria.com
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
      </div>
    </div>
  );
};

export default LegalMentions;