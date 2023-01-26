import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";

const commentContext = createContext();
export const useComment = () => useContext(commentContext);

const init_state = {
  hotelComments: {},
  allHotelComments: [],
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "GET_HOTEL_COMMENTS":
      return { ...state, hotelComments: action.payload };
    case "GET_ALL_COMMENTS_FOR_HOTEL":
      return { ...state, allHotelComments: action.payload };
    default:
      return state;
  }
};

const CommentContextProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token"))
    : "";
  // setting for request
  // config содержит в себе токен и бэк принимая этот токен понимает, кто отправил запрос (which user)
  // token gives access for some operations которые не доступны для не авторизованных пользователей
  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${token.access}`,
    },
  };

  const [state, dispatch] = useReducer(reducer, init_state);

  const getHotelComments = async (id) => {
    try {
      let res = await axios(`${API}hotel_comment/${id}/`);
      dispatch({
        type: "GET_HOTEL_COMMENTS",
        payload: res.data,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCommentsForHotel = async () => {
    try {
      let { data } = await axios(`${API}hotel_comment/`);
      dispatch({
        type: "GET_ALL_COMMENTS_FOR_HOTEL",
        payload: data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addNewComment = async (id, comment) => {
    try {
      let res = await axios.post(
        `${API}hotel_comment/`,
        { body: comment, hotel_id: id },
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    getHotelComments,
    hotelComments: state.hotelComments,
    addNewComment,
    getAllCommentsForHotel,
    allHotelComments: state.allHotelComments,
  };
  return (
    <commentContext.Provider value={values}>{children}</commentContext.Provider>
  );
};

export default CommentContextProvider;
