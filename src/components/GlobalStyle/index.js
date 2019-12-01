import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,700,700i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap');
    html, body {
        margin: 0;
    }
    * {
        font-family: 'EB Garamond', serif;
    }
    ::selection {
        background: rgba(63, 104, 196, 1);
        color: white;
    }
    
   
`
