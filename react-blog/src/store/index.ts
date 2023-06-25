import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import postsReducer  from "./reducers/posts";
import userReducer from "./reducers/user"
import themeReducer from "./reducers/theme"

export const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const store = createStore(rootReducer, applyMiddleware(thunk));
