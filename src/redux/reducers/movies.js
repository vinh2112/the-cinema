import { INIT_STATE } from "constant";
import { getType, fetchHomePage, fetchDetailMovie } from "redux/actions";

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
        nowPlaying: action.payload.nowPlaying,
        upComing: action.payload.upComing,
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
    default:
      return state;
  }
}
