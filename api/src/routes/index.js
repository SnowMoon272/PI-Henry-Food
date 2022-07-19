const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const recipesRoutes = require("./recipes.router.js");
const dietsRouts = require("./diets.router.js");

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(recipesRoutes);
router.use(dietsRouts);

module.exports = router;
