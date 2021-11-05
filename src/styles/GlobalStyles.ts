import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100vw;
        height: 100vh;
    }
    
    body, button, textarea, input {
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, bold {
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }

    body {
        background: #5CBD46;
    }

`