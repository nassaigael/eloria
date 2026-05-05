import cr1 from "../assets/images/carosel/gb-carosel.jpg";
import cr2 from "../assets/images/carosel/pexels-alexandrecanteiro-33339932.jpg";
import cr3 from "../assets/images/carosel/pexels-ivan-s-8498396.jpg";
import cr4 from "../assets/images/carosel/pexels-mykhailo-petrenko-2152927294-32692072.jpg";

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  collection: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Collection Robes",
    subtitle: "Élégance & Féminité",
    description: "Découvrez notre collection de robes aux coupes raffinées et aux tissus nobles. Des pièces uniques pour toutes vos occasions, du bureau aux soirées.",
    image: cr1,
    buttonText: "Découvrir",
    buttonLink: "/categorie/robes",
    collection: "Nouvelle Collection Robes"
  },
  {
    id: 2,
    title: "Collection Blazers",
    subtitle: "Chic & Sophistiqué",
    description: "Des blazers élégants pour un look professionnel et tendance. La pièce maîtresse qui transforme votre tenue avec une touche de caractère.",
    image: cr2,
    buttonText: "Explorer",
    buttonLink: "/categorie/blazers",
    collection: "Collection Blazers"
  },
  {
    id: 3,
    title: "Collection Tailleurs",
    subtitle: "Élégance Professionnelle",
    description: "Des ensembles tailleurs parfaitement coordonnés pour un look chic et assuré. Qualité exceptionnelle et coupe impeccable.",
    image: cr3,
    buttonText: "Voir la collection",
    buttonLink: "/categorie/tailleurs",
    collection: "Collection Tailleurs"
  },
  {
    id: 4,
    title: "Conseil Personnalisé",
    subtitle: "Service Premium",
    description: "Notre équipe est à votre disposition pour vous aider à trouver la tenue parfaite. Contactez-nous pour un accompagnement sur mesure.",
    image: cr4,
    buttonText: "Nous contacter",
    buttonLink: "/contact",
    collection: "Service Client"
  }
];