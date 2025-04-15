import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{

    // 100 = light 
    // 500 = medium 
    // 1000 = dark

    --100-white: #F4F3EF;
    --200-white: #FFFFFF;

    --500-green: #1A800A;
    --600-green: #0E6700;

    --1000-black: #000000;
  }

 * {
    margin: 0;
    padding: 0;
    
  }

  body {
    display: flex;
    flex-direction: column;

    100-white: var(--100-white);
    color: var(--1000-black);

    font-family: 'Montserrat'; 
  }
`;

export default GlobalStyles;
