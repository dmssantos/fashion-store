import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Roboto:wght@500&display=swap');

  :root {
    //fonts
    --montserrat: 'Montserrat', sans-serif;
    --roboto: 'Roboto', sans-serif;
    --font-normal: sans-serif;
    --semi-bold: 600;
    //sizes
    --logo: 36px;
    --menu: 18px;
    --button: 18px;

    --header1: 24px;
    --header2: 64px;
    --header3: 18px;
    --header4: 12px;
    --paragraph: 14px:
    --icon: 32px;
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

    --fullSize: calc(100vh - 100px)
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