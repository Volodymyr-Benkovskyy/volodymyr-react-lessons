import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import logger from "redux-logger";
import todoReducer from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
  },
  middleware: [logger],
});

// npm i redux-logger

// "https://[PROJECT_ID].firebaseio.com/users/jack/name.json";
