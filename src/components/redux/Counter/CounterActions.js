import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
} from "./CounterConstants";

// створюєм функцію Action для зміни стейту по кліку
export const counterDecrementAction = (value) => {
  return {
    type: COUNTER_DECREMENT,
    payload: value, // передаєм при виклику функції аргументом 25
  };
};

// ств... Action  для обнулення  counter
export const resetCounterAction = () => {
  return {
    type: COUNTER_RESET,
  };
};

//  ств... Action для додавання
export const counterIncrementAction = (value) => {
  return {
    type: COUNTER_INCREMENT,
    payload: value,
  };
};
