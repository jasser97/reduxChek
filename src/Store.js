import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";

const logActions = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(logActions),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
