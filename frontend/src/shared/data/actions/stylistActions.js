import request from "../../utils/request";
import {
  STYLIST_LIST_GET_REQUEST,
  STYLIST_LIST_GET_SUCCESS,
  STYLIST_LIST_GET_FAILURE,
  STYLIST_GET_REQUEST,
  STYLIST_GET_SUCCESS,
  STYLIST_GET_FAILURE,
  STYLIST_POST_REQUEST,
  STYLIST_POST_SUCCESS,
  STYLIST_POST_FAILURE,
  STYLIST_PATCH_REQUEST,
  STYLIST_PATCH_SUCCESS,
  STYLIST_PATCH_FAILURE,
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

export const getStylist = (id) => async (dispatch) => {
  dispatch({
    type: STYLIST_GET_REQUEST,
  });

  try {
    const { data } = await request.get("/stylists/" + id);
    dispatch({
      type: STYLIST_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STYLIST_GET_FAILURE,
    });
  }
};

export const postStylist = (stylistObject) => async (dispatch) => {
  dispatch({
    type: STYLIST_POST_REQUEST,
  });

  try {
    const { data } = await request.post("/stylists", stylistObject);
    // console.log(data);
    dispatch({
      type: STYLIST_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STYLIST_POST_FAILURE,
      payload: {
        message: error.response.data,
      },
    });
  }
};

export const editStylist = (id, stylistObject) => async (dispatch) => {
  dispatch({
    type: STYLIST_PATCH_REQUEST,
  });

  try {
    const { data } = await request.patch("/stylists/" + id, stylistObject);
    // console.log(data);
    dispatch({
      type: STYLIST_PATCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STYLIST_PATCH_FAILURE,
      payload: {
        message: error.response.data,
      },
    });
  }
};
