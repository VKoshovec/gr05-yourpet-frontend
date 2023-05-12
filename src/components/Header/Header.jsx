import { HeaderContainer } from './Header.styled';
import Navbar from '../Navbar/Navbar';
import styled from './Headerstyle.module.scss'
import { Layout, Space } from 'antd';

const { Header } = Layout;

const HeaderPage = () => {
  return (
    <Header className={}>
    <Navbar/>



    </Header>

    // <HeaderContainer>
    // <h3 className={styled.header}>Logo</h3>
    // <Navbar/>
    // <h3>User menu</h3>
    // </HeaderContainer>

  );
};

export default HeaderPage;
