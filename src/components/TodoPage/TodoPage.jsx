import { useEffect, useState , useMemo, useCallback } from "react";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import  ToDoList from "../TodoList/TodoList";
import { useLocalStorage } from "../../hooks/useLocalStorage";



const TodoPage = ({isOpen}) => {

  const [todo, setTodo] = useLocalStorage("todo", []);
  const [priority, setPriority] = useState("all");
 
  // переписуєм на useCallback щобне створювати новий реф при кожному рендері 
  // const addTodo = (todo) => {
  //   setTodo(prevTodo => [...prevTodo, todo])
  // };

   const addTodo = useCallback((newTodo) => { // повертає фуекцію і не створює новий ref
    setTodo(prevTodo => [...prevTodo, newTodo])
  }, [ setTodo]);

  
   // видаляє todo з колекції масива по id 
  const removeTodo = (id) => {
     setTodo((prev =>  prev.filter((el) => el.id !== id)))
  
  };

   // обновлює 
  const updateTodoStatus = (id) => {
    setTodo(prev => prev.map((el) => (el.id !== id ? el : { ...el, isDone: !el.isDone })))
  }


  // const memoValue = isOpen(() => {
  //   console.log("isOpen" );
  //   return 25
  // },[todo])


// фільтрація колекції масиву за допомошою ==>> useMemo 
  const filterdTodo =  useMemo(() => {
     if (priority === "all") return todo;
    return todo.filter((el) => el.priority === priority)
  }, [todo, priority])
  

 
  // змінює пріоріті 
  const changePriority = (e) => {
    setPriority(e.target.value)
  }

  
   // ==== переносим даний  useEffect в стейт ===== ///

  useEffect(() => {
    console.log("useEffect--priority");
  }, [priority]);
  
  

    return (
      <>
    
        <ToDoForm addTodo={addTodo} />
        <PrioritySelect
           priority={priority}
           changePriority={changePriority}
        />
        <ToDoList
          todo={filterdTodo}
          removeTodo={removeTodo}
          updateTodoStatus={updateTodoStatus}
          isOpen={isOpen}
        /> 
      </>

    );
}

export default TodoPage;
 
// useCallback - це хук у бібліотеці React, який дозволяє вам оптимізувати 
// продуктивність вашої програми, запобігаючи непотрібному перерендерингу функцій - колбеків.
// Він використовується для мемоїзації(зберігання у пам'яті) функцій, 
// забезпечуючи, що функція буде створена лише один раз під час створення компонента 
// і не буде перестворюватися під час перерендерингу, якщо змінюються тільки залежності.