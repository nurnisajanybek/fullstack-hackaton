import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./HotelDetails.css";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Coments from "../../../components/coments/Coments";

const HotelDetails = () => {
  const { getHotelDetails, hotelDetails, deleteHotel } = useServices();
  const { id } = useParams();

  useEffect(() => {
    getHotelDetails(id);
  }, []);
  console.log(hotelDetails);
  return (
    <Container fixed>
      <Box>
        <div className="detail">
          <img className="img1" src={hotelDetails?.image} />

          <hr className="line" />
          <div className="detail1">
            <Typography className="num">{hotelDetails?.name} </Typography>
            <hr />
            <Typography className="num">{hotelDetails?.price}</Typography>
            <hr />
            <Typography>{hotelDetails?.info}</Typography>

            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                marginRight: "3%",
                marginTop: "3%",
                marginBottom: "3%",
              }}
            >
              Edit
            </Button>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                marginTop: "3%",
                marginBottom: "3%",
              }}
              onClick={() => deleteHotel(id)}
            >
              Delete
            </Button>
          </div>
        </div>
        ;
        <Coments />
      </Box>
    </Container>
  );
};

export default HotelDetails;
