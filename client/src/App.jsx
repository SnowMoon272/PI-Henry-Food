import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styled from "styled-components";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";

const AppStyle = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <BrowserRouter>
      <AppStyle>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
        </Switch>
      </AppStyle>
    </BrowserRouter>
  );
}

export default App;
