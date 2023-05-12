import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Container from '../Container/Container';
import Header from '../Header/Header';
import { Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    // <Container>
    //   <Main>
    //     <Header />
    <>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>

    //   </Main>
    // </Container>
  );
};

export default SharedLayout;
