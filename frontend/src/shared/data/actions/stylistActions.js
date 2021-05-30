import request from "../../utils/request";
import {
  STYLIST_LIST_GET_REQUEST,
  STYLIST_LIST_GET_SUCCESS,
  STYLIST_LIST_GET_FAILURE,
} from "../constans/stylistConstans";

export const getStylistList = () => async (dispatch) => {
  dispatch({
    type: STYLIST_LIST_GET_REQUEST,
  });

  try {
    const { data } = await request.get("/stylists");
    dispatch({
      type: STYLIST_LIST_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STYLIST_LIST_GET_FAILURE,
    });
  }
};
