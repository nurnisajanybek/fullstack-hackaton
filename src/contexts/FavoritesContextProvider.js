import React, { useReducer } from 'react';
import { useContext } from 'react';
import { API } from "../helpers/consts"
import { createContext } from 'react';
import axios from 'axios';

const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const init_state = {
  favoriteHotels: [],
}

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "GET_FAV_HOTELS":
      return {...state, favoriteHotels: action.payload};
  
    default:
      return state;
  }
}

const FavoritesContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, init_state);

  const token = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token"))
    : "";

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token.access}`,
    },
  };

  const getFavoriteHotels = async () => {
    try {
      let { data } = await axios(`${API}favorite_hotel/`, config)
      console.log(data)
      dispatch({
        type: 'GET_FAV_HOTELS',
        payload: data,
      })
    } catch (e) {
      console.log(e, 'error here')
    }
  }

  const values = {
    getFavoriteHotels,
    favoriteHotels: state.favoriteHotels
  }
  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;