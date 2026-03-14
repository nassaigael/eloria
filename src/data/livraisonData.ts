export interface DeliveryMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
  delay: string;
  price: number;
  freeFrom?: number;
  features: string[];
  isExpress?: boolean;
  isRecommended?: boolean;
}

export interface DeliveryCountry {
  id: string;
  name: string;
  flag: string;
  zones: string[];
  standardDelay: string;
  expressDelay: string;
  standardPrice: number;
  expressPrice: number;
  freeFrom?: number;
}

export interface DeliveryFAQ {
  id: number;
  question: string;
  answer: string;
}

export const deliveryMethods: DeliveryMethod[] = [
  {
    id: 'standard',
    name: 'Livraison Standard',
    icon: '📦',
    description: 'Livraison à domicile ou en point relais',
    delay: '3-5 jours ouvrés',
    price: 9900,
    freeFrom: 150000,
    features: [
      'Suivi de colis inclus',
      'Livraison en point relais possible',
      'SMS d\'alerte à la livraison',
      'Créneau de livraison flexible'
    ],
    isRecommended: true
  },
  {
    id: 'express',
    name: 'Livraison Express',
    icon: '🚀',
    description: 'Pour les impatientes, livraison en 24/48h',
    delay: '24-48h',
    price: 19900,
    freeFrom: 300000,
    isExpress: true,
    features: [
      'Livraison prioritaire',
      'Suivi en temps réel',
      'SMS d\'alerte',
      'Créneau de livraison garanti',
      'Livraison le samedi possible'
    ]
  },
  {
    id: 'pointrelais',
    name: 'Point Relais',
    icon: '📍',
    description: 'Retirez votre colis près de chez vous',
    delay: '3-4 jours ouvrés',
    price: 5900,
    freeFrom: 100000,
    features: [
      'Plus de 5000 points relais',
      'Retrait sous 7 jours',
      'Horaires flexibles',
      'Alerte disponibilité SMS'
    ]
  },
  {
    id: 'premium',
    name: 'Livraison Premium',
    icon: '✨',
    description: 'Service sur-mesure avec rendez-vous',
    delay: '24-72h',
    price: 29900,
    features: [
      'Rendez-vous personnalisé',
      'Essayage à domicile',
      'Retour immédiat si non-conforme',
      'Emballage cadeau premium offert',
      'Conseillère dédiée'
    ]
  }
];

export const deliveryCountries: DeliveryCountry[] = [
  {
    id: 'france',
    name: 'France métropolitaine',
    flag: '🇫🇷',
    zones: ['Corse incluse'],
    standardDelay: '3-5 jours',
    expressDelay: '24-48h',
    standardPrice: 9900,
    expressPrice: 19900,
    freeFrom: 150000
  },
  {
    id: 'belgique',
    name: 'Belgique',
    flag: '🇧🇪',
    zones: ['Toute la Belgique'],
    standardDelay: '4-6 jours',
    expressDelay: '48h',
    standardPrice: 12900,
    expressPrice: 22900,
    freeFrom: 200000
  },
  {
    id: 'suisse',
    name: 'Suisse',
    flag: '🇨🇭',
    zones: ['Toute la Suisse'],
    standardDelay: '5-7 jours',
    expressDelay: '72h',
    standardPrice: 15900,
    expressPrice: 25900,
    freeFrom: 250000
  },
  {
    id: 'europe',
    name: 'Europe',
    flag: '🇪🇺',
    zones: ['Allemagne', 'Espagne', 'Italie', 'Luxembourg', 'Pays-Bas'],
    standardDelay: '5-8 jours',
    expressDelay: '3-4 jours',
    standardPrice: 19900,
    expressPrice: 29900,
    freeFrom: 300000
  },
  {
    id: 'international',
    name: 'International',
    flag: '🌍',
    zones: ['USA', 'Canada', 'Japon', 'Autres pays'],
    standardDelay: '8-12 jours',
    expressDelay: '5-7 jours',
    standardPrice: 29900,
    expressPrice: 39900,
    freeFrom: 500000
  }
];

export const deliveryFAQ: DeliveryFAQ[] = [
  {
    id: 1,
    question: "Comment suivre ma commande ?",
    answer: "Une fois votre commande expédiée, vous recevrez un email avec un numéro de suivi. Vous pouvez également suivre votre colis directement depuis votre espace client dans la rubrique 'Mes commandes'."
  },
  {
    id: 2,
    question: "Puis-je modifier l'adresse de livraison ?",
    answer: "Vous pouvez modifier votre adresse de livraison tant que votre commande n'a pas été expédiée. Connectez-vous à votre compte, allez dans 'Mes commandes' et suivez les instructions. Après expédition, ce n'est malheureusement plus possible."
  },
  {
    id: 3,
    question: "Que faire si je ne suis pas chez moi ?",
    answer: "Si vous n'êtes pas présent, le livreur déposera un avis de passage. Vous pourrez soit reprogrammer la livraison, soit retirer votre colis dans le point relais le plus proche dans un délai de 7 jours."
  },
  {
    id: 4,
    question: "La livraison est-elle offerte ?",
    answer: "Oui, la livraison standard est offerte dès 150 000 Ar d'achat en France métropolitaine. Pour les autres modes de livraison et destinations, consultez notre tableau des tarifs."
  },
  {
    id: 5,
    question: "Puis-je choisir un créneau de livraison ?",
    answer: "Pour la livraison Premium et Express, vous pouvez choisir un créneau de livraison. Un lien vous sera envoyé par email pour sélectionner le créneau qui vous convient."
  },
  {
    id: 6,
    question: "Que faire en cas de colis endommagé ?",
    answer: "Si votre colis est endommagé, refusez la livraison ou contactez-nous immédiatement à contact@eloria.com avec une photo des dégâts. Nous vous enverrons un remplacement dans les plus brefs délais."
  }
];

export const deliveryStats = {
  satisfiedCustomers: 98,
  onTimeDelivery: 96,
  countriesServed: 25,
  pointsRelais: 5000
};