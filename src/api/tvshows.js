import axios from "axios";
import * as CONSTANT from "constant";

const TvShowAPI = {
  fetchTvShows: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_TVSHOW}/${payload.filter}${CONSTANT.API_KEY}${CONSTANT.LANGUAGE}&page=1`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  getTvShowDetail: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_TVSHOW}${payload}${CONSTANT.API_KEY}${CONSTANT.LANGUAGE}&append_to_response=external_ids,keywords,credits`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  getTvShowDetailByType: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_TVSHOW}${payload.tvId}/${payload.type}${
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
};

export default TvShowAPI;
