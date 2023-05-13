
import styles from  './AuthNav.module.scss'
import cn from 'classnames';
import { Link } from 'react-router-dom';


const AuthNav = () => {



  return(<>
      <Link to={"/login"}  className={styles.authBtn}>
        <span>Log IN</span>
      </Link>
      <Link to={"/register"} className={cn(styles.authBtn, styles.contained)}>
        Registration
      </Link>
  </>






  )
};

export default AuthNav;
