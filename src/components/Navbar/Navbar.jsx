import { NavLink } from 'react-router-dom';
import styled from './Navbar.module.scss'
import cn from 'classnames';

import data from './DataForMenu.json'

const Navbar = ({menuOpen, closeMenu}) => {

  return (
   // <div className={cn(styled.navbarWrapper, {[styled.mobileMenu] : menuOpen})}>
     <ul className={cn(styled.navbarList, {[styled.mobileMenu] : menuOpen})}>
        {data.map((item)=> {

         return <li key={item.key}><NavLink to={item.link} className={styled.listItemLink} onClick={() => menuOpen? closeMenu() : null}>{item.title}</NavLink></li>
        })}
     </ul>
     // {/*<NavLink to="/news" >News</NavLink>*/}
     // {/*<NavLink to="/notices">Find pet</NavLink>*/}
     // {/*<NavLink to="/friends">Our friends</NavLink>*/}


  );
};



export default Navbar;
