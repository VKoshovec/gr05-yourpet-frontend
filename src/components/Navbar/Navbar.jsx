import { Nav, Link } from './Navbar.styled';

const Navbar = ({ children }) => {
  return (
    <Nav>
    <Link to="/news" end>News</Link>
    <Link to="/notices">Find pet</Link>
    <Link to="/friends">Our friends</Link>
  </Nav>
  );
};



export default Navbar;