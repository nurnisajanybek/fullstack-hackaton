import React, { useReducer } from "react";
import { useContext } from "react";
import { API, checkStorage } from "../helpers/consts";
import { createContext } from "react";
import axios from "axios";

const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const favoritesList = () => JSON.parse(localStorage.getItem("favorites"));

const FavoritesContextProvider = ({ children }) => {
  const setStorage = (item, key = "favorites") => {
    checkStorage(key);
    let data = JSON.parse(localStorage.getItem(key));
    data.push(item);
    localStorage.setItem(key, JSON.stringify(data));
  };

  const removeFromStorage = (item, key = "favorites") => {
    checkStorage(key);
    let data = JSON.parse(localStorage.getItem(key));
    data = data.filter((elem) => elem.id != item.id);
    localStorage.setItem(key, JSON.stringify(data));
  };

  const checkForFav = (item, key = "favorites") => {
    let storage = JSON.parse(localStorage.getItem(key)) || [];
    return storage.some((elem) => elem.id == item.id);
  };

  const values = {
    setStorage,
    removeFromStorage,
    checkForFav,
    favoritesList,
  };
  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
