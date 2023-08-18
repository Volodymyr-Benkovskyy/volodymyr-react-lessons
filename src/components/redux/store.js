import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice";
import todoReducer from "./Todo/todoSlice";

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

//const enhancer = devToolsEnhancer();

// загальний редюсер
// const rootReducer = combineReducers({
//   count: counterReducer,
//   todo: todoReducer,
// });

// export const store = createStore(rootReducer, enhancer);

// export const store = configureStore({
//   reducer: rootReducer,
// });
