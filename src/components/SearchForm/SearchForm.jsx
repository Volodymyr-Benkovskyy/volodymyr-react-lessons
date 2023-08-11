import S from "./SearchForm.module.css";
import { useState } from "react";


import {  /* useNavigate, */ useSearchParams} from "react-router-dom"

 const SearchForm = () => {

    const [input, setInput] = useState("")
     const [search, setSearch] = useSearchParams();
      
     const handleSubmit = (e) => {
    e.preventDefault();
         setSearch({ query: input  });
         
  };
     
     
 
    return (
        <form  className={S.form}   onSubmit={ handleSubmit} >
       
            <input
               className={S.inputform}
                type="tex"     
                name="input"
                value={input}
                placeholder="Input search"
                onChange={(e) => setInput(e.target.value)}>
                
            </input>
            <button className={ S.submit} type="submit">Submit</button>
        </form>
    );
};

export default SearchForm;




//  <button onClick={() => navigate("/search-news-page?color=red")} ==> це як спосіб
// useNavigate hook  ===>>> вміє створюватизначення адресного рядка

// Наприклад, при натискання на кнопку, після відправлення форми,
//за результатом HTTP - запиту і тому подібне.


//Перший спосіб це хук useNavigate.
//Він надає нам функцію navigate якій під час виклику передаємо шлях,
// куди необхідно виконати навігацію.Цей спосіб імперативний,
//але більш гнучкий і вимагає менше коду.

    //  const navigate = useNavigate();
   /*const hadlerNavigate = () => {
     navigate({
            pathname: "/search-news-page" ,
            search:"?color=green&id=25",
        })
    } */
   