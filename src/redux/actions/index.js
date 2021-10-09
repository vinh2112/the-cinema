import { fetchHomePage, fetchDetailMovie } from "./movies";
import { getTvShowDetail } from "./tvshows";
import { searchTrending, search } from "./search";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export {
  fetchHomePage,
  fetchDetailMovie,
  getTvShowDetail,
  searchTrending,
  search,
};
