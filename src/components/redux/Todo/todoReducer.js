import { TODO_ADD, TODO_REMOVE, TODO_UPDATE_STATUS } from "./todoConstants";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];
    case TODO_REMOVE:
      return state.filter((el) => el.id !== action.payload);
    case TODO_UPDATE_STATUS:
      return state.map((el) =>
        el.id !== action.payload ? el : { ...el, isDone: !el.isDone }
      );
    default:
      return state;
  }
};

export default todoReducer;

//return state.map((el) =>
// el.id !== action.payload ? el : { ...el, isDone: !el.isDone }
//);

//Якщо id завдання співпадає з action.payload, то створюється новий об'єкт,
//який має всі властивості попереднього об'єкта (задачі), але зі зміненим значенням isDone,
//яке змінюється на протилежне(виконано стає невиконаним, і навпаки).Якщо id не співпадає,
//то об'єкт задачі залишається незмінним.

//commit b1309f8b908caf9e5cba84ac3d509e5459962ba5
