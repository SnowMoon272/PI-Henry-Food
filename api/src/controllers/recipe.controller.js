const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");

function getRecipes(req, res, next) {
  const nameQuery = req.query.name;
  var RecipesApi = [];
  var RecipesDb = [];
  if (nameQuery) {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&name=${nameQuery}&number=100`
      )
      .then((apiResponse) => {
        RecipesApi = apiResponse.data.results.filter((recipe) => {
          return recipe.title.toLowerCase().includes(nameQuery.toLowerCase());
        });
        return Recipe.findAll({ include: [Diet] });
      })
      .then((localResponse) => {
        RecipesDb = localResponse.filter((recipe) => {
          return recipe.title.toLowerCase().includes(nameQuery.toLowerCase());
        });
        return res.status(200).json([...RecipesDb, ...RecipesApi].slice(0, 9));
      })
      .catch((error) => next(error));
  } else {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      )
      .then((apiResponse) => {
        RecipesApi = apiResponse.data.results;
        return Recipe.findAll({ include: [Diet] });
      })
      .then((localResponse) => {
        return res.status(200).json([...localResponse, ...RecipesApi]);
      })
      .catch((error) => next(error));
  }
}

module.exports = {
  getRecipes,
};
