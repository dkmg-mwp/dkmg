import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    font-family: Mulish;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
}

ul {
    margin: 0;
    padding: 0;
}


body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: #ffffff;
    color: #2b8872;
}


`;
export default GlobalStyle;
