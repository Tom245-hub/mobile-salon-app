import {
  OPEN_LOGIN_FORM,
  ENTER_SLIDE_LOGIN_FORM,
  EXIT_SLIDE_LOGIN_FORM,
  CLOSE_LOGIN_FORM,
} from "../constans/loginFormConstans";

const initialState = {
  isOpenLoginForm: false,
  isEnterSlide: false,
};

const loginForm = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN_FORM:
      return {
        ...state,
        isOpenLoginForm: true,
      };

    case ENTER_SLIDE_LOGIN_FORM:
      return {
        ...state,
        isEnterSlide: true,
      };

    case EXIT_SLIDE_LOGIN_FORM:
      return {
        ...state,
        isEnterSlide: false,
      };

    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        isOpenLoginForm: false,
      };

    default:
      return state;
  }
};

export default loginForm;
