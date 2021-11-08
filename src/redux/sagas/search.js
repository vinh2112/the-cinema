import { call, put } from "redux-saga/effects";
import * as actions from "redux/actions";
import tmdbApi from "api/tmdbApi";

export function* searchTrending() {
  try {
    const params = {};
    const res = yield call(tmdbApi.getTrendingAll, { params });
    yield put(actions.searchTrending.searchTrendingSuccess(res));
  } catch (error) {
    return error;
  }
}

export function* search(action) {
  try {
    const params = { query: action.payload.trim() };
    if (action.payload.trim()) {
      const res = yield call(tmdbApi.search, { params });
      yield put(actions.search.searchSuccess(res));
    } else {
      yield put(actions.search.searchSuccess(""));
    }
  } catch (error) {
    yield put(actions.search.searchFailure());
  }
}
