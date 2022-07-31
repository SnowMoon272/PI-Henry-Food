/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getRecipes,
  orderByTitle,
  orderByHealtSchore,
  switchLoading,
  filterByDiet,
  filterByDbApi,
} from "../../redux/actions";
import LinkStayled from "../Styles/LinkStyled";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import NavBar from "../Header/NavBar";
import LoadingGif from "../../img/Loading.gif";

/* ****************************************** CSS ***************************************** */
const HeaderStyleCont = styled.div`
  padding-bottom: 80px;
`;

const HomeContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionStyleCont = styled.section`
  background-color: #af911a;
  border-radius: 55px;
  position: fixed;
  top: 0px;
  display: flex;
  width: 830px;
  height: fit-content;
  flex-direction: column;
  justify-content: center;

  & h1 {
    font-family: "Dancing Script", cursive;
    font-weight: bold;
    font-size: 20px;
  }
`;

const ButtonsStyleCont = styled.section`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;

  & button {
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

const SelectStyleCont = styled.section`
  display: flex;
  justify-content: space-around;

  & select {
    font-family: "Dancing Script", cursive;
    font-size: medium;
    background-color: #c3b374;
    border: 2px solid white;
    border-radius: 25px;
    padding: 0px 12px;
    appearance: none;
    outline: none;
    transition: all 0.5s ease;
    text-align: center;

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
      color: #030303;
      background-color: #fecd08a3;
      border: 0.2px solid #fecd08a3;
      text-align: center;
    }
  }
`;

const CardStyleCont = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 200px;
  width: 90%;
  height: 100%;

  & .loadingIMG {
    border: #ffffff solid 5px;
    margin-top: 100px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 0px 50px 50px #ffffff;
  }
`;

function Home() {
  /* ***************************************** REDUX **************************************** */
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const allRecipes = useSelector((state) => state.recipes);

  /* **************************************** PAGINADO **************************************** */
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRicipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  /* ************************************** ORDENAMIENTO ************************************** */
  const [order, setOrder] = useState("");

  /* **************************************** HANDLERS **************************************** */
  useEffect(() => {
    dispatch(getRecipes());

    setTimeout(() => {
      dispatch(switchLoading(false));
    }, 2500);
  }, [dispatch]);

  function handlerClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
    dispatch(switchLoading(true));
    setTimeout(() => {
      dispatch(switchLoading(false));
    }, 2500);
  }

  function handlerMyRecipes(e) {
    dispatch(filterByDbApi(e.target.value));
    setCurrentPage(1);
    dispatch(switchLoading(true));
    setTimeout(() => {
      dispatch(switchLoading(false));
    }, 2000);
  }

  function handlerFilterByDiet(e) {
    dispatch(filterByDiet(e.target.value));
    setCurrentPage(1);
  }

  function handlerOrderByTitle(e) {
    e.preventDefault();
    dispatch(orderByTitle(e.target.value));
    setCurrentPage(1);
    setOrder(`Order by Title : ${e.target.value}`);
  }

  function handlerOrderByHealtSchore(e) {
    e.preventDefault();
    dispatch(orderByHealtSchore(e.target.value));
    setCurrentPage(1);
    setOrder(`Order by HealtSchore : ${e.target.value}`);
  }

  /* ******************************************* JSX ******************************************* */
  return (
    <>
      <HeaderStyleCont>
        <NavBar paginado={paginado} />
      </HeaderStyleCont>
      <HomeContainerStyle>
        <SectionStyleCont>
          <h1>Recipes more famouse</h1>
          <ButtonsStyleCont>
            <button type="button" style={{ width: "300px" }} onClick={(e) => handlerClick(e)}>
              Refresh Recipes
            </button>
            <LinkStayled to="/recipe">
              <button type="button" style={{ width: "300px" }}>
                Create Recipe
              </button>
            </LinkStayled>
          </ButtonsStyleCont>

          <SelectStyleCont>
            <select name="title" onChange={(e) => handlerOrderByTitle(e)}>
              <option selected disabled hidden label="Order by Title" />
              <option value="asc">Acendente-[A-Z]</option>
              <option value="des">Decendente-[Z-A]</option>
            </select>

            <select name="healtSchore" onChange={(e) => handlerOrderByHealtSchore(e)}>
              <option selected disabled hidden label="Order by HealtSchore" />
              <option value="asc">(+) Most Healthier</option>
              <option value="des">(-) Less healthy</option>
            </select>

            <select name="myRecipes" onChange={(e) => handlerMyRecipes(e)}>
              <option selected disabled hidden label="Recipes" />
              <option value="DataBase">My Recipes</option>
              <option value="Api">Recipes of comunity</option>
            </select>

            <select name="typeOfDiet" onChange={(e) => handlerFilterByDiet(e)}>
              <option value="All">All recipes</option>
              <option value="gluten free">Gluten Free</option>
              <option value="dairy free">Dairy Free</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="lacto vegetarian">Lacto Vegetarian </option>
              <option value="lacto ovo vegetarian">Ovo Vegetarian</option>
              <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="paleolithic">Paleolithic</option>
              <option value="primal">Primal</option>
              <option value="whole 30">Whole 30</option>
              <option value="pescatarian">Pescatarian</option>
              <option value="ketogenic">Ketogenic</option>
              <option value="fodmap friendly">Fodmap Friendly</option>
              <option value="Low_FODMAP">Low FODMAP</option>
            </select>
          </SelectStyleCont>

          <Paginado
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginado={paginado}
            currentPage={currentPage}
          />
        </SectionStyleCont>
        <CardStyleCont>
          {loading ? (
            <div>
              <img className="loadingIMG" src={LoadingGif} alt="Loading" />
            </div>
          ) : (
            currentRicipes?.map((recipe) => {
              return (
                <Card
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  diets={recipe.diets}
                  healthScore={recipe.healthScore}
                  vegetarian={recipe.vegetarian}
                />
              );
            })
          )}
        </CardStyleCont>
      </HomeContainerStyle>
    </>
  );
}

export default Home;
