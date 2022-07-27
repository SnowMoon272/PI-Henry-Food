/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getDiets } from "../../redux/actions/index";
import NavBar from "../Header/NavBar";
import Card from "../Card/Card";

/* ***************************************** CSS **************************************** */
const FormStyledCont = styled.main`
  margin: 0px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    position: fixed;
    margin-top: 65px;
    font-size: 5rem;
    background-color: #af911a;
    border-end-start-radius: 55px;
    border-end-end-radius: 55px;
    top: -30px;
    padding-bottom: 20px;
    width: 550px;
    height: fit-content;
  }
`;

const SectionStyledCont = styled.section`
  display: flex;
  margin-top: 140px;
  width: 100%;
  font-size: 3rem;
  justify-content: space-between;
  align-items: center;
`;

const FormStyled = styled.form`
  & #BTN {
    position: absolute;
    top: 850px;
    left: 800px;
    font-family: "Dancing Script", cursive;
    padding: ${(props) => (props.Return ? "0px 62px" : "6px 62px")};
    cursor: pointer;
    font-size: 3rem;
    color: black;
    border: 2px solid white;
    border-radius: 25px;
    background-color: #c3b374;
    transition: all 0.5s ease;
    margin-right: ${(props) => (props.Return ? "25px" : "0px")};

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
      color: white;
      background-color: #fecd08a3;
      border: 0.2px solid #fecd08a3;
    }
  }
`;

const CardStyledCont = styled.div`
  height: fit-content;
  border-radius: 25px;
  background-color: #0000008f;
`;

const FormIntStyledCont = styled.div`
  height: 618px;
  width: 950px;
  border-radius: 25px;
  background-color: #0000008f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  & .inputsText {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
    margin-left: 50px;

    & input {
      font-family: "Dancing Script", cursive;
      font-size: 2rem;
      background-color: #c3b374;
      border-radius: 25px;
      padding: 3px;
      width: 500px;
      text-align: center;
      appearance: none;
      outline: none;
      height: 30px;
    }

    & input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 27px;
      height: 27px;
      border-radius: 50%;
      background: #a4f3eb;
      cursor: pointer;
      box-shadow: 0px 0px 11px 8px rgba(0, 0, 0, 0.26);
      background: url(https://www.flaticon.com/svg/vstatic/svg/59/59089.svg?token=exp=1614064733~hmac=a6f0cce2214fdb52e7df9eec24006427)
        #ffffff;
      background-size: 45%;
      background-position: center;
      background-repeat: no-repeat;
      margin: 0px 2px;
    }
  }

  & .inputsCheck {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
    margin-right: 50px;
  }
`;

function Form() {
  /* ***************************************** REDUX **************************************** */
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const history = useHistory();

  /* ***************************************** STATE **************************************** */
  const [input, setInput] = useState({
    title: "",
    summary: "",
    healthScore: 1,
    image: "",
    analyzedInstructions: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  /* **************************************** HANDLERS **************************************** */
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
        diets: input.diets.filter((item) => item !== e.target.value),
      });
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postRecipe(input));
    alert("!Personaje creado!");
    setInput({
      title: "",
      summary: "",
      healthScore: 0,
      image: "",
      analyzedInstructions: "",
      diets: [],
    });
    history.push("/home");
  };

  /* ******************************************* JSX ******************************************* */
  return (
    <>
      <NavBar />
      <FormStyledCont>
        <h1>Create your Recipe</h1>
        <SectionStyledCont>
          <FormStyled onSubmit={(e) => handlerSubmit(e)}>
            <FormIntStyledCont>
              <div className="inputsText">
                <div>
                  <label>Recipe name : </label>
                  <br />
                  <input
                    autocomplete="off"
                    name="title"
                    type="text"
                    value={input.title}
                    onChange={(e) => handlerChange(e)}
                  />
                </div>
                <div>
                  <label>Recipe summary : </label>
                  <br />
                  <input
                    autocomplete="off"
                    name="summary"
                    type=""
                    value={input.summary}
                    onChange={(e) => handlerChange(e)}
                  />
                </div>
                <div>
                  <label>Health Score : {input.healthScore}</label>
                  <br />
                  <input
                    name="healthScore"
                    type="range"
                    max={170}
                    min={1}
                    value={input.healthScore}
                    onChange={(e) => handlerChange(e)}
                  />
                </div>
                <div>
                  <label>Instructions for preparation : </label>
                  <br />
                  <input
                    autocomplete="off"
                    name="analyzedInstructions"
                    type="text"
                    value={input.analyzedInstructions}
                    onChange={(e) => handlerChange(e)}
                  />
                </div>
                <div>
                  <label> Url Image :</label>
                  <br />
                  <input
                    autocomplete="off"
                    name="image"
                    type="text"
                    value={input.image}
                    onChange={(e) => handlerChange(e)}
                  />
                </div>
              </div>
              <div className="inputsCheck">
                <label> Types of diets: </label>
                <br />
                {diets.map((diets) => (
                  <label>
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
            </FormIntStyledCont>
            <button id="BTN" type="submit">
              Create Recipe
            </button>
          </FormStyled>
          <CardStyledCont>
            <Card title={input.title} image={input.image} diets={input.diets} />
          </CardStyledCont>
        </SectionStyledCont>
      </FormStyledCont>
    </>
  );
}

export default Form;
