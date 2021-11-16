import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  

  :root {
    --gradient: linear-gradient(to bottom right, #C3E3FA, #EFAFBC);
    --black1: #5F5F5F;
    --black2: #787878;
    --hover-color: #79BCCF;
    --font1: sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: flex-end;

    overflow: hidden;
  }
`;