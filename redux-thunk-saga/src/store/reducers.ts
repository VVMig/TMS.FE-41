import { AnyAction, combineReducers } from "redux";

const cashDefaultState = {
  cash: 0,
};

const nickDefaultState = {
  username: "nickname",
};

const usersDefaultState = {
  users: [],
};

const cashReducer = (state = cashDefaultState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

const nickReducer = (state = nickDefaultState, action: AnyAction) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const usersReducer = (state = usersDefaultState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user: string) => user !== action.payload),
      };
    default:
      return state;
  }
};

const tasksDefaultState = {
  tasks: [],
};

const tasksReducer = (state = tasksDefaultState, action: AnyAction) => {
  switch (action.type) {
    case "ADD_TODOS":
      return { ...state, tasks: state.tasks.concat(action.payload) };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  cash: cashReducer,
  nick: nickReducer,
  users: usersReducer,
  tasks: tasksReducer,
});
