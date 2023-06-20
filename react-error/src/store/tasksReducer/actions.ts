import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return data;
});
