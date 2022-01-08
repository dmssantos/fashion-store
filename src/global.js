import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&family=Roboto:wght@500&display=swap');

  :root {
    --gradient: linear-gradient(to bottom right, #C3E3FA, #EFAFBC);
    --black1: #5F5F5F;
    --black2: #787878;
    --black3: #444444;
    --black4: #656565;
    --rose: #EFAFBC;
    --white: #fff;
    --light-blue: #79BCCF;
    --hover-color: #79BCCF;
    --font1: sans-serif;
    --roboto: 'Roboto', sans-serif;
    --montserrat: 'Montserrat', sans-serif;
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