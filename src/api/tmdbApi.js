import axiosClient from "./axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  on_the_air: "on_the_air",
  popular: "popular",
  top_rated: "top_rated",
};

const tmdbApi = {
  getTrendingAll: (params) => {
    const url = "trending/all/day";
    return axiosClient.get(url, params);
  },
  getTrending: (cate, params) => {
    const url = "trending/" + category[cate] + "/day";
    return axiosClient.get(url, params);
  },
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return axiosClient.get(url, params);
  },
  search: (params) => {
    const url = "search/multi";
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return axiosClient.get(url, { params: {} });
  },
  getImages: (cate, id) => {
    const url = category[cate] + "/" + id + "/images";
    return axiosClient.get(url, { params: { include_image_language: "en" } });
  },
  getCollection: (id) => {
    const url = "collection/" + id;
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
