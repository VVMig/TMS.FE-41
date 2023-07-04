import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
// import { postsReducer } from "./reducers/posts";
// import { userReducer } from "./reducers/user";
import  postsReducer  from "./reducers/posts";

export const rootReducer = combineReducers({
  posts: postsReducer,
  // user: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch