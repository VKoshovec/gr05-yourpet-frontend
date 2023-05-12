import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import { Layout } from 'antd';
import styled from './SharedLayout.module.scss';

const { Content } = Layout;


const SharedLayout = () => {

  return (
    <>
      <Header />
      <Content className={styled.main}>
        <section className={styled.mainContentWrapper}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>

      </Content>
    </>

  );
};

export default SharedLayout;
