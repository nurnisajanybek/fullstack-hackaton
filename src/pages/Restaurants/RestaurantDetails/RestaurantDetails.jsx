import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./RestaurantDetails.css";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Coments from "../../../components/coments/Coments";

const RestaurantDetails = () => {
  const { getRestaurantDetails, restaurantDetails } = useServices();
  const { id } = useParams();

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);
  console.log(restaurantDetails);
  return (
    <Container fixed>
      <Box>
        <div className="detail">
          <img
            className="img1"
            src="https://media-cdn.tripadvisor.com/media/photo-s/0a/6e/6a/95/gray-wolf-deluxe-double.jpg"
            alt=""
          />

          <hr className="line" />
          <div className="detail1">
            <Typography className="num">{restaurantDetails?.name} </Typography>
            <hr />
            <Typography className="num">
              {restaurantDetails?.avg_price}
            </Typography>
            <hr />
            <Typography>{restaurantDetails?.info}</Typography>

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

export default RestaurantDetails;
