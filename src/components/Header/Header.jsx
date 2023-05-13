import Navbar from '../Navbar/Navbar';
import styled from './Header.module.scss';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../assets/images/icon/logo.svg';
import { ReactComponent as BurgerIcon } from '../assets/images/icon/menu-hamburger.svg';
import { ReactComponent as CloseBtnIcon } from '../assets/images/icon/cross-bigl.svg';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import cn from 'classnames';
import UserNav from '../Navbar/UserNav/UserNav';
import AuthNav from '../Navbar/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


const { Header } = Layout;

const HeaderPage = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const isLoggingIn = useSelector(selectIsLoggedIn);
  // const isLoggingIn = true
  // console.log(isLoggingIn);

  return (
    <Header className={styled.header}>
      <div className={styled.headerWrapper}>
        <Link to={'/main'} className={styled.logoWrapper}>
          <ReactLogo className={styled.logo} />
        </Link>
        <nav className={styled.navigationBlock}>
          <Navbar />
        </nav>
        <div className={styled.rightNavigationalBlock}>
          {!openMenu && isLoggingIn &&  <UserNav openMenu={openMenu}/>}

          {!isLoggingIn && (<div className={styled.userNavigateBtn}>
            <AuthNav />
          </div>)}
          {!openMenu && <Button
            onClick={() => setOpenMenu(true)}
            className={cn(styled.menuBtn, styled.btn)}>
            <BurgerIcon />
          </Button>}
          {openMenu && <Button
            onClick={() => setOpenMenu(false)}
            className={cn(styled.closeBtn, styled.btn)}>
            <CloseBtnIcon className={styled.closeBtnIcon} />
          </Button>}
        </div>
        <MobileMenu open={openMenu} />
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
