/* eslint-disable no-undef */
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");

/* ********************************************** PROMISES ********************************************** */

function getRecipes(req, res, next) {
  const nameQuery = req.query.name;
  var RecipesApi = [];
  var RecipesDb = [];
  if (nameQuery) {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
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
        if (!RecipesApi.length && !RecipesDb.length) {
          return res.status(404).send("The search returned no results");
        }
        return res.status(200).json([...RecipesDb, ...RecipesApi]);
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

function getRecipeById(req, res, next) {
  const id = req.params.idReceta;
  if (id.includes("-")) {
    Recipe.findByPk(id, { include: Diet }).then((recipe) => {
      return res.status(200).json(recipe);
    });
  } else {
    axios
      .get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
      .then((response) => {
        return res.status(200).json({
          title: response.data.title,
          vegetarian: response.data.vegetarian,
          image: response.data.image,
          dishTypes: response.data.dishTypes,
          diets: response.data.diets,
          summary: response.data.summary,
          healthScore: response.data.healthScore,
          analyzedInstructions: response.data.analyzedInstructions,
        });
      })
      .catch((error) => next(error));
  }
}

function getRecipesDB(req, res, next) {
  var RecipesApi = [];
  const typeDB_Api = req.query.type;

  if (typeDB_Api == "DataBase") {
    Recipe.findAll({ include: [Diet] })
      .then((recipe) => {
        return res.status(200).json(recipe);
      })
      .catch(() => {
        return res.status(404).send("The search returned no results");
      });
  } else if (typeDB_Api == "Api") {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
      )
      .then((apiResponse) => {
        RecipesApi = apiResponse.data.results;
        return res.status(200).json(RecipesApi);
      })
      .catch((error) => next(error));
  }
}
/* ********************************************** ASYNC AWAIT ********************************************** */

async function createRecipe(req, res, next) {
  let { title, summary, healthScore, analyzedInstructions, image, diets } = req.body;

  if (!title || !summary || !diets)
    return res.status(404).send("The -title-, the type of -diet- or the -summary- are missing.");

  try {
    let createdRecipe = await Recipe.create({
      title: title,
      image: image || "",
      summary: summary,
      healthScore: healthScore,
      analyzedInstructions: analyzedInstructions || "",
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
    next(error);
  }
}

async function deleteRecipe(req, res) {
  const id = req.query.idDelete;

  if (id.includes("-")) {
    Recipe.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).send("Receta eliminada.");
  } else {
    return res.status(404).json({
      message: "Esa receta no es tuya",
    });
  }
}

module.exports = {
  getRecipes,
  createRecipe,
  getRecipeById,
  getRecipesDB,
  deleteRecipe,
};
