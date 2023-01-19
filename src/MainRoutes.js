import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage/HomePage";
import HotelDetails from "./pages/Hotels/HotelDetails/HotelDetails";
import Hotels from "./pages/Hotels/Hotels";
import ForgotPasssword from "./components/ForgotPassword"
import NewLogin from "./components/NewLogin"

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/hotels",
      element: <Hotels />,
      id: 2,
    },
    {
      link: "/hotels/:id",
      element: <HotelDetails />,
      id: 3,
    },
    {
      link: "/register",
      element: <Register />,
      id: 5,
    },
    {
      link: "/login",
      element: <Login />,
      id: 6,
    },
    {
      link: "/aboutus",
      element: <AboutUs/>,
      id: 7,
    },
    {
      link: "/forgotpassword",
      element: <ForgotPasssword/>,
      id: 8,
    },
    {
      link: "/newlogin",
      element: <NewLogin/>,
      id: 9,
    }
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route path={route.link} element={route.element} key={route.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
