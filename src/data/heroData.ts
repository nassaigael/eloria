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
    title: "Collection Printemps-Été",
    subtitle: "2024",
    description: "Découvrez notre nouvelle collection aux lignes épurées et aux matières nobles. Une ode à la féminité et à l'élégance.",
    image: cr1,
    buttonText: "Découvrir",
    buttonLink: "/boutique",
    collection: "Nouvelle Collection"
  },
  {
    id: 2,
    title: "Robes de Soirée",
    subtitle: "Exclusivité",
    description: "Des pièces uniques pour vos soirées les plus prestigieuses. Couture française et savoir-faire exceptionnel.",
    image: cr2,
    buttonText: "Explorer",
    buttonLink: "/categorie/robes",
    collection: "Haute Couture"
  },
  {
    id: 3,
    title: "Accessoires",
    subtitle: "Signature",
    description: "La touche finale qui fait la différence. Sacs, chaussures et bijoux pour compléter votre tenue avec élégance.",
    image: cr3,
    buttonText: "Voir la collection",
    buttonLink: "/categorie/accessoires",
    collection: "Les Indispensables"
  },
  {
    id: 4,
    title: "Mariage",
    subtitle: "Collection Exclusive",
    description: "Pour le plus beau jour de votre vie, des robes sur mesure et des accessoires d'exception.",
    image: cr4,
    buttonText: "Prendre RDV",
    buttonLink: "/contact",
    collection: "Moments Précieux"
  }
];