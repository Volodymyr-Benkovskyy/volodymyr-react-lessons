import {
  addTodoAction,
  changePriority,
  removeTodo,
  updateTodoStatus,
} from "./todoAction";

import { createReducer, combineReducers } from "@reduxjs/toolkit";

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case TODO_ADD:
//       return [...state, action.payload];
//     case TODO_REMOVE:
//       return state.filter((el) => el.id !== action.payload);
//     case TODO_UPDATE_STATUS:
//       return state.map((el) =>
//         el.id !== action.payload ? el : { ...el, isDone: !el.isDone }
//       );
//     default:
//       return state;
//   }
// };

const itemsReducer = createReducer([], (buider) => {
  buider
    .addCase(addTodoAction, (state, { payload }) => [...state, payload])
    .addCase(removeTodo, (state, { payload }) =>
      state.filter((el) => el.id !== payload)
    )
    .addCase(updateTodoStatus, (state, { payload }) =>
      state.map((el) =>
        el.id !== payload ? el : { ...el, isDone: !el.isDone }
      )
    );
});

// const filterReducer = (state = "all", { type, payload }) => {
//   switch (type) {
//     case TODO_CHANGE_PRIORITY:
//       return payload;

//     default:
//       return state;
//   }
// };

const filterReducer = createReducer("all", (buider) => {
  buider.addCase(changePriority, (state, { payload }) => payload);
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;

//return state.map((el) =>
// el.id !== action.payload ? el : { ...el, isDone: !el.isDone }
//);

//Якщо id завдання співпадає з action.payload, то створюється новий об'єкт,
//який має всі властивості попереднього об'єкта (задачі), але зі зміненим значенням isDone,
//яке змінюється на протилежне(виконано стає невиконаним, і навпаки).Якщо id не співпадає,
//то об'єкт задачі залишається незмінним.
