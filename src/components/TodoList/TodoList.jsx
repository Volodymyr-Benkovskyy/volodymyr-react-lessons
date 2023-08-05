import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.css";
import { useIsOpen } from "../../context/IsOpenProvider";


const ToDoList = ({ todo = [], removeTodo, updateTodoStatus }) => {

     const isOpen = useIsOpen();
  
  return (
    <ul className={s.container}>
      {/* isOpen ==>> по умові тру і фолс  запускає рендер */}
      { isOpen && todo.map((todoItemProps) => (
       <TodoItem
  key={todoItemProps.id}
  {...todoItemProps}
  removeTodo={removeTodo}
  updateTodoStatus={updateTodoStatus}
/>
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
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

export default ToDoList;

/* const props = {};

const method1 = () => {};
const method2 = () => {};

const C = (props) => {};

C({ ...props, method1, method2 });
 */