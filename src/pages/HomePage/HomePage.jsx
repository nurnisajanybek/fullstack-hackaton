import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ForestTwoToneIcon from '@mui/icons-material/ForestTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

const cards = [1, 2, 3, 4];

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="first-block container">
        {/* first section */}
        <a onClick={() => navigate("/hotels")} className="each-link">
          <span>Отели</span>

          <svg
            className="svg-active"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            class=""
          >
            <path
              className="icon6"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.832 5.228c0-.469.38-.85.85-.85h15.624c.47 0 .85.381.85.85v6.65c.68.561 1.22 1.392 1.22 2.543v4.847h-1.5v-1.673H3.284v1.673h-1.5V14.394c.025-.655.304-1.589 1.049-2.351V5.228zm2.634 5.587c.264-.034.542-.051.837-.051h3.896c-.503-.483-1.31-.931-2.433-.931-1.09 0-1.83.467-2.3.982zm7.39-.051h4.468l.036.003c.161.016.343.042.536.082a2.36 2.36 0 00-.221-.233c-.447-.41-1.18-.783-2.254-.783-1.078 0-1.751.273-2.181.584a2.395 2.395 0 00-.385.347zm5.8-1.283c-.726-.651-1.812-1.148-3.235-1.148-1.347 0-2.339.347-3.06.868-.342.248-.61.525-.821.802-.736-.86-2.005-1.67-3.774-1.67-1.629 0-2.733.712-3.434 1.503V5.878h14.324v3.603zM3.283 16.095h16.594V14.42c0-.703-.355-1.188-.888-1.545-.56-.374-1.263-.561-1.74-.612H6.304c-1.118 0-1.81.316-2.237.677-.57.482-.765 1.123-.783 1.496v1.658z"
            ></path>
          </svg>
        </a>

        {/* second section  */}

        <a onClick={() => navigate("/fun")} className="each-link">
          <span>Развлечения</span>

          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.25 5.25h19.5v4.454l-.536.16a2.752 2.752 0 000 5.272l.536.16v4.454H2.25v-4.454l.536-.16a2.752 2.752 0 000-5.272l-.536-.16V5.25zm1.5 1.5v1.876a4.25 4.25 0 010 7.748v1.876h16.5v-1.876a4.25 4.25 0 010-7.748V6.75H3.75z"
            ></path>
            <path d="M12 15a1 1 0 110 2 1 1 0 010-2zM12 11.5a1 1 0 110 2 1 1 0 010-2zM12 8a1 1 0 110 2 1 1 0 010-2z"></path>
          </svg>
        </a>

        {/* third section */}
        <a  onClick={() => navigate("/place")} className="each-link">
          <span >Рестораны</span>

          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.798 5.141L17.47 2.47l1.06 1.06-2.671 2.672c-.679.679-1.055 1.462-1.12 2.199-.043.5.054 1.003.327 1.472L19.97 4.97l1.06 1.06-4.906 4.906c.473.281.974.387 1.466.354.718-.047 1.467-.394 2.096-1.023A905.812 905.812 0 0022.24 7.7l.226-.228 1.067 1.055-.228.23a1012.001 1012.001 0 01-2.559 2.57c-.849.849-1.927 1.384-3.057 1.459a4.027 4.027 0 01-2.647-.768l-1.231 1.231 7.72 7.72-1.061 1.06-5.97-5.97-3 3-1.75-1.75-4.72 4.72-1.06-1.06 4.72-4.72-4.392-4.391a4.75 4.75 0 010-6.718L5 4.44l7.75 7.75 1.232-1.232a3.971 3.971 0 01-.737-2.686c.1-1.147.67-2.246 1.553-3.13zM13.439 15L5.028 6.588a3.25 3.25 0 00.33 4.21L11.5 16.94 13.44 15z"
            ></path>
          </svg>
        </a>

        {/* forth section */}

        {/* fifth section */}
      </div>
      {/* second block */}
      <div className="container second-block">
        <div className="search-container">
        <div className="best-trip-txt">
            
            <span className="bold"> Планируйте свои лучшие дни  <ForestTwoToneIcon/></span>
            <h5 className="h5-bold" >Вместе с нами </h5>
         
           
          </div>
        <Button
              className="explor"
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "20px",
                width: "25%",
                fontWeight: "bold",
                marginLeft:"10%"
              }}
              onClick={() => navigate("/aboutus")}
            >
            О нас  
            </Button>
        </div>
      </div>
      {/* third block*/}
      <h2 className="container-h2" >Наши рекомендуемые места </h2>
      {/* forth block*/}
      <h2 className="container-h2">Вам также может понравиться</h2>
      {/* test cards with rating */}
      <div className="container">
        <div className="test-block">
          {/* <div className="class1"> */}
          <a className="test-card-rating">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/217442989.jpg?k=6217cb43dd78c78daf0cda5cd6690d1db9c1d86acdc433a7221ebf983667b216&o=&hp=1"
              alt=""
            />
            <span >(Garden Hotel & SPA)</span>
         
            <span > (Южная Магистраль пересекает ул. Баха. Эмилбека Айлчиева 61, 720047 Бишкек,) </span>
          </a>
          <a className="test-card-rating">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/03/4b/60/cosmopark.jpg?w=500&h=400&s=1"
              alt=""
            />
            <span >(СosmopPark)</span>
           
            <span > (7 мкрн, ул. К.Маркса перес. ул. Донецкая, 58 Юнусалиев проспектиси, Бишкек) </span>
          </a>
          {/* </div> */}
          {/* <div className="class2"> */}

          <a className="test-card-rating">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1c/80/5b/29/caption.jpg"
              alt=""
            />
            <span >(Облако 53)</span>
            <div>rating</div>
            <span > (ул. Раззакова, 19, Бишкек 720000 Киргизия) </span>
          </a>
          {/* </div> */}
        </div>
      </div>
      {/* before fifth block button for layout of best trips */}
      {/* <div className="container">
        <div className="best-trip-block">
          <div className="best-trip-txt">
            <source
              // className="picture"
              media="(max-width: 400px)"
              srcset="https://tripplanet.ru/wp-content/uploads/asia/kyrgyzstan/bishkek/dostoprimechatelnosti-bishkeka.jpg"
            ></source>
           
           
          </div>
          <div className="best-trip-shadow"></div>
        </div>
      </div> */}
      {/* fifth block*/}

      <img className="img-bishkek" src="https://tripplanet.ru/wp-content/uploads/asia/kyrgyzstan/bishkek/dostoprimechatelnosti-bishkeka.jpg" alt="" />
      <div className="container">
        <h2 className="h2-home">
          Лучшие направления для Вашего следующего отпуска по всему кыргызстану 
        </h2>
        {/* <div>
          {cards.map((card) => (
            <div
              className="card-with-title"
              style={{
                background:
                  "url(`https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/f9/eb/caption.jpg?w=600&h=600&s=1&cx=941&cy=299&chk=v1_18cfa51ea9b832b15689`)",
              }}
            >
              hello {card}
            </div>
          ))}
        </div> */}
      </div>
      {/* test */}
      <div className="container ">
        <div className="test-block">
          {/* <div className="class1"> */}

          <div className="test">
            <h2 className="test-title">
            Иссык-Куль  — бессточное озеро  Кыргызстана 
            </h2>
          </div>
          {/* </div> */}
          {/* <div className="class2"> */}

          <div className="test1">
            <h2 className="test-title">
            Современная горнолыжная база "Каракол"
            </h2>
          </div>
          <div className="test2">
            <h2 className="test-title">
            Священная гора Сулайман-Тоо
            </h2>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* sixth block*/}
      <div className="sixth-block ">
        <div className="sixth-block-left">
          <img
            className="sova"
            src="/icons/help.png"
          />
          <h2 className="h2-travel">  TAPTYM_KG Choice: лучшее из лучшего</h2>
        </div>
        <img
          className="sixth-block-right"
          src="https://static.tacdn.com/img2/brand/feed/tc_cards_desktop2x.jpeg"
        />
      </div>
      ;
    </>
  );
};

export default HomePage;
