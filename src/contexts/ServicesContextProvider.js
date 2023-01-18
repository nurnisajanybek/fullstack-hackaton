import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

const servicesContext = createContext();
export const useServices = () => useContext(servicesContext);

const INIT_STATE = {
  hotelList: [],
  hotelDetails: {},
  restaurantList: [],
  restaurantDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_HOTELS":
      return { ...state, hotelList: action.payload };
    case "GET_HOTEL_DETAILS":
      return { ...state, hotelDetails: action.payload };
    case "GET_RESTAURANTS":
      return { ...state, restaurantList: action.payload };
    case "GET_RESTAURANT_DETAILS":
      return { ...state, restaurantDetails: action.payload };

    default:
      return state;
  }
};

const ServicesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const token = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token"))
    : "";

  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${token.access}`,
    },
  };

  // hotels
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
  };

  const addHotel = async (newHotel) => {
    try {
      let res = await axios.post(`${API}hotel/`, newHotel, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // restaurants

  const getRestaurants = async () => {
    let { data } = await axios(`${API}place/`);
    let action = {
      type: "GET_RESTAURANTS",
      payload: data.results,
    };
    dispatch(action);
  };

  const getRestaurantDetails = async (id) => {
    let { data } = await axios(`${API}place/${id}`);
    let action = {
      type: "GET_RESTAURANT_DETAILS",
      payload: data,
    };
    dispatch(action);
  };

  const cloud = {
    getHotels,
    hotelList: state.hotelList,
    getHotelDetails,
    hotelDetails: state.hotelDetails,
    addHotel,
    getRestaurants,
    restaurantList: state.restaurantList,
    getRestaurantDetails,
    restaurantDetails: state.restaurantDetails,
  };
  return (
    <servicesContext.Provider value={cloud}>
      {children}
    </servicesContext.Provider>
  );
};

export default ServicesContextProvider;
