 //import Counter from "../Counter/Counter";
 import { Outlet, Route, Routes} from "react-router-dom";
import TodoPage from "../../page/TodoPage";
import CounterPage from "../../page/CounterPage";
import HomePage from "../../page/HomePage";
//import TodoPage from "../TodoPage/TodoPage";
import Header from "../Header/Header";
import NewsPage from "../../page/NewsPage";
import CountryNews from "../CountryNews/CountryNews";
//import { IsOpenProvider } from "../../context/IsOpenProvider";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>

  );
  
}




const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={< MainLayout/>}> 
           <Route index element={< HomePage />} />
           <Route path="/todo" element={<TodoPage /> } />
           <Route path='/counter' element={<CounterPage />} />
          <Route path='/news' element={<NewsPage />} >  
           <Route path=':country' element={<CountryNews />} />     
         </Route>
        </Route>
      </Routes>
     
    </>
  );
};

export default App;


  // ff8bb18441504260adbe0ecc126652ff -- api_key 

    // <IsOpenProvider>
    //     <Header  />
    //     <TodoPage  />
    //    {/*  <Counter /> */}
    //   </IsOpenProvider>
     
        // методи для розуміння Route
    //   <Route path='pl' element={<h2>News List PL</h2>} /> 
    //   <Route path='ua' element={<h2>News List UA</h2>} /> 
    //    <Route path='us' element={<h2>News List US</h2>} /> 
    //    <Route path='fr' element={<h2>News List FR</h2>} /> 
