import types from "./types";
import API from "../../utils/API";

const registerUser = (user, setSubmitting) => async (dispatch) => {
  const { token } = await API.register(user);
  if (token) {
    dispatch({
      type: types.SAVE_USER,
      payload: token,
    });
  }
  setSubmitting(false);
};

const saveUserAction = (user) => (dispatch) => {
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
  register: registerUser,
};

export default allActions;
