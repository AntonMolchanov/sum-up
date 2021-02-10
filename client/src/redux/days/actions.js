import types from "./types";
import API from "../../utils/API";

const getDays = () => (dispatch, getState) => {
  API.get("/days", getState().user).then((r) => {
    dispatch({
      type: types.SAVE_DAYS,
      payload: r.data,
    });
  });
};

const actions = {
  getAll: getDays,
};

export default actions;
