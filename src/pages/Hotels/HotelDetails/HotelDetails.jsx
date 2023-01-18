import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./HotelDetails.css";

const HotelDetails = () => {
  const { getHotelDetails, hotelDetails } = useServices();
  const { id } = useParams();

  useEffect(() => {
    getHotelDetails(id);
  }, []);
  console.log(hotelDetails);
  return (
    <>
      <h1>{hotelDetails?.name}</h1>
    </>
  );
};

export default HotelDetails;
