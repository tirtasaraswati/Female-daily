import * as types from "../../config/actionType";
import { all, call, put, takeLatest, select } from "redux-saga/effects";
import action from "../../redux/App/action";
import { GET } from "../../config/api";

const BASE_URL_API = "http://www.omdbapi.com/?apikey=faf7e5bb&s=";
const BASE_URL_API_POSTER = "http://img.omdbapi.com/?apikey=faf7e5bb&i=";
const { setLoader } = action;
const getState = (state) => state.App;

export function* getMovie(action) {
  try {
    yield put(setLoader(true));
    const state = yield select(getState);
    let data;
    let listData = [];
    if (state.search.title === "") {
      return (data = []);
    } else {
      data = yield call(
        GET,
        BASE_URL_API + state.search.title + "&page=" + action.page,
        {}
      );
    }
    if (data.Search !== undefined) {
      listData = [...state.listMovie, ...data.Search];
    }
    yield put({
      type: types.GET_MOVIE_SUCCESS,
      payload: listData,
      isResponse: data.Response.toLowerCase() === "false" ? false : true,
      isError: data.Error !== undefined ? data.Error : "No Data",
      isMore: data.Search.length > 5 ? true : false,
    });
    yield put(setLoader(false));
  } catch (error) {
    console.log("error : ", error);
    yield put(setLoader(false));
  }
}

export function* getDetail(action) {
  try {
    yield put(setLoader(true));
    let data = yield call(
      GET,
      BASE_URL_API + action.value.Title + "&i=" + action.value.imdbID,
      {}
    );

    let dataDetail = data.Search.find(
      (obj) => obj.imdbID == action.value.imdbID
    );

    localStorage.setItem("Detail", JSON.stringify(dataDetail));

    yield put({ type: types.GET_DETAIL_SUCCESS, payload: dataDetail });
    yield put(setLoader(false));
  } catch (error) {
    console.log("error : ", error);
    yield put(setLoader(false));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_MOVIE, getMovie),
    takeLatest(types.GET_DETAIL, getDetail),
  ]);
}
