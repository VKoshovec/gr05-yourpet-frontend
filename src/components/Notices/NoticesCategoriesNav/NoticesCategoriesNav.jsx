import { NavLink } from 'react-router-dom';
import styled from './NoticesCategoriesNav.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import AddPetButton from '../AddPetButton/AddPetButton';
import NoticesFilter from '../NoticesFilter';


const NoticesCategoriesNav = () => {

  const isLoggingIn = useSelector(selectIsLoggedIn);

  return (<div className={styled.noticesNavWrapper}>
      <div className={styled.leftNavbarWrapper}>
        <NavLink to={`/notices/sell`} className={styled.linkBtn}>
          sell
        </NavLink>
        <NavLink to={`/notices/lost-found`} className={styled.linkBtn}>
          lost/found
        </NavLink>
        <NavLink to={`/notices/for-free`} className={styled.linkBtn}>
          in good hands
        </NavLink>
        {isLoggingIn && <>
          <NavLink to={`/notices/favorite`} className={styled.linkBtn}>
            favorite ads
          </NavLink>
          <NavLink to={`/notices/own`} className={styled.linkBtn}>
            my ads
          </NavLink>
        </>
        }
      </div>
      <div className={styled.rightNavbarWrapper}>
        <NoticesFilter/>
        <div className={styled.addPetBtnWrapper}>
          <AddPetButton />
        </div>

      </div>
    </div>

  );
};

export default NoticesCategoriesNav;
