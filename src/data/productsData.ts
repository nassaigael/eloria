export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFavorite?: boolean;
  description: string;
  colors?: string[];
  sizes?: string[];
  details?: string[];
  material?: string;
  care?: string[];
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Robe de Soirée Émeraude",
    slug: "robe-de-soiree-emeraude",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format",
    category: "Robes",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    description: "Une robe élégante en satin vert émeraude, parfaite pour vos soirées. La coupe cintrée met en valeur la silhouette tandis que le décolleté en V ajoute une touche de sophistication.",
    colors: ["#0B4F6C", "#D4AF37", "#000000"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Soie",
    care: ["Lavage à sec uniquement", "Ne pas repasser", "Stockage à l'abri de la lumière"],
    details: ["Fermeture éclair dissimulée", "Doublure en soie", "Longueur cheville"]
  },
  {
    id: 2,
    name: "Ensemble Chic Doré",
    slug: "ensemble-chic-dore",
    price: 449,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format",
    category: "Ensembles",
    rating: 4.9,
    reviewCount: 89,
    description: "Ensemble deux pièces avec finitions dorées, un must-have pour votre garde-robe. Le haut cintré et la jupe évasée créent une silhouette harmonieuse.",
    colors: ["#D4AF37", "#8B4513", "#2C3E50"],
    sizes: ["S", "M", "L"],
    material: "95% Polyester, 5% Élasthanne",
    care: ["Lavage en machine à 30°", "Séchage à l'air libre", "Repassage à basse température"],
    details: ["Ceinture assortie", "Poches latérales", "Fermeture à glissière"]
  },
  {
    id: 3,
    name: "Blouse en Soie",
    slug: "blouse-en-soie",
    price: 189,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&auto=format",
    category: "Hauts",
    rating: 4.7,
    reviewCount: 56,
    isNew: true,
    description: "Blouse en soie naturelle, coupe fluide et intemporelle. Parfaite pour un look élégant au bureau ou pour une soirée.",
    colors: ["#E8DCC6", "#C0C0C0", "#800020"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Soie sauvage",
    care: ["Lavage à la main", "Séchage à plat", "Repassage à basse température"],
    details: ["Manches longues", "Col chemisier", "Boutons nacre"]
  },
  {
    id: 4,
    name: "Jupe Plissée Rubis",
    slug: "jupe-plissee-rubis",
    price: 159,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format",
    category: "Jupes",
    rating: 4.6,
    reviewCount: 34,
    description: "Jupe plissée couleur rubis, élégante et facile à porter. La taille haute et les plis délicats créent un mouvement gracieux.",
    colors: ["#9B1B30", "#000000", "#2C3E50"],
    sizes: ["XS", "S", "M", "L"],
    material: "100% Polyester",
    care: ["Lavage en machine à 30°", "Repassage doux", "Ne pas sécher en tambour"],
    details: ["Fermeture éclair au dos", "Doublure intégrée", "Longueur genoux"]
  },
  {
    id: 5,
    name: "Robe de Cocktail Noire",
    slug: "robe-de-cocktail-noire",
    price: 259,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&auto=format",
    category: "Robes",
    rating: 4.9,
    reviewCount: 145,
    description: "La petite robe noire revisité, un indispensable. Avec ses lignes épurées et sa coupe parfaite, elle convient à toutes les occasions.",
    colors: ["#000000", "#D4AF37", "#800020"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "95% Viscose, 5% Élasthanne",
    care: ["Lavage en machine à 30°", "Séchage à l'air libre", "Repassage doux"],
    details: ["Dos nu", "Fente latérale", "Longueur midi"]
  },
  {
    id: 6,
    name: "Pantalon Tailleur",
    slug: "pantalon-tailleur",
    price: 199,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format",
    category: "Pantalons",
    rating: 4.7,
    reviewCount: 67,
    isNew: true,
    description: "Pantalon tailleur coupe droite, parfait pour le bureau. Le tissu de qualité et la coupe impeccable assurent confort et élégance.",
    colors: ["#2C3E50", "#800020", "#000000"],
    sizes: ["34", "36", "38", "40", "42", "44"],
    material: "100% Laine vierge",
    care: ["Nettoyage à sec", "Repassage vapeur", "Rangement sur cintre"],
    details: ["Pinces devant", "Poches italiennes", "Ourlet ajustable"]
  },
  {
    id: 7,
    name: "Blazer Cérémonie",
    slug: "blazer-ceremonie",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format",
    category: "Vestes",
    rating: 4.8,
    reviewCount: 92,
    description: "Blazer structuré pour vos occasions spéciales. Sa coupe cintrée et ses finitions soignées en font une pièce d'exception.",
    colors: ["#000000", "#2C3E50", "#800020"],
    sizes: ["34", "36", "38", "40", "42"],
    material: "70% Laine, 30% Soie",
    care: ["Nettoyage à sec uniquement", "Repassage vapeur", "Protection anti-mites"],
    details: ["Doublure en soie", "Poches à rabat", "Boutons dorés"]
  },
  {
    id: 8,
    name: "Robe de Bal Rose",
    slug: "robe-de-bal-rose",
    price: 399,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format",
    category: "Robes",
    rating: 5.0,
    reviewCount: 78,
    isNew: true,
    description: "Robe de bal romantique en tulle rose poudré. Une création féerique pour les grandes occasions.",
    colors: ["#F7CAC9", "#E8DCC6", "#D4AF37"],
    sizes: ["XS", "S", "M", "L"],
    material: "Tulle et dentelle",
    care: ["Nettoyage à sec professionnel", "Rangement sur cintre rembourré"],
    details: ["Jupe volumineuse", "Corpsage en dentelle", "Fermeture au dos"]
  },
  {
    id: 9,
    name: "Sac à Main Cuir",
    slug: "sac-a-main-cuir",
    price: 299,
    image: "https://images.unsplash.com/photo-1584917865442-6b3f5e5b7b9b?w=800&auto=format",
    category: "Accessoires",
    rating: 4.8,
    reviewCount: 45,
    description: "Sac à main en cuir véritable, élégant et intemporel. Parfait pour compléter vos tenues.",
    colors: ["#8B4513", "#000000"],
    material: "Cuir de vachette",
    care: ["Nettoyer avec un chiffon doux", "Utiliser un baume nourrissant"],
    details: ["Bandoulière amovible", "Poches intérieures", "Fermeture à glissière"]
  },
  {
    id: 10,
    name: "Collier Perles",
    slug: "collier-perles",
    price: 129,
    originalPrice: 179,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format",
    category: "Accessoires",
    rating: 4.7,
    reviewCount: 38,
    isNew: true,
    description: "Collier de perles fines, un classique revisité. Apporte une touche d'élégance à toute tenue.",
    colors: ["#FFFFFF", "#F5F5DC"],
    material: "Perles d'eau douce, Fermoir en argent",
    care: ["Nettoyer avec un chiffon doux", "Éviter les parfums"],
    details: ["Fermoir sécurisé", "Longueur ajustable 45cm"]
  },
  {
    id: 11,
    name: "Robe Chemise",
    slug: "robe-chemise",
    price: 179,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&auto=format",
    category: "Robes",
    rating: 4.6,
    reviewCount: 52,
    description: "Robe chemise chic et décontractée, parfaite pour un look de jour élégant.",
    colors: ["#E8DCC6", "#2C3E50", "#800020"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Coton",
    care: ["Lavage en machine à 30°", "Repassage moyen"],
    details: ["Ceinture nouée", "Poches plaquées", "Col chemisier"]
  },
  {
    id: 12,
    name: "Escarpins Or",
    slug: "escarpins-or",
    price: 159,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format",
    category: "Chaussures",
    rating: 4.8,
    reviewCount: 63,
    description: "Escarpins dorés, l'accessoire qui fait la différence. Talon confortable pour une tenue parfaite.",
    colors: ["#D4AF37"],
    sizes: ["36", "37", "38", "39", "40"],
    material: "Cuir verni",
    care: ["Nettoyer avec un chiffon humide", "Cirage adapté"],
    details: ["Hauteur talon 7cm", "Semelle antidérapante", "Bout pointu"]
  }
];