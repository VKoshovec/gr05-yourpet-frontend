import { HeaderContainer } from './Header.styled';
import Navbar from '../Navbar/Navbar';


const Header = () => {
  return (
    <HeaderContainer>
    <h3>Logo</h3>
    <Navbar/>
    <h3>User menu</h3>
    </HeaderContainer>
  );
};

export default Header;
