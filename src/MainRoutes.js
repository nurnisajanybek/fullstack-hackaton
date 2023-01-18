import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import HotelDetails from "./pages/Hotels/HotelDetails/HotelDetails";
import Hotels from "./pages/Hotels/Hotels";

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
