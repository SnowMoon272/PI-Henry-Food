import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";
import LinkStayled from "../Styles/LinkStyled";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";

function Home() {
  /* ***************************************** REDUX **************************************** */
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  /* **************************************** PAGINADO **************************************** */
  const [currentPage, setcurrentPage] = useState(1);
  const [recipesPerPage, setrecipesPerPage] = useState(9); //Si no se setea el estado cambiar a solo una variable.
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRicipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const paginado = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  function hadlerClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  return (
    <div>
      <LinkStayled to="/recipe">Create Recipe</LinkStayled>
      <h1>Recetas more famouse</h1>
      <button type="button" onClick={(e) => hadlerClick(e)}>
        Volver a cargar todos los personajes
      </button>
      <div>
        <select name="name" id="">
          <option value="asc">Acendente-[A-Z]</option>
          <option value="des">Decendente-[Z-A]</option>
        </select>

        <select name="healtSchore" id="">
          <option value="asc">(+) Healthier</option>
          <option value="des">(-) Healthier</option>
        </select>

        <select name="typeOfDiet" id="">
          <option value="All">All recipes</option>
          <option value="gluten_free">Gluten Free</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="vegetarian">Vegetarian </option>
          <option value="lacto_vegetarian">Lacto-Vegetarian </option>
          <option value="lacto_ovo_vegetarian">Ovo-Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="paleo">Paleo</option>
          <option value="primal">Primal</option>
          <option value="Low_FODMAP">Low FODMAP</option>
          <option value="whole30">Whole30</option>
        </select>

        <Paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
        />

        {currentRicipes?.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              diets={recipe.diets}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
