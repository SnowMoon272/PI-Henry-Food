/* eslint-disable no-useless-escape */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getDiets } from "../../redux/actions/index";
import NavBar from "../Header/NavBar";
import Card from "../Card/Card";
import Check from "../../img/cheque.png";
import Alert from "../../img/peligro.png";

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
    background-color: ${(props) => (props.activate ? "#c3b374" : "#7c7c7c")};
    transition: all 0.5s ease;
    margin-right: ${(props) => (props.Return ? "25px" : "0px")};

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
      color: white;
      background-color: ${(props) => (props.activate ? "#fecd08a3" : "#7c7c7c")};
      border: 0.2px solid ${(props) => (props.activate ? "#fecd08a3" : "#7c7c7c")};
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
  /* width: 950px; */
  width: fit-content;
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
  }

  & .inputsCheck {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
    margin-right: 50px;
    margin-left: 100px;

    & label:hover {
      cursor: pointer;
    }
  }
`;

const ErrorStyledCont = styled.div`
  box-sizing: border-box;
  font-family: Georgia, "Times New Roman", Times, serif;
  /* position: absolute; */
  left: 80px;
  background: #ff101067;
  color: black;
  font-size: 2rem;
  font-weight: bold;
  border: solid black 2px;
  border-radius: 8px;
  height: 40px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2px;
  transition: 1s ease all;

  & p {
    margin-right: 35px;
  }

  & img {
    width: 25px;
    height: 25px;
    margin: 0px 35px;
  }
`;

const LabelInputStyledCont = styled.div`
  position: relative;
  z-index: 10;
  &label {
    margin: 0px;
    &:hover {
      cursor: pointer;
    }
  }

  & input {
    box-sizing: border-box;
    font-family: "Dancing Script", cursive;
    border: solid white 2px;
    font-size: 2rem;
    background-color: #c3b374;
    border-radius: 25px;
    padding: 3px;
    padding-right: 35px;
    width: 500px;
    text-align: center;
    appearance: none;
    outline: none;
    height: 30px;
    transition: 0.5s ease all;

    &:focus {
      box-shadow: 3px 0px 30px rgba(221, 221, 221, 0.46);
    }
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
    background-color: #000000;
    border: solid 2px white;
    background-size: 45%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0px 2px;
  }

  & .check {
    position: absolute;
    width: 22px;
    height: 22px;
    z-index: 90;
    right: 4px;
    bottom: 4px;
  }
`;

const HealthScoreStyled = styled.div`
  & input {
    box-sizing: border-box;
    font-family: "Dancing Script", cursive;
    border: solid white 2px;
    font-size: 2rem;
    background-color: #c3b374;
    border-radius: 25px;
    padding: 3px;
    width: 500px;
    text-align: center;
    appearance: none;
    outline: none;
    height: 30px;
    transition: 0.5s ease all;

    &:focus {
      border: 2px solid #0075ff;
      box-shadow: 3px 0px 30px rgba(221, 221, 221, 0.46);
    }
  }

  & input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #a4f3eb;
    cursor: pointer;
    box-shadow: 0px 0px 11px 8px rgba(0, 0, 0, 0.26);
    border: solid 2px white;
    background-color: #000000;
    background-size: 45%;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0px 2px;
  }
