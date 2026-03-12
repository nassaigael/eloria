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
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&auto=format",
    buttonText: "Découvrir",
    buttonLink: "/collection/printemps-ete",
    collection: "Nouvelle Collection"
  },
  {
    id: 2,
    title: "Robes de Soirée",
    subtitle: "Exclusivité",
    description: "Des pièces uniques pour vos soirées les plus prestigieuses. Couture française et savoir-faire exceptionnel.",
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=1600&auto=format",
    buttonText: "Explorer",
    buttonLink: "/collections/robes-soiree",
    collection: "Haute Couture"
  },
  {
    id: 3,
    title: "Accessoires",
    subtitle: "Signature",
    description: "La touche finale qui fait la différence. Sacs, chaussures et bijoux pour compléter votre tenue avec élégance.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&auto=format",
    buttonText: "Voir la collection",
    buttonLink: "/collections/accessoires",
    collection: "Les Indispensables"
  },
  {
    id: 4,
    title: "Mariage",
    subtitle: "Collection Exclusive",
    description: "Pour le plus beau jour de votre vie, des robes sur mesure et des accessoires d'exception.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&auto=format",
    buttonText: "Prendre RDV",
    buttonLink: "/mariage",
    collection: "Moments Précieux"
  }
];