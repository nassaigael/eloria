export interface Testimonial {
  id: number;
  name: string;
  firstName: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  productName?: string;
  productImage?: string;
  verified: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    firstName: "Sophie",
    location: "Paris",
    avatar: "https://images.unsplash.com/photo-1494790108777-76675c7f42e0?w=150&auto=format",
    rating: 5,
    comment: "La robe est absolument magnifique ! La qualité des tissus est exceptionnelle et la coupe est parfaite. Je me suis sentie tellement élégante pour cette soirée. Le service client a été très attentionné pour m'aider à choisir ma taille.",
    date: "Il y a 2 jours",
    productName: "Robe de Soirée Émeraude",
    productImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=100&auto=format",
    verified: true
  },
  {
    id: 2,
    name: "Marie Dubois",
    firstName: "Marie",
    location: "Lyon",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format",
    rating: 5,
    comment: "Une expérience d'achat exceptionnelle. La livraison a été rapide et le packaging était magnifique. J'ai commandé un ensemble pour un mariage et j'ai reçu tellement de compliments ! Je recommande vivement Eloria.",
    date: "Il y a 1 semaine",
    productName: "Ensemble Chic Doré",
    productImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=100&auto=format",
    verified: true
  },
  {
    id: 3,
    name: "Claire Bernard",
    firstName: "Claire",
    location: "Bordeaux",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format",
    rating: 4,
    comment: "Très satisfaite de mon achat. La blouse en soie est encore plus belle en vrai. Seul petit bémol, la taille est légèrement grande, mais le service client a été réactif pour m'aider avec l'échange.",
    date: "Il y a 3 jours",
    productName: "Blouse en Soie",
    productImage: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=100&auto=format",
    verified: true
  },
  {
    id: 4,
    name: "Camille Rousseau",
    firstName: "Camille",
    location: "Toulouse",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format",
    rating: 5,
    comment: "Je suis tombée amoureuse de cette marque ! Les matières sont nobles, les finitions impeccables. C'est rare de trouver une telle qualité de nos jours. Ma nouvelle adresse préférée.",
    date: "Il y a 2 semaines",
    productName: "Jupe Plissée Rubis",
    productImage: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=100&auto=format",
    verified: true
  },
  {
    id: 5,
    name: "Julie Lambert",
    firstName: "Julie",
    location: "Nantes",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format",
    rating: 5,
    comment: "Service client au top ! J'avais une question sur les tailles et on m'a répondu en moins d'une heure. La robe est parfaite, je la recommanderai sans hésiter.",
    date: "Il y a 5 jours",
    productName: "Robe de Cocktail Noire",
    productImage: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=100&auto=format",
    verified: true
  },
  {
    id: 6,
    name: "Emma Petit",
    firstName: "Emma",
    location: "Strasbourg",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&auto=format",
    rating: 5,
    comment: "Le pantalon tailleur est d'une élégance rare. Il tombe parfaitement et la qualité est au rendez-vous. Je l'ai porté pour un entretien et j'ai eu le poste ! Coïncidence ? Je ne pense pas !",
    date: "Il y a 1 semaine",
    productName: "Pantalon Tailleur",
    productImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100&auto=format",
    verified: true
  }
];

// Statistiques globales
export const globalStats = {
  averageRating: 4.8,
  totalReviews: 1247,
  recommendedBy: 98,
  verifiedReviews: 892
};