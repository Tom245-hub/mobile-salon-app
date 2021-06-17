import {
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
  USER_LOGOUT,
} from "../constans/userConstans";
import { LOADING_STATES } from "../constans/commonConstans";

const initialState = {
  loading: {},
  data: {},
  isLogged: false,
};

const user = (state = initialState, action) => {
  const newLoading = { ...state.loading };
  // const changedIsUserLogged = { ...state.isUserLogged };

  switch (action.type) {
    case USER_POST_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADING,
        },
        data: {},
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
        data: action.payload,
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
        data: {},
        isLogged: false,
      };

    case USER_LOGOUT:
      delete newLoading.USER_POST_REQUEST;
      return {
        ...state,
        loading: {},
        data: {},
        isLogged: false,
      };

    default:
      return state;
  }
};

export default user;
