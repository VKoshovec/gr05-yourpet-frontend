import { NavLink } from 'react-router-dom';
import styled from './Navbar.module.scss'
import cn from 'classnames';

const Navbar = ({menuOpen}) => {
  return (
   <div className={cn(styled.navbarWrapper, {[styled.mobileMenu] : menuOpen})}>
     <NavLink to="/news" end>News</NavLink>
     <NavLink to="/notices">Find pet</NavLink>
     <NavLink to="/friends">Our friends</NavLink>
   </div>


  );
};



export default Navbar;
