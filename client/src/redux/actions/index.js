import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const ORDER_BY_TITLE = "ORDER_BY_TITLE";
export const ORDER_BY_HEALTSCHORE = "ORDER_BY_HEALTSCHORE";

export function getRecipes() {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/recipes");
    return dispatch({
      type: GET_RECIPES,
      payload: json.data,
    });
  };
}

export function filterByDiet(payload) {
  return {
    type: FILTER_BY_DIET,
    payload,
  };
}

export function orderByTitle(payload) {
  return {
    type: ORDER_BY_TITLE,
    payload,
  };
}

export function orderByHealtSchore(payload) {
  return {
    type: ORDER_BY_HEALTSCHORE,
    payload,
  };
}
