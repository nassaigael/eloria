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
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Robe de Soirée Émeraude",
    slug: "robe-soiree-emeraude",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format",
    category: "Robes",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    description: "Une robe élégante en satin vert émeraude, parfaite pour vos soirées.",
    colors: ["#0B4F6C", "#D4AF37", "#000000"]
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
    description: "Ensemble deux pièces avec finitions dorées, un must-have.",
    colors: ["#D4AF37", "#8B4513", "#2C3E50"]
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
    description: "Blouse en soie naturelle, coupe fluide et intemporelle.",
    colors: ["#E8DCC6", "#C0C0C0", "#800020"]
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
    description: "Jupe plissée couleur rubis, élégante et facile à porter.",
    colors: ["#9B1B30", "#000000", "#2C3E50"]
  },
  {
    id: 5,
    name: "Robe de Cocktail Noire",
    slug: "robe-cocktail-noire",
    price: 259,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&auto=format",
    category: "Robes",
    rating: 4.9,
    reviewCount: 145,
    description: "La petite robe noire revisité, un indispensable.",
    colors: ["#000000", "#D4AF37", "#800020"]
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
    description: "Pantalon tailleur coupe droite, parfait pour le bureau.",
    colors: ["#2C3E50", "#800020", "#000000"]
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
    description: "Blazer structuré pour vos occasions spéciales.",
    colors: ["#000000", "#2C3E50", "#800020"]
  },
  {
    id: 8,
    name: "Robe de Bal Rose",
    slug: "robe-bal-rose",
    price: 399,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format",
    category: "Robes",
    rating: 5.0,
    reviewCount: 78,
    isNew: true,
    description: "Robe de bal romantique en tulle rose poudré.",
    colors: ["#F7CAC9", "#E8DCC6", "#D4AF37"]
  }
];