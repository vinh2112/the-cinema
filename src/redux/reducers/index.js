import { combineReducers } from "redux";
import movies from "./movies";
import tvshows from "./tvshows";
import search from "./search";
import modal from "./modal";

export default combineReducers({
  movies,
  tvshows,
  search,
  modal,
});
