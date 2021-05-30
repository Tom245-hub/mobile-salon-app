import request from "../../utils/request";
import {
  CATEGORY_LIST_GET_REQUEST,
  CATEGORY_LIST_GET_SUCCESS,
  CATEGORY_LIST_GET_FAILURE,
} from "../constans/categoryConstans";

export const getCategoryList = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_LIST_GET_REQUEST,
  });

  try {
    const { data } = await request.get("/categories");
    dispatch({
      type: CATEGORY_LIST_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_GET_FAILURE,
    });
  }
};
