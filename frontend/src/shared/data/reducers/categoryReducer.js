import {
  CATEGORY_LIST_GET,
  CATEGORY_LIST_GET_REQUEST,
  CATEGORY_LIST_GET_SUCCESS,
  CATEGORY_LIST_GET_FAILURE,
  LOADING_STATES,
} from "../constans/categoryConstans";

const initialState = {
  loading: {},
  categoryList: [],
};

const category = (state = initialState, action) => {
  const newLoading = { ...state.loading };

  switch (action.type) {
    case CATEGORY_LIST_GET_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case CATEGORY_LIST_GET_SUCCESS:
      delete newLoading.CATEGORY_LIST_GET_REQUEST;
      return {
        ...state,
        loading: newLoading,
        categoryList: action.payload,
      };

    case CATEGORY_LIST_GET_FAILURE:
      delete newLoading.CATEGORY_LIST_GET_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        categoryList: [],
      };

    default:
      return state;
  }
};

export default category;
