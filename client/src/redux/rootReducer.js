import {combineReducers} from "redux";
import user from './user/index';
import days from './days/index';

export default combineReducers({
  user,
  days
})