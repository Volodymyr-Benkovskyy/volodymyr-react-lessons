import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    addtodoRequest(state) {
      state.isLoading = true;
    },

    addtodoSuccess(state, payload) {
      state.isLoading = false;
      state.items.push(payload);
    },

    addtodoError(state, payload) {
      state.isLoading = false;
      state.payload = payload;
    },

    remove(state, { payload }) {
      return {
        ...state,
        items: state.items.filter((el) => el.id !== payload),
      };
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
  addtodoRequest,
  addtodoSuccess,
  addtodoError,
  remove,
  updateStatus,
  changeFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
