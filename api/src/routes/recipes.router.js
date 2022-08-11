const { Router } = require("express");
const router = Router();

const {
  getRecipes,
  createRecipe,
  getRecipeById,
  getRecipesDB,
  deleteRecipe,
} = require("../controllers/recipe.controller.js");

router.get("/recipes", getRecipes);
router.get("/recipesDB", getRecipesDB);
router.get("/recipes/:idReceta", getRecipeById);
router.post("/recipe", createRecipe);
router.delete("/recipeDlt", deleteRecipe);

module.exports = router;
