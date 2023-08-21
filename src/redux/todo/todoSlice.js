import { createSlice } from "@reduxjs/toolkit";
//import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    addTodoRequest(state) {
      state.isLoading = true;
    },

    addTodoSuccess(state, payload) {
      state.isLoading = false;
      state.items.push(payload);
    },

    addTodoError(state, payload) {
      state.isLoading = false;
      state.payload = payload;
    },

    getTodoRequest(state) {
      state.isLoading = true;
    },
    getTodoSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    getTodoError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    removeTodoRequest(state) {
      state.isLoading = true;
    },

    removeTodoSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter((el) => el.id !== payload);
    },
    removeTodoError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    updateStatus(state, { payload }) {
      return {
        ...state,
        items: state.items.map((el) =>
          el.id !== payload ? el : { ...el, isDone: !el.isDone }
        ),
      };
    },
    changeFilter: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
      prepare(e) {
        return {
          payload: e.target.value,
        };
      },
    },
  },
});

export const {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  getTodoRequest,
  getTodoSuccess,
  getTodoError,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoError,
  updateStatus,
  changeFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
