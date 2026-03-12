import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Categories from './components/sections/Categories';
import PopularProducts from './components/sections/PopularProducts';
import Benefits from './components/sections/Benefits';
import Testimonials from './components/sections/Testimonials';



const App = () => {
  const handleSearchClick = () => {
    alert('Recherche - Fonctionnalité à venir !');
  };

  const handleCartClick = () => {
    alert('Panier - Fonctionnalité à venir !');
  };

  const handleFavoritesClick = () => {
    alert('Favoris - Fonctionnalité à venir !');
  };


  return (
    <div className="min-h-screen bg-bordeaux">
      <Header
        initialCartCount={3}
        initialFavoritesCount={2}
        onSearchClick={handleSearchClick}
        onCartClick={handleCartClick}
        onFavoritesClick={handleFavoritesClick}
      />

      <main>
        <Hero />

        <Categories />

        <PopularProducts />

        <Benefits />

        <Testimonials />

        <Footer />

      </main>
    </div>
  );
}

export default App;