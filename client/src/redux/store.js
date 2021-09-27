import {applyMiddleware, createStore} from "redux";
import reducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({
  trace: true
});

export default createStore(
  reducer,
    composeEnhancers(applyMiddleware(thunk))
);
