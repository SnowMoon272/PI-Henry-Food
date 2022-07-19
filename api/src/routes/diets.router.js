const { Router } = require("express");
const router = Router();

const { getDiets } = require("../controllers/diet.controller.js");

router.get("/diets", getDiets);

module.exports = router;
