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
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Livraison from './pages/Livraison';
import NotFound from './pages/NotFound';

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
                  {/* Page d'accueil */}
                  <Route path="/" element={
                    <>
                      <Hero />
                      <Categories />
                      <PopularProducts />
                      <Benefits />
                      <Testimonials />
                    </>
                  } />

                  {/* Pages principales */}
                  <Route path="/boutique" element={<Shop />} />
                  <Route path="/categorie/:slug" element={<Category />} />
                  <Route path="/favoris" element={<Favorites />} />
                  <Route path="/panier" element={<Cart />} />

                  {/* Pages prioritaires */}
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/livraison" element={<Livraison />} />

                  {/* Page 404 - À garder en dernier */}
                  <Route path="*" element={<NotFound />} />
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