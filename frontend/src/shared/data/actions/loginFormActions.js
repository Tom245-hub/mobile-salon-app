import {
  OPEN_LOGIN_FORM,
  ENTER_SLIDE_LOGIN_FORM,
  EXIT_SLIDE_LOGIN_FORM,
  CLOSE_LOGIN_FORM,
} from "../constans/loginFormConstans";

export const openLoginForm = () => async (dispatch) => {
  dispatch({
    type: OPEN_LOGIN_FORM,
  });
  setTimeout(() => {
    dispatch({
      type: ENTER_SLIDE_LOGIN_FORM,
    });
  }, 50);
};

export const closeLoginForm = () => async (dispatch) => {
  dispatch({
    type: EXIT_SLIDE_LOGIN_FORM,
  });

  setTimeout(() => {
    dispatch({
      type: CLOSE_LOGIN_FORM,
    });
  }, 300);
};
