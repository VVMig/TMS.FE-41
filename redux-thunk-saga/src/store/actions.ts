import { ThunkAction } from "redux-thunk";
import { fetchTodosData } from "../services";

export const addCashAction = (payload: number) => ({
  type: "ADD_CASH",
  payload: payload,
});

export const getCashAction = (payload: number) => ({
  type: "GET_CASH",
  payload: payload,
});

export const changeNickAction = (payload: string) => ({
  type: "CHANGE_NICKNAME",
  payload: payload,
});

export const addUserAction = (payload: string) => ({
  type: "ADD_USER",
  payload: payload,
});

export const removeUserAction = (payload: string) => ({
  type: "REMOVE_USER",
  payload: payload,
});

// Thunk implementation
export const fetchData = (): ThunkAction<any, any, any, any> => {
  return async (dispatch) => {
    try {
      const data = await fetchTodosData();

      dispatch({
        type: "ADD_TODOS",
        payload: data,
      });
    } catch (error) {}
  };
};
