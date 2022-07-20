const { Diet } = require("../db");

let diets = [
  { name: "Gluten Free" },
  { name: "Ketogenic" },
  { name: "Vegetarian" },
  { name: "Lacto-Vegetarian" },
  { name: "Ovo-Vegetarian" },
  { name: "Vegan" },
  { name: "Pescetarian" },
  { name: "Paleo" },
  { name: "Primal" },
  { name: "Low FODMAP" },
  { name: "Whole30" },
];

async function getDiets(req, res, next) {
  try {
    let findDiet = await Diet.findAll();
    if (findDiet.length > 0) {
      return res.status(200).json(findDiet);
    } else {
      let newDiets = await Diet.bulkCreate(diets);
      return res.status(200).json(newDiets);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getDiets,
};
