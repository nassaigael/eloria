export interface Testimonial {
  id: number;
  name: string;
  firstName: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  dateRelative: string;
  productName?: string;
  productImage?: string;
  productSlug?: string;
  verified: boolean;
  helpful?: number;
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
    date: "2024-03-15",
    dateRelative: "Il y a 2 jours",
    productName: "Robe de Soirée Émeraude",
    productImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=100&auto=format",
    productSlug: "robe-de-soiree-emeraude",
    verified: true,
    helpful: 24
  },
  {
    id: 2,
    name: "Marie Dubois",
    firstName: "Marie",
    location: "Lyon",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format",
    rating: 5,
    comment: "Une expérience d'achat exceptionnelle. La livraison a été rapide et le packaging était magnifique. J'ai commandé un ensemble pour un mariage et j'ai reçu tellement de compliments ! Je recommande vivement Eloria.",
    date: "2024-03-10",
    dateRelative: "Il y a 1 semaine",
    productName: "Ensemble Chic Doré",
    productImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=100&auto=format",
    productSlug: "ensemble-chic-dore",
    verified: true,
    helpful: 18
  },
  {
    id: 3,
    name: "Claire Bernard",
    firstName: "Claire",
    location: "Bordeaux",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format",
    rating: 4,
    comment: "Très satisfaite de mon achat. La blouse en soie est encore plus belle en vrai. Seul petit bémol, la taille est légèrement grande, mais le service client a été réactif pour m'aider avec l'échange.",
    date: "2024-03-14",
    dateRelative: "Il y a 3 jours",
    productName: "Blouse en Soie",
    productImage: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=100&auto=format",
    productSlug: "blouse-en-soie",
    verified: true,
    helpful: 12
  },
  {
    id: 4,
    name: "Camille Rousseau",
    firstName: "Camille",
    location: "Toulouse",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format",
    rating: 5,
    comment: "Je suis tombée amoureuse de cette marque ! Les matières sont nobles, les finitions impeccables. C'est rare de trouver une telle qualité de nos jours. Ma nouvelle adresse préférée.",
    date: "2024-03-01",
    dateRelative: "Il y a 2 semaines",
    productName: "Jupe Plissée Rubis",
    productImage: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=100&auto=format",
    productSlug: "jupe-plissee-rubis",
    verified: true,
    helpful: 31
  },
  {
    id: 5,
    name: "Julie Lambert",
    firstName: "Julie",
    location: "Nantes",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format",
    rating: 5,
    comment: "Service client au top ! J'avais une question sur les tailles et on m'a répondu en moins d'une heure. La robe est parfaite, je la recommanderai sans hésiter.",
    date: "2024-03-12",
    dateRelative: "Il y a 5 jours",
    productName: "Robe de Cocktail Noire",
    productImage: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=100&auto=format",
    productSlug: "robe-de-cocktail-noire",
    verified: true,
    helpful: 15
  },
  {
    id: 6,
    name: "Emma Petit",
    firstName: "Emma",
    location: "Strasbourg",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&auto=format",
    rating: 5,
    comment: "Le pantalon tailleur est d'une élégance rare. Il tombe parfaitement et la qualité est au rendez-vous. Je l'ai porté pour un entretien et j'ai eu le poste ! Coïncidence ? Je ne pense pas !",
    date: "2024-03-09",
    dateRelative: "Il y a 1 semaine",
    productName: "Pantalon Tailleur",
    productImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100&auto=format",
    productSlug: "pantalon-tailleur",
    verified: true,
    helpful: 22
  },
  {
    id: 7,
    name: "Léa Moreau",
    firstName: "Léa",
    location: "Lille",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format",
    rating: 5,
    comment: "Le sac à main en cuir est absolument magnifique ! La qualité est exceptionnelle et le design est intemporel. Il accompagne toutes mes tenues avec élégance.",
    date: "2024-03-05",
    dateRelative: "Il y a 1 semaine",
    productName: "Sac à Main Cuir",
    productImage: "https://images.unsplash.com/photo-1584917865442-6b3f5e5b7b9b?w=100&auto=format",
    productSlug: "sac-a-main-cuir",
    verified: true,
    helpful: 19
  },
  {
    id: 8,
    name: "Chloé Dubreuil",
    firstName: "Chloé",
    location: "Grenoble",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format",
    rating: 4,
    comment: "Très belle robe, la couleur est magnifique et la coupe est flatteuse. Seul bémol, la taille est un peu juste au niveau des épaules. Le service client a été très compréhensif pour l'échange.",
    date: "2024-03-08",
    dateRelative: "Il y a 6 jours",
    productName: "Robe de Bal Rose",
    productImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=100&auto=format",
    productSlug: "robe-de-bal-rose",
    verified: true,
    helpful: 8
  },
  {
    id: 9,
    name: "Manon Lefebvre",
    firstName: "Manon",
    location: "Rennes",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&auto=format",
    rating: 5,
    comment: "Le collier de perles est ravissant ! Il apporte une touche d'élégance à toutes mes tenues. La qualité est au rendez-vous et le prix est très raisonnable pour de la qualité.",
    date: "2024-03-02",
    dateRelative: "Il y a 2 semaines",
    productName: "Collier Perles",
    productImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&auto=format",
    productSlug: "collier-perles",
    verified: true,
    helpful: 14
  },
  {
    id: 10,
    name: "Sarah Cohen",
    firstName: "Sarah",
    location: "Marseille",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&auto=format",
    rating: 5,
    comment: "Le blazer est parfaitement taillé, la coupe est élégante et la qualité du tissu est exceptionnelle. Je l'ai porté pour un mariage et j'ai eu énormément de compliments.",
    date: "2024-02-25",
    dateRelative: "Il y a 3 semaines",
    productName: "Blazer Cérémonie",
    productImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&auto=format",
    productSlug: "blazer-ceremonie",
    verified: true,
    helpful: 27
  },
  {
    id: 11,
    name: "Lucie Morel",
    firstName: "Lucie",
    location: "Nice",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&auto=format",
    rating: 5,
    comment: "Les escarpins sont magnifiques et très confortables ! Je les ai portés toute une soirée sans aucune douleur. La couleur dorée est superbe et s'accorde avec tout.",
    date: "2024-03-07",
    dateRelative: "Il y a 1 semaine",
    productName: "Escarpins Or",
    productImage: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=100&auto=format",
    productSlug: "escarpins-or",
    verified: true,
    helpful: 21
  },
  {
    id: 12,
    name: "Inès Wagner",
    firstName: "Inès",
    location: "Dijon",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format",
    rating: 4,
    comment: "La robe chemise est très élégante, parfaite pour le bureau. La matière est agréable et la coupe est flatteuse. Je recommande !",
    date: "2024-03-11",
    dateRelative: "Il y a 3 jours",
    productName: "Robe Chemise",
    productImage: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=100&auto=format",
    productSlug: "robe-chemise",
    verified: true,
    helpful: 11
  }
];

export const globalStats = {
  averageRating: 4.8,
  totalReviews: 1247,
  recommendedBy: 98,
  verifiedReviews: 1247, 
  distribution: {
    5: 892,
    4: 248,
    3: 62,
    2: 31,
    1: 14
  }
};