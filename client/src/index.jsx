import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store/index";
import BGimgAN from "./img/50350-amarillo-y-negro.jpg";
import App from "./App";

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

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
