import types from './types'
import API from "../../utils/API";

const saveUserAction = (user, setSubmitting) => dispatch => {
  API.login(user)
    .then(r => {
      dispatch({
        type: types.SAVE_USER,
        payload: r.data
      });
    })
}

const logoutUser = () => dispatch => {
  dispatch({
    type: types.LOGOUT_USER,
  });
}

export default {
  saveUser: saveUserAction,
  logout: logoutUser
}
