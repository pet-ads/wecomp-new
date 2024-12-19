// External library
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --background-color: #F4F3EF;
    --primary-text-color: #FFFFFF;
    --secundary-text-color: #000000;
    --primary-color: #0E6700;
    --secundary-color: #1A800A;
  }

 * {
    margin: 0;
    padding: 0;
    
  }

  body {
    display: flex;
    flex-direction: column;

    background-color: var(--background-color);
    color: var(--secundary-text-color);

    font-family: "MontSerrat"; 
  }
`;

export default GlobalStyles;
