import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks } from "./actions";

export interface ITask {
  title: string;
  id: number;
}

export interface ITaskReducer {
  tasks: ITask[];
}

const initialState: ITaskReducer = {
  tasks: [],
};

export const tasskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      if (state.tasks === null) {
        state.tasks = [action.payload];
      } else {
        state.tasks.unshift(action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      if (state.tasks === null) {
        state.tasks = action.payload;
      } else {
        state.tasks = [...action.payload, ...state.tasks];
      }
    });
  },
});

export const { addTask } = tasskReducer.actions;

export default tasskReducer.reducer;
