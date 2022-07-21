import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Landing from "./components/Landing/Landing";
import styled from "styled-components";

const AppStyle = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <AppStyle>
        <h1>APP</h1>
        {/* <Landing /> */}
      </AppStyle>
    </BrowserRouter>
  );
}

export default App;