import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  username: string | null;
  id: number | null;
  email: string | null;
}

const userDefaultState: IUser = {
  username: null,
  id: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'username',
  initialState: userDefaultState,

  reducers: {
    setUser: (state, action) => {
      state.username = action.payload
    },
    restoreUsers: (state) => {
      state = userDefaultState
    },
  },
})

export const userReducer = userSlice.reducer


