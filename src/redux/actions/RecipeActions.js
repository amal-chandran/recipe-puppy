import { LOAD } from "./../types/RecipeTypes";
export const load_recipe_page = (ingredients, page) => ({
  type: LOAD,
  payload: {
    ingredients,
    page
  }
});
