import { createActions } from "redux-actions";

export const searchTrending = createActions({
  searchTrendingRequest: undefined,
  searchTrendingSuccess: (payload) => payload,
});

export const search = createActions({
  searchRequest: (payload) => payload,
  searchSuccess: (payload) => payload,
});
