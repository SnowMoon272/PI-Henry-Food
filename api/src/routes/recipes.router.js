const { Router } = require("express");
const router = Router();

const {
  getRecipes,
  createRecipe,
  getRecipeById,
  getRecipesDB,
} = require("../controllers/recipe.controller.js");

router.get("/recipes", getRecipes);
router.get("/recipesDB", getRecipesDB);
router.get("/recipes/:idReceta", getRecipeById);
router.post("/recipe", createRecipe);

module.exports = router;
