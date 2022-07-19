const { Router } = require("express");
const router = Router();

const { getRecipes } = require("../controllers/recipe.controller.js");

router.get("/recipes", getRecipes);
// router.get("/recipes", (req, res) => {
//   return res.status(200).send("Todo ok bebe");
// });

// router.get("/recipes/:idReceta", getRecipeById);
// router.post("/recipe", createRecipe);

module.exports = router;
