// буде виконувати запит згідно параметрів query  адресного рядка 

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchNewsApi } from "../../services/newsApi";
import NewsList from "../NewsList/NewsList";

const SearchedNews = () => {
    const [search, setSearch] = useSearchParams();
    const [news, setNews] = useState([]);
    const query = search.get("query");

    useEffect(() => {
        query && getSearchNewsApi(query)
            .then((news) => setNews(news))
            .catch((err) => console.log(err.messange));
       
    }, [query]);
   

    const filteredNews = news.filter((el) => el);

    return <>
        <NewsList news={filteredNews} />
    </>;
};

export default SearchedNews;
