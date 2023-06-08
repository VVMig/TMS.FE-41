import { all, call, put, takeEvery } from "redux-saga/effects";
import { fetchTodosData } from "../services";

// worker Saga: will be fired on FETCH_TODOS actions
function* fetchTodos(): Generator {
  try {
    const tasks = yield call(fetchTodosData);

    yield put({ type: "ADD_TODOS", payload: tasks });
  } catch (e) {
    yield put({ type: "ADD_TODOS_FAILED", message: "Something went wrong" });
  }
}

/*
  Starts fetchTodos on each dispatched `FETCH_TODOS` action.
  Allows concurrent fetches of todos.
*/
function* mySaga() {
  yield takeEvery("FETCH_TODOS", fetchTodos);
}

export function* rootSaga() {
  yield all([mySaga()]);
}
