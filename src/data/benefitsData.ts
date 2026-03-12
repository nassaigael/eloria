import { 
  Truck, 
  Shield, 
  RotateCcw, 
  Heart, 
  Clock, 
  Gift, 
  CreditCard, 
  Sparkles,
  type LucideIcon 
} from 'lucide-react';

export interface Benefit {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  highlight?: string;
}

export const benefitsData: Benefit[] = [
  {
    id: 1,
    icon: Truck,
    title: "Livraison Offerte",
    description: "Dès 150€ d'achat en France métropolitaine",
    color: "from-gold/20 to-transparent",
    highlight: "Express disponible"
  },
  {
    id: 2,
    icon: Shield,
    title: "Paiement Sécurisé",
    description: "CB, PayPal, Apple Pay - 3D Secure",
    color: "from-gold/20 to-transparent",
    highlight: "100% sécurisé"
  },
  {
    id: 3,
    icon: RotateCcw,
    title: "Retours Gratuits",
    description: "Sous 30 jours, en boutique ou par colissimo",
    color: "from-gold/20 to-transparent",
    highlight: "Satisfait ou remboursé"
  },
  {
    id: 4,
    icon: Heart,
    title: "Service Premium",
    description: "Conseillères disponibles 7j/7 de 9h à 20h",
    color: "from-gold/20 to-transparent",
    highlight: "À votre écoute"
  },
  {
    id: 5,
    icon: Clock,
    title: "Expédition Rapide",
    description: "En 24/48h en point relais ou à domicile",
    color: "from-gold/20 to-transparent",
    highlight: "Colis suivi"
  },
  {
    id: 6,
    icon: Gift,
    title: "Coffret Cadeau",
    description: "Emballage premium offert pour toutes vos commandes",
    color: "from-gold/20 to-transparent",
    highlight: "Idée cadeau"
  },
  {
    id: 7,
    icon: CreditCard,
    title: "Paiement en 3x",
    description: "Sans frais avec Alma à partir de 100€",
    color: "from-gold/20 to-transparent",
    highlight: "Flexible"
  },
  {
    id: 8,
    icon: Sparkles,
    title: "Collection Privée",
    description: "Accès exclusif aux pré-ventes et nouveautés",
    color: "from-gold/20 to-transparent",
    highlight: "Membres only"
  }
];