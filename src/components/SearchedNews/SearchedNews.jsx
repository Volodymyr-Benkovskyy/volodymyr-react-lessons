// буде виконувати запит згідно параметрів query  адресного рядка 


import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchNewsApi } from "../../services/newsApi";
import NewsList from "../NewsList/NewsList";

const SearchedNews = () => {
    const [search, setSearch] = useSearchParams(); // екземпляр класу URLSearchParams
    const [news, setNews] = useState([]);
    const query = search.get("query");
     const page = search.get("page");

    useEffect(() => {
        query && getSearchNewsApi(query, page)
            .then((news) => setNews(news))
            .catch((err) => console.log(err.messange));
       
    }, [query, page]);

       const handleChangePage = () => {
        setSearch({query , page: Number(page) + 1})
    }


    //const filteredNews = news.filter((el) => el);

    return (

        <>
            <NewsList news={news }  />
           <button       
            type="button" onClick={ handleChangePage}>
                Load More
           </button>

        </>
    );
 
};

export default SearchedNews;
