import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./RestaurantDetails.css";

const RestaurantDetails = () => {
  const { getRestaurantDetails, restaurantDetails } = useServices();
  const { id } = useParams();

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);
  console.log(restaurantDetails);
  return (
    <>
      <h1>{restaurantDetails?.name}</h1>
    </>
  );
};

export default RestaurantDetails;
