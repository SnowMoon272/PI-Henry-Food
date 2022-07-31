import React from "react";
import styled from "styled-components";
import LinkStayled from "../Styles/LinkStyled";
import LGimg from "../../img/logoManu.png";
import MeB from "../../img/MeB.webp";
import SerachBar from "./SerachBar";

const HeaderStyle = styled.header`
  box-sizing: border-box;
  position: fixed;
  background-color: #af911a;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-top: 3px;
  top: 0px;

  & div img {
    border: solid green 3px;
    height: 60px;
    width: 70px;
  }

  & .buttonMe {
    position: absolute;
    top: 880px;
    right: 25px;
    & :hover {
      transition: all 1s ease;
      transform: scale(1.5) translate(-10px, -10px);
    }
  }
  & img {
    width: 90px;
    border-radius: 50%;
  }
`;

const ImgStyle = styled.img`
  height: 60px;
  width: 70px;
`;

function NavBar({ paginado }) {
  const url = window.location.href;
  return (
    <HeaderStyle>
      <LinkStayled to="/">
        <ImgStyle src={LGimg} alt="Logo" />
      </LinkStayled>
      <nav>
        {url === "http://localhost:3000/home" ? (
          <SerachBar paginado={paginado} />
        ) : (
          <LinkStayled ret to="/home">
            <button type="button">Return</button>
          </LinkStayled>
        )}
      </nav>
      <LinkStayled className="buttonMe" to="/AboutMe">
        <img src={MeB} alt="Me" />
      </LinkStayled>
    </HeaderStyle>
  );
}

export default NavBar;
