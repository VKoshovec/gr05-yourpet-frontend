import NoticesCategoriesNav from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import NoticesSearch from '../../components/Notices/NoticesSearch/NoticesSearch';
import Section from '../../components/Section/Section';
import styled from './NoticesPage.module.scss';

const NoticesPage = () => {

  const location = useLocation();
  console.log(location.pathname);

  return (<>
    {location.pathname === '/notices' && <Navigate to='/notices/sell' replace={true} />}
    <Section className={styled.searchWrapper}>
      <NoticesSearch />
    </Section>
    <Section className={styled.noticesCategoriesNavWrapper}>
      <NoticesCategoriesNav />
    </Section>
    <Section>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Section>


  </>);
};
export default NoticesPage;
