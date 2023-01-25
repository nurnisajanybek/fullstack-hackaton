import React from "react";
import { useEffect } from "react";
import { useFavorites } from "../../contexts/FavoritesContextProvider";

const FavoritesPage = () => {
  const { favoritesList } = useFavorites();
  useEffect(() => {
    favoritesList();
  }, []);

  return (
    <div className="container">
      {favoritesList()?.map((fav_hotel) => (
        <>
          <h3>{fav_hotel?.name}</h3>
        </>
      ))}
    </div>
  );
};

export default FavoritesPage;
