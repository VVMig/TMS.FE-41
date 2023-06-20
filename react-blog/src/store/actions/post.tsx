import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsService } from "../../services";
import { postService } from "../../services/post";

export const fetchPost = createAsyncThunk (
    'user/fetchPosts',
    async (id:number) => {
        const { data } = await postService.getOne(id)
        console.log(data)
        return data;
    }
  );