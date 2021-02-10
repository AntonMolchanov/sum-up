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

const allActions = {
  getAll,
};

export default allActions;
