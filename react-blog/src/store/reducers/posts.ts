import { createSlice } from "@reduxjs/toolkit"; 
import { fetchPosts } from "../actions/posts";

const postsDefaultState = {
  posts: [],
  loading: false,
  error:"", 

};

export const postsSlice = createSlice({
  name: 'posts',
  initialState: postsDefaultState,

  reducers: {},
   extraReducers: (builder) => {
    builder
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = state.posts.concat(action.payload);
      state.loading = false;
    })
    .addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchPosts.rejected, (state) => {
      state.error = 'error';
    })
  },
})

export const postsReducer = postsSlice.reducer
