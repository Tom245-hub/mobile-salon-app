import request from "../../utils/request";
import {
  STYLIST_LIST_GET_REQUEST,
  STYLIST_LIST_GET_SUCCESS,
  STYLIST_LIST_GET_FAILURE,
  STYLIST_POST_REQUEST,
  STYLIST_POST_SUCCESS,
  STYLIST_POST_FAILURE,
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

export const postStylist = (stylistObject) => async (dispatch) => {
  dispatch({
    type: STYLIST_POST_REQUEST,
  });
  console.log("test1");

  try {
    const { data } = await request.post("/stylists", stylistObject);
    dispatch({
      type: STYLIST_POST_SUCCESS,
      payload: data,
    });

    console.log("test2");
  } catch (error) {
    dispatch({
      type: STYLIST_POST_FAILURE,
    });
    console.log("test3");
  }
};
