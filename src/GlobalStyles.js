import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;

    }
    body {
        width: 100%;
        height: 100%;
        background-color: #1C1D1E;

        
    }

    @media only screen and (min-width: 1024px) {
    body {
        
        background-color: #000000;
    }

  }
`;

export default GlobalStyles;
