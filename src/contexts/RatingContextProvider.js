import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

const ratingContext = createContext();
export const useRating = () => useContext(ratingContext);

const init_state = {
  hotelRatings: [],
}

const reducer = (state = init_state, action) => {
  switch(action.type){
    case "GET_HOTEL_RATINGS":
      return {...state, hotelRatings: action.payload};
    default:
      return state;
  }
}

const RatingContextProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token"))
    : "";

  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${token.access}`,
    },
  };

  const [state, dispatch] = useReducer(reducer, init_state)

  const getHotelRating = async () => {
    try {
      let { data } = await axios(`${API}hotel_rating/`);
      dispatch({
        type: "GET_HOTEL_RATINGS",
        payload: data.results,
      })
    } catch (error) {
      console.log(error);
    }
  };

  const setRatingToHotel = async (id, rating) => {
    try {
      let request_obj = {
        hotel_rating: rating,
        hotel_id: id,
      }
      let res = await axios.post(`${API}hotel_rating/`, request_obj, config)
      getHotelRating();
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const values = {
    getHotelRating,
    hotelRatings: state.hotelRatings,
    setRatingToHotel,
  };
  return (
    <ratingContext.Provider value={values}>{children}</ratingContext.Provider>
  );
};

export default RatingContextProvider;
