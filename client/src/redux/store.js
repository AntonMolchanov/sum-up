import {applyMiddleware, createStore} from "redux";
import reducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
