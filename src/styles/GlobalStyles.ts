import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    html, body, #root {
        min-height: 100%;

        --primary: #f48024;
        --secondary: #0095ff;
        --tertiary: #fbf2d4;
        --quaternary: #FDF7E3;
        --gold: #FFCC00;
        --silver: #C5C5C5;
        --copper: #ab825f;
        --hover-gray: #E4E6E8;
    }
`;
