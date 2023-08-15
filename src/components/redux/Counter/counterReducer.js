//  створення Reducer для Counter

import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./CounterConstants";

const counterReducer = (state = 200, action) => {
  switch (action.type) {
    case COUNTER_DECREMENT:
      return state - action.payload;

    case COUNTER_RESET:
      return 0;
    case COUNTER_INCREMENT:
      return state + action.payload;
    default:
      return state;
  }
};

export default counterReducer;
