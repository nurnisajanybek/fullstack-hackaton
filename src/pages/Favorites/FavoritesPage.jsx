import { Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useFavorites } from "../../contexts/FavoritesContextProvider";

const FavoritesPage = ({ hotel }) => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { favoritesList } = useFavorites();

  useEffect(() => {
    favoritesList();
  }, []);

  return (
    <div className="container">
      {favoritesList()?.map((fav_hotel) => (
        <>
          <h3>{fav_hotel?.name}</h3>
          <img style={{ width: "30%" }} src={fav_hotel?.image} alt="" />
        </>
      ))}

      <Button onClick={() => navigate(`/creditcard`)}>
        BUY NOW FOR {cart?.totalPrice}
      </Button>
    </div>
  );
};

export default FavoritesPage;
