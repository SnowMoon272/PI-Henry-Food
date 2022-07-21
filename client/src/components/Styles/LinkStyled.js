import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStayled = styled(Link)`
  /* width: 100px;
  height: 100px; */

  button {
    padding: 5px 8px;
    cursor: pointer;
    color: blue;
    /* background-color: aqua; */
    border-radius: 5px;
    /* border: 1px solid black; */

    &:hover {
      cursor: pointer;
      color: red;
    }
  }
`;
