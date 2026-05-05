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
    name: "Mialy Razafy",
    firstName: "Mialy",
    location: "Antananarivo",
    avatar: "https://images.unsplash.com/photo-1494790108777-76675c7f42e0?w=150&auto=format",
    rating: 5,
    comment: "La robe est absolument magnifique ! La qualité des tissus est exceptionnelle et la coupe est parfaite. Je me suis sentie tellement élégante pour cette soirée. Service client au top !",
    date: "2024-03-15",
    dateRelative: "Il y a 2 jours",
    productName: "Robe Fourreau Bureau Taupe",
    productImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=100&auto=format",
    productSlug: "robe-fourreau-bureau-taupe",
    verified: true,
    helpful: 24
  },
  {
    id: 2,
    name: "Voahangy Ramanantsoa",
    firstName: "Voahangy",
    location: "Toamasina",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format",
    rating: 5,
    comment: "Une expérience d'achat exceptionnelle. La livraison a été rapide et le packaging était magnifique. J'ai commandé ce tailleur pour un mariage et j'ai reçu tellement de compliments !",
    date: "2024-03-10",
    dateRelative: "Il y a 1 semaine",
    productName: "Ensemble Tailleur Cache-Cœur Bleu Ciel",
    productImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=100&auto=format",
    productSlug: "ensemble-tailleur-cache-coeur-bleu-ciel",
    verified: true,
    helpful: 18
  },
  {
    id: 3,
    name: "Hanitra Rakoto",
    firstName: "Hanitra",
    location: "Antsirabe",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format",
    rating: 4,
    comment: "Très satisfaite de mon achat. Le blazer blanc est encore plus beau en vrai. Seul petit bémol, la taille est légèrement grande, mais le service client a été réactif.",
    date: "2024-03-14",
    dateRelative: "Il y a 3 jours",
    productName: "Blazer Blanc Col Volanté",
    productImage: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=100&auto=format",
    productSlug: "blazer-blanc-col-volante",
    verified: true,
    helpful: 12
  },
  {
    id: 4,
    name: "Lanto Randria",
    firstName: "Lanto",
    location: "Fianarantsoa",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format",
    rating: 5,
    comment: "Je suis tombée amoureuse de cette marque ! Les matières sont nobles, les finitions impeccables. Le tailleur bordeaux est parfait pour le bureau.",
    date: "2024-03-01",
    dateRelative: "Il y a 2 semaines",
    productName: "Ensemble Tailleur Veste et Jupe Patineuse Bordeaux",
    productImage: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=100&auto=format",
    productSlug: "ensemble-tailleur-veste-jupe-patineuse-bordeaux",
    verified: true,
    helpful: 31
  },
  {
    id: 5,
    name: "Tiana Andrian",
    firstName: "Tiana",
    location: "Mahajanga",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format",
    rating: 5,
    comment: "Service client au top ! J'avais une question sur les tailles et on m'a répondu en moins d'une heure. Le blazer oversize est parfait, je le recommande sans hésiter.",
    date: "2024-03-12",
    dateRelative: "Il y a 5 jours",
    productName: "Blazer Oversize Beige Taupe",
    productImage: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=100&auto=format",
    productSlug: "blazer-oversize-beige-taupe",
    verified: true,
    helpful: 15
  },
  {
    id: 6,
    name: "Niry Rakotomalala",
    firstName: "Niry",
    location: "Toliara",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&auto=format",
    rating: 5,
    comment: "Le tailleur tweed blanc est d'une élégance rare. Il tombe parfaitement et la qualité est au rendez-vous. Je l'ai porté pour un entretien et j'ai eu le poste !",
    date: "2024-03-09",
    dateRelative: "Il y a 1 semaine",
    productName: "Ensemble Tailleur Tweed Blanc",
    productImage: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100&auto=format",
    productSlug: "ensemble-tailleur-tweed-blanc",
    verified: true,
    helpful: 22
  },
  {
    id: 7,
    name: "Mamina Rakotozafy",
    firstName: "Mamina",
    location: "Antananarivo",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format",
    rating: 5,
    comment: "Le blazer bleu marine est absolument magnifique ! La qualité est exceptionnelle et le design est intemporel. Il accompagne toutes mes tenues avec élégance.",
    date: "2024-03-05",
    dateRelative: "Il y a 1 semaine",
    productName: "Blazer Bleu Marine Classique Tailleur",
    productImage: "https://images.unsplash.com/photo-1584917865442-6b3f5e5b7b9b?w=100&auto=format",
    productSlug: "blazer-bleu-marine-classique-tailleur",
    verified: true,
    helpful: 19
  },
  {
    id: 8,
    name: "Soa Razanakoto",
    firstName: "Soa",
    location: "Antsiranana",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format",
    rating: 4,
    comment: "Très belle robe sirène, la couleur champagne est magnifique et la coupe est flatteuse. Seul bémol, la taille est un peu juste. Service client compréhensif.",
    date: "2024-03-08",
    dateRelative: "Il y a 6 jours",
    productName: "Robe Sirène Sequins Champagne",
    productImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=100&auto=format",
    productSlug: "robe-sirene-sequins-champagne",
    verified: true,
    helpful: 8
  },
  {
    id: 9,
    name: "Haja Rakotoniaina",
    firstName: "Haja",
    location: "Antananarivo",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&auto=format",
    rating: 5,
    comment: "Le tailleur blanc péplum est ravissant ! Il apporte une touche d'élégance à toutes mes tenues. La qualité est au rendez-vous et le prix est très raisonnable.",
    date: "2024-03-02",
    dateRelative: "Il y a 2 semaines",
    productName: "Ensemble Tailleur Blanc Péplum",
    productImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&auto=format",
    productSlug: "ensemble-tailleur-blanc-peplum",
    verified: true,
    helpful: 14
  },
  {
    id: 10,
    name: "Fara Rasamimanana",
    firstName: "Fara",
    location: "Toamasina",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&auto=format",
    rating: 5,
    comment: "Le blazer croisé beige est parfaitement taillé, la coupe est élégante et la qualité du tissu est exceptionnelle. Je l'ai porté pour un mariage, énormément de compliments.",
    date: "2024-02-25",
    dateRelative: "Il y a 3 semaines",
    productName: "Blazer Croisé Beige Classique",
    productImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&auto=format",
    productSlug: "blazer-croise-beige-classique",
    verified: true,
    helpful: 27
  },
  {
    id: 11,
    name: "Nomena Andriantsito",
    firstName: "Nomena",
    location: "Mahajanga",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&auto=format",
    rating: 5,
    comment: "La robe blazer marine est magnifique et très confortable ! Portée toute une journée sans aucune gêne. La couleur bleu marine est superbe.",
    date: "2024-03-07",
    dateRelative: "Il y a 1 semaine",
    productName: "Robe Blazer Patineuse Marine",
    productImage: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=100&auto=format",
    productSlug: "robe-blazer-patineuse-marine",
    verified: true,
    helpful: 21
  },
  {
    id: 12,
    name: "Fenitra Rakotovao",
    firstName: "Fenitra",
    location: "Fianarantsoa",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format",
    rating: 4,
    comment: "La robe militaire beige est très élégante, parfaite pour le bureau. La matière est agréable et la coupe est flatteuse. Je recommande vivement !",
    date: "2024-03-11",
    dateRelative: "Il y a 3 jours",
    productName: "Robe Militaire Chic Beige",
    productImage: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=100&auto=format",
    productSlug: "robe-militaire-chic-beige",
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