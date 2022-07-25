import { GET_RECIPES, FILTER_BY_DIET } from "../actions";

const initiaState = {
  recipes: [],
  allRecipes: [],
};

function rootReducer(state = initiaState, action) {
  let allRecipes;
  let dietFiltered;

  /* const onlyDiets = [];
  if (diets) {
    for (const diet of diets) {
      typeof diet === "object" ? onlyDiets.push(diet.name) : onlyDiets.push(diet);
    }
  } */

  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };

    case FILTER_BY_DIET:
      allRecipes = state.allRecipes;
      dietFiltered =
        action.payload === "All"
          ? allRecipes
          : allRecipes.filter((el) => el.diets.find((e) => e === action.payload));

      return {
        ...state,
        recipes: dietFiltered,
      };

    default:
      return state;
  }
}

export default rootReducer;
