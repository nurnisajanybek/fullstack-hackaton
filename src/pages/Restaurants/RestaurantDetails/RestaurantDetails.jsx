import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./RestaurantDetails.css";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Coments from "../../../components/coments/Coments";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
          <img className="img1" src={restaurantDetails?.image} />

          <hr className="line" />
          <div className="detail1">
            <Typography className="num">{restaurantDetails?.name} </Typography>
            <hr />
            <Typography className="num">{restaurantDetails?.price}</Typography>
            <hr />
            <Typography>{restaurantDetails?.info}</Typography>

            <Box sx={{ width: "100% ", marginLeft: "10px" }}>
              <div className="rating">
                {" "}
                <span>Рейтинг</span>
                <span className="feedback">999 отзывов</span>
              </div>

              <div>
                <LocationOnIcon />
                <a
                  href={restaurantDetails?.map_link}
                  className="restaurant-adress"
                >
                  {restaurantDetails?.address}
                </a>
              </div>
              <div className="div">
                <div>
                  <div>
                    <CalendarMonthIcon sx={{ fontSize: "100%" }} />
                    <span class="text">
                      Время работы : {restaurantDetails?.hours}
                    </span>
                  </div>
                  <LanguageIcon sx={{ fontSize: "100%" }} />
                  <a href={restaurantDetails?.place_link} class="textt">
                    Перейти на сайт
                  </a>
                </div>
              </div>
            </Box>

            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                marginRight: "3%",
                marginTop: "3%",
                marginBottom: "3%",
                marginLeft: "60%",
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
