import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./photosReducer";

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
