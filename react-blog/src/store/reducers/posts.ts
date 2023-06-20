import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions/posts";

const initialState = {
  posts: [],
  loading: false,
  error:""
};

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder){ 
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = [];
      state.posts = state.posts.concat(action.payload);
      state.loading = false;
    });
    builder.addCase(fetchPosts.pending, (state)=> {
      state.loading = true;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.error = 'error';
    });
  }
})

export default postsReducer.reducer ;
