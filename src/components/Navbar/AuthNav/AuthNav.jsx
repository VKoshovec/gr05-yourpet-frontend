
import styles from  './AuthNav.module.scss'
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ReactComponent as PawIcon } from '../../assets/images/icon/pawprint 1.svg';


const AuthNav = ({ closeMenu, openMenu }) => {

const handleClickBtn = () => {
  if(openMenu) closeMenu(false)
}

  return(<>
      <Link to={"/login"} className={cn(styles.authBtn, styles.contained)} onClick={handleClickBtn} >
        <span className={styles.text}>Log IN</span><PawIcon/>
      </Link>
      <Link to={"/register"} className={styles.authBtn} onClick={handleClickBtn} >
       <span className={cn(styles.text, styles.registerBtn)}>Registration</span>
      </Link>
  </>






  )
};

export default AuthNav;
