import types from "./types";

const initialState = {
  items: [],
  error: null,
};

const situationsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SITUATIONS:
      return {
        ...currentState,
        items: action.payload,
      };
    case types.SAVE_SITUATION:
      const newItems = [...currentState.items];
      newItems.push(action.payload);

      return {
        ...currentState,
        items: newItems,
      };
    case types.ERROR_SITUATONS:
      return {
        ...currentState,
        error: action.payload,
      };
    default:
      return currentState;
  }
};

export default situationsReducer;
