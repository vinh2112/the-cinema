import { call, put } from "redux-saga/effects";
import * as api from "api";
import * as actions from "redux/actions";

export function* fetchHomePage() {
  try {
    const trending = yield call(api.MovieAPI.fetchTrending);
    const nowPlaying = yield call(api.MovieAPI.fetchMovieByType, "popular");
    const upComing = yield call(api.MovieAPI.fetchMovieByType, "upcoming");

    yield put(
      actions.fetchHomePage.fetchMoviesSuccess({
        trending: trending.data,
        nowPlaying: nowPlaying.data,
        upComing: upComing.data,
      })
    );
  } catch (error) {
    return error;
  }
}

export function* fetchDetailMovie(action) {
  try {
    const detail = yield call(api.MovieAPI.getDetailMovie, action.payload);
    const videos = yield call(api.MovieAPI.getDetailMovieByType, {
      movieId: action.payload,
      type: "videos",
    });
    const images = yield call(api.MovieAPI.getDetailMovieByType, {
      movieId: action.payload,
      type: "images",
    });

    yield put(
      actions.fetchDetailMovie.fetchDetailMovieSuccess({
        detail: detail.data,
        videos: videos.data,
        images: images.data,
      })
    );
  } catch (error) {
    return error;
  }
}
