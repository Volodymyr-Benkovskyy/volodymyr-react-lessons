import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  addTodoApi,
  getTodoApi,
  removeTodoApi,
  updateTodoStatusApi,
} from "../../servisec/firebaceApi";
import {
  // addTodoError,
  // addTodoRequest,
  // addTodoSuccess,
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

// export const addtodo = (form) => {
//   return (dispatch, getState) => {
//     dispatch(addTodoRequest()); //  Action  isLoading = true
//     addTodoApi({ ...form, isDone: false })
//       .then((todo) => dispatch(addTodoSuccess(todo)))
//       .catch((err) => dispatch(addTodoError(err.message)));
//   };
// };

// createAsyncThunk - типи екшенів які створить нам сам матод ==>>
// => {type: odo/add/pending} | // => {type: odo/add/fulfilled} | // => {type: odo/add/rejected}

export const addTodo = createAsyncThunk("todo/add", async (form, thunkApi) => {
  // 1 - dispatch({type: odo/add/pending}) - при виклику ;
  try {
    const todo = await addTodoApi(form);
    return todo; // =>  {type: odo/add/fulfilled , paylosd: to}thunkApi
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

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

// createAsyncThunk ==>>
// Метод createAsyncThunk є функціональним додатком до бібліотеки Redux Toolkit,
//яка спрощує і стандартизує процес створення асинхронних дій(thunks)
//для управління станом за допомогою Redux.Цей метод дозволяє автоматично створювати трьох дій,
//пов'язаних з асинхронною операцією: початок, успішне завершення та помилка.

// Thunk - це функція, яка обгортає та затримує виклик іншої функції.
// У контексті Redux та управління станом, "thunk" відноситься до функції,
//яка виконує відкладену або асинхронну роботу, і може бути використана для виконання дій,
//зокрема зміни стану.

//
//thunkApi - це об'єкт, який надає різні корисні функції та методи для роботи з Redux Thunks
//в бібліотеці Redux Toolkit.Введений з метою полегшити та спростити роботу з
// асинхронними операціями в Redux, thunkApi надає інструменти для керування станом,
// обробки помилок та взаємодії з сервером чи зовнішніми джерелами даних.
// thunkApi.rejectWithValue(error.message) => один з приклавдів
