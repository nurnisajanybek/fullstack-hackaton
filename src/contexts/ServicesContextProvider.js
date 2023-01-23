import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";

const servicesContext = createContext();
export const useServices = () => useContext(servicesContext);

const INIT_STATE = {
  hotelList: [],
  hotelDetails: {},
  restaurantList: [],
  restaurantDetails: {},
  entertainmentList: [],
  entertainmentDetails: {},
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
    case "GET_ENTERTAINMENTS":
      return { ...state, entertainmentList: action.payload };
    case "GET_ENTERTAINMENT_DETAILS":
      return { ...state, entertainmentDetails: action.payload };
    default:
      return state;
  }
};

const ServicesContextProvider = ({ children }) => {
  const navigate = useNavigate();
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

  const cache_config = {
    headers: {
      "Content-type": "multipart/form-data",
      "Cache-Control": "no-cache",
    },
  };

  // hotels
  const getHotels = async () => {
    let { data } = await axios.get(`${API}hotel/`);
    console.log(data);
    let action = {
      type: "GET_HOTELS",
      payload: data.results,
    };
    dispatch(action);
  };

  const getHotelDetails = async (id) => {
    let { data } = await axios.get(`${API}hotel/${id}/`);
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
  const deleteHotel = async (id) => {
    console.log(config);
    try {
      let res = await axios.delete(`${API}hotel/${id}/`, config);
      navigate("/hotels");
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateHotel = async (editedHotel) => {

    try {
      console.log(editedHotel);
      let res = await axios.patch(
        `${API}hotel/${editedHotel.id}/`,
        editedHotel,
        config
      );
      getHotelDetails(editedHotel.id);
    } catch (error) {
      console.log(error);
    }

  };

  // restaurants

  const getRestaurants = async () => {
    let { data } = await axios.get(`${API}place/`);
    let action = {
      type: "GET_RESTAURANTS",
      payload: data.results,
    };
    dispatch(action);
  };

  const getRestaurantDetails = async (id) => {
    let { data } = await axios.get(`${API}place/${id}/`);
    let action = {
      type: "GET_RESTAURANT_DETAILS",
      payload: data,
    };
    dispatch(action);
  };

  const addRestaurant = async (newRestaurant) => {
    try {
      let res = await axios.post(`${API}place/`, newRestaurant, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRestaurant = async (id) => {
    try {
      let res = await axios.delete(`${API}place/${id}/`, config);
      navigate("/place");
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateRestaurant = async (editedRestaurant) => {
    try {
      let res = await axios.patch(
        `${API}place/${editedRestaurant.id}/`,
        editedRestaurant,
        config
      );
      getRestaurantDetails(editedRestaurant.id);
    } catch (error) {
      console.log(error);
    }
  };

  // entertainments
  const getEntertainments = async () => {
    let { data } = await axios.get(`${API}fun/`);
    let action = {
      type: "GET_ENTERTAINMENTS",
      payload: data.results,
    };
    dispatch(action);
  };

  const getEntertainmentDetails = async (id) => {
    let { data } = await axios.get(`${API}fun/${id}/`);
    let action = {
      type: "GET_ENTERTAINMENT_DETAILS",
      payload: data,
    };
    dispatch(action);
  };

  const addEntertainment = async (newEntertainment) => {
    try {
      let res = await axios.post(`${API}fun/`, newEntertainment, config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEntertainment = async (id) => {
    try {
      let res = await axios.delete(`${API}fun/${id}/`, config);
      navigate("/fun");
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateEntertainment = async (editedEntertainment) => {
    try {
      let res = await axios.patch(
        `${API}fun/${editedEntertainment.id}/`,
        editedEntertainment,
        config
      );
      getEntertainmentDetails(editedEntertainment.id);
    } catch (error) {
      console.log(error);
    }
  };

  const cloud = {
    getHotels,
    hotelList: state.hotelList,
    getHotelDetails,
    hotelDetails: state.hotelDetails,
    addHotel,
    deleteHotel,
    updateHotel,
    getRestaurants,
    restaurantList: state.restaurantList,
    getRestaurantDetails,
    restaurantDetails: state.restaurantDetails,
    addRestaurant,
    deleteRestaurant,
    updateRestaurant,
    getEntertainments,
    entertainmentList: state.entertainmentList,
    getEntertainmentDetails,
    entertainmentDetails: state.entertainmentDetails,
    addEntertainment,
    deleteEntertainment,
    updateEntertainment,
  };
  return (
    <servicesContext.Provider value={cloud}>
      {children}
    </servicesContext.Provider>
  );
};

export default ServicesContextProvider;
