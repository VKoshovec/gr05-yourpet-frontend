import PropTypes from 'prop-types';
import cn from 'classnames';
import styled from './MobileMenu.module.scss'
import Navbar from '../Navbar/Navbar';
import AuthNav from '../Navbar/AuthNav/AuthNav';
import UserNav from '../Navbar/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';




const MobileMenu = ({open, closeMenu}) => {

  const isLoggingIn = useSelector(selectIsLoggedIn);
  // const isLoggingIn = true


  return(
    <div
      className={cn(styled.mobileMenuWrapper, { [styled.active]: open })}

    >
      <div className={styled.userNavBarWrapper}>
        {!isLoggingIn && <AuthNav openMenu={open} closeMenu={closeMenu} />}
        {isLoggingIn && <UserNav openMenu={open}/>}

      </div>
      <div>
        <Navbar menuOpen={open} closeMenu={closeMenu}/>
      </div>

    </div>
  )
};

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};


export default MobileMenu;
