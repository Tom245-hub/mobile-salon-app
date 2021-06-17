import {
  STYLIST_GET_REQUEST,
  STYLIST_GET_SUCCESS,
  STYLIST_GET_FAILURE,
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
  data: {},
  status: "loading",
};

function stylist(state = initialState, action) {
  const newLoading = { ...state.loading };

  switch (action.type) {
    case STYLIST_GET_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,

          [action.type]: LOADING_STATES.LOADING,
        },
        status: "loading",
      };

    case STYLIST_GET_SUCCESS:
      delete newLoading.STYLIST_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADED,
        },
        data: action.payload,
        status: "loaded",
      };

    case STYLIST_GET_FAILURE:
      delete newLoading.STYLIST_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        data: {},
        status: "failed",
      };

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
        data: action.payload,
      };

    case STYLIST_POST_FAILURE:
      delete newLoading.STYLIST_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        data: {},
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
      delete newLoading.STYLIST_PATCH_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADED,
        },
        data: action.payload,
      };

    case STYLIST_PATCH_FAILURE:
      delete newLoading.STYLIST_PATCH_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        data: {},
      };

    default:
      return state;
  }
}

export default stylist;
