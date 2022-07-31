/* eslint-disable comma-dangle */
/* eslint-disable indent */
import {
  GET_RECIPES,
  FILTER_BY_DIET,
  ORDER_BY_TITLE,
  ORDER_BY_HEALTSCHORE,
  GET_TITLE_RECIPES,
  GET_DIETS,
  GET_DETAILS,
  RESET_DETAILS,
} from "../actions";

const initiaState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  detail: [],
};

function rootReducer(state = initiaState, action) {
  let allRecipesCopy;
  let dietFiltered;
  let orderArray;
  let orderArrayHealtSchore;

  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };

    case RESET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };

    case "POST_RECIPE":
      return {
        ...state,
      };

    case GET_TITLE_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    case FILTER_BY_DIET:
      allRecipesCopy = state.allRecipes;

      if (action.payload === "All") {
        dietFiltered = allRecipesCopy;
      } else if (action.payload === "vegetarian") {
        dietFiltered = allRecipesCopy
          .filter((el) => el.vegetarian && el.vegetarian)
          .concat(
            allRecipesCopy.filter((el) =>
              el.diets.find((e) => (e.name ? e.name === action.payload : e === action.payload))
            )
          );
      } else {
        dietFiltered = allRecipesCopy.filter((el) =>
          el.diets.find((e) => (e.name ? e.name === action.payload : e === action.payload))
        );
      }
      return {
        ...state,
        recipes: dietFiltered,
      };

    case ORDER_BY_TITLE:
      orderArray =
        action.payload === "asc"
          ? state.recipes.sort((a, b) => {
              if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
              }
              if (b.title.toLowerCase() > a.title.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort((a, b) => {
              if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1;
              }
              if (b.title.toLowerCase() > a.title.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: orderArray,
      };

    case ORDER_BY_HEALTSCHORE:
      orderArrayHealtSchore =
        action.payload === "asc"
          ? state.recipes.sort((a, b) => {
              if (a.healthScore > b.healthScore) {
                return -1;
              }
              if (b.healthScore > a.healthScore) {
                return 1;
              }
              return 0;
            })
          : state.recipes.sort((a, b) => {
              if (a.healthScore > b.healthScore) {
                return 1;
              }
              if (b.healthScore > a.healthScore) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: orderArrayHealtSchore,
      };

    default:
      return state;
  }
}

export default rootReducer;
