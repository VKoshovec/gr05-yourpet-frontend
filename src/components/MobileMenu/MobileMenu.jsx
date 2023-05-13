import cn from 'classnames';
import styled from './MobileMenu.module.scss'
import Navbar from '../Navbar/Navbar';
import AuthNav from '../Navbar/AuthNav/AuthNav';
import UserNav from '../Navbar/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';




const MobileMenu = ({open}) => {

  const isLoggingIn = useSelector(selectIsLoggedIn);
  // const isLoggingIn = true


  return(
    <div
      className={cn(styled.mobileMenuWrapper, { [styled.active]: open })}

    >
      <div className={styled.userNavBarWrapper}>
        {!isLoggingIn && <AuthNav/>}
        {isLoggingIn && <UserNav openMenu={open}/>}

      </div>
      <div>
        <Navbar menuOpen={open}/>
      </div>

    </div>
  )
};

export default MobileMenu;
