import {
  STYLIST_LIST_GET_REQUEST,
  STYLIST_LIST_GET_SUCCESS,
  STYLIST_LIST_GET_FAILURE,
} from "../constans/stylistConstans";
import { LOADING_STATES } from "../constans/commonConstans";

const initialState = {
  loading: {},
  data: [],
};

function stylistList(state = initialState, action) {
  const newLoading = { ...state.loading };

  switch (action.type) {
    case STYLIST_LIST_GET_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case STYLIST_LIST_GET_SUCCESS:
      delete newLoading.STYLIST_LIST_GET_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADED,
        },
        data: action.payload,
      };

    case STYLIST_LIST_GET_FAILURE:
      delete newLoading.STYLIST_LIST_GET_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        data: [],
      };

    default:
      return state;
  }
}

export default stylistList;
