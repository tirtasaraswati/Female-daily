import * as types from "../../config/actionType";
import { all, call, put, takeLatest, select } from "redux-saga/effects";
import action from "../../redux/Home/action";
import { GET } from "../../config/api";

const BASE_URL_API = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/";
const { setLoader } = action;
const getState = (state) => state.Home;

export function* getData(action) {
  try {
    yield put(setLoader(true));
    const state = yield select(getState);

    let response = yield call(GET, BASE_URL_API + "wp", {});

    if (response !== undefined) {
      yield put({
        type: types.GET_DATA_SUCCESS,
        listEditor: response["editor's choice"],
        listArticles: response["latest articles"],
        listReview: response["latest review"],
      });
    }
    yield put(setLoader(false));
  } catch (error) {
    console.log("error : ", error);
    yield put(setLoader(false));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(types.GET_DATA, getData)]);
}
