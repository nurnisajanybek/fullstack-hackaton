import axios from "axios";
import React, { createContext, useContext } from "react";
import { API } from "../helpers/consts";

const ratingContext = createContext();
export const useRating = () => useContext(ratingContext);

const RatingContextProvider = ({ children }) => {
  const getHotelRating = async () => {
    try {
      let { data } = await axios(`${API}hotel_rating/`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    getHotelRating,
  };
  return (
    <ratingContext.Provider value={values}>{children}</ratingContext.Provider>
  );
};

export default RatingContextProvider;
