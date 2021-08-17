import { all } from "redux-saga/effects";
import HomeSagas from "./Home/saga";

export default function* rootSaga(getState) {
  yield all([HomeSagas()]);
}
