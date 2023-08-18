import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 150,
  reducers: {
    decrement(state, { payload }) {
      return state - payload;
    },
    increment(state, { payload }) {
      return state + payload;
    },
    reset() {
      return 150;
    },
  },
});

//console.log("counterSlice.reducer :>> ", counterSlice.reducer);

export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;

// Для кожного слайсу створюється стандартний набір сутностей: типи екшенів,
//генератори екшенів та редюсер.Редюсери визначають початковий стан слайсу,
//список екшенів, що впливають на нього та операції оновлення стану.

// Функція createSlice() це надбудова над createAction() та createReducer(),
//яка стандартизує та ще більше спрощує оголошення слайсу.Вона приймає параметри налаштувань,
//створює і повертає типи екшенів, генератори екшенів та редюсер.
//Розберемо створення слайсу на прикладі списку задач.

// Властивість name визначає ім'я слайсу, яке додаватиметься під час створення екшенів,
// як приставка до імен редюсерів, оголошених у властивості reducers.
//Так ми отримаємо екшени з типами tasks / addTask, tasks / deleteTask та tasks / toggleCompleted.

// Функція createSlice() у своїй реалізації використовує createReducer і бібліотеку Immer,
//тому можна писати логіку оновлення стану так, як якби ми безпосередньо змінювали його.
