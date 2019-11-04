import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=EB+Garamond&display=swap');
    html, body {
        margin: 0;
    }
    * {
        font-family: 'EB Garamond', serif;
    }
    ::selection {
        background: #FF6347;
        color: white;
    }
    
   
`
