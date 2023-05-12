import { HeaderContainer } from './Header.styled';
import Navbar from '../Navbar/Navbar';
import styled from './Headerstyle.module.scss'

const Header = () => {
  return (
    <HeaderContainer>
    <h3 className={styled.header}>Logo</h3>
    <Navbar/>
    <h3>User menu</h3>
    </HeaderContainer>
  );
};

export default Header;
