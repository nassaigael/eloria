// src/data/categoriesData.ts

import { productsData } from './productsData';

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  color: string;
}

// Données de base des catégories (sans productCount)
const baseCategories: Omit<Category, 'productCount'>[] = [
  {
    id: 1,
    name: "Robes",
    slug: "robes",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&auto=format",
    description: "Élégance et raffinement pour toutes vos occasions",
    color: "from-gold/20 to-transparent"
  },
  {
    id: 2,
    name: "Blazers",
    slug: "blazers",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format",
    description: "La touche chic et professionnelle qui fait la différence",
    color: "from-gold/20 to-transparent"
  },
  {
    id: 3,
    name: "Tailleurs",
    slug: "tailleurs",
    image: "https://images.unsplash.com/photo-1598550874175-4d0b436be877?w=800&auto=format",
    description: "Des ensembles parfaitement coordonnés pour un look élégant",
    color: "from-gold/20 to-transparent"
  }
];

// Fonction pour calculer le nombre de produits par catégorie
const getProductCount = (categorySlug: string): number => {
  return productsData.filter(product =>
    product.category.toLowerCase() === categorySlug.toLowerCase()
  ).length;
};

// Génération des catégories avec compteurs automatiques
export const categoriesData: Category[] = baseCategories.map(category => ({
  ...category,
  productCount: getProductCount(category.slug)
}));