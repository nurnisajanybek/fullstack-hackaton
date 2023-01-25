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
import "./EntertainmentCard.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useFavorites } from "../../../contexts/FavoritesContextProvider";
import { useEffect } from "react";
import { checkStorage } from "../../../helpers/consts";
import { useState } from "react";

export default function EntertainmentCard({ fun, key }) {
  const theme = useTheme();
  const { setStorage, removeFromStorage, checkForFav } = useFavorites();

  const navigate = useNavigate();

  const [render, setRender] = useState(true);

  useEffect(() => {
    checkStorage("favorites");
  }, []);

  const handleLike = (key) => {
    if (checkForFav(fun, key)) {
      removeFromStorage(fun, key);
    } else {
      setStorage(fun, key);
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
          image={fun.image}
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
              {fun.name}
            </Typography>
            <Box sx={{ display: "flex", width: "320px" }}>
              <br />
              <Box>
                <Typography className="num">{fun.price}</Typography>
                <Button
                  className="btn"
                  onClick={() => navigate(`/fun/${fun.id}`)}
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
                  <a href={fun.map_link} className="fun-adress">
                    {fun.address}
                  </a>
                </div>
                <div className="div">
                  <div>
                    <div>
                      <CalendarMonthIcon sx={{ fontSize: "100%" }} />
                      <span class="text">Время работы : {fun.hours}</span>
                    </div>
                    <LanguageIcon sx={{ fontSize: "100%" }} />
                    <a href={fun.fun_link} class="textt">
                      Перейти на&nbsp;сайт отеля
                    </a>
                  </div>
                </div>
              </Box>
            </Box>
            <Button onClick={() => handleLike("favorites")}>
              {!checkForFav(fun, "favorites") ? (
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
