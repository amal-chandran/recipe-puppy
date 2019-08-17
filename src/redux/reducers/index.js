import { combineReducers } from "redux";
import RecipeReducer from "./RecipeReducer";

export default combineReducers({
  recipe: RecipeReducer
});
