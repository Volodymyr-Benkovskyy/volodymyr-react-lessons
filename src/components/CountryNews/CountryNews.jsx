import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryNewsApi } from "../../services/newsApi";



const CountryNews = () => {
   // const params = useParams();
    // params деструктуризуємо витягуєм country
    const { country } = useParams();
  const [news, setNews] = useState([]);
    //console.log('params :>> ', params);
    

  //   useEffect(() => {
  //     //country && console.log('fech to country =>>', country);
  //     getCountryNewsApi(country)
  //       .then((news) => setNews(news))
  //       .catch(err => console.log(err))
  // }, [country] )

  useEffect(() => {
    
    const getNews = async () => {
    
      try {
        const news = await getCountryNewsApi(country);
        setNews(news)
      
      } catch (error) {
        console.log(error);
      };
    };

    getNews();
  } , [country])


  // useEffect(() => {
  //   news.length && console.log(news);
  // }, [news]);

  // const filteredNews = news.filter((el) => el);

  // return (
  //   <ol>
  //     {filteredNews.map((el) => (
  //       <li>
  //         <a href={el.url}>
  //           <h4>{el.title}</h4>
  //         </a>
  //       </li>
  //     ))}
  //   </ol>
  // );


  return (
    <ol> {news.map(({id, url, title }) => (
      <li key ={id} >
        <a href={url}>
          <h4>{title}</h4>
        </a>
      </li>
    ))}
        
    </ol>
  );

};

export default CountryNews;