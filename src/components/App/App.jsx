
import { Navigate,  Route, Routes } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import { lazy } from "react";


 //import CounterPage from "../../pages/CounterPage";
//import CountryNews from "../CountryNews/CountryNews";

//import HomePage from "../../pages/HomePage";
//import NewsPage from "../../pages/NewsPage";
//import TodoPage from "../../pages/TodoPage";
//import SearchNewsPage from "../../pages/SearchNewsPage"; 

const HomePage = lazy(() => import("../../pages/HomePage"));
const NewsPage = lazy(() => import("../../pages/NewsPage"));
const SearchNewsPage = lazy(() => import("../../pages/SearchNewsPage"));
const TodoPage = lazy(() => import("../../pages/TodoPage"));


const CounterPage = lazy(() => import("../../pages/CounterPage"));
const CountryNews = lazy(() => import("../CountryNews/CountryNews"));




const App = () => {
  return (
    <>
      
      
      
           <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="news" element={<NewsPage />}>
            <Route path=":country" element={<CountryNews />} />
          </Route>
           <Route path="search-news" element={< SearchNewsPage/>} /> 

        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    
      


   
    </>
  );
};

export default App;

// const usLang = {
//   mainTitle: "Hello",
// };

// const uaLang = {
//   mainTitle: "Привіт",
// };

// // ua | us
// const C = ({ lang }) => {
//   const title = lang === "us" ? usLang.mainTitle : uaLang.mainTitle;
//   return <h1>{title}</h1>;
// };


//creation  Action counterDecrementAction, resetCounterAction, counterIncrementAction  and counterReducer

// creation and implementation of the method Slice