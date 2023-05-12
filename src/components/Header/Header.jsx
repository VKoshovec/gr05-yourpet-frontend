
import Navbar from '../Navbar/Navbar';
import styled from './Header.module.scss'
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import {ReactComponent as ReactLogo} from '../assets/images/icon/logo.svg';
import {ReactComponent as UserIcon} from '../assets/images/icon/userIcon.svg';
import {ReactComponent as BurgerIcon} from '../assets/images/icon/menuHamburgerIcon.svg';


const { Header } = Layout;

const HeaderPage = () => {
  return (
    <Header className={styled.header}>
      <div className={styled.headerWrapper}>
        <nav className={ styled.navigationBlock}>
          <Link to={'/main'} className={styled.logoWrapper}>
            <ReactLogo className ={styled.logo}/>
          </Link>
          <Navbar />
        </nav>
        <div className={styled.rightNavigationalBlock}>
          <Button className={styled.userIconBtn}>
            <UserIcon/>
          </Button>
          <Button  className={styled.menuBtn}>
            <BurgerIcon/>
          </Button>
        </div>
      </div>

    </Header>

    // <HeaderContainer>
    // <h3 className={styled.header}>Logo</h3>
    // <Navbar/>
    // <h3>User menu</h3>
    // </HeaderContainer>

  );
};

export default HeaderPage;
