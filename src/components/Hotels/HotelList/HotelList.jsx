import React, { useEffect } from "react";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./HotelList.css";

const HotelList = () => {
  const { getHotels, hotelList } = useServices();

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <>
      {hotelList?.map((hotel) => (
        <div>{hotel.name}</div>
      ))}
    </>
  );
};

export default HotelList;
