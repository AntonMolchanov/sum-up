import types from "./types";
import API from "../../utils/API";

const getAll = () => (dispatch, getState) => {
  API.get("/situations", getState().user.token).then((r) => {
   dispatch({
      type: types.FETCH_SITUATIONS,
      payload: r.data,
    });
  });
};

const save = (newSituation, setSubmitting) => async (dispatch, getState) => {
  const res = await API.save(
    "/situations",
    getState().user.token,
    newSituation
  );
  dispatch({
    type: types.SAVE_SITUATION,
    payload: res.data,
  });
  setSubmitting(false);
  dispatch(getAll());
};

const deleteOne = (id) => async (dispatch, getState) => {
  const res = await API.deleteSituation(id, getState().user.token);
  dispatch({
    type: types.DELETE_SITUATION,
    payload: res.data,
  });
  dispatch(getAll());
};

const allActions = {
  getAll,
  save,
  delete: deleteOne,
};

export default allActions;
