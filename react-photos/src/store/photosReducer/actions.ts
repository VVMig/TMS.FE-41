import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPhotos = createAsyncThunk(
  "photos/fetch",
  async (id: number) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );

    return data;
  }
);
