import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --gradient: linear-gradient(to bottom right, #C3E3FA, #EFAFBC);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: flex-end;

    overflow: hidden;
  }
`;