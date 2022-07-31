import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const ORDER_BY_TITLE = "ORDER_BY_TITLE";
export const ORDER_BY_HEALTSCHORE = "ORDER_BY_HEALTSCHORE";
export const GET_TITLE_RECIPES = "GET_TITLE_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_DETAILS = "GET_DETAILS";
export const RESET_DETAILS = "RESET_DETAILS";

export function getRecipes() {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3001/recipes");
      return dispatch({
        type: GET_RECIPES,
        payload: json.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function getTitleRecipes(title) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/recipes?name=${title}`);
      return dispatch({
        type: GET_TITLE_RECIPES,
        payload: json.data,
      });
    } catch (error) {
      throw alert("Recipe name not Found");
    }
  };
}

export function getDetails(id) {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3001/recipes/${id}`);
      return dispatch({
        type: GET_DETAILS,
        payload: json.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function resetDetails(payload) {
  return {
    type: RESET_DETAILS,
    payload,
  };
}

export function getDiets() {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3001/diets");
      return dispatch({
        type: GET_DIETS,
        payload: json.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function postRecipe(payload) {
  return (dispatch) => {
    const response = axios.post("http://localhost:3001/recipe", payload);
    return response;
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
