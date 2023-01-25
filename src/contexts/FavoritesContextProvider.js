import React, { useReducer } from 'react';
import { useContext } from 'react';
import { API, checkStorage } from "../helpers/consts"
import { createContext } from 'react';
import axios from 'axios';

const favoritesContext = createContext();
export const useFavorites = () => useContext(favoritesContext);

const favoritesList = JSON.parse(localStorage.getItem('favorites'));

// const init_state = {
//   favoriteHotels: storage,
// }

// const reducer = (state = init_state, action) => {
//   switch (action.type) {
//     case "GET_FAV_HOTELS":
//       return {...state, favoriteHotels: action.payload.results};
  
//     default:
//       return state;
//   }
// }

const FavoritesContextProvider = ({children}) => {
  
  const setStorage = (item, key = 'favorites') => {
    console.log('here')
    checkStorage(key);
    let data = JSON.parse(localStorage.getItem(key));
    data.push(item);
    localStorage.setItem(key, JSON.stringify(data));
  }

  const removeFromStorage = (item, key = 'favorites') => {
    checkStorage(key);
    let data = JSON.parse(localStorage.getItem(key));
    data = data.filter(elem => elem.id != item.id);
    localStorage.setItem(key, JSON.stringify(data));
  }

  const checkForFav = (item, key = 'favorites') => {
    let storage = JSON.parse(localStorage.getItem(key))
    return storage.some((elem)=>elem.id == item.id);
  }

  // const [state, dispatch] = useReducer(reducer, init_state);

  // const token = JSON.parse(localStorage.getItem("token"))
  //   ? JSON.parse(localStorage.getItem("token"))
  //   : "";

  // const config = {
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${token.access}`,
  //   },
  // };

  // const getFavoriteHotels = async () => {
  //   try {
  //     let { data } = await axios(`${API}favorite_hotel/`, config)
  //     console.log(data)
  //     dispatch({
  //       type: 'GET_FAV_HOTELS',
  //       payload: data,
  //     })
  //   } catch (e) {
  //     console.log(e, 'error here')
  //   }
  // }

  // const addHotelToFavorite = async (hotel) => {
  //   try {
  //     let res = await axios.post(`${API}favorite_hotel/`, hotel, config)
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const deleteFromFavoritesHotel = async (id) => {
  //   try {
  //     let res = await axios.delete(`${API}favorite_hotel/${id}/`, config);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



  const values = {
    // getFavoriteHotels,
    // addHotelToFavorite,
    // deleteFromFavoritesHotel,
    // favoriteHotels: state.favoriteHotels
    setStorage,
    removeFromStorage,
    checkForFav,
    favoritesList,
  }
  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;