import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getTitleRecipes, switchLoading } from "../../redux/actions";

const HeaderStyle = styled.header`
  /* border: 3px solid red; */
  margin-right: 30px;
  width: 450px;
  display: flex;
  justify-content: space-between;

  input {
    font-family: "Dancing Script", cursive;
    width: 270px;
    outline: none;
    font-size: 2rem;
    color: black;
    border: 2px solid white;
    border-start-end-radius: 25px;
    border-end-start-radius: 25px;
    text-align: center;
  }

  button {
    font-family: "Dancing Script", cursive;
    padding: 2px 50px;
    cursor: pointer;
    font-size: 2rem;
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

function SerachBar({ paginado }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handlerInputChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handlerSubmint = (e) => {
    e.preventDefault();
    dispatch(getTitleRecipes(title));
    setTitle("");
    paginado(1);

    dispatch(switchLoading(true));
    setTimeout(() => {
      dispatch(switchLoading(false));
    }, 2500);
  };

  return (
    <HeaderStyle>
      <input
        value={title}
        type="text"
        placeholder="Search"
        onChange={(e) => handlerInputChange(e)}
      />
      <button type="submit" onClick={(e) => handlerSubmint(e)}>
        Search
      </button>
    </HeaderStyle>
  );
}

export default SerachBar;
