
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login";
import Register from "./components/Register";
import Reviews from "./components/reviews/Reviews";
import Revievs from "./components/reviews/Reviews";
import { useAuth } from "./contexts/AuthContextProvider";
import { ADMIN } from "./helpers/consts";
import AdminPage from "./pages/AdminPage/AdminPage";
import EntertainmentDetails from "./pages/Entertainments/EntertainmentDetails/EntertainmentDetails";
import Entertainments from "./pages/Entertainments/Entertainments";
import HomePage from "./pages/HomePage/HomePage";
import HotelDetails from "./pages/Hotels/HotelDetails/HotelDetails";
import Hotels from "./pages/Hotels/Hotels";
import RestaurantDetails from "./pages/Restaurants/RestaurantDetails/RestaurantDetails";
import Restaurants from "./pages/Restaurants/Restaurants";

const MainRoutes = () => {
  const { user } = useAuth();
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
      link: "/place",
      element: <Restaurants />,
      id: 4,
    },
    {
      link: "/place/:id",
      element: <RestaurantDetails />,
      id: 5,
    },
    {
      link: "/fun",
      element: <Entertainments />,
      id: 4,
    },
    {
      link: "/fun/:id",
      element: <EntertainmentDetails />,
      id: 5,
    },
    {
      link: "/register",
      element: <Register />,
      id: 6,
    },
    {
      link: "/login",
      element: <Login />,
      id: 7,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 8,
    },
    {
      link: "/aboutus",
      element: <AboutUs />,
      id: 7,
    }, 
    {
      link: "/reviews",
      element: <Reviews />,
      id: 7,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
   
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route path={route.link} element={route.element} key={route.id} />
      ))}
      {user
          ? PRIVATE_ROUTES.map((route) => (
              <Route
                path={route.link}
                element={
                  user.email === ADMIN ? (
                    route.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
                key={route.id}
              />
            ))
          : null}
    </Routes>
  );
};

export default MainRoutes;
