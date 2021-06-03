import { UPDATE_CITY } from "../constans/cityConstans";

const initialState = {
  city: "",
};

const city = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CITY:
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};

export default city;
