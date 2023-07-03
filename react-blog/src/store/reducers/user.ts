import { AnyAction } from "redux";
import { fetchPosts } from "../actions/posts";
import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  username: string | null;
  id: number | null;
  email: string | null;
}

const initialState: IUser = {
  username: null,
  id: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {...state, ...action.payload};
  },
    restoreUser: () => {
      return initialState;
    },
}
  
});

export const usersReducer = userSlice.reducer;
