import request from "../../utils/request";
import {
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
  USER_LOGOUT,
} from "../constans/userConstans";

export const loginUser = (loginObject) => async (dispatch) => {
  dispatch({
    type: USER_POST_REQUEST,
  });

  try {
    const { data, status } = await request.post("/users", loginObject);

    switch (status) {
      case 200:
        dispatch({
          type: USER_POST_SUCCESS,
          payload: data,
        });
        break;

      case 404:
        dispatch({
          type: USER_POST_FAILURE,
          payload: data,
        });
        break;

      case 401:
        dispatch({
          type: USER_POST_FAILURE,
          payload: data,
        });
        break;

      default:
        return null;
    }
  } catch (error) {
    dispatch({
      type: USER_POST_FAILURE,
      payload: {
        message: "Błąd serwera - 500",
      },
    });
  }
};

export const logoutUser = (loginObject) => async (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};
