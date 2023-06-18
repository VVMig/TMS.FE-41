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

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    case "RESTORE_USER":
      return initialState;

    default:
      return state;
  }
};

export { userReducer };
