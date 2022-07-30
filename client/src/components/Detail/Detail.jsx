/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getDetails } from "../../redux/actions/index";
import NavBar from "../Header/NavBar";

const H1Style = styled.h1`
  margin: 0px;
  padding-top: 100px;
  color: white;
  font-size: 4rem;
`;

const MainStyle = styled.main`
  box-sizing: border-box;
  border: solid blue 3px;
  width: 1400px;
  height: 100vh;
  margin: 0px auto;
`;

const SectionStyleCon = styled.section`
  box-sizing: border-box;
  border: solid #03ff03 3px;
  width: 100%;
  height: fit-content;

  margin: 0px auto;
`;

function Detail(props) {
  const dispatch = useDispatch();
  const theRecipe = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <MainStyle>
        <H1Style>Recipe Detail</H1Style>
        <SectionStyleCon>
          {theRecipe.title ? (
            <div>
              <h1>{theRecipe.title}</h1>
              <img src={theRecipe.image} alt="gg" />
              <p>{theRecipe.summary}</p>
              {/* <h3>{theRecipe.diets}</h3> */}
            </div>
          ) : (
            <div>Not found</div>
          )}
        </SectionStyleCon>
      </MainStyle>
    </>
  );
}

export default Detail;

/*
<img src={image || imgDefaul} alt="img not foud" />
<div>
  <h2>{title}</h2>
  <h3>
    {url === "http://localhost:3000/recipe"
      ? diets.map((diet) => {
          return ` ${diet.charAt(0).toUpperCase() + diet.slice(1)} |`;
        })
      : getDiets()}
  </h3>
  <h3>{`Health Score :  ${healthScore}%`}</h3>
  {url !== "http://localhost:3000/recipe" ? (
    <LinkStayled to={`/detail/${id}`}>
      <button id="BTN-CArd" type="button">
        Learn More
      </button>
    </LinkStayled>
  ) : (
    <button id="BTN-CArd" type="button">
      Example
    </button>
  )}
</div> */
