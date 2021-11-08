import { fetchHomePage, fetchMoviesByType, fetchDetailMovie, fetchMoviesFilter } from "./movies";
import { getTvShowDetail, getTvShowHomePage } from "./tvshows";
import { searchTrending, search } from "./search";
import { createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const showModal = createAction("SHOW_MODAL", (payload) => payload);
export const hideModal = createAction("HIDE_MODAL");

export {
  fetchHomePage,
  fetchMoviesByType,
  fetchDetailMovie,
  fetchMoviesFilter,
  getTvShowHomePage,
  getTvShowDetail,
  searchTrending,
  search,
};
