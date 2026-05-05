import { productsData } from './productsData';
import  dress  from "../assets/images/dress/dress9.jpeg";
import blazer from "../assets/images/blazers/blazer3.jpeg";
import tailored from "../assets/images/tailired_suits/tailored2.jpeg";

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  color: string;
}

const baseCategories: Omit<Category, 'productCount'>[] = [
  {
    id: 1,
    name: "Robes",
    slug: "robes",
    image: dress,
    description: "Élégance et raffinement pour toutes vos occasions",
    color: "from-gold/20 to-transparent"
  },
  {
    id: 2,
    name: "Blazers",
    slug: "blazers",
    image: blazer,
    description: "La touche chic et professionnelle qui fait la différence",
    color: "from-gold/20 to-transparent"
  },
  {
    id: 3,
    name: "Tailleurs",
    slug: "tailleurs",
    image: tailored,
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