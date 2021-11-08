import { INIT_STATE } from "constant";
import { getType, showModal, hideModal } from "redux/actions";

export default function modalReducers(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        isOpen: true,
        content: action.payload,
      };
    case getType(hideModal):
      return {
        isOpen: false,
      };
    default:
      return state;
  }
}
