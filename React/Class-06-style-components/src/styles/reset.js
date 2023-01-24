import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-align: center;
    }

    body {
        font-size: 1.6rem;
        background: ${(props) => props.theme.color.neutral};
        color: ${({theme}) => theme.color.font};
    }

    button, input, select, textarea {
        font-size: 1.6rem;
        border: none;
    }
`