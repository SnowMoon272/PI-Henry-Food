import axios from "axios";

export default function getRecipes(params) {
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/recipes");
    return dispatch({
      type: "GET_RECIPES",
      payload: json.data,
    });
  };
}
