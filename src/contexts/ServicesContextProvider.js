import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

const servicesContext = createContext();
export const useServices = () => useContext(servicesContext);

const INIT_STATE = {
  hotelList: [],
  hotelDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_HOTELS":
      return { ...state, hotelList: action.payload };
    case "GET_HOTEL_DETAILS":
      return { ...state, hotelDetails: action.payload };
    default:
      return state;
  }
};

const ServicesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getHotels = async () => {
    let { data } = await axios(`${API}hotel/`);
    let action = {
      type: "GET_HOTELS",
      payload: data.results,
    };
    dispatch(action);
  };

  const getHotelDetails = async (id) => {
    let { data } = await axios(`${API}hotel/${id}`);
    let action = {
      type: "GET_HOTEL_DETAILS",
      payload: data,
    };
    dispatch(action);
    console.log(data.result);
  };

  const cloud = {
    getHotels,
    hotelList: state.hotelList,
    getHotelDetails,
    hotelDetails: state.hotelDetails,
  };
  return (
    <servicesContext.Provider value={cloud}>
      {children}
    </servicesContext.Provider>
  );
};

export default ServicesContextProvider;
