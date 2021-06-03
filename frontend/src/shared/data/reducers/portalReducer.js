import { isForInStatement } from "typescript";
import {
  PORTAL_OPEN,
  SLIDE_ENTER,
  PORTAL_CLOSE,
  SLIDE_EXIT,
} from "../constans/portalConstans";

const initialState = [
  {
    name: "DrawerMenu",
    isOpen: false,
    isEnterSlide: false,
  },
  {
    name: "LoginModal",
    isOpen: false,
    isEnterSlide: false,
  },
];

const portal = (state = initialState, action) => {
  switch (action.type) {
    case PORTAL_OPEN:
      return [
        ...state,
        state.map((portal) => {
          if (portal.name !== action.payload.name) {
            return portal;
          }

          return {
            ...portal,
            isOpen: true,
          };
        }),
      ];

    case SLIDE_ENTER:
      return [
        ...state,
        state.map((portal) => {
          if (portal.name !== action.payload.name) {
            return portal;
          }

          return {
            ...portal,
            isEnterSlide: true,
          };
        }),
      ];

    case PORTAL_CLOSE:
      return [
        ...state,
        state.map((portal) => {
          if (portal.name !== action.payload.name) {
            return portal;
          }

          return {
            ...portal,
            isOpen: false,
          };
        }),
      ];

    case SLIDE_EXIT:
      return [
        ...state,
        state.map((portal) => {
          if (portal.name !== action.payload.name) {
            return portal;
          }

          return {
            ...portal,
            isOpen: false,
          };
        }),
      ];

    default:
      return state;
  }
};

export default portal;
