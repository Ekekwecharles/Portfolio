"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Merienda+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cantora+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

  :root {
    --app-height: 100vh;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 16px;
  }

  html:focus-within {
  scroll-behavior: smooth;
}

  body{
    height: 100vh;
    height: var(--app-height);
    max-width: 100%;
    backface-visibility: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    text-rendering: optimizeLegibility;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    background-color: #040505;
    background-image: url('/images/backgrnd.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    overflow: hidden;
     font-family: "Karla", sans-serif;
  }

  
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
`;
