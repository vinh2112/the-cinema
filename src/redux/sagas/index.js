import { takeLatest } from "redux-saga/effects";
import * as actions from "redux/actions";
import {
  fetchDetailMovie,
  fetchHomePage,
  // fetchMoviesByType,
  // fetchMoviesFilter,
} from "./movies";
import { getTvShowDetail, fetchTvShowHomePage } from "./tvshows";
import { searchTrending, search } from "./search";

function* mySaga() {
  yield takeLatest(actions.fetchHomePage.fetchMoviesRequest, fetchHomePage);
  yield takeLatest(actions.getTvShowHomePage.getTvShowHomePageRequest, fetchTvShowHomePage);
  // Movies
  yield takeLatest(actions.fetchDetailMovie.fetchDetailMovieRequest, fetchDetailMovie);
  // yield takeLatest(
  //   actions.fetchMoviesByType.fetchMoviesByTypeRequest,
  //   fetchMoviesByType
  // );
  // yield takeLatest(
  //   actions.fetchMoviesFilter.fetchMoviesFilterRequest,
  //   fetchMoviesFilter
  // );
  // Tv Shows
  yield takeLatest(actions.getTvShowDetail.getTvShowDetailRequest, getTvShowDetail);
  yield takeLatest(actions.searchTrending.searchTrendingRequest, searchTrending);
  yield takeLatest(actions.search.searchRequest, search);
}

export default mySaga;
