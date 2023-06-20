import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import  postsReducer  from "./reducers/posts";
import postReducer from "./reducers/post"

export const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const store = createStore(rootReducer, applyMiddleware(thunk));
