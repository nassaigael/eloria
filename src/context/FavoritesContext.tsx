import React, { createContext, useContext, useState, useEffect } from 'react';

export interface FavoriteItem {
  slug: string;
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  favoritesCount: number;
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (itemId: number) => void;
  isFavorite: (itemId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    const savedFavorites = localStorage.getItem('eloria_favorites');
    if (savedFavorites) {
      try {
        return JSON.parse(savedFavorites);
      } catch (error) {
        console.error('Erreur lors du chargement des favoris:', error);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('eloria_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const favoritesCount = favorites.length;

  const addToFavorites = (item: FavoriteItem) => {
    setFavorites(prev => {
      if (!prev.some(fav => fav.id === item.id)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  const removeFromFavorites = (itemId: number) => {
    setFavorites(prev => prev.filter(item => item.id !== itemId));
  };

  const isFavorite = (itemId: number) => {
    return favorites.some(item => item.id === itemId);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      favoritesCount,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};