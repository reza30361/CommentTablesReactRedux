import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { comments } from "./reducer";

const middleWare = [thunk];
const initialState = localStorage.getItem("comments")
  ? JSON.parse(localStorage.getItem("comments"))
  : {};

const reducers = combineReducers({
  comments: comments,
});

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;
