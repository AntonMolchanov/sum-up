import pleasuresTypes from "./types";

const getAll = (pleasures) => ({
    type: pleasuresTypes.GOT_PLEASURES,
    payload: pleasures
})

const savePleasure = (newPleasure) => ({
    type: pleasuresTypes.CREATED_PLEASURE,
    payload: newPleasure
})

const updatePleasure = (updatedPleasure) => ({
    type: pleasuresTypes.UPDATED_PLEASURE,
    payload: updatedPleasure
})

const deletePleasure = (updatedPleasuresList) => ({
    type: pleasuresTypes.DELETED_PLEASURE,
    payload: updatedPleasuresList
})

const pleasureActions = {
    getAll,
    savePleasure,
    updatePleasure,
    deletePleasure
}

export default pleasureActions;