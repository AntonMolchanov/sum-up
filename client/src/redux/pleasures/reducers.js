import pleasuresTypes from "./types";

const initialState = {
    items: [],
    error: null,
};

const pleasuresReducer = (currentState = initialState, action) => {
    const {type,payload} = action;
    const {GOT_PLEASURES,CREATED_PLEASURE,UPDATED_PLEASURE, DELETED_PLEASURE} = pleasuresTypes;

    switch (type){
        case GOT_PLEASURES:
            return {
                ...currentState,
                items: payload
            }
        case CREATED_PLEASURE:
            const newItems = [...currentState.items];
            newItems.push(payload)
            return {
                ...currentState,
                items: newItems
            }
        case UPDATED_PLEASURE:
            return {
                ...currentState,
                items: currentState.items.map(pleasure =>
                    pleasure._id === payload.id
                        ?
                        {...pleasure, title: payload.updPleasure.title, description: payload.updPleasure.description}
                        :
                        pleasure
                )
            }
        case DELETED_PLEASURE:
            return {
                ...currentState,
                items: payload
            }
        default: return currentState
    }
}

export default {
    pleasures: pleasuresReducer
};