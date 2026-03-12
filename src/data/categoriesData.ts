export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount: number
  color: string;
}

export const categoriesData: Category[] = [
  {
    id: 1,
    name: "Robes",
    slug: "robes",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&auto=format",
    description: "Élégance et raffinement pour toutes vos occasions",
    productCount: 124,
    color: "from-gold/20 to-transparent"
  },
  {
    id: 2,
    name: "Accessoires",
    slug: "accessoires",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format",
    description: "La touche finale qui fait la différence",
    productCount: 89,
    color: "from-gold/20 to-transparent"
  },
  {
    id: 3,
    name: "Mariage",
    slug: "mariage",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format",
    description: "Pour le plus beau jour de votre vie",
    productCount: 56,
    color: "from-gold/20 to-transparent"
  },
  {
    id: 4,
    name: "Soirée",
    slug: "soiree",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format",
    description: "Des pièces uniques pour vos soirées",
    productCount: 92,
    color: "from-gold/20 to-transparent"
  },
  {
    id: 5,
    name: "Ensembles",
    slug: "ensembles",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format",
    description: "Coordonnés parfaits pour un look harmonieux",
    productCount: 45,
    color: "from-gold/20 to-transparent"
  },
  {
    id: 6,
    name: "Nouveautés",
    slug: "nouveautes",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format",
    description: "Les dernières créations de nos designers",
    productCount: 34,
    color: "from-gold/20 to-transparent"
  }
];