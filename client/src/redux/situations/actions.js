import types from "./types";
import API from "../../utils/API";

const getAll = () => (dispatch, getState) => {
  API.get("/situations", getState().user).then((r) => {
    dispatch({
      type: types.FETCH_SITUATIONS,
      payload: r.data,
    });
  });
};

const save = (newSituation, setSubmitting) => async (dispatch, getState) => {
  const res = await API.save("/situations", getState().user, newSituation);
  dispatch({
    type: types.SAVE_SITUATION,
    payload: res.data,
  });
  setSubmitting(false);
  getAll();
};

const allActions = {
  getAll,
  save,
};

export default allActions;
