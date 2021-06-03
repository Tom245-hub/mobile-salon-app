import {
  PORTAL_OPEN,
  SLIDE_ENTER,
  PORTAL_CLOSE,
  SLIDE_EXIT,
} from "../constans/portalConstans";

export const openPortal = (name) => async (dispatch) => {
  dispatch({
    type: PORTAL_OPEN,
    payload: {
      name: name,
    },
  });

  setTimeout(() => {
    dispatch({
      type: SLIDE_ENTER,
      payload: {
        name: name,
      },
    });
  }, 50);
};

export const closePortal = (name) => async (dispatch) => {
  dispatch({
    type: SLIDE_EXIT,
    payload: name,
  });

  setTimeout(() => {
    dispatch({
      type: PORTAL_CLOSE,
      payload: name,
    });
  }, 300);
};
