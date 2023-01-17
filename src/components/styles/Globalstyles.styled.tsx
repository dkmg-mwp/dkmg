import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    font-family: Mulish;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color-scheme: light dark;
    color: #2b8872;
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
}

h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5em 0em;
    line-height: 1.5em;
    letter-spacing: 0.01em;
}

h2 {
    font-size: 2.25rem;
    font-weight: medium;
    margin: 0.5em 0em;
}

h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.3em;
    margin-left: 5px;
}

h4 {
    font-size: 1.25rem;
    font-weight: normal;
    margin-top: 2px;
    margin-bottom: 2px;
}

h5 {
    font-size: 1rem;
    margin: 0;
}

p {
    padding-top: 0.5em;
    font-size: 0.875;
    margin: 0;
}


`;
export default GlobalStyle;
