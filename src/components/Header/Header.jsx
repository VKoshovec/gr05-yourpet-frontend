
import Navbar from '../Navbar/Navbar';
import styled from './Header.module.scss'
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import {ReactComponent as ReactLogo} from '../assets/images/icon/logo.svg';
import {ReactComponent as UserIcon} from '../assets/images/icon/user-1.svg';
import {ReactComponent as BurgerIcon} from '../assets/images/icon/menu-hamburger.svg';
import {ReactComponent as CloseBtnIcon} from '../assets/images/icon/cross-bigl.svg';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import cn from 'classnames';


const { Header } = Layout;

const HeaderPage = () => {

  const [openMenu, setOpenMenu] = useState(false);

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
          {!openMenu && <Button
            className={styled.userIconBtn}
          >
            <UserIcon/>
          </Button>}
          {!openMenu &&  <Button
            onClick={() => setOpenMenu(true)}
            className={cn(styled.menuBtn, styled.btn)}>
            <BurgerIcon/>
          </Button>}
          {openMenu &&  <Button
            onClick={() => setOpenMenu(false)}
            className={cn(styled.closeBtn, styled.btn)}>
            <CloseBtnIcon className={styled.closeBtnIcon} />
          </Button>}
        </div>
        <MobileMenu open={openMenu}/>
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
