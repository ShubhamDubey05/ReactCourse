import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: linear-gradient(to right, #1a1a1d, #2e2e2e);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  input, button {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
