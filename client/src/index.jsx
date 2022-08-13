import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import dotenv from "dotenv";
import { store } from "./redux/store/index";
import BGimgAN from "./img/50350-amarillo-y-negro.jpg";
import App from "./App";

dotenv.config();

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
    font-size: 62.5%;

}

body {
  font-family: "Dancing Script", cursive;
  background-image: url(${BGimgAN});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  box-sizing: border-box;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}
`;

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

