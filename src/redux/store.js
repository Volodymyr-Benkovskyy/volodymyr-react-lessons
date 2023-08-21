import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import Logger from "redux-logger";
import todoReducer from "./todo/todoSlice";

const customLogger = (store) => {
  return (next) => {
    return (action) => {
      console.group("action ", action.type);
      const { dispatch, getState } = store;
      const prevState = getState();
      console.log("prevState", prevState);
      console.log(action); //
      next(action);
      const nextState = getState();
      console.log("nextState :>> ", nextState);
      console.groupEnd();
    };
  };
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    action(store.dispatch, store.getState);
    return;
  }
  next(action);
};

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    customLogger,
  ],
});

// npm i redux-logger

// "https://[PROJECT_ID].firebaseio.com/users/jack/name.json";
