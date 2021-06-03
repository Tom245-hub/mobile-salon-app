import {
  OPEN_DRAWER_MENU,
  ENTER_SLIDE_DRAWER_MENU,
  EXIT_SLIDE_DRAWER_MENU,
  CLOSE_DRAWER_MENU,
} from "../constans/drawerConstans";

export const openDrawerMenu = () => async (dispatch) => {
  dispatch({
    type: OPEN_DRAWER_MENU,
  });
  setTimeout(() => {
    dispatch({
      type: ENTER_SLIDE_DRAWER_MENU,
    });
  }, 50);
};

export const closeDrawerMenu = () => async (dispatch) => {
  dispatch({
    type: EXIT_SLIDE_DRAWER_MENU,
  });

  setTimeout(() => {
    dispatch({
      type: CLOSE_DRAWER_MENU,
    });
  }, 300);
};
