import cn from 'classnames';
import styled from './MobileMenu.module.scss'
import {ReactComponent as ReactLogo} from '../assets/images/icon/logo.svg';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';



const MobileMenu = ({open}) => {
  return(
    <div
      className={cn(styled.mobileMenuWrapper, { [styled.active]: open })}

    >
      {/*<div className={styled.menuHeader}>*/}
      {/*  <Link to={'/main'} className={styled.logoWrapper}>*/}
      {/*    <ReactLogo className ={styled.logo}/>*/}
      {/*  </Link>*/}

      {/*</div>*/}
      <div>
        <Navbar menuOpen={open}/>
      </div>

    </div>
  )
};

export default MobileMenu;
