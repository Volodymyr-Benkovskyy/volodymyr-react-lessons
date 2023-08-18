import { createAction } from "@reduxjs/toolkit";

// export const addTodoAction = (todo) => {
//   return {
//     type: TODO_ADD,
//     payload: todo,
//   };
// };

export const addTodoAction = createAction("todo/add");

// export const removeTodo = (id) => {
//   return {
//     type: TODO_REMOVE,
//     payload: id,
//   };
// };

export const removeTodo = createAction("todo/remove");

// export const updateTodoStatus = (id) => {
//   return {
//     type: TODO_UPDATE_STATUS,
//     payload: id,
//   };
// };

export const updateTodoStatus = createAction("todo/updatestatus");

// export const changePriority = (value) => {
//   return {
//     type: TODO_CHANGE_PRIORITY,
//     payload: value,
//   };
// };

export const changePriority = createAction("todo/change/prioryty", (e) => {
  return {
    payload: e.target.value,
  };
});
