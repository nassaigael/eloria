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
    description: "Dès 150 000 Ar d'achat à Madagascar",
    color: "from-gold/20 to-transparent",
    highlight: "Express disponible"
  },
  {
    id: 2,
    icon: Shield,
    title: "Paiement Sécurisé",
    description: "Mobile Money (MVola, Airtel Money), Carte bancaire, Virement",
    color: "from-gold/20 to-transparent",
    highlight: "100% sécurisé"
  },
  {
    id: 3,
    icon: RotateCcw,
    title: "Retours Gratuits",
    description: "Sous 14 jours, en boutique ou par transporteur",
    color: "from-gold/20 to-transparent",
    highlight: "Satisfait ou remboursé"
  },
  {
    id: 4,
    icon: Heart,
    title: "Service Premium",
    description: "Conseillères disponibles du lundi au samedi de 9h à 18h",
    color: "from-gold/20 to-transparent",
    highlight: "À votre écoute"
  },
  {
    id: 5,
    icon: Clock,
    title: "Expédition Rapide",
    description: "Livraison sous 24h à Antananarivo, 3-5 jours en province",
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
    title: "Paiement à la livraison",
    description: "Payez à la réception de votre commande (10 000 Ar de frais)",
    color: "from-gold/20 to-transparent",
    highlight: "Disponible à Tana"
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