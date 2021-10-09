import { createActions } from "redux-actions";

export const getTvShowDetail = createActions({
  getTvShowDetailRequest: (payload) => payload,
  getTvShowDetailSuccess: (payload) => payload,
});
