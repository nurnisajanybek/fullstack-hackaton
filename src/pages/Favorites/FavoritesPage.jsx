import React from 'react';
import { useEffect } from 'react';
import { useFavorites } from '../../contexts/FavoritesContextProvider';

const FavoritesPage = () => {
  const { getFavoriteHotels, favoriteHotels } = useFavorites();
  
  useEffect(() => {
    getFavoriteHotels();
  }, [])

  console.log(favoriteHotels)
  return (
    <div>
      fav
    </div>
  );
};

export default FavoritesPage;