import { NavLink } from 'react-router-dom';
import styled from './Navbar.module.scss'

const Navbar = () => {
  return (
   <div className={styled.navbarWrapper}>
     <NavLink to="/news" end>News</NavLink>
     <NavLink to="/notices">Find pet</NavLink>
     <NavLink to="/friends">Our friends</NavLink>
   </div>


  );
};



export default Navbar;
