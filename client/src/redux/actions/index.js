import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const FILTER_BY_DIET = "FILTER_BY_DIET";
export const ORDER_BY_TITLE = "ORDER_BY_TITLE";
export const ORDER_BY_HEALTSCHORE = "ORDER_BY_HEALTSCHORE";
export const GET_TITLE_RECIPES = "GET_TITLE_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_DETAILS = "GET_DETAILS";
export const RESET_DETAILS = "RESET_DETAILS";
export const SWITCH_LOADING = "SWITCH_LOADING";
export const POST_RECIPE = "POST_RECIPE";
export const GET_RECIPES_DB_API = "GET_RECIPES_DB_API";
export const DELETE_RECIPE = "DELETE_RECIPE";

/* *************************************** ASYNC AWAIT *************************************** */

export function getRecipes() {
  return async (dispatch) => {
    try {
      const json = await axios.get("/recipes");
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
      const json = await axios.get(`/recipes?name=${title}`);
      return dispatch({
        type: GET_TITLE_RECIPES,
        payload: json.data,
      });
    } catch (error) {
      window.location.href === "http://localhost:3000/home"
        ? window.location.replace("http://localhost:3000/error404")
        : alert("Recipe not found");
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

export function deleteRecipe(id) {
  return async (dispatch) => {
    try {
      const json = await axios.delete(`/recipeDlt?idDelete=${id}`);
      return dispatch({
        type: DELETE_RECIPE,
        payload: json.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

/* *************************************** PROMISES *************************************** */

export function getDiets() {
  return (dispatch) => {
    axios
      .get("/diets")
      .then((response) => {
        dispatch({
          type: GET_DIETS,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}

export function postRecipe(payload) {
  return (dispatch) => {
    axios
      .post("/recipe", payload)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}

export function filterByDbApi(swich) {
  return (dispatch) => {
    axios
      .get(`/recipesDB?type=${swich}`)
      .then((response) => {
        dispatch({
          type: GET_RECIPES_DB_API,
          payload: response.data,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
}

/* ***************************************** SYNC ***************************************** */

export function switchLoading(payload) {
  return (dispatch) => {
    dispatch({
      type: SWITCH_LOADING,
      payload,
    });
  };
}

export function resetDetails(payload) {
  return {
    type: RESET_DETAILS,
    payload,
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
