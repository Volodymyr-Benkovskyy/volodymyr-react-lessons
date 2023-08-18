import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice";
import todoReducer from "./Todo/todoSlice";
import storage from "redux-persist/lib/storage";

const persistTodoConfig = {
  key: "todo",
  storage: storage,
  whitelist: "items", // те що хочем зберігати
  //blacklist: ["item"],         //  те що не потрібно зберігати
};
const persistedTodoReducer = persistReducer(persistTodoConfig, todoReducer);

//створ. основного редюсера без rootReducer
export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: persistedTodoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// whitelist ===>>> це масив імен редюсерів,
// які ви хочете зберегти у локальному сховищі під час перезавантаження сторінки.
// Інші редюсери будуть очищені.

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
