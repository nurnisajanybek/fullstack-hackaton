import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsList from "./products/ProductsList";
const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 1,
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
