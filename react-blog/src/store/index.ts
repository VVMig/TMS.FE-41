import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import  postsReducer  from "./reducers/posts";

export const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const store = createStore(rootReducer, applyMiddleware(thunk));
