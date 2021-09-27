import actions from "./actions";
import API from "../../utils/API";


const getPleasures = () => async (dispatch) => {
    API.get(
        "/pleasures",
        localStorage.getItem("token")
    )
        .then((result) => {
        dispatch(actions.getAll(result.data))
    })
}

const savePleasure = (newPleasure, setSubmitting) => async (dispatch,getState) => {
    const res = await API.save(
        "/pleasures",
        getState().user.token,
        newPleasure
    )
    dispatch(actions.savePleasure(res.data))
    setSubmitting(false);
}

const updatePleasure = (pleasureId,newPleasure) => async (dispatch, getState) => {
    const res = await API.updatePleasure(
        pleasureId,
        getState().user.token,
        newPleasure
    )

    const updatedPleasureInfo = {
        updPleasure: res.data,
        id: pleasureId
    }
    dispatch(actions.updatePleasure(updatedPleasureInfo))
}

const deletePleasure = (pleasureId) => (dispatch,getState) => {
    const auth = getState().user.token;
    const pleasures = getState().pleasures.items;

    const updatedList = pleasures.filter(item => item._id !== pleasureId);
    API.deletePleasure(pleasureId,auth)
    dispatch(actions.deletePleasure(updatedList))
}

const operations = {
    savePleasure,
    getPleasures,
    updatePleasure,
    deletePleasure
}

export default operations