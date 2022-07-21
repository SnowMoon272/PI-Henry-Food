import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStayled = styled(Link)`
  /* width: 100px;
  height: 100px; */

  button {
    font-family: "Dancing Script", cursive;
    padding: 6px 62px;
    cursor: pointer;
    font-size: 3rem;
    color: black;
    border: 2px solid white;
    border-radius: 25px;
    background-color: #c3b374;
    transition: all 1.5s ease;

    &:hover {
      /* box-shadow: inset 200px 0 0 0 #fecd08a3; */
      transform: scale(1.2);
      cursor: pointer;
      color: white;
      background-color: #fecd08a3;
      border: 0.2px solid #fecd08a3;
    }
  }
`;
