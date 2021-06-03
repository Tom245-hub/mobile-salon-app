import {
  PORTAL_OPEN,
  SLIDE_ENTER,
  PORTAL_CLOSE,
  SLIDE_EXIT,
} from "../constans/portalConstans";

const initialState = {
  isOpen: false,
  isEnterSlide: false,
};

const portal = (state = initialState, action) => {
  switch (action.type) {
    case PORTAL_OPEN:
      return {
        ...state,
        isOpen: true,
      };

    case SLIDE_ENTER:
      return {
        ...state,
        isEnterSlide: true,
      };

    case PORTAL_CLOSE:
      return {
        ...state,
        isOpen: false,
      };

    case SLIDE_EXIT:
      return {
        ...state,
        isEnterSlide: false,
      };

    default:
      return state;
  }
};

export default portal;
