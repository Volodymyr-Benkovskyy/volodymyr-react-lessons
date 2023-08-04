import React, {  useEffect, useRef, useState } from "react";

import s from "./TodoItem.module.scss";

const TodoItem = ({
  descr,
  id,
  date,
  priority,
  isDone,
  removeTodo,
  updateTodoStatus,
}) => {
  const [count, setCount] = useState(0);
  


  const intervalIdUseRef = useRef(null);
  const itemRef = useRef(null);

  useEffect(() => {
    intervalIdUseRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("count");
    }, 1000);

    //console.log("itemRef :>> ", itemRef);

    return () => {
      clearInterval(intervalIdUseRef.current);
    };
  }, []);

  useEffect(() => {
   // console.log("intervalIdRef.current :>> ", intervalIdUseRef.current);
    isDone === true && clearInterval(intervalIdUseRef.current);
  }, [isDone]);

  //console.log("itemRef :>> ", itemRef);

 // ref={itemRef} -- основна задача ref - це доступ до до дерева 


  return (
    <li ref={itemRef} key={id} className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <h3 className={`${s.title} ${isDone && s.isDone}`}>Counter - {count}</h3>
      <p className={`${s.descr} ${isDone && s.isDone}`}>
        PRIORITY - {priority}
      </p>
      <p className={`${s.descr} ${isDone && s.isDone}`}>{descr}</p>
      <label className={s.status}>
        <input
          type="checkbox"
          name="status"
          checked={isDone}
          onChange={(e) => updateTodoStatus(id)}
        />
        Done
      </label>
      <button className={s.todoBtn} onClick={() => removeTodo(id)}>
        Remove
      </button>
    </li>
  );
};
// const li = React.createElement("li", {ref: itemRef}) // create tmp -> create dom element

export default TodoItem;


 // useRef - це хук (hook) в бібліотеці React,
 //який дозволяє створювати посилання на DOM - елемент або на інший об'єкт,
 // який зберігається після зміни компонента без виклику перерендерингу.
 
 //Додатково, useRef може використовуватися для зберігання стану, 
 //який не впливає на рендеринг компонента, але може використовуватися для зберігання 
 //та зміни даних в середині функціонального компонента.