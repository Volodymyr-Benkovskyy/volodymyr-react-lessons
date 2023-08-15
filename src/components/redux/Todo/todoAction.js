import { type } from "@testing-library/user-event/dist/type";
import { TODO_ADD, TODO_REMOVE, TODO_UPDATE_STATUS } from "./todoConstants";

export const addTodoAction = (todo) => {
  return {
    type: TODO_ADD,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: TODO_REMOVE,
    payload: id,
  };
};

export const updateTodoStatus = (id) => {
  return {
    type: TODO_UPDATE_STATUS,
    payload: id,
  };
};
