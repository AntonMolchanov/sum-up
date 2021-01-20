import types from './types'
import API from "../../utils/API";

const getDays = () => (dispatch, getState) => {
  API.getDays(getState().user)
    .then(r => {
      dispatch({
        type: types.SAVE_DAYS,
        payload: r.data
      })
    })
}

export default {
  getAll: getDays
}
