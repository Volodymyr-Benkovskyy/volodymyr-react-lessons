import { useIsOpen, useSetIsOpen } from "../../context/IsOpenProvider";

import { Link, NavLink } from "react-router-dom";

import clsx from "clsx";
import s from "./Header.module.css";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  border: 1px solid rgb(232, 235, 232);
  border-radius: 8px;

  &.active {
    border-color: red;
    color: orange;
  }
`;

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul className={s.list}>
          
          <li className={s.item}>   
            <NavLink to={'/'} className={({ isActive }) => clsx(s.link, isActive && s.active)}>Home
            
            </NavLink>
           
          </li>

          <li className={s.item}>

            <NavLink to={"/counter"}  className={({isActive})=> clsx(s.link, isActive && s.active)}> Counter</NavLink>
         
          </li>

          <li className={s.item}>

            <NavLink to={"/todo"} className={ ({isActive})=> clsx(s.link, isActive && s.active)}>Todo</NavLink>
        
          </li>

        {/*   <li className={s.item}>
            <StyledNavLink to={"/news"}>News</StyledNavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// {} {} {}







// const Header = () => {
//     const isOpen = useIsOpen();
//     const setIsOpen = useSetIsOpen();
//     return (<header>
//         <h1>header</h1>       
//                          {/* переключає по умові на тру і фолс */}
//             <button onClick={() => setIsOpen((prev) => !prev)}> 
//           Click - {`${isOpen}`}
//         </button>
//     </header>)
// }