import { GET_RECIPES } from "../actions";

const initiaState = {
  recipes: [],
};

function rootReducer(action, state = initiaState) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    default:
      break;
  }
}

export default rootReducer;
