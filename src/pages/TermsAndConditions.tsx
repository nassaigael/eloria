import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ShoppingBag,
    Truck,
    RotateCcw,
    Shield,
    CreditCard,
    FileText,
    Clock,
    Package,
    AlertCircle,
    CheckCircle
} from 'lucide-react';

const TermsAndConditions = () => {
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
                        <FileText size={32} className="text-gold" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif text-champagne mb-4">
                        Conditions <span className="text-gold">Générales de Vente</span>
                    </h1>
                    <div className="w-24 h-px bg-gold/40 mx-auto mb-6" />
                    <p className="text-champagne/60 max-w-2xl mx-auto">
                        Dernière mise à jour : {currentYear}
                    </p>
                </motion.div>

                {/* Contenu principal */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Préambule */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <p className="text-champagne/70 text-sm leading-relaxed">
                            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société
                            <span className="text-gold font-medium"> ELORIA SARL</span> et ses clients dans le cadre de la vente de produits
                            de prêt-à-porter féminin sur le site <span className="text-gold">www.eloria.com</span>.
                        </p>
                    </motion.div>

                    {/* Article 1 - Champ d'application */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <ShoppingBag size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 1 - Champ d'application</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>
                                        Les présentes CGV s'appliquent à toutes les ventes de produits effectuées sur le site internet www.eloria.com
                                        auprès de clients particuliers (consommateurs) résidant à Madagascar.
                                    </p>
                                    <p>
                                        Toute commande passée sur le site implique l'acceptation sans réserve des présentes CGV par le client.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 2 - Produits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <Package size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 2 - Produits</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>
                                        Les produits proposés à la vente sont ceux décrits sur le site www.eloria.com. Chaque produit est accompagné
                                        d'une description détaillée (matière, composition, taille, entretien) et d'un visuel photographique.
                                    </p>
                                    <p>
                                        Les photographies sont non contractuelles. Bien que nous fassions notre maximum pour représenter fidèlement
                                        les produits, des variations mineures peuvent exister (couleur, texture).
                                    </p>
                                    <p>
                                        Tous nos produits sont sélectionnés avec soin pour leur qualité. Les stocks sont mis à jour en temps réel,
                                        mais une indisponibilité ponctuelle peut survenir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 3 - Prix */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <CreditCard size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 3 - Prix</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>
                                        Les prix sont indiqués en Ariary (Ar) toutes taxes comprises (TTC), hors frais de livraison.
                                        La TVA n'est pas applicable à Madagascar (exonération).
                                    </p>
                                    <p>
                                        Eloria se réserve le droit de modifier ses prix à tout moment. Les produits sont facturés sur la base des tarifs
                                        en vigueur au moment de la validation de la commande.
                                    </p>
                                    <p>
                                        Les frais de livraison sont calculés selon le mode choisi et sont indiqués avant validation de la commande.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 4 - Commande */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <CheckCircle size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 4 - Commande</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>La commande s'effectue en plusieurs étapes :</p>
                                    <ol className="list-decimal list-inside space-y-2 ml-4">
                                        <li>Sélection des produits et ajout au panier</li>
                                        <li>Validation du panier et renseignement des informations de livraison</li>
                                        <li>Choix du mode de livraison</li>
                                        <li>Choix du mode de paiement</li>
                                        <li>Acceptation des CGV et validation définitive de la commande</li>
                                        <li>Paiement et confirmation de la commande</li>
                                    </ol>
                                    <p className="mt-3">
                                        Un email de confirmation récapitulant les détails de la commande est envoyé automatiquement.
                                        Eloria se réserve le droit d'annuler toute commande suspecte ou litigieuse.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 5 - Paiement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <Shield size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 5 - Paiement</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>Les modes de paiement acceptés sont :</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Carte bancaire (Visa, Mastercard, American Express) via notre partenaire sécurisé</li>
                                        <li>Mobile Money (MVola, Airtel Money)</li>
                                        <li>Virement bancaire</li>
                                        <li>Paiement à la livraison (uniquement pour Antananarivo)</li>
                                    </ul>
                                    <p className="mt-3">
                                        Le paiement est sécurisé par cryptage SSL. Les données bancaires ne sont jamais stockées sur nos serveurs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 6 - Livraison */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <Truck size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 6 - Livraison</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>Nous livrons sur tout Madagascar. Les modes de livraison disponibles sont :</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong className="text-champagne">Livraison standard :</strong> 3-5 jours ouvrés - 9 900 Ar (offerte dès 150 000 Ar)</li>
                                        <li><strong className="text-champagne">Livraison express :</strong> 24-48h - 19 900 Ar</li>
                                        <li><strong className="text-champagne">Point relais :</strong> 3-5 jours ouvrés - 5 900 Ar (offerte dès 100 000 Ar)</li>
                                        <li><strong className="text-champagne">Retrait en boutique :</strong> gratuit - Antananarivo</li>
                                    </ul>
                                    <p className="mt-3">
                                        Le délai de préparation des commandes est de 24h ouvrées. En cas de retard de livraison, nous vous tiendrons informé.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 7 - Rétractation et Retours */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <RotateCcw size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 7 - Droit de rétractation et Retours</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>
                                        Conformément à la législation malgache, le client dispose d'un délai de 14 jours à compter de la réception
                                        de sa commande pour exercer son droit de rétractation sans avoir à justifier de motifs.
                                    </p>
                                    <p>
                                        <strong className="text-champagne">Conditions de retour :</strong>
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Les articles doivent être retournés dans leur état d'origine, non portés, avec leurs étiquettes</li>
                                        <li>Les frais de retour sont à la charge du client sauf en cas d'erreur de notre part</li>
                                        <li>Le remboursement est effectué sous 14 jours suivant la réception du colis retourné</li>
                                    </ul>
                                    <p className="mt-3">
                                        Sont exclus du droit de rétractation : les articles personnalisés et les sous-vêtements pour raisons d'hygiène.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 8 - Garanties */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <AlertCircle size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 8 - Garanties</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>
                                        Tous nos produits bénéficient de la garantie légale de conformité et de la garantie des vices cachés.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong className="text-champagne">Garantie de conformité :</strong> 2 ans à compter de la livraison</li>
                                        <li><strong className="text-champagne">Vices cachés :</strong> couvre les défauts non apparents au moment de l'achat</li>
                                    </ul>
                                    <p>
                                        Pour toute réclamation, contactez notre service client à <a href="mailto:sav@eloria.com" className="text-gold hover:underline">sav@eloria.com</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 9 - Responsabilité */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <Clock size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 9 - Responsabilité</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>
                                        Eloria ne saurait être tenue responsable des dommages indirects liés à l'utilisation des produits vendus.
                                        Notre responsabilité est limitée au montant de la commande.
                                    </p>
                                    <p>
                                        En cas de force majeure (catastrophe naturelle, grève, pandémie), les délais de livraison peuvent être prolongés.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 10 - Données personnelles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <Shield size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 10 - Données personnelles</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>
                                        Vos données personnelles sont collectées et traitées conformément à notre
                                        <Link to="/confidentialite" className="text-gold hover:underline ml-1">Politique de confidentialité</Link>.
                                    </p>
                                    <p>
                                        Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Article 11 - Litiges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="bg-linear-to-b from-gold/5 to-transparent backdrop-blur-sm border border-gold/10 p-6 md:p-8"
                    >
                        <div className="flex items-start space-x-4">
                            <AlertCircle size={24} className="text-gold shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-serif text-gold mb-4">Article 11 - Litiges</h2>
                                <div className="space-y-3 text-champagne/70 text-sm leading-relaxed">
                                    <p>
                                        Les présentes CGV sont régies par le droit malgache. En cas de litige, une solution amiable sera recherchée
                                        avant toute action judiciaire.
                                    </p>
                                    <p>
                                        À défaut d'accord amiable, le tribunal compétent est celui d'Antananarivo.
                                    </p>
                                    <p>
                                        Pour toute réclamation, contactez-nous à <a href="mailto:serviceclient@eloria.com" className="text-gold hover:underline">serviceclient@eloria.com</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3 }}
                        className="text-center pt-8"
                    >
                        <p className="text-champagne/60 text-sm">
                            Pour toute question relative aux Conditions Générales de Vente, vous pouvez nous contacter :
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            <a
                                href="mailto:serviceclient@eloria.com"
                                className="text-gold hover:text-gold-light transition-colors"
                            >
                                serviceclient@eloria.com
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

export default TermsAndConditions;