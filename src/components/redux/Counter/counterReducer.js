import { createReducer } from "@reduxjs/toolkit";
import {
  counterDecrementAction,
  counterIncrementAction,
  resetCounterAction,
} from "./CounterActions";

//  створення Reducer для Counter

// const counterReducer = (state = 200, action) => {
//   switch (action.type) {
//     case COUNTER_DECREMENT:
//       return state - action.payload;

//     case COUNTER_RESET:
//       return 0;
//     case COUNTER_INCREMENT:
//       return state + action.payload;
//     default:
//       return state;
//   }
// };

export const counterReducer = createReducer(150, (builder) => {
  builder
    .addCase(counterDecrementAction, (state, { payload }) => {
      return state - payload;
    })
    .addCase(resetCounterAction, () => 150)

    .addCase(counterIncrementAction, (state, { payload }) => {
      return state + payload;
    });
  console.log(builder);
});

export default counterReducer;

// builder ====>>  це обєкт з методами ==>> addCase , addDefaultCase ,addMatcher
