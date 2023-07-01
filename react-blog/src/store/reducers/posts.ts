// import { AnyAction } from "redux";
// import { POSTS_ACTION_TYPES } from "../../constants/ActionTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions/posts";

// const initialState = {
//   posts: [],
//   loading: false,
//   error: "",
// };

 const postsDefaultState  = {
   posts: [],
   loading: false,
   error: "",
 };

// const postsReducer = (state = initialState, action: AnyAction) => {
//   switch (action.type) {
//     case POSTS_ACTION_TYPES.ADD_POSTS:
//       return { ...state, posts: state.posts.concat(action.payload) };
//     case POSTS_ACTION_TYPES.SET_LOADING:
//       return { ...state, loading: action.payload };
//     case POSTS_ACTION_TYPES.SET_ERROR:
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// };

// export { postsReducer };

export const postsSlice = createSlice({
  name: 'posts',
  initialState: postsDefaultState,
  reducers: {},
  extraReducers(builder){ 
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = state.posts.concat(action.payload);
      state.loading = false;
    });
    builder.addCase(fetchPosts.pending, (state)=> {
      state.loading = true;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.error = 'error';
    });
  },
});
export const postsReducer = postsSlice.reducer

