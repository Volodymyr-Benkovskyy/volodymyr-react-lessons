import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
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

//addTodoRequest() => action
//addTodoSuccess()  => action
//addTodoError ()  => action
//removeTodoRequest  => action
//removeTodoSuccess  => action

// removeTodoRequest,
// removeTodoSuccess,
// removeTodoError,
