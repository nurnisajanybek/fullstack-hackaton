import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SendIcon from '@mui/icons-material/Send';
import GroupsIcon from '@mui/icons-material/Groups';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export default function MediaCard() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
  return (
    <Card sx={{ maxWidth: 1945}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Urban Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary">
        #53 из 93 в категории "отели" в регионе Бишкек
        </Typography>
        <FmdGoodIcon/>
        <Typography variant="body2" color="text.secondary">
        ул. ​Якова Логвиненко, 79, Бишкек 720000 Киргизия
        </Typography>
        <Typography sx={{marginLeft:"1400px", marginTop:"-40px"}}>
            <a href=''><EditIcon/> Отзыв</a>
            <a href=''><FavoriteBorderIcon sx={{marginLeft:"50px"}}/> Сохранить</a>
            <a href=''><IosShareIcon sx={{marginLeft:"50px"}}/> Поделиться</a>
        </Typography>
      </CardContent>
      <Card sx={{ maxWidth: 345, marginLeft:"300px", marginTop:"30px"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
        Самые низкие цены за проживание
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Button variant="contained" sx={{width:"152px"}}>Заезд</Button> <Button variant="contained" sx={{width:"155px"}}>Выезд</Button>
        </Typography>
      <Typography>=================================</Typography>
        <Button variant="contained" sx={{width:"310px"}}>Гостей <GroupsIcon sx={{marginLeft:"50px"}}/></Button>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:"center"}}>
        Зафиксируйте самую низкую цену с этих сайтов
        </Typography>
        <Button variant="contained" endIcon={<SendIcon />}>Booking.com   <Typography sx={{marginLeft:"70px"}}>3967 KGS</Typography></Button> 
        <Typography sx={{marginTop:"30px"}}>
               <Typography>✔Бесплатная отмена до 27.01.2023</Typography>
        <Typography>✔Бронируйте сейчас, платите в отеле</Typography>
        </Typography>
        <Button variant="contained" color="success" sx={{width:"310px"}}>
  Success
</Button>
<Typography sx={{textAlign:"center"}}>Цены предоставлены нашими партнерами и включают в себя среднюю стоимость номера за сутки и налоги и сборы, которые известны нашим партнерам. Подробную информацию можно получить на сайтах наших партнеров.</Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 945, marginLeft:"300px", marginTop:"30px"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center", marginLeft:"-800px"}}>
        О нас
        </Typography>
      <Typography>----------------------------------------------------------------------------------------------------------------------------------------------------------------------</Typography>
      <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center", marginLeft:"-730px"}}>
        5,0 Отлично 
        </Typography>
        <Typography>#53 из 93 в категории "отели" в регионе Бишкек</Typography>
        <Typography sx={{marginLeft:"10px"}} >
        <Typography>● Расположение</Typography>
        <Typography>● Обслуживание</Typography>
        <Typography>● Цена/качество</Typography>
        </Typography>
        <Typography sx={{marginLeft:"500px", marginTop:"-130px"}}>Urban Hotel расположен в центре Бишкека. Открытие ноябрь 2022. К услугам гостей бесплатный Wi-Fi на всей территории и круглосуточная стойка регистрации.</Typography>
        <Typography sx={{marginLeft:"500px"}}>---------------------------------------------------------------------------</Typography>
        <Typography  sx={{marginLeft:"500px"}}>Предложите поправки для улучшения показанных данных.</Typography>
      </CardContent>
    </Card>
    </Card>
  );
}
