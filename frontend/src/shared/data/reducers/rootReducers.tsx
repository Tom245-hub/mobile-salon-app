import { combineReducers } from "redux";
import stylist from "./stylistReducer";
import category from "./categoryReducer";
import slide from "./slideReducer";
import user from "./userReducer";
import city from "./cityReducer";

const rootReducer = combineReducers({
  stylist,
  category,
  slide,
  user,
  city,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
