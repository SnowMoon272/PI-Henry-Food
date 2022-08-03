const { Router } = require("express");

const recipesRoutes = require("./recipes.router.js");
const dietsRouts = require("./diets.router.js");

const router = Router();

router.use(recipesRoutes);
router.use(dietsRouts);

module.exports = router;
