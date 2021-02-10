import { combineReducers } from "redux";
import user from "./user/index";
import days from "./days/index";
import situations from "./situations/index";

export default combineReducers({
  user,
  days,
  situations,
});
