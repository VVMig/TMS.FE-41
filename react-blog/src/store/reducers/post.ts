import { createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "../actions/post";

const initialState = {
    data: {},
}

const postReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder){ 
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.data = action.payload
    });
}
})

export default postReducer.reducer ;