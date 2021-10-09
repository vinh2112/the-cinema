import { createActions } from "redux-actions";

export const fetchHomePage = createActions({
  fetchMoviesRequest: undefined,
  fetchMoviesSuccess: (payload) => payload,
});

export const fetchDetailMovie = createActions({
  fetchDetailMovieRequest: (payload) => payload,
  fetchDetailMovieSuccess: (payload) => payload,
});
