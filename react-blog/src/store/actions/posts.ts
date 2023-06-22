import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsService } from "../../services";

export const fetchPosts = createAsyncThunk("user/fetchPosts", async () => {
  const { data } = await postsService.getAll();

  return data.results;
});
