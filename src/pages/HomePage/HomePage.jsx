import React from "react";
import "./HomePage.css";

const cards = [1, 2, 3, 4];

const HomePage = () => {
  return (
    <>
      <div className="first-block container">
        {/* first section */}
        <a className="each-link" href="#">
          <span>Отели</span>
          <svg viewBox="0 0 24 24" width="24px" height="24px" class="">
            <path
              fill-rule="evenodd"
              // clip-rule="evenodd"
              d="M2.832 5.228c0-.469.38-.85.85-.85h15.624c.47 0 .85.381.85.85v6.65c.68.561 1.22 1.392 1.22 2.543v4.847h-1.5v-1.673H3.284v1.673h-1.5V14.394c.025-.655.304-1.589 1.049-2.351V5.228zm2.634 5.587c.264-.034.542-.051.837-.051h3.896c-.503-.483-1.31-.931-2.433-.931-1.09 0-1.83.467-2.3.982zm7.39-.051h4.468l.036.003c.161.016.343.042.536.082a2.36 2.36 0 00-.221-.233c-.447-.41-1.18-.783-2.254-.783-1.078 0-1.751.273-2.181.584a2.395 2.395 0 00-.385.347zm5.8-1.283c-.726-.651-1.812-1.148-3.235-1.148-1.347 0-2.339.347-3.06.868-.342.248-.61.525-.821.802-.736-.86-2.005-1.67-3.774-1.67-1.629 0-2.733.712-3.434 1.503V5.878h14.324v3.603zM3.283 16.095h16.594V14.42c0-.703-.355-1.188-.888-1.545-.56-.374-1.263-.561-1.74-.612H6.304c-1.118 0-1.81.316-2.237.677-.57.482-.765 1.123-.783 1.496v1.658z"
            ></path>
          </svg>
        </a>

        {/* second section  */}
        <a className="each-link" href="#">
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
        <a className="each-link" href="#">
          <span>Рестораны</span>

          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.798 5.141L17.47 2.47l1.06 1.06-2.671 2.672c-.679.679-1.055 1.462-1.12 2.199-.043.5.054 1.003.327 1.472L19.97 4.97l1.06 1.06-4.906 4.906c.473.281.974.387 1.466.354.718-.047 1.467-.394 2.096-1.023A905.812 905.812 0 0022.24 7.7l.226-.228 1.067 1.055-.228.23a1012.001 1012.001 0 01-2.559 2.57c-.849.849-1.927 1.384-3.057 1.459a4.027 4.027 0 01-2.647-.768l-1.231 1.231 7.72 7.72-1.061 1.06-5.97-5.97-3 3-1.75-1.75-4.72 4.72-1.06-1.06 4.72-4.72-4.392-4.391a4.75 4.75 0 010-6.718L5 4.44l7.75 7.75 1.232-1.232a3.971 3.971 0 01-.737-2.686c.1-1.147.67-2.246 1.553-3.13zM13.439 15L5.028 6.588a3.25 3.25 0 00.33 4.21L11.5 16.94 13.44 15z"
            ></path>
          </svg>
        </a>

        {/* forth section */}

        <a className="each-link" href="#">
          <span>Форумы о&nbsp;путешествиях</span>

          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.75 3.25V13h-1.5V4.75L8 4.755v-1.5l13.75-.005zm-18.5 4h14.501l-.019 10.625H8.008L4.971 20.75H3.25V7.25zm1.5 1.5v10.143l2.66-2.518h8.825l.014-7.625H4.75z"
            ></path>
          </svg>
        </a>

        {/* fifth section */}

        <a className="each-link" href="#">
          <span>Авиабилеты</span>
          <svg
            viewBox="0 0 20.43 20.58"
            width="24px"
            height="24px"
            data-name="Layer 1"
          >
            <path d="M7.63 20.58L0 12.69l1.87-1.87 3.39.6c.08 0 .5 0 .73-.21l2.15-2.08c.02-.05.04-.13.04-.16 0-.02-.07-.1-.26-.19L.72 5.46l2.74-2.68 8.83 1.59c.2.02.49.02.62 0l3.21-3.24c.86-.78 2.58-1.75 3.76-.58 1.17 1.17.24 2.88-.49 3.71l-3.16 3.23c-.02.06-.05.24.01.61l1.52 8.83-2.7 2.43-3.29-6.84a.518.518 0 00-.18-.14L9.1 14.71s-.01.15.01.3l.55 3.62-2.04 1.95zM2.1 12.71l5.57 5.75.4-.38-.43-2.85c-.16-1.04.25-1.5.51-1.68l2.42-2.24c.45-.42.91-.46 1.2-.43.73.08 1.18.69 1.27.81l.06.1 2.45 5.1.59-.54-1.38-8.01c-.21-1.22.19-1.75.44-1.96l3.09-3.15c.25-.29.89-1.26.53-1.63-.36-.36-1.36.32-1.66.6l-3.27 3.29c-.47.45-1.35.42-1.83.35l-8.1-1.45-.63.62 5.21 2.4c.73.33.99.82 1.08 1.17.2.75-.23 1.38-.28 1.45l-.09.11-2.24 2.17c-.78.71-1.85.62-1.96.6l-2.67-.47-.27.27z"></path>
          </svg>
        </a>
      </div>
      {/* second block */}
      <div className="container second-block">
        <input type="search" name="" className="search" />
      </div>
      {/* third block*/}
      <h2 className="container">Ваши последние поисковые запросы</h2>
      {/* forth block*/}
      <h2 className="container">Вам также может понравиться</h2>
      {/* fifth block*/}
      <div className="container">
        <h2>Лучшие направления для Вашего следующего отпуска</h2>
        <div>
          {cards.map((card) => (
            <div className="" style={{ background: 'url("url_here")' }}>
              hello {card}
            </div>
          ))}
        </div>
      </div>
      {/* sixth block*/}
      <div className="sixth-block ">
        <div className="sixth-block-left">
          <img
            className="sova"
            src="https://static.tacdn.com/img2/travelers_choice/TC_logomark_solid_cream.svg"
          />
          <h2>Travellers' Choice: лучшее из лучшего</h2>
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