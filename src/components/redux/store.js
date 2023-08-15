import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import counterReducer from "./Counter/counterReducer";

// підключення девтулзів редюкс
const enhancer = devToolsEnhancer();

// const reducer = (
//   state = { a: 5, b: { arr: [], userName: "bob" }, c: true },
//   action
// ) => {
//   return state;
// };

const aReducer = (state = 5, action) => state;
//const bReducer = (state = { arr: [], userName: "bob" }, action) => state;
const cReducer = (state = true) => state;

const arrReducer = (state = [], action) => {
  return [...state, action.payload];
};
const userNameReducer = (state = "bob", action) => {
  if (action.type === "change/name") {
    return "rick";
  }
  return state;
};

const bReducer = combineReducers({
  arr: arrReducer,
  userName: userNameReducer,
});

// загальний редюсер
const rootReducer = combineReducers({
  count: counterReducer,
  a: aReducer,
  b: bReducer,
  c: cReducer,
});

export const store = createStore(rootReducer, enhancer);

// redux-devtools-extension --> встановлення бібліотеки

//  combineReducers ==>> Метод  є функцією у бібліотеці Redux
//                      для об'єднання різних редюсерів в один кореневий редюсер.
