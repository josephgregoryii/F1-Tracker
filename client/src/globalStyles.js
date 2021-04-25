import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Formula1-Bold';
    src: local('Formula1-Bold'), url(./fonts/Formula1-Bold.otf) format('opentypefont');
}
body {
    font-size: large;
    background-color: white;
}
`
 
export default GlobalStyle;