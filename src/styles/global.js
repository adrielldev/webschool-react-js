import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    ul,ol,li{
        list-style: none;
    }
    button {
        outline: none;
        cursor: pointer;
    }
    :root {
        --body: #FDF0E7;
        --white: #FFFFFF;
        --black: #000000;
        --error: #FF0000;
        --blue-0: #C8FCFA;
        --blue-1: #68DAD8;
        --pink-0: #E08692;
        --pink-1: #E26786;
        --pink-2: #FF6C80;
        --grey-0: #F4F4F4;
        --grey-1: #6B6B6B;
        --bg-modal: #00000099;
    }
    body {
        background: var(--body);
        overflow: ${(props) => props.o};
        max-height: ${(props) => props.mh} ;
    }

    html::-webkit-scrollbar {
        width: 10px;
    }

    html::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: var(--pink-1);
    }

    html::-webkit-scrollbar-thumb:hover {
        background: var(--pink-2);
    }

    html {
        scroll-behavior: smooth;
    }
`;
