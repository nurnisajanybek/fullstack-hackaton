import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useServices } from "../../../contexts/ServicesContextProvider";
import "./EntertainmentDetails.css";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Coments from "../../../components/coments/Coments";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EntertainmentUpdate from "../../../components/Entertainment/EntertainmentUpdate/EntertainmentUpdate";

const EntertainmentDetails = (entertainment) => {
  const { getEntertainmentDetails, entertainmentDetails, deleteEntertainment } =
    useServices();
  const { id } = useParams();
  const [showInps, setShowInps] = useState(false);

  useEffect(() => {
    getEntertainmentDetails(id);
  }, []);
  console.log(entertainmentDetails);
  return (
    <Container fixed>
      <Box>
        <div className="detail">
          <img className="img1" src={entertainmentDetails?.image} />

          <hr className="line" />
          <div className="detail1">
            <Typography className="num">
              {entertainmentDetails?.name}{" "}
            </Typography>
            <hr />

            <Typography>{entertainmentDetails?.info}</Typography>

            <Box sx={{ width: "100% ", marginLeft: "10px" }}>
              <div className="rating">
                {" "}
                <span>Рейтинг</span>
                <span className="feedback">999 отзывов</span>
              </div>

              <div>
                <LocationOnIcon />
                <a
                  href={entertainmentDetails?.map_link}
                  className="entertainment-adress"
                >
                  {entertainmentDetails?.address}
                </a>
              </div>
              <div className="div">
                <div>
                  <div>
                    <CalendarMonthIcon sx={{ fontSize: "100%" }} />
                    <span class="text">
                      Время работы : {entertainmentDetails?.hours}
                    </span>
                  </div>
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
                marginLeft: "60%",
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
                marginTop: "-5%",
                marginBottom: "3%",
              }}
              onClick={() => deleteEntertainment(id)}
            >
              Delete
            </Button>
          </div>
        </div>
        ;
        <div className="bottom-card-info">
          <Coments />
          {showInps ? (
            <>
              <EntertainmentUpdate entertainment={entertainmentDetails} />
            </>
          ) : (
            <></>
          )}
        </div>
      </Box>
    </Container>
  );
};

export default EntertainmentDetails;
