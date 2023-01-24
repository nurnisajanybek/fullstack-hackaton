import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import "./reviews.css"
import Search from './Search';

const Reviews = () => {
    return (
        <div>
              <Container fixed>

<Box className='h1-h2'>
 
    <h1 className='h1-reviews'>Оставьте отзыв о месте, которое Вы посетили</h1>
    <h4 className='h2-reviews'>О чем бы Вы хотели написать?</h4>
    <div>
        <ul className='poiTypes'>
           <li >Отель </li> 
           <li >Ресторан </li>
       <li>Развлечения</li>
        </ul>
    
 
    </div>
    
    
    <h1 className='h1-reviews1'>поделитесь своим опытом и  напишите отзыв</h1>
        <Search className="stack"/>
    
       
</Box>
</Container>
        </div>
    );
};

export default Reviews;