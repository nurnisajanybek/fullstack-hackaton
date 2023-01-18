import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LanguageIcon from "@mui/icons-material/Language";

import "./HotelCard.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel, key }) {
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Box className="box" key={key}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          className="media"
          component="img"
          sx={{ width: 250 }}
          image="https://media-cdn.tripadvisor.com/media/photo-s/0a/6e/6a/95/gray-wolf-deluxe-double.jpg"
          alt="Live from space album cover"
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
              sx={{ fontSize: "20px", fontWeight: "700", color: "black", marginLeft:"12%"}}
            >
              {hotel.name}
            </Typography>
            <Box sx={{ display: "flex", width: "320px" }}>
              <br />
              <Box>
              
                <Typography className="num">22 736 KGS</Typography>
                <Button
                  className="btn"
                  onClick={() => navigate(`/hotels/${hotel.id}`)}
                >
                  Показать
                </Button>
                <div className="check">
                  {" "}
               
                
                </div>
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
                  <b>53,7 км </b>" от: Йеллоустонский национальный парк"
                
                </div>
                <div className="div">
                 
                  <div>
                    <LanguageIcon sx={{ fontSize: "100%" }} />
                    <span class="text">Перейти на&nbsp;сайт отеля</span>
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
