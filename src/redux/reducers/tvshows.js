import { INIT_STATE } from "constant";
import { getType, getTvShowDetail } from "redux/actions";

export default function tvShowReducers(state = INIT_STATE.tvshows, action) {
  switch (action.type) {
    case getType(getTvShowDetail.getTvShowDetailRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getTvShowDetail.getTvShowDetailSuccess):
      return {
        ...state,
        isLoading: false,
        detail: action.payload.detail,
        images: action.payload.images,
        videos: action.payload.videos,
      };
    default:
      return state;
  }
}
