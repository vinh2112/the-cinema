import { combineReducers } from "redux";
import movies from "./movies";
import tvshows from "./tvshows";
import search from "./search";

export default combineReducers({
  movies,
  tvshows,
  search,
});
