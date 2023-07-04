// import { ThunkAction } from "redux-thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsService } from "../../services";
// import { POSTS_ACTION_TYPES } from "../../constants/ActionTypes";
// import { AnyAction } from "redux";

const sleep = (time: number) =>
  new Promise((res) => {
    setTimeout(() => {
      res("");
    }, time);
  });


export const fetchPosts = createAsyncThunk(
  'user/fetchPosts',
  async () => {
      const { data } = await postsService.getAll();
      await sleep(3000);
    return data.results;
  }
);
