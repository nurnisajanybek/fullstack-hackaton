import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./footer.css"

const Footer = () => {
  return (
    <div className='divv1' >
           <img className='tap' src="/icons/LOGO.png"  />
      <div className='div3'>
      <div className='birie'> 

           
      </div>

      <div className='div4'  > <Typography  >
        О TAPTYM_KG:
        </Typography>
        <Typography>О нас</Typography>
        <Typography>СМИ</Typography>
        <Typography>Источники и правила</Typography>
        <Typography>Безопасность и доверие путешественников</Typography>
        <Typography>Обратная связь</Typography>
        <Typography>Заявление о доступности платформы</Typography></div>
      <div className='div5'> <Typography >Получить советы:
        </Typography>
          <Typography>Написать отзыв</Typography>
          <Typography>Добавить место</Typography>
          <Typography>Зарегистрироваться </Typography>
          <Typography>Travellers' Choice</Typography>
          <Typography>ЭкоЛидеры</Typography>
          <Typography>Справочный центр</Typography>
          <Typography>Статьи о путешествиях</Typography></div>
      <div className='div6'> <Typography  >Сотрудничайте с нами:
          </Typography>
            <Typography>Владельцы объектов</Typography>
            <Typography>Бизнес плюс</Typography>
            <Typography>Платные объявления</Typography>
            <Typography>Реклама на нашем сайте</Typography>
            <Typography>Доступ к содержанию API</Typography></div>
     
       
         
      </div>
        <Typography sx={{marginTop:"5%", marginLeft:"10%"}}> Наши социальный сети:
        </Typography>

        <div className='network'>

        <a href='https://www.facebook.com/Tripadvisor/'><FacebookIcon/> </a>
        <a href='https://www.instagram.com/tripadvisor/'>
          <InstagramIcon/> </a>
        <WhatsAppIcon/> <Typography >0706041505</Typography>
        </div>
        <Typography variant="body2" color="text.secondary" sx={{marginTop:"60px", width:"200%"}}>
        Эта версия нашего веб-сайта предназначена для пользователей из страны Кыргызстана, для которых основным языком является Кыргызский и Русский. Если Вы живете в другой стране или регионе, выберите соответствующую версию TAPTYM_KG для своей страны или региона в выпадающем меню.
        </Typography>
    </div>
  );
};

export default Footer;