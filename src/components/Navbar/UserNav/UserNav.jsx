import styled from  './UserNav.module.scss'
import { ReactComponent as UserIcon } from '../../assets/images/icon/user-1.svg';
import cn from 'classnames';
import { Link } from 'react-router-dom';


const UserNav = ({openMenu }) => {
  console.log(openMenu);

  return ( <Link to={'/user'} className={cn(styled.userBtn, {[styled.hasUserName] : openMenu})}>
      <UserIcon /><span className={cn(styled.userName, {[styled.nameVisible] : openMenu })}>User</span>
    </Link>

  )
};

export default UserNav;
