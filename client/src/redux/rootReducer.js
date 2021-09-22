import { combineReducers } from "redux";
import user from "./user/index";
import days from "./days/index";
import situations from "./situations/index";
import pleasures from './pleasures/index'
import types from "./user/types";

const appReducer = combineReducers({
  user,
  days,
  situations,
  pleasures
});

const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT_USER) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
