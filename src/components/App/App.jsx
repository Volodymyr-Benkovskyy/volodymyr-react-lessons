 //import Counter from "../Counter/Counter";
import TodoPage from "../TodoPage/TodoPage";
import Header from "../Header/Header";
import { IsOpenProvider } from "../../context/IsOpenProvider";


const App = () => {
  return (
    <>
      <IsOpenProvider>
        <Header  />
        <TodoPage  />
       {/*  <Counter /> */}
      </IsOpenProvider>
     
    </>
  );
};

export default App;




