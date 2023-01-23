import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const FavoritesContextProvider = ({children}) => {

  const values = {
    
  }
  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;