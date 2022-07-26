import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStayled = styled(Link)`
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
      transform: scale(1.2);
      cursor: pointer;
      color: white;
      background-color: #fecd08a3;
      border: 0.2px solid #fecd08a3;
    }
  }
`;

export default LinkStayled;
