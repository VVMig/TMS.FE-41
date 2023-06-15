import { ThunkAction } from "redux-thunk";
import { postsService } from "../../services";
import { AnyAction } from "redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
const sleep = (time: number) =>
  new Promise((res) => {
    setTimeout(() => {
      res("");
    }, time);
  });

export const fetchPosts = createAsyncThunk(
  'user/fetchPosts',
  async (userID: number) => {
      const { data } = await postsService.getAll();
      await sleep(3000);
      console.log(data.results)
    return data.results;
  }
);
