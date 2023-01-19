import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./HotelDetails.css";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Coments from "../../../components/coments/Coments";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HotelDetails = ( hotel) => {
  const { getHotelDetails, hotelDetails,  } = useServices();
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


            <Box sx={{ width: "100% ", marginLeft: "10px" }}>
                
                <div className="rating">
                  {" "}
                  <span>Рейтинг</span>
                  <span className="feedback">999 отзывов</span>
                </div>

                <div>
                  <LocationOnIcon />
                  <b className="hotel-adress">{hotelDetails?.address}</b>
                </div>
                <div className="div">
                  <div>
                    <div>
                      <CalendarMonthIcon sx={{ fontSize: "100%" }} />
                      <span class="text">Время работы : {hotelDetails?.hours}</span>
                    </div>
                    <LanguageIcon sx={{ fontSize: "100%" }} />
                    <a href={hotelDetails?.hotel_link}></a>
                    <span class="textt">Перейти на&nbsp;сайт отеля</span>
                  </div>
                </div>
              </Box>

            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                marginRight: "3%",
                marginTop: "-5%",
                marginBottom: "3%",
                marginLeft:"60%"
              }}
            >
              Edit
            </Button>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
                marginTop: "-5%",
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

export default HotelDetails;
