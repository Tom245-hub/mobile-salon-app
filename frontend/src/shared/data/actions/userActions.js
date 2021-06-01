import request from "../../utils/request";
import {
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_POST_FAILURE,
} from "../constans/userConstans";

export const postUser = (loginObject) => async (dispatch) => {
  dispatch({
    type: USER_POST_REQUEST,
  });

  try {
    const { data, status } = await request.post("/users", loginObject);

    if (status === 200) {
      dispatch({
        type: USER_POST_SUCCESS,
        payload: data, ///////// do poprawienia - bez ustawiania hasła
      });
    } else if (status === 404) {
      dispatch({
        type: USER_POST_FAILURE,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_POST_FAILURE,
    });
  }
};
