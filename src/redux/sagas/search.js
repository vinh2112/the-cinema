import { call, put } from "redux-saga/effects";
import * as api from "api";
import * as actions from "redux/actions";

export function* searchTrending() {
  try {
    const res = yield call(api.MovieAPI.fetchTrending);
    yield put(actions.searchTrending.searchTrendingSuccess(res.data));
  } catch (error) {
    return error;
  }
}

export function* search(action) {
  try {
    if (action.payload) {
      const res = yield call(api.SearchAPI.search, action.payload);
      yield put(actions.search.searchSuccess(res.data));
    } else {
      yield put(actions.search.searchSuccess(""));
    }
  } catch (error) {
    return error;
  }
}
