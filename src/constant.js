export const API_KEY = "?api_key=09777f41c69d381e600765e5952d569f";
export const URL_TRENDING = "https://api.themoviedb.org/3/trending/all/day";
export const URL_MOVIE = "https://api.themoviedb.org/3/movie/";
export const URL_TVSHOW = "https://api.themoviedb.org/3/tv/";
export const URL_DETAIL = "https://api.themoviedb.org/3/movie/";
export const URL_SEARCH = "https://api.themoviedb.org/3/search/multi";
export const URL_COLLECTION = "https://api.themoviedb.org/3/collection/";
export const URL_GENRES_MOVIE = "https://api.themoviedb.org/3/genre/movie/list";
export const URL_GENRES_TV = "https://api.themoviedb.org/3/genre/tv/list";
export const URL_IMAGE = "https://image.tmdb.org/t/p/w300/";
export const URL_BACKGROUND = "https://image.tmdb.org/t/p/original/";
export const IMG_SIZE_XSMALL = "https://image.tmdb.org/t/p/w45/";
export const VIDEO_LINK = "https://api.themoviedb.org/3/movie/";
export const LANGUAGE = "&language=vi-VN";
export const REGION = "&region=US";

export const INIT_STATE = {
  movies: {
    isLoading: true,
    trending: [],
    nowPlaying: [],
    upComing: [],
    detail: undefined,
    videos: [],
    images: {},
  },
  tvshows: {
    isLoading: true,
    popular: [],
    detail: undefined,
    videos: [],
    images: {},
  },
  search: {
    isLoading: false,
    trending: undefined,
    data: [],
    searchValue: "",
  },
};
