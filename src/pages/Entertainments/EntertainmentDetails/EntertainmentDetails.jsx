import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./EntertainmentDetails.css";

const EntertainmentDetails = () => {
  const { getEntertainmentDetails, entertainmentDetails } = useServices();
  const { id } = useParams();

  useEffect(() => {
    getEntertainmentDetails(id);
  }, []);
  console.log(entertainmentDetails);
  return (
    <>
      <h1>{entertainmentDetails?.name}</h1>
    </>
  );
};

export default EntertainmentDetails;
