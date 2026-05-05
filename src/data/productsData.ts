
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

import t1  from "../assets/images/tailired_suits/tailored1.jpeg";
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
  {
    id: 1,
    name: "Robe Fourreau Bureau Taupe",
    slug: "robe-de-soiree-emeraude",
    price: 175000,
    originalPrice: 599000,
    image: d1,
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
    name: "Robe Blazer Patineuse Marine",
    slug: "robe-de-cocktail-noire",
    price: 175000,
    originalPrice: 495000,
    image: d2,
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
    id: 3,
    name: "Robe Militaire Chic Beige",
    slug: "robe-de-bal-rose",
    price: 182000,
    image: d3,
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
    id: 4,
    name: "Robe Sirène Sequins Champagne",
    slug: "robe-chemise",
    price: 485000,
    image: d4,
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
    id: 5,
    name: "Robe Gala Asymétrique Rouge",
    slug: "robe-portefeuille-rouge",
    price: 395000,
    originalPrice: 429000,
    image: d5,
    category: "Robes",
    rating: 4.7,
    reviewCount: 63,
    isNew: true,
    description: "Robe portefeuille en tissu léger, idéale pour les journées ensoleillées. Sa coupe flatteuse met en valeur toutes les silhouettes.",
    colors: ["#C41E3A", "#000000", "#1E3A8A"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Viscose",
    care: ["Lavage en machine à 30°", "Repassage doux"],
    details: ["Fermeture par lien", "Manches courtes", "Longueur genoux"]
  },
  {
    id: 6,
    name: "Robe Cocktail Volants Rouge",
    slug: "robe-de-ceremonie-bleue",
    price: 98000,
    originalPrice: 649000,
    image: d6,
    category: "Robes",
    rating: 4.9,
    reviewCount: 87,
    description: "Robe longue en mousseline bleu nuit, parfaite pour les cérémonies et événements spéciaux.",
    colors: ["#1E3A8A", "#000000"],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Polyester",
    care: ["Lavage à sec", "Repassage vapeur"],
    details: ["Dos nu", "Fente latérale", "Longueur cheville"]
  },
  {
    id: 7,
    name: "Robe Cocktail Nœud Rouge",
    slug: "robe-patineuse-florale",
    price: 178000,
    image: d7,
    category: "Robes",
    rating: 4.5,
    reviewCount: 41,
    isNew: true,
    description: "Robe patineuse à imprimé floral, légère et féminine pour un look printanier.",
    colors: ["#FFB6C1", "#FFFFFF"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Coton",
    care: ["Lavage en machine à 30°", "Repassage moyen"],
    details: ["Ceinture assortie", "Manches courtes", "Longueur genoux"]
  },
  {
    id: 8,
    name: "Robe Mariée Civil Satin Nœuds",
    slug: "robe-pull-en-maille",
    price: 320000,
    originalPrice: 299000,
    image: d8,
    category: "Robes",
    rating: 4.6,
    reviewCount: 35,
    description: "Robe pull confortable en maille douce, idéale pour l'automne et l'hiver.",
    colors: ["#8B4513", "#2C3E50", "#800020"],
    sizes: ["S", "M", "L", "XL"],
    material: "80% Laine, 20% Polyamide",
    care: ["Lavage à la main", "Séchage à plat"],
    details: ["Col roulé", "Manches longues", "Longueur genoux"]
  },

  // Blazers
  {
    id: 9,
    name: "Ensemble Chic Doré",
    slug: "ensemble-chic-dore",
    price: 674000,
    image: b1,
    category: "Blazers",
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
    id: 10,
    name: "Ensemble Tailleur Crème",
    slug: "ensemble-tailleur-creme",
    price: 549000,
    originalPrice: 699000,
    image: b2,
    category: "Blazers",
    rating: 4.8,
    reviewCount: 42,
    isNew: true,
    description: "Ensemble tailleur élégant en tissu crème, parfait pour le bureau ou les occasions formelles.",
    colors: ["#F5F5DC", "#000000"],
    sizes: ["34", "36", "38", "40", "42"],
    material: "100% Laine",
    care: ["Nettoyage à sec uniquement"],
    details: ["Veste cintrée", "Pantalon droit", "Poches italiennes"]
  },
  {
    id: 11,
    name: "Ensemble Short et Blazer",
    slug: "ensemble-short-blazer",
    price: 439000,
    image: b3,
    category: "Blazers",
    rating: 4.7,
    reviewCount: 28,
    description: "Ensemble short et blazer en lin, chic et décontracté pour l'été.",
    colors: ["#E8DCC6", "#2C3E50"],
    sizes: ["S", "M", "L"],
    material: "100% Lin",
    care: ["Lavage à la main", "Repassage vapeur"],
    details: ["Blazer doublé", "Short taille haute", "Poches plaquées"]
  },

  {
    id: 12,
    name: "Blouse en Soie",
    slug: "blouse-en-soie",
    price: 284000,
    originalPrice: 374000,
    image: b4,
    category: "Blazers",
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
    id: 13,
    name: "Chemisier Blanc",
    slug: "chemisier-blanc",
    price: 159000,
    originalPrice: 199000,
    image: b5,
    category: "Blazers",
    rating: 4.8,
    reviewCount: 73,
    description: "Chemisier blanc intemporel en coton de qualité, un indispensable de la garde-robe.",
    colors: ["#FFFFFF"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Coton",
    care: ["Lavage en machine à 30°", "Repassage"],
    details: ["Col classique", "Manches longues", "Boutons blancs"]
  },
  {
    id: 14,
    name: "Top en Dentelle",
    slug: "top-en-dentelle",
    price: 129000,
    image: b6,
    category: "Blazers",
    rating: 4.6,
    reviewCount: 31,
    isNew: true,
    description: "Top délicat en dentelle, parfait pour ajouter une touche romantique à vos tenues.",
    colors: ["#000000", "#FFFFFF", "#FF69B4"],
    sizes: ["XS", "S", "M", "L"],
    material: "90% Polyamide, 10% Élasthanne",
    care: ["Lavage à la main", "Séchage à l'air libre"],
    details: ["Manches courtes", "Doublure intégrée", "Fermeture au dos"]
  },
  {
    id: 15,
    name: "Jupe Plissée Rubis",
    slug: "jupe-plissee-rubis",
    price: 239000,
    image: b7,
    category: "Blazers",
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
    id: 16,
    name: "Jupe Crayon Noire",
    slug: "jupe-crayon-noire",
    price: 169000,
    originalPrice: 219000,
    image: b8,
    category: "Blazers",
    rating: 4.7,
    reviewCount: 58,
    description: "Jupe crayon classique, coupe parfaite pour un look professionnel.",
    colors: ["#000000", "#2C3E50"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "95% Coton, 5% Élasthanne",
    care: ["Lavage en machine à 30°", "Repassage"],
    details: ["Fente au dos", "Taille haute", "Fermeture éclair"]
  },


  // Tailleurs
  {
    id: 18,
    name: "Ensemble Tailleur Cache-Cœur Bleu Ciel",
    slug: "pantalon-tailleur",
    price:  265000,
    image: t1,
    category: "Tailleurs",
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
    id: 19,
    name: "Ensemble Tailleur Veste et Jupe Patineuse Bordeaux",
    slug: "pantalon-palazo",
    price: 235000,
    originalPrice: 299000,
    image: t2,
    category: "Tailleurs",
    rating: 4.8,
    reviewCount: 43,
    description: "Pantalon palazzo fluide et élégant, parfait pour les soirées d'été.",
    colors: ["#E8DCC6", "#000000", "#800020"],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Viscose",
    care: ["Lavage en machine à 30°", "Repassage doux"],
    details: ["Taille élastiquée", "Jambes larges", "Poches latérales"]
  },
  {
    id: 20,
    name: "Ensemble Tailleur Tweed Blanc",
    slug: "pantalon-cigarette",
    price: 295000,
    image: t3,
    category: "Tailleurs",
    rating: 4.6,
    reviewCount: 39,
    description: "Pantalon cigarette coupe slim, idéal pour un look chic et moderne.",
    colors: ["#000000", "#2C3E50", "#8B4513"],
    sizes: ["34", "36", "38", "40", "42"],
    material: "98% Coton, 2% Élasthanne",
    care: ["Lavage en machine à 30°", "Repassage"],
    details: ["Fermeture éclair", "Poches italiennes", "Ourlet fin"]
  },

  // Vestes (4 produits)
  {
    id: 21,
    name: "Blazer Cérémonie",
    slug: "blazer-ceremonie",
    price: 240000,
    originalPrice: 674000,
    image: t7,
    category: "Tailleurs",
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
    id: 22,
    name: "Ensemble Tailleur Bordeaux Plissé",
    slug: "veste-en-jean",
    price: 190000,
    originalPrice: 249000,
    image: t5,
    category: "Tailleurs",
    rating: 4.7,
    reviewCount: 56,
    isNew: true,
    description: "Veste en jean intemporelle, parfaite pour un look décontracté.",
    colors: ["#4A6C8F", "#000000"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "100% Coton",
    care: ["Lavage en machine à 30°", "Repassage"],
    details: ["Boutons métal", "Poches poitrine", "Réglage taille"]
  },
  {
    id: 23,
    name: "Ensemble Tailleur Blanc Péplum",
    slug: "blazer-leger-beige",
    price: 180000,
    image: t6,
    category: "Tailleurs",
    rating: 4.8,
    reviewCount: 34,
    description: "Blazer léger en lin, idéal pour la mi-saison. Élégant et confortable.",
    colors: ["#E8DCC6", "#D2B48C"],
    sizes: ["S", "M", "L", "XL"],
    material: "70% Lin, 30% Coton",
    care: ["Nettoyage à sec", "Repassage vapeur"],
    details: ["Doublure partielle", "Poches rabat", "Manches retroussables"]
  },

  // Accessoires (6 produits)
  {
    id: 24,
    name: "Sac à Main Cuir",
    slug: "sac-a-main-cuir",
    price: 449000,
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
    id: 25,
    name: "Collier Perles",
    slug: "collier-perles",
    price: 194000,
    originalPrice: 269000,
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
    id: 26,
    name: "Ceinture Tressée",
    slug: "ceinture-tressee",
    price: 89000,
    image: "https://images.unsplash.com/photo-1553062465-811297c5f1db?w=800&auto=format",
    category: "Accessoires",
    rating: 4.6,
    reviewCount: 29,
    description: "Ceinture tressée en cuir, accessoire chic pour marquer la taille.",
    colors: ["#8B4513", "#000000"],
    sizes: ["75", "80", "85", "90", "95"],
    material: "Cuir véritable",
    care: ["Nettoyer avec un chiffon humide"],
    details: ["Boucle dorée", "Largeur 3cm"]
  },
  {
    id: 27,
    name: "Bracelet Or",
    slug: "bracelet-or",
    price: 149000,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format",
    category: "Accessoires",
    rating: 4.9,
    reviewCount: 47,
    isNew: true,
    description: "Bracelet fin en plaqué or, délicat et élégant.",
    colors: ["#D4AF37"],
    material: "Plaqué or",
    care: ["Éviter l'eau", "Nettoyer avec un chiffon doux"],
    details: ["Fermoir sécurisé", "Longueur 18cm", "Poids léger"]
  },

  // Chaussures (5 produits)
  {
    id: 28,
    name: "Escarpins Or",
    slug: "escarpins-or",
    price: 239000,
    originalPrice: 299000,
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
  },
  {
    id: 29,
    name: "Sandales à Talons",
    slug: "sandales-a-talons",
    price: 189000,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format",
    category: "Chaussures",
    rating: 4.7,
    reviewCount: 41,
    description: "Sandales élégantes à talons, parfaites pour les soirées d'été.",
    colors: ["#000000", "#D4AF37"],
    sizes: ["36", "37", "38", "39", "40"],
    material: "Cuir",
    care: ["Nettoyer avec un chiffon humide"],
    details: ["Talon 9cm", "Bride cheville", "Semelle cuir"]
  },
  {
    id: 30,
    name: "Bottines Chelsea",
    slug: "bottines-chelsea",
    price: 299000,
    originalPrice: 374000,
    image: "https://images.unsplash.com/photo-1638247025967-8647c8e8a3d8?w=800&auto=format",
    category: "Chaussures",
    rating: 4.8,
    reviewCount: 52,
    isNew: true,
    description: "Bottines Chelsea en cuir, intemporelles et confortables pour la mi-saison.",
    colors: ["#8B4513", "#000000"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    material: "Cuir de vachette",
    care: ["Cirage", "Imperméabilisant"],
    details: ["Élastiques latéraux", "Semelle épaisse", "Talon 3cm"]
  }
];