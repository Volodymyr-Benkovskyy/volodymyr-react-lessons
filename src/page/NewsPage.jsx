import { Link, Outlet } from "react-router-dom";


const NewsPage = () => {
   
    return <>
        
        <h1>NewsPage</h1>
         <Outlet />
        
        <ul>
            <li>
                <Link to="/news/pl">
                    PL
                </Link>
            </li>
            <li>
                <Link to="/news/ua">
                    UA
                </Link>
            </li>
            <li>
                <Link to="/news/us">
                    US
                </Link>
            </li>
            <li>
                <Link to="/news/fr">
                    fr
                </Link>

            </li>
        </ul>
       
    </>
    

};

export default NewsPage;