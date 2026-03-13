import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { SearchProvider } from './context/SearchContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Testimonials from './components/sections/Testimonials';
import Categories from './components/sections/Categories';
import PopularProducts from './components/sections/PopularProducts';
import Benefits from './components/sections/Benefits';
import Category from './pages/Category';
import Favorites from './pages/Favorites';

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
                  <Route path="/categorie/:slug" element={<Category />} />
                  <Route path="/favoris" element={<Favorites />} />
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