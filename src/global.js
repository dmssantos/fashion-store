import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Roboto:wght@500&display=swap');

  :root {
    //fonts
    --montserrat: 'Montserrat', sans-serif;
    --roboto: 'Roboto', sans-serif;
    --font-normal: sans-serif;
    --medium: 500;
    --semi-bold: 600;
    //sizes
    --logo: 2.25em;
    --menu: 1.12em;
    --button: 1.12em;

    --header1: 1.4em; /* 1.5em*/
    --header2: 3.5em; /*4em */
    --header3: 1.12em;
    --header4: 0.75em;
    --paragraph: 0.87em:
    --icon: 2em;
    
    //Collors
    --gradient: linear-gradient(to bottom right, #C3E3FA, #EFAFBC);

    --blackLogo: #5F5F5F;
    --blackMenu: #787878;
    --blackTitle: #444444;
    --blackParagraph: #656565;
    --blackCircle: #1C1B20;

    --primaryColor: #79BCCF;
    --SecondColor: #EFAFBC;

    --whiteNormal: #fff;

    --fullSize: calc(100vh - 80px)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    border-style: none;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
  }
`;