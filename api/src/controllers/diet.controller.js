const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Diets } = require("../db");

let diets = [
  { name: "gluten free" },
  { name: "ketogenic" },
  { name: "vegetarian" },
  { name: "lacto-vegetarian" },
  { name: "lacto ovo vegetarian" },
  { name: "vegan" },
  { name: "pescatarian" },
  { name: "paleolithic" },
  { name: "primal" },
  { name: "whole 30" },
];

async function getDiets(req, res, next) {
  try {
    diets.forEach((element) => {
      Diets.findOrCreate({
        where: { name: element.name },
      });
    });

    const allDiets = await Diets.findAll();
    res.send(allDiets.map((element) => element.name));
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getDiets,
};
