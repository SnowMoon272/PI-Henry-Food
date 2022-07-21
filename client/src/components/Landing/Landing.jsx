import React from "react";
import styled from "styled-components";
import { LinkStayled } from "../Styles/LinkStyled";
import BGimg from "../../img/fondoManu.jpg";

const LandingStyle = styled.div`
  background-image: url(${BGimg});
  background-size: cover;
  background-repeat: repeat;
  background-position-x: left;
  width: 100%;
  height: 100%;
  position: absolute;

  div {
    position: relative;
    margin: 42% 0% 0% 13%;
    width: fit-content;
  }

  /* @media only screen and (max-width: 600px) {
    div {
      margin: 88% 0% 0% 37.4%;
    }
  } */
`;

function Landing() {
  return (
    <>
      <LandingStyle>
        <div>
          <LinkStayled to="/home">
            <button>Welcome</button>
          </LinkStayled>
        </div>
      </LandingStyle>
    </>
  );
}

export default Landing;
