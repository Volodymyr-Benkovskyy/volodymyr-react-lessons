import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";
import { useSelector } from "react-redux";

const TodoList = () => {
  
  const todo = useSelector((state) => state.todo)
  
  return (
    <ul className={s.container}>
      {todo.map((todoItemProps) => (
        <TodoItem
          key={todoItemProps.id}
          {...todoItemProps}
        
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string,
      descr: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ),
};

export default TodoList;
