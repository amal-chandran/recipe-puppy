import { all } from "redux-saga/effects";
import RecipeSaga from "./RecipeSaga";

export default function* rootRecipeSaga() {
  yield all([RecipeSaga()]);
}
