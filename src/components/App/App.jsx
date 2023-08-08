 //import Counter from "../Counter/Counter";
 import { Route, Routes } from "react-router-dom";
import TodoPage from "../../page/TodoPage";
import CounterPage from "../../page/CounterPage";
import HomePage from "../../page/HomePage";
//import TodoPage from "../TodoPage/TodoPage";
import Header from "../Header/Header";
//import { IsOpenProvider } from "../../context/IsOpenProvider";


const App = () => {
  return (
    <>
       <Header />
    <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path="/todo" element={<TodoPage /> } />
      <Route path='/counter' element={<CounterPage />} />
   </Routes>
    </>
  );
};

export default App;

    // <IsOpenProvider>
    //     <Header  />
    //     <TodoPage  />
    //    {/*  <Counter /> */}
    //   </IsOpenProvider>
     


