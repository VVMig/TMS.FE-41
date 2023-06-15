import { AnyAction } from "redux";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error:""
};

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action:AnyAction) => {
      state.posts = state.posts.concat(action.payload)
    },
    setLoadingAction: (state, action:PayloadAction<boolean>) => {
      state.loading = action.payload
    },
     setError: (state, action:AnyAction) => {
       state.error = action.payload  
     },
  }
})

export const { setLoadingAction, addPosts, setError} = postsReducer.actions;
export default postsReducer.reducer ;
