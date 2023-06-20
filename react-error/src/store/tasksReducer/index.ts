import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTasks } from "./actions";

export interface ITask {
  title: string;
  id: number;
}

export interface ITaskReducer {
  tasks: ITask[] | null;
}

const tasksInitialState: ITaskReducer = {
  tasks: null,
};

export const tasskReducer = createSlice({
  name: "task",
  tasksInitialState,
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
