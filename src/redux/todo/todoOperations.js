import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../servisec/firebaceApi";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodoError,
  getTodoRequest,
  getTodoSuccess,
  removeTodoError,
  removeTodoRequest,
  removeTodoSuccess,
  updateTodoStatusError,
  updateTodoStatusRequest,
  updateTodoStatusSuccess,
} from "./todoSlice";

export const addtodo = (form) => {
  return (dispatch, getState) => {
    dispatch(addTodoRequest()); //  Action  isLoading = true
    addTodoApi({ ...form, isDone: false })
      .then((todo) => dispatch(addTodoSuccess(todo)))
      .catch((err) => dispatch(addTodoError(err.message)));
  };
};

export const getTodo = () => (dispatch) => {
  dispatch(getTodoRequest());
  getTodoApi()
    .then((data) => dispatch(getTodoSuccess(data)))
    .catch((err) => dispatch(getTodoError(err.message)));
};

export const removeTodo = (id) => (dispatch) => {
  dispatch(removeTodoRequest());
  removeTodoApi(id)
    .then((data) => dispatch(removeTodoSuccess(id)))
    .catch((err) => dispatch(removeTodoError(err)));
};

export const updateTodoStatus = (id, data) => (dispatch) => {
  dispatch(updateTodoStatusRequest()); // request

  updateTodoStatusApi(id, data)
    .then((status) => dispatch(updateTodoStatusSuccess({ ...status, id }))) // success | p: {isDone: true, id}
    .catch((err) => dispatch(updateTodoStatusError(err.message))); // error
};

//addTodoRequest() => action
//addTodoSuccess()  => action
//addTodoError ()  => action
//removeTodoRequest  => action
//removeTodoSuccess  => action

// removeTodoRequest,
// removeTodoSuccess,
// removeTodoError,
