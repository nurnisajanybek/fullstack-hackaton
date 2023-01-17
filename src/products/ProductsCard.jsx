import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import LanguageIcon from '@mui/icons-material/Language';

import "./products.css"
import { Button } from '@mui/material';

export default function ProductsCard() {
  const theme = useTheme();

  return (
    <Box className='box'>

    <Card sx={{ display: 'flex', }}   >
             <CardMedia 
             className='media'
        component="img"
        sx={{ width: 250 }}
        image="https://media-cdn.tripadvisor.com/media/photo-s/0a/6e/6a/95/gray-wolf-deluxe-double.jpg"
        alt="Live from space album cover"
        />

      <Box className='boxes' sx={{ display: 'flex', flexDirection: 'column' ,  backgroundColor:"white "  ,  }}>
      
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6" sx={{fontSize:"20px",    fontWeight:"700", color:"black", }}>
          Gray Wolf Inn and Suites
          </Typography>
          <Box sx={{display:"flex", width:"320px"}}>
            <br />
            <Box>
              <img className='icons' src="https://static.tacdn.com/img2/branding/hotels/booking%20logo.png" alt="" />
              <Typography className='num'>22 736 KGS</Typography>
              <Button className='btn'>Показать</Button>
              <div className='check'> <div>
                 <CheckIcon/>
              </div>
              <div>
                <Typography>Бесплатная отмена</Typography>
              </div></div>
             
            
            </Box>
            <hr className='hr'/>
        
            <Box  sx={{marginTop:"10px" , justifyContent:"center", alignItems:"center" ,}}>
              <div className='check'> <Typography sx={{fontSize:"80%",  marginLeft:"25px"}}>Expedia.com </Typography><NorthEastIcon sx={{fontSize:"70%", marginTop:"5%", }}/></div>
               <Typography  sx={{fontSize:"80%" , fontWeight:"bold", marginLeft:"25px"}}>13 420 KGS</Typography>

               <div className='check'> <Typography sx={{fontSize:"80%", marginLeft:"30px"}}>Agoda.com </Typography><NorthEastIcon sx={{fontSize:"70%", marginTop:"5%"}}/></div>
               <Typography  sx={{fontSize:"80%" , fontWeight:"bold",  marginLeft:"30px"}}>13 420 KGS</Typography>

               <div className='check'> <Typography sx={{fontSize:"80%" , marginLeft:"35px"}}>Trip.com </Typography><NorthEastIcon sx={{fontSize:"70%", marginTop:"5%"}}/></div>
               <Typography  sx={{fontSize:"80%" , fontWeight:"bold", marginLeft:"35px"}}>Trip.com</Typography>
               <hr />
               <Typography sx={{fontSize:"70%", fontWeight:"800",  marginLeft:"20px"}}>  Показать все предложения (5) от  11 041 KGS</Typography>

            </Box>
            <hr  />
       
            <Box sx={{width:"100% ", marginLeft:"10px"     }}>
       
             <div className='rating'> <span>Рейтинг</span>
   
                 <span className='feedback'>999 отзывов</span></div>

                 <div>
                < LocationOnIcon/>
                <b>53,7 км </b>
                " от: Йеллоустонский национальный парк"
                <div className='uest' data-clicksource="PopIndex" onclick="widgetEvCall('handlers.clickPopIndex', event, this);">№ 15 из 41 отеля в Уэст-Йеллоустоун</div>
                 </div>
                 <div className='div'>
                   <div>
                 <WifiIcon sx={{fontSize:"100%",}}/>
                   <span class="text">Бесплатный Wi-Fi</span>
                 </div>
                 <div>
                  <LocalParkingIcon  sx={{fontSize:"100%",}}/>
                 <span class="text">Бесплатная парковка</span>
                 </div>
                 <div>
                 <LanguageIcon  sx={{fontSize:"100%",}}/>
                 <span class="text">Перейти на&nbsp;сайт отеля</span>
                 </div>
                 </div>
                

                
                 
                
         
            
            </Box>
          </Box>
        
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
       
       
        </Box>
      </Box>
     
    </Card>
   
        </Box>
        
  );
}