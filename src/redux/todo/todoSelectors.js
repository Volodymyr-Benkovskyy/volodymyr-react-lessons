import { createSelector } from "@reduxjs/toolkit";

export const selectTodo = (state) => state.todo.items;
export const selectFilter = (state) => state.todo.filter;

export const selectIsTodoExist = (state) => Boolean(selectTodo(state).length);

// export const selectFilteredTodo = (state) => {
//   //console.log("selectFilteredTodo");
//   const todo = selectTodo(state);
//   const filter = selectFilter(state);
//   if (filter === "all") return todo;
//   return todo.filter((el) => el.priority === filter);
// };

export const selectFilteredTodo = createSelector(
  [selectTodo, selectFilter],
  (todo, filter) => {
    // console.log("selectFilteredTodo_memo");
    if (filter === "all") return todo;
    return todo.filter((el) => el.priority === filter);
  }
);

//     createSelector ==>>
// Функція createSelector дозволяє створювати селектори,
// які автоматично кешують свої результати.
// Це означає, що якщо вхідні дані селектора не змінилися,
// він поверне закешований результат,
// замість повторного обчислення.Це також допомагає уникнути зайвих обчислень і
// покращує продуктивність додатка.
