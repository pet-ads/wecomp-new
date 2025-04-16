import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --green-500: #1A800A;

    --white-100: #FFFFFF;
    
    --gray-200: #F4F3EF;
    --gray-1000: #111111;

    --green-500: #1A800A;
    --green-700: #0E6700;
  }

 * {
    margin: 0;
    padding: 0;
    
  }

  body {
    display: flex;
    flex-direction: column;

    background-color: var(--gray-200);
    color: var(--gray-1000);

    font-family: 'Montserrat'; 
  }
`;

export default GlobalStyles;
