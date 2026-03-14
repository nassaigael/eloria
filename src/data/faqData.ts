export interface FaqCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  isPopular?: boolean;
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'commandes',
    name: 'Commandes',
    icon: '🛍️',
    description: 'Tout savoir sur le processus de commande'
  },
  {
    id: 'livraison',
    name: 'Livraison',
    icon: '🚚',
    description: 'Délais, tarifs et suivi de livraison'
  },
  {
    id: 'retours',
    name: 'Retours & Échanges',
    icon: '🔄',
    description: 'Politique de retour et procédure d\'échange'
  },
  {
    id: 'paiement',
    name: 'Paiement',
    icon: '💳',
    description: 'Moyens de paiement et sécurité'
  },
  {
    id: 'produits',
    name: 'Produits',
    icon: '👗',
    description: 'Informations sur nos produits'
  },
  {
    id: 'compte',
    name: 'Compte',
    icon: '👤',
    description: 'Gestion de votre compte client'
  }
];

export const faqItems: FaqItem[] = [
  // Commandes
  {
    id: 1,
    question: "Comment passer une commande ?",
    answer: "Pour passer une commande, il vous suffit de parcourir notre catalogue, sélectionner les articles qui vous plaisent, les ajouter à votre panier, puis suivre les étapes de validation. Vous pouvez payer en toute sécurité par carte bancaire, PayPal ou en 3x sans frais avec Alma.",
    category: 'commandes',
    isPopular: true
  },
  {
    id: 2,
    question: "Puis-je modifier ma commande après validation ?",
    answer: "Malheureusement, il n'est pas possible de modifier une commande une fois qu'elle a été validée. Cependant, vous pouvez nous contacter immédiatement à contact@eloria.com pour tenter d'annuler la commande avant qu'elle ne soit préparée, puis en passer une nouvelle.",
    category: 'commandes'
  },
  {
    id: 3,
    question: "Comment suivre ma commande ?",
    answer: "Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi. Vous pouvez également suivre votre commande directement depuis votre espace client dans la rubrique 'Mes commandes'.",
    category: 'commandes',
    isPopular: true
  },
  {
    id: 4,
    question: "Que faire si un article est manquant dans ma commande ?",
    answer: "Si un article est manquant, contactez notre service client dans les 48h suivant la réception de votre colis à contact@eloria.com en précisant votre numéro de commande et les articles manquants. Nous vous enverrons un remplacement dans les plus brefs délais.",
    category: 'commandes'
  },

  // Livraison
  {
    id: 5,
    question: "Quels sont les délais de livraison ?",
    answer: "Les délais de livraison varient selon le mode choisi : Livraison standard : 3-5 jours ouvrés, Livraison express : 24-48h, Livraison point relais : 3-4 jours ouvrés. Les commandes sont préparées sous 24h.",
    category: 'livraison',
    isPopular: true
  },
  {
    id: 6,
    question: "La livraison est-elle offerte ?",
    answer: "Oui, la livraison standard est offerte dès 150 000 Ar d'achat en France métropolitaine. Pour les commandes inférieures, les frais de port sont de 9 900 Ar.",
    category: 'livraison',
    isPopular: true
  },
  {
    id: 7,
    question: "Livrez-vous à l'international ?",
    answer: "Oui, nous livrons dans toute l'Europe et dans certains pays du monde. Les frais de port et délais varient selon la destination. Consultez notre page Livraison pour plus d'informations.",
    category: 'livraison'
  },
  {
    id: 8,
    question: "Puis-je choisir mon créneau de livraison ?",
    answer: "Pour les livraisons à domicile, vous pouvez choisir un créneau de livraison si cette option est proposée par notre transporteur. Vous recevrez un lien pour sélectionner votre créneau après expédition.",
    category: 'livraison'
  },

  // Retours
  {
    id: 9,
    question: "Quel est le délai pour retourner un article ?",
    answer: "Vous disposez de 30 jours à compter de la réception de votre commande pour retourner un article. Les articles doivent être retournés dans leur état d'origine, non portés, avec leurs étiquettes.",
    category: 'retours',
    isPopular: true
  },
  {
    id: 10,
    question: "Les retours sont-ils gratuits ?",
    answer: "Oui, les retours sont gratuits pour toutes les commandes. Nous vous fournissons une étiquette de retour prépayée à imprimer et à coller sur votre colis.",
    category: 'retours',
    isPopular: true
  },
  {
    id: 11,
    question: "Comment procéder à un retour ?",
    answer: "Pour retourner un article, connectez-vous à votre espace client, sélectionnez la commande concernée et les articles à retourner. Imprimez l'étiquette de retour, emballez les articles et déposez le colis dans un point relais.",
    category: 'retours'
  },
  {
    id: 12,
    question: "Quand serai-je remboursé ?",
    answer: "Le remboursement est effectué dès réception et contrôle de votre retour, généralement sous 5 à 7 jours ouvrés. Le délai d'apparition sur votre compte dépend de votre banque.",
    category: 'retours'
  },

  // Paiement
  {
    id: 13,
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les paiements par carte bancaire (Visa, Mastercard, American Express), PayPal, Apple Pay et Alma pour le paiement en 3x sans frais.",
    category: 'paiement',
    isPopular: true
  },
  {
    id: 14,
    question: "Le paiement est-il sécurisé ?",
    answer: "Oui, tous les paiements sont 100% sécurisés. Vos données bancaires sont cryptées et nous n'avons jamais accès à vos informations de paiement complètes.",
    category: 'paiement',
    isPopular: true
  },
  {
    id: 15,
    question: "Qu'est-ce que le paiement en 3x sans frais ?",
    answer: "Le paiement en 3x sans frais vous permet de fractionner votre achat en 3 mensualités sans aucun frais supplémentaire. Cette option est disponible via Alma pour les achats de 100 000 Ar à 500 000 Ar.",
    category: 'paiement'
  },
  {
    id: 16,
    question: "Puis-je payer avec un chèque cadeau ?",
    answer: "Oui, vous pouvez utiliser une carte cadeau Eloria au moment du paiement. Il vous suffit d'entrer le code de la carte dans le champ prévu à cet effet.",
    category: 'paiement'
  },

  // Produits
  {
    id: 17,
    question: "Comment choisir ma taille ?",
    answer: "Consultez notre guide des tailles disponible sur chaque fiche produit. Vous y trouverez un tableau détaillé des correspondances. En cas de doute, notre service client est à votre disposition.",
    category: 'produits',
    isPopular: true
  },
  {
    id: 18,
    question: "Les produits sont-ils de qualité ?",
    answer: "Tous nos produits sont sélectionnés avec soin pour leur qualité exceptionnelle. Nous travaillons avec des artisans et fabricants reconnus pour leur savoir-faire et utilisons des matériaux nobles.",
    category: 'produits'
  },
  {
    id: 19,
    question: "Comment entretenir mes vêtements ?",
    answer: "Chaque produit est accompagné d'instructions d'entretien détaillées. En général, nous recommandons un lavage délicat à basse température pour préserver la qualité des tissus.",
    category: 'produits'
  },
  {
    id: 20,
    question: "Proposez-vous des éditions limitées ?",
    answer: "Oui, nous proposons régulièrement des collections capsule en édition limitée. Inscrivez-vous à notre newsletter pour être informée en avant-première de ces lancements exclusifs.",
    category: 'produits',
    isPopular: true
  },

  // Compte
  {
    id: 21,
    question: "Comment créer un compte ?",
    answer: "Pour créer un compte, cliquez sur l'icône 'Compte' en haut à droite du site, puis sur 'Créer un compte'. Remplissez le formulaire avec vos informations et validez.",
    category: 'compte'
  },
  {
    id: 22,
    question: "J'ai oublié mon mot de passe, que faire ?",
    answer: "Sur la page de connexion, cliquez sur 'Mot de passe oublié'. Vous recevrez un email avec un lien pour réinitialiser votre mot de passe en toute sécurité.",
    category: 'compte',
    isPopular: true
  },
  {
    id: 23,
    question: "Comment modifier mes informations personnelles ?",
    answer: "Connectez-vous à votre compte, rendez-vous dans la rubrique 'Mes informations' où vous pourrez modifier votre nom, email, adresse de livraison, etc.",
    category: 'compte'
  },
  {
    id: 24,
    question: "Mes informations sont-elles protégées ?",
    answer: "Absolument. Nous respectons le RGPD et ne partageons jamais vos données avec des tiers sans votre consentement. Consultez notre politique de confidentialité pour plus de détails.",
    category: 'compte',
    isPopular: true
  }
];

// Statistiques FAQ
export const faqStats = {
  totalQuestions: faqItems.length,
  categoriesCount: faqCategories.length,
  popularQuestions: faqItems.filter(item => item.isPopular).length,
  responseTime: "Moins de 2h"
};