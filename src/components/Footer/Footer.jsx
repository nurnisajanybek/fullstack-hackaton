import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 1945 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="© Tripadvisor LLC, 2023 г. Все права защищены."
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography sx={{marginLeft:"10px", marginTop:"-1px"}} >
        О Tripadvisor:
        <Typography>О нас</Typography>
        <Typography>СМИ</Typography>
        <Typography>Источники и правила</Typography>
        <Typography>Безопасность и доверие путешественников</Typography>
        <Typography>Обратная связь</Typography>
        <Typography>Заявление о доступности платформы</Typography>
        </Typography>
        <Typography sx={{marginLeft:"900px", marginTop:"-170px"}}>Получить советы:
          <Typography>Написать отзыв</Typography>
          <Typography>Добавить место</Typography>
          <Typography>Зарегистрироваться </Typography>
          <Typography>Travellers' Choice</Typography>
          <Typography>ЭкоЛидеры</Typography>
          <Typography>Справочный центр</Typography>
          <Typography>Статьи о путешествиях</Typography>
          <Typography sx={{marginLeft:"600px", marginTop:"-190px"}} >Сотрудничайте с нами:
            <Typography>Владельцы объектов</Typography>
            <Typography>Бизнес плюс</Typography>
            <Typography>Платные объявления</Typography>
            <Typography>Реклама на нашем сайте</Typography>
            <Typography>Доступ к содержанию API</Typography>
          </Typography>
        </Typography>
        <Typography sx={{marginTop:"50px"}}> Наши социальный сети:
        </Typography>
        <a href='https://www.facebook.com/Tripadvisor/'><FacebookIcon/> </a>
        <a href='https://twitter.com/TripAdvisor'><TwitterIcon/> </a>
        <a href='https://www.instagram.com/tripadvisor/'><InstagramIcon/> </a>
        <Typography variant="body2" color="text.secondary" sx={{marginTop:"60px"}}>
        Эта версия нашего веб-сайта предназначена для пользователей из страны Россия, для которых основным языком является Русский. Если Вы живете в другой стране или регионе, выберите соответствующую версию Tripadvisor для своей страны или региона в выпадающем меню.
        </Typography>
      </CardContent>
    </Card>
  );
}
