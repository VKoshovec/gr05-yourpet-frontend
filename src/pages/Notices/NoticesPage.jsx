import NoticesCategoriesNav from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import { Suspense } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import NoticesSearch from '../../components/Notices/NoticesSearch/NoticesSearch';
import Section from '../../components/Section/Section';
import styled from './NoticesPage.module.scss'

const NoticesPage = () => {

  const location = useLocation()
  console.log(location.pathname);

  // useEffect(() => {
  //   // if (location.pathname === "/notices") {
  //   //   history.push('/notices/sell');
  //   // }
  //  return <Navigate to="/dashboard" replace={true} />
  // }, []);

  return (<>
    {location.pathname === "/notices" &&  <Navigate to='/notices/sell' replace={true} />}
    <Section className={styled.searchWrapper}>
      <NoticesSearch/>
    </Section>
    <Section className={styled.noticesCategoriesNavWrapper}>
      <NoticesCategoriesNav/>
    </Section>
    <Section>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Section>


  </>)
};
export default NoticesPage;