`;

function validate(input) {
  const errors = {};
  if (!input.title) {
    errors.title = "The name is required.";
  } else if (!/^[a-zA-Z ]+$/.test(input.title)) {
    errors.title = "Only letters and spaces.";
  } else if (!/^[\s\S]{3,25}$/.test(input.title)) {
    errors.title = "Must be between 3 and 25 characters.";
  } else if (!input.summary) {
    errors.summary = "The summary is required.";
  } else if (!input.healthScore) {
    errors.healthScore = "Required Field.";
  } else if (
    input.image &&
    !/https?:\/\/(www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&//=]*)/.test(
      input.image
    )
  ) {
    errors.image = "Enter a valid image URL.";
  }
  return errors;
}

function Form() {
  /* ***************************************** REDUX **************************************** */
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const history = useHistory();

  /* ***************************************** STATE **************************************** */
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    title: "",
    summary: "",
    healthScore: "",
    image: "",
    analyzedInstructions: "",
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
    setErrors(
      validate({
        ...input,
      })
    );
  }, []);

  /* **************************************** HANDLERS **************************************** */
  const handlerChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipe(input));
    alert("!Recipe created!");
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
          <FormStyled
            activate={errors.title || errors.summary || errors.healthScore ? false : "activate"}
            onSubmit={(e) => handlerSubmit(e)}
          >
            <FormIntStyledCont>
              <div className="inputsText">
                <LabelInputStyledCont check={input.title}>
                  <label htmlFor="title">Recipe name : </label>
                  <br />
                  <input
                    id="title"
                    autoComplete="off"
                    name="title"
                    type="text"
                    value={input.title}
                    placeholder="Recipe name"
                    onChange={(e) => handlerChange(e)}
                  />
                  {errors.title ? (
                    <ErrorStyledCont>
                      <img src={Alert} alt="Alert" />
                      <p>{errors.title}</p>
                    </ErrorStyledCont>
                  ) : (
                    input.title && <img className="check" src={Check} alt="Alert" />
                  )}
                </LabelInputStyledCont>
                <LabelInputStyledCont>
                  <label>Recipe summary : </label>
                  <br />
                  <input
                    autoComplete="off"
                    name="summary"
                    type=""
                    value={input.summary}
                    placeholder="Recipe summary"
                    onChange={(e) => handlerChange(e)}
                  />
                  {errors.summary ? (
                    <ErrorStyledCont>
                      <img src={Alert} alt="Alert" />
                      <p>{errors.summary}</p>
                    </ErrorStyledCont>
                  ) : (
                    input.summary && <img className="check" src={Check} alt="Alert" />
                  )}
                </LabelInputStyledCont>
                <HealthScoreStyled>
                  <label>Health Score : {`${input.healthScore}%`}</label>
                  <br />
                  <input
                    name="healthScore"
                    type="range"
                    max={100}
                    min={0}
                    value={input.healthScore}
                    onChange={(e) => handlerChange(e)}
                  />
                  {errors.healthScore ? (
                    <ErrorStyledCont>
                      <img src={Alert} alt="Alert" />
                      <p>{errors.healthScore}</p>
                    </ErrorStyledCont>
                  ) : (
                    input.healthScore && <img className="check" src={Check} alt="Alert" />
                  )}
                </HealthScoreStyled>
                <LabelInputStyledCont>
                  <label>Instructions for preparation : </label>
                  <br />
                  <input
                    autoComplete="off"
                    name="analyzedInstructions"
                    type="text"
                    value={input.analyzedInstructions}
                    placeholder="Instructions"
                    onChange={(e) => handlerChange(e)}
                  />
                </LabelInputStyledCont>
                <LabelInputStyledCont>
                  <label> Url Image :</label>
                  <br />
                  <input
                    autoComplete="off"
                    name="image"
                    type="text"
                    value={input.image}
                    placeholder="Url"
                    onChange={(e) => handlerChange(e)}
                  />
                  {errors.image ? (
                    <ErrorStyledCont>
                      <img src={Alert} alt="Alert" />
                      <p>{errors.image}</p>
                    </ErrorStyledCont>
                  ) : (
                    input.image && <img className="check" src={Check} alt="Alert" />
                  )}
                </LabelInputStyledCont>
              </div>
              <div className="inputsCheck">
                <label> Types of diets: </label>
                <br />
                {diets.map((diets) => (
                  <label key={diets.name}>
                    <input
                      onChange={(e) => handlerCheck(e)}
                      name={diets.name}
                      type="checkbox"
                      value={diets.name}
                    />
                    {diets.name.charAt(0).toUpperCase() + diets.name.slice(1)}
                    <br />
                  </label>
                ))}
              </div>
            </FormIntStyledCont>
            <button
              id="BTN"
              type="submit"
              disabled={errors.title || errors.summary || errors.healthScore ? true : false}
            >
              Create Recipe
            </button>
          </FormStyled>
          <CardStyledCont>
            <Card
              title={input.title}
              image={input.image}
              diets={input.diets}
              healthScore={input.healthScore}
            />
          </CardStyledCont>
        </SectionStyledCont>
      </FormStyledCont>
    </>
  );
}

export default Form;
