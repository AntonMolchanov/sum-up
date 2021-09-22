import pleasuresTypes from "./types";

const initialState = {
    items: [],
    error: null
}

const pleasuresReducer = (currentState = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case pleasuresTypes.gotPleasures:
            return {
                ...currentState,
                items: payload
            }
        case pleasuresTypes.createdPleasure:
            const newItems = [...currentState.items];
            newItems.push(payload)

            return {
                ...currentState,
                items: newItems
            }
        default: {
            return currentState
        }

    }
}

export default pleasuresReducer;