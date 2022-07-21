import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingStyle = styled.div`
  border: 3px solid red;
  padding: 2rem;
  background-color: white;
  width: 100%;
  max-width: 90vw;
  height: fit-content;
  display: flex;
  align-self: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 990px) {
    justify-content: center;
  }
`;

function Landing() {
  return (
    <LandingStyle>
      <h1>Hola</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </LandingStyle>
  );
}

export default Landing;
