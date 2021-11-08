import { call, put } from "redux-saga/effects";
import tmdbApi, { movieType, category } from "api/tmdbApi";
import * as actions from "redux/actions";

// function getSortBy(sortby) {
//   switch (sortby) {
//     case "popular":
//       return "popularity.desc";
//     case "top_rated":
//       return "vote_count.desc";
//     default:
//       return "";
//   }
// }

export function* fetchHomePage() {
  try {
    const params = { language: "vi-VN" };
    const trending = yield call(tmdbApi.getTrending, category.movie, { params });
    const upComing = yield call(tmdbApi.getMoviesList, movieType.upcoming, {
      params,
    });

    yield put(
      actions.fetchHomePage.fetchMoviesSuccess({
        trending: trending,
        upComing: upComing,
      })
    );
  } catch (error) {
    return error;
  }
}

// export function* fetchMoviesByType(action) {
//   try {
//     const res = yield call(api.MovieAPI.fetchMovieByType, action.payload);
//     if (action.payload === "popular") {
//       yield put(
//         actions.fetchMoviesByType.fetchMoviesByTypeSuccess({
//           popular: res.data,
//         })
//       );
//     } else {
//       yield put(
//         actions.fetchMoviesByType.fetchMoviesByTypeSuccess({
//           topRated: res.data,
//         })
//       );
//     }
//   } catch (error) {
//     return error;
//   }
// }

export function* fetchDetailMovie(action) {
  try {
    const params = { append_to_response: ["releases", "credits", "external_ids", "keywords"], language: "vi-VN" };
    const detail = yield call(tmdbApi.detail, category.movie, action.payload, { params });
    const videos = yield call(tmdbApi.getVideos, category.movie, action.payload);
    const images = yield call(tmdbApi.getImages, category.movie, action.payload);

    yield put(
      actions.fetchDetailMovie.fetchDetailMovieSuccess({
        detail: detail,
        videos: videos,
        images: images,
      })
    );
  } catch (error) {
    return error;
  }
}

// export function* fetchMoviesFilter(action) {
//   try {
//     const res = yield call(api.FilterAPI.filter, {
//       ...action.payload,
//       filter: getSortBy(action.payload.filter),
//     });

//     if (action.payload.filter === "popular") {
//       yield put(
//         actions.fetchMoviesFilter.fetchMoviesFilterSuccess({
//           popular: res.data,
//         })
//       );
//     } else {
//       yield put(
//         actions.fetchMoviesFilter.fetchMoviesFilterSuccess({
//           topRated: res.data,
//         })
//       );
//     }
//   } catch (error) {
//     return error;
//   }
// }
