import {
  OPEN_CITY_FORM,
  ENTER_SLIDE_CITY_FORM,
  EXIT_SLIDE_CITY_FORM,
  CLOSE_CITY_FORM,
} from "../constans/cityFormConstans";

export const openCityForm = () => async (dispatch) => {
  dispatch({
    type: OPEN_CITY_FORM,
  });
  setTimeout(() => {
    dispatch({
      type: ENTER_SLIDE_CITY_FORM,
    });
  }, 50);
};

export const closeCityForm = () => async (dispatch) => {
  dispatch({
    type: EXIT_SLIDE_CITY_FORM,
  });

  setTimeout(() => {
    dispatch({
      type: CLOSE_CITY_FORM,
    });
  }, 300);
};
