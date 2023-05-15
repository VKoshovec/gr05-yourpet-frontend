import { NavLink } from 'react-router-dom';
import styled from './NoticesCategoriesNav.module.scss';

const NoticesCategoriesNav = () => {

  // const location = useLocation();

  return (<div className={styled.noticesNavWrapper}>
      <NavLink to={`/notices/sell`} className={styled.linkBtn}>
        sell
      </NavLink>
      <NavLink to={`/notices/lost-found`} className={styled.linkBtn}>
        lost/found
      </NavLink>
      <NavLink to={`/notices/for-free`} className={styled.linkBtn}>
        in good hands
      </NavLink>
    </div>

  );
};

export default NoticesCategoriesNav;
