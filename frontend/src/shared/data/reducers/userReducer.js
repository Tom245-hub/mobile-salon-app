import {
  USER_POST,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
} from "../constans/userConstans";
import { LOADING_STATES } from "../constans/commonConstans";

const initialState = {
  loading: {},
  isUserLogged: false,
  user: {},
};

const user = (state = initialState, action) => {
  const newLoading = { ...state.loading };

  switch (action.type) {
    case USER_POST_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.type]: LOADING_STATES.LOADING,
        },
      };

    case USER_POST_SUCCESS:
      delete newLoading.USER_POST_REQUEST;
      return {
        ...state,
        loading: newLoading,
        user: action.payload,
        isUserLogged: true,
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
