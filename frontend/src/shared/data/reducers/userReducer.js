import {
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
  USER_LOGOUT,
} from "../constans/userConstans";
import { LOADING_STATES } from "../constans/commonConstans";

const initialState = {
  loading: {},
  user: {},
  isLogged: false,
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
        isLogged: false,
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
        isLogged: true,
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
        isLogged: false,
      };

    case USER_LOGOUT:
      delete newLoading.USER_POST_REQUEST;
      return {
        ...state,
        loading: {},
        user: {},
        isLogged: false,
      };

    default:
      return state;
  }
};

export default user;
