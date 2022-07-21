import React from "react";
import styled from "styled-components";
import { LinkStayled } from "../Styles/LinkStyled";

const LandingStyle = styled.div`
  background-color: aqua;
  height: 100%;
`;

function Landing() {
  return (
    <>
      <LandingStyle>
        <h1>Hola</h1>
        <LinkStayled to="/home">
          <button>Ingresar</button>
        </LinkStayled>
      </LandingStyle>
    </>
  );
}

export default Landing;
