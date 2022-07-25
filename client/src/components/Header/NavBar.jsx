import React from "react";
import styled from "styled-components";
import LinkStayled from "../Styles/LinkStyled";
import LGimg from "../../img/logoManu.png";

const HeaderStyle = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 6px 16px;
  border: solid red 3px;

  & div img {
    height: 60px;
    width: 70px;
  }
`;

function NavBar() {
  return (
    <HeaderStyle>
      <div>
        <img src={LGimg} alt="Logo" />
      </div>
      <div>
        <nav>Componente</nav>
      </div>
    </HeaderStyle>
  );
}

export default NavBar;
