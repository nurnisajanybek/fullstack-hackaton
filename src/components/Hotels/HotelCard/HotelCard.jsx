import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./HotelCard.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavorites } from "../../../contexts/FavoritesContextProvider";
import { useEffect } from "react";
import { checkStorage } from "../../../helpers/consts";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";

export default function HotelCard({ hotel }) {
  const theme = useTheme();
  const { setStorage, removeFromStorage, checkForFav } = useFavorites();

  const navigate = useNavigate();
  
  const [render, setRender] = useState(true);

  useEffect(() => {
    checkStorage('favorites');
  }, [])

  const handleLike = (key) => {
    if(checkForFav(hotel, key)){
      removeFromStorage(hotel, key);
    } else {
      setStorage(hotel, key);
    };
    setRender(!render)
  }

  return (
    <Box className="box-hotel">
      <Card className="cards-hotels">
        <CardMedia
          className="media-hotel"
          component="img"
          image={hotel.image}
        />

        <Box
          className="boxes"
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white ",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                color: "black",
                marginLeft: "12%",
              }}
            >
              {hotel.name}
            </Typography>
            <Box className="boxes-number1">
              <br />
              <Box className="boxes-hotel">
                <Typography className="type-hotel">{hotel.price}</Typography>
                <Button
                  className="btn-hotel"
                  onClick={() => navigate(`/hotels/${hotel.id}`)}
                >
                  Показать
                </Button>
                <div className="check"> </div>
              </Box>

              <hr className="hr" />

              <Box sx={{ width: "100% ", marginLeft: "10px" }}>
                <div className="rating">
                  {" "}
                  <span>Рейтинг</span>
                  <span className="feedback">999 отзывов</span>
                </div>

                <div>
                  <LocationOnIcon />
                  <a href={hotel.map_link} className="hotel-adress">
                    {hotel.address}
                  </a>
                </div>
                <div className="div">
                  <div>
                    <div>
                      <CalendarMonthIcon sx={{ fontSize: "100%" }} />
                      <span className="text">Время работы : {hotel.hours}</span>
                    </div>
                    <LanguageIcon sx={{ fontSize: "100%" }} />
                    <a href={hotel.hotel_link} className="textt">
                      Перейти на&nbsp;сайт отеля
                    </a>
                  </div>
                </div>
              </Box>
            </Box>
            <Button onClick={() => handleLike('favorites')}>
              {
                !checkForFav(hotel, 'favorites') ? 
                <FavoriteBorderIcon />
                :
                <FavoriteIcon />
              }
            </Button>
          </CardContent>
          {/* <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box> */}
        </Box>
      </Card>
    </Box>
  );
}
