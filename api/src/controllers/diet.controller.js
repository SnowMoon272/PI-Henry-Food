/* eslint-disable no-undef */
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Diet } = require("../db");

let finalDietsLocal = [
  { name: "vegetarian" },
  { name: "lacto vegetarian" },
  { name: "ovo vegetarian" },
  { name: "low FODMAP" },
];

async function getDiets(req, res, next) {
  try {
    let findDiet = await Diet.findAll();
    if (findDiet.length > 0) {
      return res.status(200).json(findDiet);
    } else {
      let diets = [];
      let response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=300`
      );
      response.data.results.forEach((recipe) => {
        recipe.diets.forEach((diet) => {
          diets = [...diets, diet];
        });
      });

      const dietObj = new Set(diets);
      let finalDietsApi = [...dietObj].map((e) => {
        return { name: e };
      });
      const finalDiest = [...finalDietsLocal, ...finalDietsApi];

      let newDiets = await Diet.bulkCreate(finalDiest);
      return res.status(200).json(newDiets);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDiets,
};
