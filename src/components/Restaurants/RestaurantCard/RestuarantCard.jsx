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
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./RestuarantCard.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../../contexts/FavoritesContextProvider";
import { useEffect } from "react";
import { useState } from "react";
import { checkStorage } from "../../../helpers/consts";

export default function RestaurantCard({ place, key }) {
  const theme = useTheme();
  const { setStorage, removeFromStorage, checkForFav } = useFavorites();

  const navigate = useNavigate();

  const [render, setRender] = useState(true);

  useEffect(() => {
    checkStorage("favorites");
  }, []);

  const handleLike = (key) => {
    if (checkForFav(place, key)) {
      removeFromStorage(place, key);
    } else {
      setStorage(place, key);
    }
    setRender(!render);
  };

  return (
    <Box className="box" key={key}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          className="media"
          component="img"
          sx={{ width: 250 }}
          image={place.image}
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
              {place.name}
            </Typography>
            <Box sx={{ display: "flex", width: "320px" }}>
              <br />
              <Box>
                <Typography className="num">{place.price}</Typography>
                <Button
                  className="btn"
                  onClick={() => navigate(`/place/${place.id}`)}
                >
                  ????????????????
                </Button>
                <div className="check"> </div>
              </Box>

              <hr className="hr" />

              <Box sx={{ width: "100% ", marginLeft: "10px" }}>
                <div className="rating">
                  {" "}
                  <span>??????????????</span>
                  <span className="feedback">999 ??????????????</span>
                </div>

                <div>
                  <LocationOnIcon />
                  <a href={place.map_link} className="place-adress">
                    {place.address}
                  </a>
                </div>
                <div className="div">
                  <div>
                    <div>
                      <CalendarMonthIcon sx={{ fontSize: "100%" }} />
                      <span class="text">?????????? ???????????? : {place.hours}</span>
                    </div>
                    <LanguageIcon sx={{ fontSize: "100%" }} />
                    <a href={place.place_link} class="textt">
                      ?????????????? ????&nbsp;???????? ??????????
                    </a>
                  </div>
                </div>
              </Box>
            </Box>
            <Button onClick={() => handleLike("favorites")}>
              {!checkForFav(place, "favorites") ? (
                <BookmarkBorderIcon />
              ) : (
                <BookmarkIcon />
              )}
            </Button>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
