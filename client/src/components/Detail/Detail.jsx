/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-danger */
/* eslint-disable no-confusing-arrow */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getDetails, resetDetails, switchLoading } from "../../redux/actions/index";
import NavBar from "../Header/NavBar";
import imgDefaul from "../../img/fondoManu.jpg";
import LoadingGif from "../../img/Loading.gif";

const H1Style = styled.h1`
  display: inline-block;
  position: fixed;
  margin: 0px;
  padding-top: 80px;
  color: white;
  font-size: 5rem;
  top: -80px;
  left: 825px;
`;

const MainStyle = styled.main`
  box-sizing: border-box;
  width: 1400px;
  /* height: fit-content; */
  margin: 0px auto;
  color: white;
`;

const SectionStyleCon = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  border-radius: 25px;
  background-color: #0000008f;
  margin: 150px 0px 100px 0px;
  padding-bottom: 30px;

  & h1 {
    color: #af911a;
    display: inline-block;
    font-size: 4rem;
    border-bottom: 3px solid #af911a;
  }
  & .Img-Summary {
    display: flex;

    & img {
      object-fit: cover;
      width: 550px;
      height: 350px;
      border-end-start-radius: 120px;
      border-top-right-radius: 80px;
      border-top-left-radius: 15px;
      border-end-end-radius: 15px;
      margin: 40px 55px 40px 40px;
      box-shadow: 0px 0px 25px 7px #ffffff;
    }

    & p {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Geneva, Verdana, sans-serif;
      padding: 20px 20px 20px 55px;
      margin: 10px 10px 10px 0px;
      text-align: justify;
      font-size: 2.2rem;

      & a {
        color: #ffffff;
        /* text-decoration: none; */
      }
    }
  }

  & .Diets-Dish-HealtScgore {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: #ffffff solid 3px;
    border-bottom: #ffffff solid 3px;
    margin: 0px 55px;
    text-align: center;
    padding-bottom: 50px;

    & h3 {
      color: #af911a;

      display: inline-block;
      border-bottom: #af911a solid 3px;
      margin: 0px;
      font-size: 3rem;
      padding-top: 50px;
    }

    & h4 {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Geneva, Verdana, sans-serif;
      font-size: 2rem;
      margin: 10px;
    }

    & .HealtScgore {
      padding: 0px 20px 30px 20px;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 25px;
      border: solid 3px white;
      box-shadow: 0px 0px 25px 7px #ffffff;
    }

    & h2 {
      border-bottom: #af911a solid 3px;
      margin: 0px;
      font-size: 3rem;
      padding-top: 50px;
      color: #af911a;
    }

    & h5 {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Geneva, Verdana, sans-serif;
      font-size: 3.5rem;
      margin: 10px;
    }
  }

  & .AnalyzedInstructions {
    margin: 0px 55px 0px 55px;

    & h4 {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, Geneva, Verdana, sans-serif;
      font-size: 2rem;
      text-align: justify;

      & span {
        font-family: "Dancing Script", cursive;
        color: #af911a;
        font-size: 3rem;
      }
    }
  }
`;

const LoadingIMGStyle = styled.div`
  margin-top: 270px;
  & img {
    border: #ffffff solid 5px;
    margin-top: 100px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 0px 50px 50px #ffffff;
  }
`;

function Detail(props) {
  const dispatch = useDispatch();
  const theRecipe = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loading);

  const getDiets = () => {
    const onlyDiets = [];
    theRecipe.vegetarian && onlyDiets.push("vegetarian");

    if (theRecipe.diets) {
      for (const diet of theRecipe.diets) {
        typeof diet === "object" ? onlyDiets.push(diet.name) : onlyDiets.push(diet);
      }
    }
    const onlyDietsUP = onlyDiets.map((dietUP) => {
      return dietUP.charAt(0).toUpperCase() + dietUP.slice(1);
    });
    return onlyDietsUP.length ? onlyDietsUP.join(" | ") : "Diets Not Found!";
  };

  const getDishTypes = () => {
    const dishTypesUP = theRecipe.dishTypes.map((dishUP) => {
      return dishUP.charAt(0).toUpperCase() + dishUP.slice(1);
    });
    return dishTypesUP.join(" | ");
  };

  const getSteps = () => {
    const Steps = [];
    if (Array.isArray(theRecipe.analyzedInstructions) && theRecipe.analyzedInstructions.length) {
      theRecipe.analyzedInstructions[0].steps.forEach((element) => {
        Steps.push(element);
      });
    } else if (typeof theRecipe.analyzedInstructions === "string") {
      Steps.push(theRecipe.analyzedInstructions);
    } else if (theRecipe.analyzedInstructions.length < 1 || theRecipe.analyzedInstructions === "") {
      Steps.push("Use your imagination.");
    }
    return Steps;
  };

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
    dispatch(switchLoading(true));
    setTimeout(() => {
      dispatch(switchLoading(false));
    }, 3000);

    return () => {
      dispatch(resetDetails([]));
    };
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <H1Style>Recipe Detail</H1Style>
      {loading ? (
        <LoadingIMGStyle>
          <img className="loadingIMG" src={LoadingGif} alt="Loading" />
        </LoadingIMGStyle>
      ) : (
        <MainStyle>
          <SectionStyleCon>
            {theRecipe.title && <h1>{theRecipe.title}</h1>}
            <div className="Img-Summary">
              {theRecipe.summary && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: theRecipe.summary,
                  }}
                />
              )}
              {theRecipe.image && <img src={theRecipe.image || imgDefaul} alt="img not foud" />}
            </div>
            <div className="Diets-Dish-HealtScgore">
              <div>
                {theRecipe.diets && (
                  <>
                    <h3> Type of Diets </h3> <br />
                    <h4>{getDiets()}</h4>
                  </>
                )}
                {theRecipe.dishTypes && (
                  <>
                    <h3> Type of Dish </h3> <br />
                    <h4>{getDishTypes()}</h4>
                  </>
                )}
              </div>
              <div className="HealtScgore">
                <h2>Health Score</h2>
                {theRecipe.healthScore ? (
                  <h5>{theRecipe.healthScore}%</h5>
                ) : (
                  <h5>! Health Score Not Found !</h5>
                )}
              </div>
            </div>

            <div className="AnalyzedInstructions">
              {theRecipe.analyzedInstructions &&
                getSteps().map((element) =>
                  !element.number ? (
                    <h4>
                      <span>Steps to create: </span>
                      {element[0] ? element : "Use your imagination."}
                    </h4>
                  ) : (
                    <h4>
                      <span>Step {element.number ? element.number : 1}:</span>{" "}
                      {element.step ? element.step : "Use your imagination."}
                    </h4>
                  )
                )}
            </div>
          </SectionStyleCon>
        </MainStyle>
      )}
    </>
  );
}

export default Detail;
