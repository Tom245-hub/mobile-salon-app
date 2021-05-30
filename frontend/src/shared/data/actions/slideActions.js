import request from "../../utils/request";
import {
  SLIDE_LIST_GET_REQUEST,
  SLIDE_LIST_GET_SUCCESS,
  SLIDE_LIST_GET_FAILURE,
} from "../constans/slideConstans";

export const getSlideList = () => async (dispatch) => {
  dispatch({
    type: SLIDE_LIST_GET_REQUEST,
  });

  try {
    const { data } = await request.get("/slider");
    dispatch({
      type: SLIDE_LIST_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SLIDE_LIST_GET_FAILURE,
    });
  }
};
