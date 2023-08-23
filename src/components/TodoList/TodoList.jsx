import {  selectFilteredTodo } from "../../redux/todo/todoSelectors";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";
import { useSelector } from "react-redux";

const TodoList = () => {
 
  const filteredTodo = useSelector(selectFilteredTodo);
 console.log('render todoList');
  return (
    <ul className={s.container}>
      {filteredTodo.map((todoItemProps) => (
        <TodoItem key={todoItemProps.id} {...todoItemProps} />
      ))}
    </ul>
  );
};

export default TodoList; 
