import { createSlice } from "@reduxjs/toolkit";
import { addTodo, getTodo } from "./todoOperations";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
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
    updateTodoStatusRequest(state) {
      state.isLoading = true;
    },
    updateTodoStatusSuccess(state, { payload }) {
      state.isLoading = false;
      const idx = state.items.findIndex((el) => el.id === payload.id);
      state.items[idx] = { ...state.items[idx], ...payload };
      state.error = null;
    },
    updateTodoStatusError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
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

  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
        state.error = null;
      })
      .addCase(addTodo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      .addCase(getTodo.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getTodo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = null;
      })

      .addCase(getTodo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const {
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoError,
  updateTodoStatusRequest,
  updateTodoStatusSuccess,
  updateTodoStatusError,
  updateStatus,
  changeFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
