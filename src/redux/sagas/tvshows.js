import { call, put } from "redux-saga/effects";
import * as actions from "redux/actions";
import * as api from "api";

export function* getTvShowDetail(action) {
  try {
    const res = yield call(api.TvShowAPI.getTvShowDetail, action.payload);
    const images = yield call(api.TvShowAPI.getTvShowDetailByType, {
      tvId: action.payload,
      type: "images",
    });

    const videos = yield call(api.TvShowAPI.getTvShowDetailByType, {
      tvId: action.payload,
      type: "videos",
    });

    yield put(
      actions.getTvShowDetail.getTvShowDetailSuccess({
        detail: res.data,
        images: images.data,
        videos: videos.data,
      })
    );
  } catch (error) {
    return error;
  }
}
