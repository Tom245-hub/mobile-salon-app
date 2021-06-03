import {
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
} from "../constans/userConstans";
import { LOADING_STATES } from "../constans/commonConstans";

const initialState = {
  loading: {},
  user: {},
};

const user = (state = initialState, action) => {
  const newLoading = { ...state.loading };
  const changedIsUserLogged = { ...state.isUserLogged };

  switch (action.type) {
    case USER_POST_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADING,
        },
        user: {},
      };

    case USER_POST_SUCCESS:
      delete newLoading.USER_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADED,
        },
        user: action.payload,
      };

    case USER_POST_FAILURE:
      delete newLoading.USER_POST_REQUEST;
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.FAILED,
        },
        user: {},
      };

    default:
      return state;
  }
};

export default user;
