import pleasuresTypes from "./types";
import API from "../../utils/API";


const getAll = () => (dispatch, getState) => {
    API.get("/pleasures", getState().user.token).then((r) => {
        dispatch({
            type: pleasuresTypes.gotPleasures,
            payload: r.data,
        });
    });
};


const save = (newPleasure, setSubmitting) => async (dispatch, getState) => {
    const res = await API.save(
        "/pleasures",
        getState().user.token,
        newPleasure
    );
    dispatch({
        type: pleasuresTypes.createdPleasure,
        payload: res.data,
    });
    setSubmitting(false);
    dispatch(getAll());
};

const pleasureActions = {
    getAll,
    save
}

export default pleasureActions;