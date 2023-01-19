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

import "./RestuarantCard.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ place, key }) {
  const theme = useTheme();

  const navigate = useNavigate();

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
                  <a href={place.map_link} className="place-adress">
                    {place.address}
                  </a>
                </div>
                <div className="div">
                  <div>
                    <div>
                      <CalendarMonthIcon sx={{ fontSize: "100%" }} />
                      <span class="text">Время работы : {place.hours}</span>
                    </div>
                    <LanguageIcon sx={{ fontSize: "100%" }} />
                    <a href={place.place_link} class="textt">
                      Перейти на&nbsp;сайт отеля
                    </a>
                  </div>
                </div>
              </Box>
            </Box>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>
    </Box>
  );
}
