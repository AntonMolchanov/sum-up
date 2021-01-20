import types from "./types";

const initialState = [];

const daysReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case types.SAVE_DAYS:
      return action.payload;
    case types.SAVE_DAY:
      return action.payload;
    case types.ERROR_DAY:
      return action.payload;
    default:
      return currentState
  }
};

export default daysReducer;
