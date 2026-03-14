export interface NotFoundSuggestion {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

export interface NotFoundStat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export const notFoundSuggestions: NotFoundSuggestion[] = [
  {
    id: 1,
    title: "Boutique",
    description: "Découvrez toutes nos collections",
    icon: "🛍️",
    link: "/boutique",
    color: "from-gold/20 to-transparent"
  },
  {
    id: 2,
    title: "Nouveautés",
    description: "Les dernières créations",
    icon: "✨",
    link: "/categorie/nouveautes",
    color: "from-gold/20 to-transparent"
  },
  {
    id: 3,
    title: "Favoris",
    description: "Vos articles sauvegardés",
    icon: "❤️",
    link: "/favoris",
    color: "from-gold/20 to-transparent"
  },
  {
    id: 4,
    title: "Contact",
    description: "Besoin d'aide ?",
    icon: "📞",
    link: "/contact",
    color: "from-gold/20 to-transparent"
  }
];

export const notFoundStats: NotFoundStat[] = [
  {
    id: 1,
    value: "30+",
    label: "Collections",
    icon: "👗"
  },
  {
    id: 2,
    value: "50k+",
    label: "Clientes satisfaites",
    icon: "✨"
  },
  {
    id: 3,
    value: "4.8/5",
    label: "Note moyenne",
    icon: "⭐"
  },
  {
    id: 4,
    value: "24h",
    label: "Expédition",
    icon: "🚚"
  }
];

export const notFoundMessages = {
  title: "404",
  heading: "Oups ! Page introuvable",
  description: "Il semble que la page que vous recherchez n'existe pas ou a été déplacée.",
  cta: "Retour à l'accueil",
  secondaryCta: "Nous contacter"
};
