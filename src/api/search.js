import axios from "axios";
import * as CONSTANT from "constant";

const SearchAPI = {
  search: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_SEARCH}${CONSTANT.API_KEY}${CONSTANT.LANGUAGE}&query=${payload}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
  getGenres: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_GENRES}${payload}/list${CONSTANT.API_KEY}${CONSTANT.LANGUAGE}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
};

export default SearchAPI;
