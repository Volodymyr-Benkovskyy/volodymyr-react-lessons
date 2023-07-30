import PropTypes from "prop-types";
import s from "./TodoList.module.css";
import TodoItem from '../TodoItem/TodoItem'



const TodoList = ({ todo = [], removeTodo, updateTodoStatus}) => {
  return (
    <ul className={s.container}>
      {todo.map((TodoitemProps) => (
        <TodoItem
          key={TodoitemProps.id}

         // title={title}
         // descr={descr}
         // id={id}
         // date={date}
         // priority={priority}
         //  isDone={isDone}
        
       {...TodoitemProps}
        updateTodoStatus={updateTodoStatus}
        removeTodo={removeTodo}
 
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descr: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ),
};

export default TodoList;
