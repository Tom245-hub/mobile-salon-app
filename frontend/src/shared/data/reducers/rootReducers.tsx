import { combineReducers } from "redux";
import stylist from "./stylistReducer";
import category from "./categoryReducer";
import slide from "./slideReducer";
import user from "./userReducer";
import city from "./cityReducer";
import drawerMenu from "./drawerReducer";
import loginForm from "./loginFormReducer";
import cityForm from "./cityFormReducer";

const rootReducer = combineReducers({
  stylist,
  category,
  slide,
  user,
  city,
  drawerMenu,
  loginForm,
  cityForm,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
