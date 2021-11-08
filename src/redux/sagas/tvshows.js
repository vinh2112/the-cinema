import { call, put } from "redux-saga/effects";
import * as actions from "redux/actions";
import tmdbApi, { tvType, category } from "api/tmdbApi";

export function* getTvShowDetail(action) {
  try {
    const params = { append_to_response: ["credits", "external_ids", "keywords"], language: "vi-VN" };
    const detail = yield call(tmdbApi.detail, category.tv, action.payload, { params });
    const images = yield call(tmdbApi.getImages, category.tv, action.payload);
    const videos = yield call(tmdbApi.getVideos, category.tv, action.payload);

    yield put(
      actions.getTvShowDetail.getTvShowDetailSuccess({
        detail,
        images,
        videos,
      })
    );
  } catch (error) {
    return error;
  }
}

export function* fetchTvShowHomePage() {
  try {
    const params = { language: "vi-VN" };
    const trending = yield call(tmdbApi.getTrending, category.tv, { params: {} });
    const on_the_air = yield call(tmdbApi.getTvList, tvType.on_the_air, { params });

    yield put(
      actions.getTvShowHomePage.getTvShowHomePageSuccess({
        trending,
        onTheAir: on_the_air,
      })
    );
  } catch (error) {
    return error;
  }
}
