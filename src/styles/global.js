import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 6px;
        height: 6px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,.55);
        border-radius: 10px;
        margin: 2px;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
    }

    *, *::after, *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body{
        /* position: relative; */
        background: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.textColor};
        /* min-height: 100vh; */
        font-family: 'Nunito Sans', sans-serif;
        transition: all 0.1s ease;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: Poppins, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    pre {
        white-space: pre-wrap;       /* Since CSS 2.1 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;   
    }

    button, input {
        font-size: 1.4rem;
        border: 0;
        outline: 0;
        color: ${({ theme }) => theme.textColor};
        background: transparent;
    }

    ul {
        list-style: none;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: var(--primary-color);
        width: 50px;
        height: 100%;
        top: 0;
        margin-top: 0;
        background: rgba(0,0,0,0.4);
        transition: background 0.2s ease;
    }

    .swiper-pagination-bullet-active {
        background: var(--primary-color);

    }

    .swiper-button-disabled {
        background: unset;
        display: none;
    }

    .swiper-button-next:hover,
    .swiper-button-prev:hover {
        background: rgba(0,0,0,0.6);
    }

    .swiper-button-next {
        right: 0;
    }

    .swiper-button-prev {
        left: 0;
    }
`;
