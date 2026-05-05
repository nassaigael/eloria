// src/data/categoriesData.ts

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  productCount: number;
  color: string;
}

export const categoriesData: Category[] = [
  {
    id: 1,
    name: "Robes",
    slug: "robes",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&auto=format",
    description: "Élégance et raffinement pour toutes vos occasions",
    productCount: 12,
    color: "from-gold/20 to-transparent"
  },
  {
    id: 2,
    name: "Blazers",
    slug: "blazers",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format",
    description: "La touche chic et professionnelle qui fait la différence",
    productCount: 8,
    color: "from-gold/20 to-transparent"
  },
  {
    id: 3,
    name: "Tailleurs",
    slug: "tailleurs",
    image: "https://images.unsplash.com/photo-1598550874175-4d0b436be877?w=800&auto=format",
    description: "Des ensembles parfaitement coordonnés pour un look élégant",
    productCount: 6,
    color: "from-gold/20 to-transparent"
  }
];