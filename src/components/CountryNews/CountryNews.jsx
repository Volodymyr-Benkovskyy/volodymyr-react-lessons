import { useEffect } from "react";
import { useParams } from "react-router-dom";


const CountryNews = () => {
   // const params = useParams();
    // params деструктуризуємо витягуєм country
    const { country } = useParams();
    
    //console.log('params :>> ', params);
    

    useEffect(() => {
      country && console.log('fech to country =>>', country);
  },[country] )


 return <h2>CountryNews - {country}</h2>

};

export default CountryNews;