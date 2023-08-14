import { createStore } from "redux";
import { devToolsEnhancer } from "redux- ";

const enhancer = devToolsEnhancer();
const reducer = (state = { a: 5 }, action) => {
  return state;
};

export const store = createStore(reducer, enhancer);
