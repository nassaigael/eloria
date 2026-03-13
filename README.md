# 🛍️ Eloria - Premium E-commerce Website

![Eloria Preview](https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&auto=format)

## ✨ About The Project

**Eloria** is a premium e-commerce website specializing in elegant women's fashion. Built with React, TypeScript, and Tailwind CSS, it offers a luxurious shopping experience with sophisticated design and comprehensive e-commerce functionality.

### 🎯 Key Features

- **Premium Design**: Elegant color palette with gold accents and sophisticated typography
- **Fully Responsive**: Perfect experience on mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Shopping Cart**: Complete cart management with localStorage persistence
- **Wishlist**: Save favorite items with localStorage
- **Real-time Search**: Instant product search with modal interface
- **Product Categories**: Filter and sort products by various criteria
- **Quick View**: Preview products without leaving the page
- **Promo Codes**: Support for discount codes (ELORIA10, BIENVENUE)
- **Testimonials**: Customer reviews carousel

## 🚀 Technologies Used

| Technology | Purpose |
|------------|---------|
| React 18 | Frontend framework |
| TypeScript | Type safety |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router | Navigation |
| Lucide React | Icons |
| LocalStorage | Data persistence |

## 🎨 Design System

### Colors
- **Bordeaux** (`#7A0F1C`) - Main background
- **Dark Bordeaux** (`#5A0B14`) - Footer, overlays
- **Gold** (`#D4AF37`) - Logo, buttons, accents
- **Light Gold** (`#E6C76A`) - Hover effects
- **Champagne** (`#F1E6D0`) - Text on dark backgrounds
- **Soft Beige** (`#E8DCC6`) - Light backgrounds

### Typography
- **Titles**: Cormorant Garamond (serif) - Elegant and sophisticated
- **Body**: Montserrat (sans-serif) - Modern and readable

## 📱 Features in Detail

### 🏠 Homepage
- **Hero Carousel**: Auto-playing slides with animated text
- **Categories Grid**: 6 categories with hover effects
- **Popular Products**: Top-rated products with quick view
- **Benefits Section**: 8 premium service features
- **Testimonials**: Customer reviews carousel

### 🛒 Shopping Experience
- **Product Categories**: Filter by price and sort by popularity, price, or rating
- **Favorites Page**: Manage wishlist with selection and bulk actions
- **Cart Page**: Real-time calculations, promo codes, gift wrap option
- **Quick View**: Modal with complete product details

### 🔧 Technical Features
- **Context API**: Global state management (Cart, Favorites, Search)
- **LocalStorage**: Persistent data across sessions
- **Custom Hooks**: Reusable logic for cart, favorites, and search
- **Error Boundary**: Graceful error handling
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
eloria/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and styles
│   ├── components/        # Reusable components
│   │   ├── layout/       # Header, Footer, MobileMenu
│   │   └── sections/     # Hero, Categories, Products, etc.
│   ├── context/          # React Context providers
│   ├── data/             # Static data files
│   ├── pages/            # Page components
│   └── App.tsx           # Main app component
├── index.html
├── package.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/eloria.git
cd eloria
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
```

5. **Preview production build**
```bash
npm run preview
# or
yarn preview
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎯 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/categorie/:slug` | Category page with filters |
| `/favoris` | Favorites/Wishlist page |
| `/panier` | Shopping cart page |

## 💡 Key Implementation Details

### Context Providers
```tsx
<CartProvider>
  <FavoritesProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </FavoritesProvider>
</CartProvider>
```

### LocalStorage Persistence
```tsx
// Cart example
const [cartItems, setCartItems] = useState<CartItem[]>(() => {
  const saved = localStorage.getItem('eloria_cart');
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem('eloria_cart', JSON.stringify(cartItems));
}, [cartItems]);
```

### Animations with Framer Motion
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Nasaina Gael**
- LinkedIn: [@nassaigael](https://www.linkedin.com/in/nassaigael/)
- GitHub: [@nassaigael](https://github.com/nassaigael)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)

---

<p align="center">
  Made with ❤️ by Nasaina Gael
</p>