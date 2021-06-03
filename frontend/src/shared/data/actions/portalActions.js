import {
  PORTAL_OPEN,
  SLIDE_ENTER,
  PORTAL_CLOSE,
  SLIDE_EXIT,
} from "../constans/portalConstans";

export const openPortal = () => async (dispatch) => {
  dispatch({
    type: PORTAL_OPEN,
  });

  setTimeout(() => {
    dispatch({
      type: SLIDE_ENTER,
    });
  }, 50);
};

export const closePortal = () => async (dispatch) => {
  dispatch({
    type: SLIDE_EXIT,
  });

  setTimeout(() => {
    dispatch({
      type: PORTAL_CLOSE,
    });
  }, 300);
};
