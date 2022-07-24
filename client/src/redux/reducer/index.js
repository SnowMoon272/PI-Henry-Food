import { GET_RECIPES } from "../actions";

const initiaState = {
  recipes: [],
};

function rootReducer(state = initiaState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
