import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_SUCCESS, LOAD, LOAD_ERROR } from "./../types/RecipeTypes";

import { fetchGet } from "./../../helpers/APIHelper";
function* load_recipe_page(action) {
  try {
    const data = yield call(fetchGet, "", { i: action.payload.ingredients });
    put({ type: LOAD_SUCCESS, payload: data.results });
  } catch (error) {
    put({ type: LOAD_ERROR, payload: error });
  }
}

export default function* rootRecipeSaga() {
  yield takeEvery(LOAD, load_recipe_page);
}
