import {
  OPEN_DRAWER_MENU,
  ENTER_SLIDE_DRAWER_MENU,
  EXIT_SLIDE_DRAWER_MENU,
  CLOSE_DRAWER_MENU,
} from "../constans/drawerConstans";

const initialState = {
  isOpenDrawerMenu: false,
  isEnterSlide: false,
};

const drawerMenu = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAWER_MENU:
      return {
        ...state,
        isOpenDrawerMenu: true,
      };

    case ENTER_SLIDE_DRAWER_MENU:
      return {
        ...state,
        isEnterSlide: true,
      };

    case EXIT_SLIDE_DRAWER_MENU:
      return {
        ...state,
        isEnterSlide: false,
      };

    case CLOSE_DRAWER_MENU:
      return {
        ...state,
        isOpenDrawerMenu: false,
      };

    default:
      return state;
  }
};

export default drawerMenu;
