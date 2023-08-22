import { useEffect } from "react";
import PrioritySelect from "../components/PrioritySelect/PrioritySelect";
import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/todo/todoOperations";
import Loader from "../components/Loader/Loader";
//import { getTodoApi } from "../servisec/firebaceApi";

const TodoPage = () => {
  const dispatch = useDispatch();
  // підписуємся на частину стану в reduxs  і робиться перевірка на буль після чого іде запит
  const isTodoExist = useSelector((state) => Boolean(state.todo.items.length));

  useEffect(() => {
   !isTodoExist &&  dispatch(getTodo());
  }, [dispatch,isTodoExist ]);


  return (
    <>
      <Loader>
        <ToDoForm />
        <PrioritySelect />
        <ToDoList />
      </Loader>
    </>
  )
}



export default TodoPage;


// useSelector - це кастомний хук в бібліотеці React Redux,
//який дозволяє компонентам React підписуватися на частину стану,
//збереженого в Redux - сховищі, і автоматично оновлюватися при зміні цього стану.
      