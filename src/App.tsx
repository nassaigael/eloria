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
import MentionsLegales from './pages/MentionsLegales';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

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

                  <Route path="/boutique" element={<Shop />} />
                  <Route path="/categorie/:slug" element={<Category />} />
                  <Route path="/favoris" element={<Favorites />} />
                  <Route path="/panier" element={<Cart />} />
                  <Route path="/mentions-legales" element={<MentionsLegales />} />
                  <Route path="/confidentialite" element={<PrivacyPolicy />} />
                  <Route path="/cgv" element={<TermsAndConditions />} />                  {/* <Route path="/cookies" element={<Cookies />} /> */}
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/livraison" element={<Livraison />} />

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