import {
  STYLIST_LIST_GET,
  STYLIST_LIST_GET_REQUEST,
  STYLIST_LIST_GET_SUCCESS,
  STYLIST_LIST_GET_FAILURE,
  LOADING_STATES,
} from "../constans/stylistConstans";

const initialState = {
  loading: {},
  stylistList: [],
};

function stylist(state = initialState, action) {
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
        loading: newLoading,
        stylistList: action.payload,
      };

    case STYLIST_LIST_GET_FAILURE:
      delete newLoading.STYLIST_LIST_GET_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        stylistList: [],
      };

    default:
      return state;
  }
}

export default stylist;
