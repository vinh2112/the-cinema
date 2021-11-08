import { INIT_STATE } from "constant";
import { getType, searchTrending, search } from "redux/actions";

export default function searchReducers(state = INIT_STATE.search, action) {
  switch (action.type) {
    case getType(searchTrending.searchTrendingRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(searchTrending.searchTrendingSuccess):
      return {
        ...state,
        isLoading: false,
        trending: action.payload.results,
      };
    case getType(search.searchRequest):
      return {
        ...state,
        isLoading: true,
        data: undefined,
      };
    case getType(search.searchSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload.results,
      };
    case getType(search.searchFailure):
      return {
        ...state,
        isLoading: false,
        data: undefined,
      };
    default:
      return state;
  }
}
