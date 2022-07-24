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
        if (!RecipesApi.length && !RecipesDb.length) {
          return res.status(404).send("The search returned no results");
        }
        return res.status(200).json([...RecipesDb, ...RecipesApi] /* .slice(0, 9) */);
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

  if (!title || !summary || !diets)
    return res.status(404).send(`The "title", the type of "diet" or the "summary" are missing.`);

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
          image: response.data.image,
          dishTypes: response.data.dishTypes,
          diets: response.data.diets,
          summary: response.data.summary,
          healthScore: response.data.healthScore,
          analyzedInstructions: response.data.analyzedInstructions[0].steps,
        });
      })
      .catch((error) => next(error));
  }
}
// "a06e3540-d24d-47ec-a1f7-129a980eee44"
module.exports = {
  getRecipes,
  createRecipe,
  getRecipeById,
};
