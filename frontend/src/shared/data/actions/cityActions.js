import { UPDATE_CITY } from "../constans/cityConstans";

export const updateCity = (city) => async (dispatch) => {
  dispatch({
    type: UPDATE_CITY,
    payload: city,
  });
};
