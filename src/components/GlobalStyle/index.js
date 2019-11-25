import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,700,700i&display=swap');
    html, body {
        margin: 0;
    }
    * {
        font-family: 'EB Garamond', serif;
    }
    ::selection {
        background: #F37A7E;
        color: white;
    }
    
   
`
