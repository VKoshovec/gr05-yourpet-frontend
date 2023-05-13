
import styles from  './AuthNav.module.scss'
import cn from 'classnames';
import { Link } from 'react-router-dom';


const AuthNav = () => {



  return(<>
      <Link to={"/login"} className={cn(styles.authBtn, styles.contained)} >
        <span className={styles.text}>Log IN</span>
      </Link>
      <Link to={"/register"} className={styles.authBtn} >
       <span className={cn(styles.text, styles.registerBtn)}>Registration</span>
      </Link>
  </>






  )
};

export default AuthNav;
