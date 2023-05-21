import PropTypes from 'prop-types';

import styled from  './UserNav.module.scss'
import { ReactComponent as UserIcon } from '../../assets/images/icon/user-1.svg';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';


const UserNav = ({openMenu }) => {

  const user = useSelector(selectUser)

  const userName = user.name ? user.name : user.email.split("@")[0];

  return ( <Link to={'/user'} className={cn(styled.userBtn, {[styled.hasUserName] : openMenu})}>
      <UserIcon /><span className={cn(styled.userName, {[styled.nameVisible] : openMenu })}>{userName}</span>
    </Link>

  )
};

UserNav.propTypes = {
  openMenu: PropTypes.bool,
};

export default UserNav;
