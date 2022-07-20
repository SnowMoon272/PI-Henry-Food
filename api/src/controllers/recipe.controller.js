const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");
const { getDiets } = require("./diet.controller.js");

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

async function createRecipe(req, res, next) {
  let { title, summary, healthScore, analyzedInstructions, image, diets } = req.body;

  // getDiets();
  if (!title || !summary) return "Missing title or description";

  try {
    let createdRecipe = await Recipe.create({
      title: title,
      image: image || "",
      summary: summary,
      healthScore: healthScore,
      analyzedInstructions: analyzedInstructions || "",
      createdInDb: true,
    });

    let dietDb = await Diet.findAll({
      where: {
        name: diets,
      },
    });
    createdRecipe.addDiet(dietDb);

    return res.status(201).json({
      message: "Recipe created successfully",
    });
  } catch (error) {
    // res.status(404).send("error");
    next(error);
  }
}

module.exports = {
  getRecipes,
  createRecipe,
};
