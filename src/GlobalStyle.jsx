import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Roboto";
  src: local("Roboto Regular"),
    local("Roboto-Regular"),
    url("/fonts/Roboto-Regular.woff2") format("woff2");    
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto Medium"),
    local("Roboto-Medium"),
    url("/fonts/Roboto-Medium.woff2") format("woff2");    
    
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto Medium"),
    local("Roboto-Medium"),
    url("/fonts/Roboto-Bold.woff2") format("woff2");    
    
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto Medium"),
    local("Roboto-Medium"),
    url("/fonts/Roboto-Black.woff2") format("woff2");    
    
  font-weight: 700;
  font-style: normal;
}

* {
    margin: 0;
    padding: 0;    
    box-sizing: border-box;    
  }
body {
    font-family: "Roboto", sans-serif; 
    font-weight: 400;
  }
::-webkit-scrollbar {
    width: 0;
  }
.unvisible{
  display: none;  
}  
    
`
