import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Coments from "../../../components/coments/Coments";
import "./HotelDetails.css";

const HotelDetails = () => {
  return(

    <Container fixed>


  <Box>

   <div className="detail">

    <img className="img1" src="https://media-cdn.tripadvisor.com/media/photo-s/0a/6e/6a/95/gray-wolf-deluxe-double.jpg" alt="" />

 
      <hr className="line" />
    <div className="detail1">


    <Typography className="num">Novotel </Typography>
    <hr />
    <Typography className="num">22 736 KGS</Typography>
    <hr />
    <Typography>Ищете, где остановиться в Абу-Даби? Можете больше не искать. Романтический отель Дузит Тани Абу-Даби позволит вам познакомиться с Абу-Даби наилучшим образом.

Номера в Дузит Тани Абу-Даби оборудованы ТВ с плоским экраном, кондиционером и мини-баром, что обеспечивает исключительный комфорт и удобство. Гости могут всегда оставаться на связи благодаря бесплатному Wi-Fi.</Typography>
    
    

    <Button sx={{backgroundColor:"black" , color:"white", borderRadius:"10px", marginRight:"3%",marginTop:"3%", marginBottom:"3%"}}>Edit</Button>
    <Button sx={{backgroundColor:"black" , color:"white", borderRadius:"10px" , marginTop:"3%", marginBottom:"3%"}}>Delete</Button>
    </div>
  </div>;
    <Coments/>  
  </Box>
    </Container>
  )
};


export default HotelDetails;
