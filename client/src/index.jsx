import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store/index";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  height: 100%;
  font-size: 62.5%;
}

body {
  margin: 0;
  box-sizing: border-box;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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
