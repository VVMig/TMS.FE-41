import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  name: "user",
  initialState,
  reducers: {
    setUser(_, action: PayloadAction<IUser>) {
      return action.payload;
    },
    restoreUser() {
      return initialState;
    },
  },
});

export const { setUser, restoreUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
