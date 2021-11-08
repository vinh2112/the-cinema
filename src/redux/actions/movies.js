import { createActions } from "redux-actions";

export const fetchHomePage = createActions({
  fetchMoviesRequest: undefined,
  fetchMoviesSuccess: (payload) => payload,
});

export const fetchMoviesByType = createActions({
  fetchMoviesByTypeRequest: (payload) => payload,
  fetchMoviesByTypeSuccess: (payload) => payload,
});

export const fetchDetailMovie = createActions({
  fetchDetailMovieRequest: (payload) => payload,
  fetchDetailMovieSuccess: (payload) => payload,
});

export const fetchMoviesFilter = createActions({
  fetchMoviesFilterRequest: (payload) => payload,
  fetchMoviesFilterSuccess: (payload) => payload,
});
