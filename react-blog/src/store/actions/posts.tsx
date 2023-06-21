import { postsService } from "../../services";
import { createAsyncThunk } from "@reduxjs/toolkit";
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
      console.log(data.results)
    return data.results;
  }
);
