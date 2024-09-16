import { css, Global } from "@emotion/react";

import palette from "../palette";

const globalStyles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        scrollbar-width: thin;
        scrollbar-color: #a6b0c1 transparent;
    }

    // Disable scrolling for block
    [data-block-overflow="true"],
    [data-block-overflow="true"] * {
        touch-action: pan-x;
    }

    // Add font family
    @font-face {
        font-weight: normal;
        font-style: normal;
    }

    html,
    body,
    #root {
        height: 100%;
        overscroll-behavior: none;
    }

    html {
        background: #ffffff;
    }

    body {
        font-family: Archivo, Arial, sans-serif, serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        text-rendering: optimizeSpeed;
        color: ${palette.grey[900]};

        margin: 0;

        &.block-body-scroll {
            overflow: hidden;
            width: 100%;

            &.ios {
                position: fixed;
            }
        }
    }

    img,
    picture,
    video,
    canvas {
        display: block;
        max-width: 100%;
    }

    button {
        border: none;
        outline: none;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: box-shadow 600000s 0s, color 600000s 0s;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    #root {
        isolation: isolate;
    }

    ul,
    li {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        background-color: transparent;
    }

    a:active,
    a:hover,
    a:focus,
    a:visited,
    a:focus-within,
    a:focus-visible {
        outline: none;
        color: inherit;
    }
`;

export const MyGlobalStyles = () => {
    return <Global styles={globalStyles} />;
};
