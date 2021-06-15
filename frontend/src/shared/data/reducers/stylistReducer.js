import {
  STYLIST_POST_REQUEST,
  STYLIST_POST_SUCCESS,
  STYLIST_POST_FAILURE,
  STYLIST_PATCH_REQUEST,
  STYLIST_PATCH_SUCCESS,
  STYLIST_PATCH_FAILURE,
} from "../constans/stylistConstans";
import { LOADING_STATES } from "../constans/commonConstans";

const initialState = {
  loading: {},
  stylist: {},
  info: {},
};

function stylist(state = initialState, action) {
  const newLoading = { ...state.loading };

  switch (action.type) {
    case STYLIST_POST_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case STYLIST_POST_SUCCESS:
      delete newLoading.STYLIST_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADED,
        },
        stylist: action.payload.stylist,
        info: {
          ...state.info,
          message: action.payload.message,
          status: true,
        },
      };

    case STYLIST_POST_FAILURE:
      delete newLoading.STYLIST_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        stylist: {},
        info: {
          ...state.info,
          message: action.payload.message,
          status: false,
        },
      };

    case STYLIST_PATCH_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case STYLIST_PATCH_SUCCESS:
      delete newLoading.STYLIST_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADED,
        },
        stylist: action.payload.stylist,
        info: {
          ...state.info,
          message: action.payload.message,
          status: true,
        },
      };

    case STYLIST_PATCH_FAILURE:
      delete newLoading.STYLIST_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        stylist: {},
        info: {
          ...state.info,
          message: action.payload.message,
          status: false,
        },
      };

    default:
      return state;
  }
}

export default stylist;
