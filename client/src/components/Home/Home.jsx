import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, filterByDiet } from "../../redux/actions";
import LinkStayled from "../Styles/LinkStyled";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";

function Home() {
  /* ***************************************** REDUX **************************************** */
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  /* **************************************** PAGINADO **************************************** */
  const [currentPage, setcurrentPage] = useState(1);
  const recipesPerPage = 9;
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRicipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const paginado = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  function handlerClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  function handlerFilterByDiet(e) {
    dispatch(filterByDiet(e.target.value));
  }

  return (
    <div>
      <LinkStayled to="/recipe">Create Recipe</LinkStayled>
      <h1>Recetas more famouse</h1>
      <button type="button" onClick={(e) => handlerClick(e)}>
        Volver a cargar todos los personajes
      </button>
      <div>
        <select name="name">
          <option value="asc">Acendente-[A-Z]</option>
          <option value="des">Decendente-[Z-A]</option>
        </select>

        <select name="healtSchore">
          <option value="asc">(+) Healthier</option>
          <option value="des">(-) Healthier</option>
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
