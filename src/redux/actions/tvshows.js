import { createActions } from "redux-actions";

export const getTvShowDetail = createActions({
  getTvShowDetailRequest: (payload) => payload,
  getTvShowDetailSuccess: (payload) => payload,
});

export const getTvShowHomePage = createActions({
  getTvShowHomePageRequest: undefined,
  getTvShowHomePageSuccess: (payload) => payload,
});
