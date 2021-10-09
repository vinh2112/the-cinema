import axios from "axios";
import * as CONSTANT from "constant";

const MovieAPI = {
  fetchTrending: async () => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_TRENDING}${CONSTANT.API_KEY}${CONSTANT.LANGUAGE}${CONSTANT.REGION}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  fetchMovieByType: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_MOVIE}${payload}${CONSTANT.API_KEY}${CONSTANT.LANGUAGE}${CONSTANT.REGION}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  getDetailMovie: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_MOVIE}${payload}${CONSTANT.API_KEY}${CONSTANT.LANGUAGE}&append_to_response=releases,credits,external_ids,keywords&include_image_language=en`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  getDetailMovieByType: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_MOVIE}${payload.movieId}/${payload.type}${
          CONSTANT.API_KEY
        }&language=en-US${
          payload.type === "images" && "&include_image_language=en"
        }`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  getDetailMovieCollection: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_COLLECTION}${payload}${CONSTANT.API_KEY}${CONSTANT.LANGUAGE}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
};

export default MovieAPI;
