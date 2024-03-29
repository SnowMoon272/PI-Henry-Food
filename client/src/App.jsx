import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import AboutMe from "./components/About/AboutMe";
import Error404 from "./components/Error404/Error404";
import BGimgAN from "./img/50350-amarillo-y-negro.jpg";

const AppStyle = styled.div`
  background-image: url(${BGimgAN});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <AppStyle>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/recipe" component={Form} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={Error404} />
        </Switch>
      </AppStyle>
    </BrowserRouter>
  );
}

export default App;
