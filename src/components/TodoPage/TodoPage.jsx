import { useEffect, useState , useMemo} from "react";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import { useLocalStorage } from "../../hooks/useLocalStorage";



const TodoPage = () => {

  const [todo, setTodo] = useLocalStorage("todo", []);
  const [priority, setPriority] = useState("all");
  const [isOpen, setIsOpen] = useState(false);


   // добавляє  створену todo в колекцію
  const addTodo = (todo) => {
    setTodo(prevTodo => [...prevTodo, todo])
  };
  
   // видаляє todo з колекції масива по id 
  const removeTodo = (id) => {
     setTodo((prev =>  prev.filter((el) => el.id !== id)))
  
  };

   // обновлює 
  const updateTodoStatus = (id) => {
    setTodo(prev => prev.map((el) => (el.id !== id ? el : { ...el, isDone: !el.isDone })))
  }
 //  фільтру наш масив з todo по priority
  //   const filterTodo = () => {
  //   if (priority === "all") return todo;
  //   return todo.filter((el) => el.priority === priority);
  // };


  // const memoValue = isOpen(() => {
  //   console.log("isOpen" );
  //   return 25
  // },[todo])


// фільтрація колекції масиву за допомошою ==>> useMemo 
  const filterdTodo = useMemo(() => {
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
        <button onClick={() => setIsOpen((prev) => !prev)}>
          Click - {`${isOpen}`}
        </button>
        <ToDoForm addTodo={addTodo} />
        <PrioritySelect
           priority={priority}
           changePriority={changePriority}
        />
        <ToDoList
          todo={filterdTodo}
          removeTodo={removeTodo}
          updateTodoStatus={updateTodoStatus}
        />
        {/* <button type="button" onClick={this.handleAddMoreTodo}>
          Add more todo
        </button> */}
      </>

    );
}

export default TodoPage;
 
