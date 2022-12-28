import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --color-primary: #27AE60;
        --color-primary-2:#219653;
        --color-secundary: #EB5757;
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #E0E0E0;
        --color-grey-5: #999999;
        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F5F5F5;
        --color-sucess: #168821;
        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-information: #155BCB;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        overflow-x: hidden;
    }

    button {
        cursor: pointer;
        border: 0;
        background-color: transparent;
    }

    ul, ol, li {
        list-style: none;
    }

    section, aside, div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

`