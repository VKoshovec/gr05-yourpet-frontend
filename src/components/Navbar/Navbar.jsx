import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
   <>
     <NavLink to="/news" end>News</NavLink>
     <NavLink to="/notices">Find pet</NavLink>
     <NavLink to="/friends">Our friends</NavLink>
   </>


  );
};



export default Navbar;
