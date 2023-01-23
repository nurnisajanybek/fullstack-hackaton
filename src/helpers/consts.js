export const API = "http://34.123.240.158/";

export const isAdmin = () => {
  if (JSON.parse(localStorage.getItem("username")) === "alievamedina004@gmail.com") {
    return true;
  } else {
    return false;
  }
};

