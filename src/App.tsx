import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Benefits from './components/sections/Benefits';
import Categories from './components/sections/Categories';
import Hero from './components/sections/Hero';
import PopularProducts from './components/sections/Products';
import Testimonials from './components/sections/Testimonials';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { SearchProvider } from './context/SearchContext';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Favorites from './pages/Favorites';
import Reviews from './pages/Reviews';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <CartProvider>
        <FavoritesProvider>
          <SearchProvider>
            <div className="min-h-screen bg-bordeaux">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <Categories />
                      <PopularProducts />
                      <Benefits />
                      <Testimonials />
                    </>
                  } />
                  <Route path="/avis" element={<Reviews />} />
                  <Route path="/categorie/:slug" element={<Category />} />
                  <Route path="/favoris" element={<Favorites />} />
                  <Route path="/panier" element={<Cart />} />
                  <Route path="/boutique" element={<Shop />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </SearchProvider>
        </FavoritesProvider>
      </CartProvider>
    </Router>
  );
}

export default App;