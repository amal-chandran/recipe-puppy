import { LOAD_SUCCESS } from "./../types/RecipeTypes";
const initialState = {
  recipeList: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_SUCCESS:
      return { ...state, recipeList: payload };

    default:
      return state;
  }
};
