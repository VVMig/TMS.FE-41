import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

// Redux
// npm i redux
// npm i react-redux
// npm i @types/react-redux
// Redux (Redux Toolkit), Mobx, Recoil, Zustand

// Redux-thunk
/**
 * npm i redux-thunk
 * npm i @types/redux-thunk
 */

// Redux-saga
/**
 * npm i redux-saga @redux-saga/core @types/redux-saga
 */

// Store, Action, Reducer

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
