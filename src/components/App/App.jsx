 //import Counter from "../Counter/Counter";
import { children, useState } from "react";
import TodoPage from "../TodoPage/TodoPage";
import Header from "../Header/Header";

const IsOpenProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
 return children
}

const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <IsOpenProvider>
        <Header isOpen={isOpen} setIsOpen={setIsOpen }  />
        <TodoPage isOpen={isOpen} />
       {/*  <Counter /> */}
      </IsOpenProvider>
     
    </>
  );
};

export default App;
