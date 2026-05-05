import d1 from "../assets/images/dress/dress1.jpeg";
import d2 from "../assets/images/dress/dress2.jpeg";
import d3 from "../assets/images/dress/dress3.jpeg";
import d4 from "../assets/images/dress/dress4.jpeg";
import d5 from "../assets/images/dress/dress5.jpeg";
import d6 from "../assets/images/dress/dress6.jpeg";
import d7 from "../assets/images/dress/dress7.jpeg";
import d8 from "../assets/images/dress/dress8.jpeg";

import b1 from "../assets/images/blazers/blazer1.jpeg";
import b2 from "../assets/images/blazers/blazer2.jpeg";
import b3 from "../assets/images/blazers/blazer3.jpeg";
import b4 from "../assets/images/blazers/blazer4.jpeg";
import b5 from "../assets/images/blazers/blazer5.jpeg";
import b6 from "../assets/images/blazers/blazer6.jpeg";
import b7 from "../assets/images/blazers/blazer7.jpeg";
import b8 from "../assets/images/blazers/blazer8.jpeg";

import t1 from "../assets/images/tailired_suits/tailored1.jpeg";
import t2 from "../assets/images/tailired_suits/tailored2.jpeg";
import t3 from "../assets/images/tailired_suits/tailored3.jpeg";
import t5 from "../assets/images/tailired_suits/tailored5.jpeg";
import t6 from "../assets/images/tailired_suits/tailored6.jpeg";
import t7 from "../assets/images/tailired_suits/tailored7.jpeg";

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
  // ==================== ROBES ====================
  {
    id: 1,
    name: "Robe Fourreau Bureau Taupe",
    slug: "robe-fourreau-bureau-taupe",
    price: 175000,
    originalPrice: 599000,
    image: d1,
    category: "Robes",
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    description: "Robe fourreau taupe élégante, parfaite pour le bureau. Sa coupe cintrée et sa couleur neutre s'adaptent à toutes les morphologies. Idéale pour un look professionnel et sophistiqué.",
    colors: ["#C8AD7F"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "95% Polyester, 5% Élasthanne",
    care: ["Lavage en machine à 30°", "Repassage doux", "Ne pas sécher en tambour"],
    details: ["Fermeture éclair dissimulée au dos", "Longueur genou", "Manches courtes"]
  },
  {
    id: 2,
    name: "Robe Blazer Patineuse Marine",
    slug: "robe-blazer-patineuse-marine",
    price: 175000,
    originalPrice: 495000,
    image: d2,
    category: "Robes",
    rating: 4.9,
    reviewCount: 145,
    description: "Robe style blazer en bleu marine, coupe patineuse élégante. Idéale pour les entretiens ou les journées de travail. Son col tailleur apporte une touche professionnelle unique.",
    colors: ["#03224C"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "97% Polyester, 3% Élasthanne",
    care: ["Lavage en machine à 30°", "Repassage moyen", "Séchage à l'air libre"],
    details: ["Col tailleur", "Boutons dorés", "Poches latérales", "Longueur midi"]
  },
  {
    id: 3,
    name: "Robe Militaire Chic Beige",
    slug: "robe-militaire-chic-beige",
    price: 182000,
    image: d3,
    category: "Robes",
    rating: 5.0,
    reviewCount: 78,
    isNew: true,
    description: "Robe chic beige aux inspirations militaires, avec détails de boutons dorés et ceinture. Parfaite pour un look tendance et élégant au quotidien.",
    colors: ["#C8AD7F"],
    sizes: ["XS", "S", "M", "L"],
    material: "100% Coton",
    care: ["Lavage en machine à 30°", "Repassage moyen"],
    details: ["Ceinture assortie", "Boutons dorés", "Poches poitrine", "Longueur genou"]
  },
  {
    id: 4,
    name: "Robe Sirène Sequins Champagne",
    slug: "robe-sirene-sequins-champagne",
    price: 485000,
    image: d4,
    category: "Robes",
    rating: 4.6,
    reviewCount: 52,
    description: "Robe sirène spectaculaire avec sequins couleur champagne. Idéale pour les soirées de gala, les mariages ou les événements prestigieux. Un véritable effet tapis rouge.",
    colors: ["#E8DCC6"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Sequins sur tulle, Doublure 100% Polyester",
    care: ["Nettoyage à sec uniquement", "Ne pas repasser", "Stockage à l'abri de la lumière"],
    details: ["Fermeture éclair invisible", "Décolleté plongeant", "Longueur cheville", "Jupe effet sirène"]
  },
  {
    id: 5,
    name: "Robe Gala Asymétrique Rouge",
    slug: "robe-gala-asymetrique-rouge",
    price: 395000,
    originalPrice: 429000,
    image: d5,
    category: "Robes",
    rating: 4.7,
    reviewCount: 63,
    isNew: true,
    description: "Robe de gala rouge passion à coupe asymétrique. Osez le rouge pour vos soirées chic et distinguées. Une épaule dénudée pour un effet glamour assuré.",
    colors: ["#C41E3A"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Crêpe de Chine",
    care: ["Lavage à sec", "Repassage vapeur"],
    details: ["Une épaule dénudée", "Fente latérale", "Longueur cheville", "Drapé élégant"]
  },
  {
    id: 6,
    name: "Robe Cocktail Volants Rouge",
    slug: "robe-cocktail-volants-rouge",
    price: 98000,
    originalPrice: 649000,
    image: d6,
    category: "Robes",
    rating: 4.9,
    reviewCount: 87,
    description: "Robe cocktail rouge avec volants féminins. Parfaite pour vos soirées entre amis, anniversaires ou sorties. Légère et aérienne, elle apporte une touche pétillante.",
    colors: ["#CE0337"],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Polyester",
    care: ["Lavage en machine à 30°", "Repassage doux", "Séchage à plat"],
    details: ["Volants asymétriques", "Manches bouffantes", "Longueur genou", "Taille élastiquée"]
  },
  {
    id: 7,
    name: "Robe Cocktail Nœud Rouge",
    slug: "robe-cocktail-noeud-rouge",
    price: 178000,
    image: d7,
    category: "Robes",
    rating: 4.5,
    reviewCount: 41,
    isNew: true,
    description: "Robe cocktail rouge élégante avec nœud décoratif à la taille. Idéale pour les cocktails, les soirées ou les rendez-vous romantiques. Féminine et raffinée.",
    colors: ["#CE0337"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "95% Polyester, 5% Élasthanne",
    care: ["Lavage en machine à 30°", "Repassage doux"],
    details: ["Nœud à la taille", "Décolleté rond", "Manches courtes", "Longueur genou", "Fermeture éclair au dos"]
  },
  {
    id: 8,
    name: "Robe Mariée Civil Satin Nœuds",
    slug: "robe-mariee-civil-satin-noeuds",
    price: 320000,
    originalPrice: 299000,
    image: d8,
    category: "Robes",
    rating: 4.6,
    reviewCount: 35,
    description: "Robe de mariée civil en satin blanc avec nœuds décoratifs. Parfaite pour une cérémonie de mariage civile ou un événement élégant. Chic et intemporelle.",
    colors: ["#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Satin",
    care: ["Nettoyage à sec", "Repassage vapeur"],
    details: ["Nœuds décoratifs", "Décolleté cœur", "Manches bouffantes", "Longueur cheville", "Train léger"]
  },

  // ==================== BLAZERS ====================
  {
    id: 9,
    name: "Blazer Blanc Col Volanté",
    slug: "blazer-blanc-col-volante",
    price: 110000,
    image: b1,
    category: "Blazers",
    rating: 4.9,
    reviewCount: 89,
    description: "Blazer blanc chic avec col volanté. Idéal pour compléter vos tenues de bureau ou pour un look casual chic. Rafraîchissant et élégant pour la belle saison.",
    colors: ["#FFFFFF"],
    sizes: ["S", "M", "L"],
    material: "70% Polyester, 30% Coton",
    care: ["Lavage en machine à 30°", "Repassage moyen"],
    details: ["Col volanté amovible", "Manches longues", "Poches latérales", "Boutons blancs"]
  },
  {
    id: 10,
    name: "Blazer Long Bordeaux Col Châle",
    slug: "blazer-long-bordeaux-col-chale",
    price: 125000,
    originalPrice: 699000,
    image: b2,
    category: "Blazers",
    rating: 4.8,
    reviewCount: 42,
    isNew: true,
    description: "Blazer longue coupe col châle en bordeaux. Élégant et raffiné, il se porte aussi bien au bureau qu'en soirée. Une couleur profonde qui apporte du caractère.",
    colors: ["#450e1f"],
    sizes: ["34", "36", "38", "40", "42"],
    material: "100% Laine",
    care: ["Nettoyage à sec", "Repassage vapeur"],
    details: ["Col châle", "Longueur mi-cuisse", "Manches longues", "Poches à rabat", "Coupe cintrée"]
  },
  {
    id: 11,
    name: "Blazer Bordeaux Cache-Cœur Péplum",
    slug: "blazer-bordeaux-cache-coeur-peplum",
    price: 115000,
    image: b3,
    category: "Blazers",
    rating: 4.7,
    reviewCount: 28,
    description: "Blazer bordeaux au style cache-cœur avec basque péplum. Très féminin, il met en valeur la silhouette. Parfait pour un look professionnel avec une touche de fantaisie.",
    colors: ["#450e1f"],
    sizes: ["S", "M", "L"],
    material: "100% Lin",
    care: ["Lavage à la main", "Repassage vapeur"],
    details: ["Fermeture cache-cœur", "Basque péplum", "Manches 3/4", "Poches plaquées"]
  },
  {
    id: 12,
    name: "Blazer Croisé Beige Classique",
    slug: "blazer-croise-beige-classique",
    price: 118000,
    originalPrice: 374000,
    image: b4,
    category: "Blazers",
    rating: 4.7,
    reviewCount: 56,
    isNew: true,
    description: "Blazer croisé beige intemporel. Une pièce essentielle pour toute garde-robe professionnelle. Sa coupe classique et sa couleur neutre s'associent à tout.",
    colors: ["#E8DCC6"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Soie sauvage",
    care: ["Lavage à la main", "Séchage à plat", "Repassage à basse température"],
    details: ["Fermeture croisée", "Manches longues", "Poches italiennes", "Boutons dorés"]
  },
  {
    id: 13,
    name: "Blazer Long Cintré Gris Sauge",
    slug: "blazer-long-cintre-gris-sauge",
    price: 125000,
    originalPrice: 199000,
    image: b5,
    category: "Blazers",
    rating: 4.8,
    reviewCount: 73,
    description: "Blazer longue coupe cintrée gris sauge. Moderne et élégant, il apporte une touche de douceur à vos tenues. Idéal pour le printemps et l'automne.",
    colors: ["#83877A"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Coton",
    care: ["Lavage en machine à 30°", "Repassage classique"],
    details: ["Coupe cintrée", "Manches longues", "Poches plaquées", "Longueur mi-cuisse", "Col tailleur"]
  },
  {
    id: 14,
    name: "Blazer Bleu Marine Classique Tailleur",
    slug: "blazer-bleu-marine-classique-tailleur",
    price: 98000,
    image: b6,
    category: "Blazers",
    rating: 4.6,
    reviewCount: 31,
    isNew: true,
    description: "Blazer bleu marine classique, indispensable d'un tailleur. Un basique chic qui traverse les saisons. Parfait pour le travail ou les occasions formelles.",
    colors: ["#03224C"],
    sizes: ["XS", "S", "M", "L"],
    material: "90% Polyamide, 10% Élasthanne",
    care: ["Lavage à la main", "Séchage à l'air libre", "Repassage doux"],
    details: ["Boutons argentés", "Manches longues", "Poches italiennes", "Doublure intégrée"]
  },
  {
    id: 15,
    name: "Blazer Oversize Beige Taupe",
    slug: "blazer-oversize-beige-taupe",
    price: 105000,
    image: b7,
    category: "Blazers",
    rating: 4.6,
    reviewCount: 34,
    description: "Blazer oversize beige taupe, tendance et confortable. À porter sur un jean ou une robe pour un look décontracté chic. Sa coupe généreuse apporte du style.",
    colors: ["#927C66"],
    sizes: ["XS", "S", "M", "L"],
    material: "100% Polyester",
    care: ["Lavage en machine à 30°", "Repassage doux", "Ne pas sécher en tambour"],
    details: ["Coupe oversize", "Manches retroussables", "Poches à rabat", "Boutons ton sur ton"]
  },
  {
    id: 16,
    name: "Blazer Oversize Rayures Tennis",
    slug: "blazer-oversize-rayures-tennis",
    price: 169000,
    originalPrice: 219000,
    image: b8,
    category: "Blazers",
    rating: 4.7,
    reviewCount: 58,
    description: "Blazer oversize à rayures style tennis. Original et sport-chic, il apporte du caractère à votre tenue. Parfait pour un look décontracté tendance.",
    colors: ["#d5d7d6"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "95% Coton, 5% Élasthanne",
    care: ["Lavage en machine à 30°", "Repassage classique"],
    details: ["Rayures contrastées", "Coupe oversize", "Manches longues", "Poches latérales", "Col tailleur"]
  },

  // ==================== TAILLEURS ====================
  {
    id: 18,
    name: "Ensemble Tailleur Cache-Cœur Bleu Ciel",
    slug: "ensemble-tailleur-cache-coeur-bleu-ciel",
    price: 265000,
    image: t1,
    category: "Tailleurs",
    rating: 4.7,
    reviewCount: 67,
    isNew: true,
    description: "Ensemble tailleur bleu ciel, veste cache-cœur et pantalon assorti. Frais et élégant, parfait pour le printemps ou les journées ensoleillées. Idéal pour le bureau ou les rendez-vous.",
    colors: ["#aec0cc"],
    sizes: ["34", "36", "38", "40", "42", "44"],
    material: "100% Laine vierge",
    care: ["Nettoyage à sec", "Repassage vapeur", "Rangement sur cintre"],
    details: ["Veste cache-cœur", "Pantalon droit taille haute", "Poches italiennes"]
  },
  {
    id: 19,
    name: "Ensemble Tailleur Veste et Jupe Patineuse Bordeaux",
    slug: "ensemble-tailleur-veste-jupe-patineuse-bordeaux",
    price: 235000,
    originalPrice: 299000,
    image: t2,
    category: "Tailleurs",
    rating: 4.8,
    reviewCount: 43,
    description: "Ensemble tailleur bordeaux composé d'une veste cintrée et d'une jupe patineuse. Féminin et raffiné pour vos journées de travail ou vos événements professionnels. Un style chic intemporel.",
    colors: ["#800020"],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Viscose",
    care: ["Lavage en machine à 30°", "Repassage doux"],
    details: ["Veste cintrée", "Jupe patineuse taille haute", "Fermeture éclair au dos", "Poches latérales"]
  },
  {
    id: 20,
    name: "Ensemble Tailleur Tweed Blanc",
    slug: "ensemble-tailleur-tweed-blanc",
    price: 295000,
    image: t3,
    category: "Tailleurs",
    rating: 4.6,
    reviewCount: 39,
    description: "Ensemble tailleur tweed blanc, veste et jupe. Une pièce luxueuse pour vos occasions spéciales ou votre garde-robe professionnelle. Chic et distinguée.",
    colors: ["#FFFFFF"],
    sizes: ["34", "36", "38", "40", "42"],
    material: "98% Coton, 2% Élasthanne",
    care: ["Lavage en machine à 30°", "Repassage classique"],
    details: ["Veste tweed", "Boutons dorés", "Poches plaquées", "Jupe droite longueur genou"]
  },
  {
    id: 21,
    name: "Veste Tailleur Chic Beige",
    slug: "veste-tailleur-chic-beige",
    price: 240000,
    originalPrice: 674000,
    image: t7,
    category: "Tailleurs",
    rating: 4.8,
    reviewCount: 92,
    description: "Veste de tailleur beige chic, coupe structurée. Parfaite avec un pantalon assorti ou un jean. Élégante et intemporelle, elle traverse les tendances.",
    colors: ["#af9c8e"],
    sizes: ["34", "36", "38", "40", "42"],
    material: "70% Laine, 30% Soie",
    care: ["Nettoyage à sec uniquement", "Repassage vapeur", "Protection anti-mites"],
    details: ["Doublure en soie", "Poches à rabat", "Boutons dorés", "Coupe cintrée"]
  },
  {
    id: 22,
    name: "Ensemble Tailleur Bordeaux Plissé",
    slug: "ensemble-tailleur-bordeaux-plisse",
    price: 190000,
    originalPrice: 249000,
    image: t5,
    category: "Tailleurs",
    rating: 4.7,
    reviewCount: 56,
    isNew: true,
    description: "Ensemble tailleur bordeaux avec jupe plissée et veste assortie. Moderne et dynamique, parfait pour un look professionnel avec une touche d'originalité. Le plissé apporte du mouvement.",
    colors: ["#450e1f"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Coton",
    care: ["Lavage en machine à 30°", "Repassage classique"],
    details: ["Veste courte", "Jupe plissée mi-longue", "Fermeture éclair", "Poches latérales"]
  },
  {
    id: 23,
    name: "Ensemble Tailleur Blanc Péplum",
    slug: "ensemble-tailleur-blanc-peplum",
    price: 180000,
    image: t6,
    category: "Tailleurs",
    rating: 4.8,
    reviewCount: 34,
    description: "Ensemble tailleur blanc style péplum. Très élégant et distingué, idéal pour les mariages ou les cérémonies. Le détail péplum apporte une touche romantique.",
    colors: ["#E8DCC6"],
    sizes: ["S", "M", "L", "XL"],
    material: "70% Lin, 30% Coton",
    care: ["Nettoyage à sec", "Repassage vapeur"],
    details: ["Veste péplum", "Pantalon taille haute", "Manches courtes", "Poches rabat", "Fermeture croisée"]
  }
];