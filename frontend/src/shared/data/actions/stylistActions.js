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

  try {
    const { data } = await request.post("/stylists", stylistObject);
    // console.log(data);
    dispatch({
      type: STYLIST_POST_SUCCESS,
      payload: {
        stylist: data.stylist,
        message: data.message,
      },
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
