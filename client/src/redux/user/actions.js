import types from "./types";
import API from "../../utils/API";

const saveUserAction = (user, setSubmitting) => (dispatch) => {
  API.login(user).then((r) => {
    dispatch({
      type: types.SAVE_USER,
      payload: r.data,
    });
  });
};

const logoutUser = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT_USER,
  });
};

const allActions = {
  saveUser: saveUserAction,
  logout: logoutUser,
};

export default allActions;
