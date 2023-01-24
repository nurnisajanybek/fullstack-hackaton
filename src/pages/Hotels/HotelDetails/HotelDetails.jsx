import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./HotelDetails.css";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Coments from "../../../components/coments/Coments";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HotelUpdate from "../../../components/Hotels/HotelUpdate/HotelUpdate";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { isAdmin } from "../../../helpers/consts";

const HotelDetails = (hotel) => {
  const { getHotelDetails, hotelDetails, deleteHotel } = useServices();
  const { id } = useParams();
  const [showInps, setShowInps] = useState(false);
  const { user } = useAuth();

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
            <Typography className="hotel-info">{hotelDetails?.info}</Typography>

            <Box sx={{ width: "100% ", marginLeft: "10px" }}>
              <div className="rating">
                {" "}
                <span>Рейтинг</span>
                <span className="feedback">999 отзывов</span>
              </div>

              <div>
                <LocationOnIcon />
                <a href={hotelDetails?.map_link} className="hotel-adress">
                  {hotelDetails?.address}
                </a>
              </div>
              <div className="div">
                <div>
                  <div>
                    <CalendarMonthIcon sx={{ fontSize: "100%" }} />
                    <span class="text">
                      Время работы : {hotelDetails?.hours}
                    </span>
                  </div>
                  <LanguageIcon sx={{ fontSize: "100%" }} />
                  <a href={hotelDetails?.hotel_link} class="textt">
                    Перейти на&nbsp;сайт отеля
                  </a>
                  
                </div>
              </div>
            </Box>
            
            {isAdmin() ? (
              <>
                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px",
                    // marginRight: "3%",
                    // marginTop: "  10%",
                    // marginBottom: "3%",
                    // marginLeft: "60%",
                  }}
                  onClick={() => setShowInps(!showInps)}
                  >
                  Edit
                </Button>
                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px",
                    // marginTop: "-28%",
                    // marginBottom: "3%",
                  }}
                  onClick={() => deleteHotel(id)}
                  >
                  Delete
                </Button>
                  </>
            ) : (
              <>You are not admin</>
            )}
            </div>
            
          </div>

        
        <div className="bottom-card-info">
          <Coments />
          {showInps ? (
            <>
              <HotelUpdate hotel={hotelDetails} />
            </>
          ) : (
            <></>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default HotelDetails;
