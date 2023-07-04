import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsService } from "../../services";

export const fetchPosts = createAsyncThunk(
  "user/fetchPosts",
  async (page: number) => {
    // const { data } = await postsService.getAll(page);
    // return {
    //   results: data.results,
    //   count: data.count,
    // };
  }
);
