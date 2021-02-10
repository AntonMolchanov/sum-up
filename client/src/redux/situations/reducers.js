import types from "./types";

const initialState = [];

const daysReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SITUATIONS:
      return action.payload;
    case types.SAVE_SITUATION:
      return action.payload;
    case types.ERROR_SITUATONS:
      return action.payload;
    default:
      return currentState;
  }
};

export default daysReducer;
