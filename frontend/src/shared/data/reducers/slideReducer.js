import {
  SLIDE_LIST_GET,
  SLIDE_LIST_GET_REQUEST,
  SLIDE_LIST_GET_SUCCESS,
  SLIDE_LIST_GET_FAILURE,
} from "../constans/slideConstans";
import { LOADING_STATES } from "../constans/commonConstans";

const initialState = {
  loading: {},
  slideList: [],
};

const slide = (state = initialState, action) => {
  const newLoading = { ...state.loading };

  switch (action.type) {
    case SLIDE_LIST_GET_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case SLIDE_LIST_GET_SUCCESS:
      delete newLoading.SLIDE_LIST_GET_REQUEST;
      return {
        ...state,
        loading: LOADING_STATES.LOADED,
        slideList: action.payload,
      };

    case SLIDE_LIST_GET_FAILURE:
      delete newLoading.SLIDE_LIST_GET_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        slideList: [],
      };

    default:
      return state;
  }
};

export default slide;
