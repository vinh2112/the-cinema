import axios from "axios";
import * as CONSTANT from "constant";

const FilterAPI = {
  filter: async (payload) => {
    try {
      const res = await axios.get(
        `${CONSTANT.URL_FILTER}${payload.type}${CONSTANT.API_KEY}${
          CONSTANT.LANGUAGE
        }&sort_by=${payload.filter}&with_genres=${payload.genres.join(
          ","
        )}&page=${payload.page || 1}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  },
};

export default FilterAPI;
