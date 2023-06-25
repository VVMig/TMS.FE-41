import { createSlice } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

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

// const userReducer = (state = initialState, action: AnyAction) => {
//   switch (action.type) {
//     case "SET_USER":
//       return { ...state, ...action.payload };
//     case "RESTORE_USER":
//       return initialState;

//     default:
//       return state;
//   }
// };

const userReducer = createSlice({
  name:'user',
  initialState,
  reducers: {
    setUser(state,action) {
      state = state + action.payload;
    },
    restoreUser(state) {
      state = initialState;
    },
  },
})


export const {setUser , restoreUser } = userReducer.actions;
export default userReducer.reducer ;
