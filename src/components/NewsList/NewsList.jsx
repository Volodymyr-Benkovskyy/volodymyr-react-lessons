import S from "./NewsList.module.scss";


const NewsList = ({ news }) => {
  return (
    <ol>
      {news.map((el, idx) => (
        <li className={S.fotonews} key={idx}>
            <a href={el.url}>
              <h4>{el.title}</h4>
            <img  className={S.fotonews} src={el.urlToImage} alt="news" /> 
                  
          </a>
           
        </li>
      ))}
    </ol>
  );
};

export default NewsList;

        