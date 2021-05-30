import { combineReducers } from "redux";
import stylist from "./stylistReducer";
import category from "./categoryReducer";
import slide from "./slideReducer";

const rootReducer = combineReducers({
  stylist,
  category,
  slide,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
