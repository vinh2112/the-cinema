import { INIT_STATE } from "constant";
import { getType, fetchHomePage, fetchDetailMovie, fetchMoviesByType, fetchMoviesFilter } from "redux/actions";

export default function movieReducers(state = INIT_STATE.movies, action) {
  switch (action.type) {
    case getType(fetchHomePage.fetchMoviesRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(fetchHomePage.fetchMoviesSuccess):
      return {
        ...state,
        isLoading: false,
        trending: action.payload.trending,
        upComing: action.payload.upComing,
      };
    case getType(fetchMoviesByType.fetchMoviesByTypeRequest):
      return {
        ...state,
        isLoading: false,
      };
    case getType(fetchMoviesByType.fetchMoviesByTypeSuccess):
      return {
        ...state,
        popular: action.payload.popular,
        topRated: action.payload.topRated,
      };
    case getType(fetchDetailMovie.fetchDetailMovieRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(fetchDetailMovie.fetchDetailMovieSuccess):
      return {
        ...state,
        detail: action.payload.detail,
        videos: action.payload.videos,
        images: action.payload.images,
        isLoading: false,
      };
    case getType(fetchMoviesFilter.fetchMoviesFilterRequest):
      return {
        ...state,
      };
    case getType(fetchMoviesFilter.fetchMoviesFilterSuccess):
      return {
        ...state,
        popular: action.payload.popular,
        topRated: action.payload.topRated,
      };
    default:
      return state;
  }
}
