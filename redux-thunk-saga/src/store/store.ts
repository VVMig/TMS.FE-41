import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// Thunk implementation
// export const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
