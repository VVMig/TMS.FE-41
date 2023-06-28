import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/posts";
import { usersReducer } from "./reducers/user";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: usersReducer,
  },
});
