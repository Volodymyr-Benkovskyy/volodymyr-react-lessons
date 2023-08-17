//import { createStore, combineReducers } from "redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { devToolsEnhancer } from "redux-devtools-extension";
import counterReducer from "./Counter/counterReducer";
import todoReducer from "./Todo/todoReducer";

//const enhancer = devToolsEnhancer();

// загальний редюсер
const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

// export const store = createStore(rootReducer, enhancer);

// export const store = configureStore({
//   reducer: rootReducer,
// });

//створ. основного редюсера без rootReducer
export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
  },
});

// npm install @reduxjs/toolkit бібліотека
// configureStore ===>>> метод для створення store біблотеки @reduxjs/toolkit
// configureStore ===>  під капотом підключає redux-devtools-extension"

//git commit -m "installation @reduxjs/toolkit, application of the method configureStore
