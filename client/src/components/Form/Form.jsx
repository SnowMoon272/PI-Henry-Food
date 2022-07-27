/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getDiets } from "../../redux/actions/index";
import LinkStayled from "../Styles/LinkStyled";
import NavBar from "../Header/NavBar";

const FormStyledCont = styled.div`
  & div {
    border: solid red 3px;
    background-color: #fff20058;
    padding-top: 80px;
    font-size: 3rem;
    width: fit-content;
    color: black;
  }
`;

function Form() {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  const [input, setInput] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    image: "",
    analyzedInstructions: "",
    diets: [],
  });
  console.log(input);

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const handlerChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handlerCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });
    } else {
      setInput({
        ...input,
        diets: [input.diets.filter((item) => item !== e.target.value)],
      });
    }
  };

  return (
    <FormStyledCont>
      <NavBar />
      <div>
        <h1>Create your Recipe</h1>
        <form action="">
          <div>
            <label htmlFor="">Recipe name: </label>
            <input
              name="title"
              type="text"
              value={input.title}
              onChange={(e) => handlerChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Recipe summary: </label>
            <input
              name="summary"
              type=""
              value={input.summary}
              onChange={(e) => handlerChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Health Score: </label>
            <input
              name="healthScore"
              type="number"
              value={input.healthScore}
              onChange={(e) => handlerChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Instructions for preparation: </label>
            <input
              name="analyzedInstructions"
              type="text"
              value={input.analyzedInstructions}
              onChange={(e) => handlerChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Image Link: </label>
            <input
              name="image"
              type="text"
              value={input.image}
              onChange={(e) => handlerChange(e)}
            />
          </div>
          <div>
            <label htmlFor="">Type of diets: </label>
            <br />
            {diets.map((diets) => (
              <label htmlFor="">
                <input
                  onChange={(e) => handlerCheck(e)}
                  name={diets.name}
                  type="checkbox"
                  value={diets.name}
                />{" "}
                {diets.name.charAt(0).toUpperCase() + diets.name.slice(1)}
                <br />
              </label>
            ))}
          </div>
          <ul>
            <li>{input.diets.map((el) => `${el} ,`)}</li>
          </ul>
          <button type="submit">Create Recipe</button>
        </form>
      </div>
    </FormStyledCont>
  );
}

export default Form;
