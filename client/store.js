import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const reducer = combine({
  user: userReducer,
  posts: postsReducer,
  auth,
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, withExtraArgument({ axios }), createLogger())
);

export default store;
