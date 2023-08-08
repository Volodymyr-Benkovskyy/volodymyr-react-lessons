 //import Counter from "../Counter/Counter";
 import { Route, Routes, Navigate } from "react-router-dom";
import TodoPage from "../../page/TodoPage";
import CounterPage from "../../page/CounterPage";
import HomePage from "../../page/HomePage";
//import TodoPage from "../TodoPage/TodoPage";
import Header from "../Header/Header";
import NewsPage from "../../page/NewsPage";
import CountryNews from "../CountryNews/CountryNews";
//import { IsOpenProvider } from "../../context/IsOpenProvider";


const App = () => {
  return (
    <>
       <Header />
    <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path="/todo" element={<TodoPage /> } />
      <Route path='/counter' element={<CounterPage />} />
       <Route path='/news' element={<NewsPage />} >  
          <Route path=':country' element={<CountryNews />} /> 
          
            {/*    <Route path='pl' element={<h2>News List PL</h2>} /> 
            <Route path='ua' element={<h2>News List UA</h2>} /> 
             <Route path='us' element={<h2>News List US</h2>} /> 
             <Route path='fr' element={<h2>News List FR</h2>} />  */}
      </Route>
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
     


