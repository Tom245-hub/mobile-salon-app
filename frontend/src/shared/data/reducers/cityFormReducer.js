import {
  OPEN_CITY_FORM,
  ENTER_SLIDE_CITY_FORM,
  EXIT_SLIDE_CITY_FORM,
  CLOSE_CITY_FORM,
} from "../constans/cityFormConstans";

const initialState = {
  isOpenCityForm: false,
  isEnterSlide: false,
};

const cityForm = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CITY_FORM:
      return {
        ...state,
        isOpenCityForm: true,
      };

    case ENTER_SLIDE_CITY_FORM:
      return {
        ...state,
        isEnterSlide: true,
      };

    case EXIT_SLIDE_CITY_FORM:
      return {
        ...state,
        isEnterSlide: false,
      };

    case CLOSE_CITY_FORM:
      return {
        ...state,
        isOpenCityForm: false,
      };

    default:
      return state;
  }
};

export default cityForm;
