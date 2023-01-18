import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetails from "./products/ProductDetails";
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
      id: 2,
    },
    {
      link: "/productdetails",
      element: <ProductDetails/>,
      id: 3,  
    },
    {
      link: "/register",
      element: <Register/>,
      id: 4,
    },
    {
      link: "/login",
      element: <Login/>,
      id: 5,
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
