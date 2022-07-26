import React from "react";
import styled from "styled-components";
import LinkStayled from "../Styles/LinkStyled";
import LGimg from "../../img/logoManu.png";
import SerachBar from "./SerachBar";

const HeaderStyle = styled.header`
  box-sizing: border-box;
  position: fixed;
  background-color: #af911a;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-top: 3px;

  & div img {
    border: solid green 3px;
    height: 60px;
    width: 70px;
  }
`;

const ImgStyle = styled.img`
  height: 60px;
  width: 70px;
`;

function NavBar() {
  return (
    <HeaderStyle>
      <LinkStayled to="/">
        <ImgStyle src={LGimg} alt="Logo" />
      </LinkStayled>
      <div>
        <nav>
          <SerachBar />
        </nav>
      </div>
    </HeaderStyle>
  );
}

export default NavBar;
