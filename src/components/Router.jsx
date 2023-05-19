import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';
import { useAuth } from '../services/hooks';

const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));

const MainPage = lazy(() => import('../pages/Main/MainPage'));
const NewsPage = lazy(() => import('../pages/News/NewsPage'));
const NoticesPage = lazy(() => import('../pages/Notices/NoticesPage'));
const NoticesCategoriesList = lazy(() =>
  import('./Notices/NoticesCategoriesList/NoticesCategoriesList'),
);
const OurFriendsPage = lazy(() => import('../pages/OurFriends/OurFriendsPage'));
const UserPage = lazy(() => import('../pages/User/UserPage'));
const AddPetPage = lazy(() => import('../pages/AddPet/AddPetPage'));

const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

const Router = () => {
  const { isLoggedIn, isRefreshing } = useAuth();

  const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };

  const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Navigate to='/notices' replace />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/notices' element={<NoticesPage />}>
            <Route path=':category' element={<NoticesCategoriesList />} />
          </Route>
          <Route path='/friends' element={<OurFriendsPage />} />
          {/* <Route path="/user" element={<UserPage />} /> */}
          <Route
            path='/user'
            element={
              <PrivateRoute redirectTo='/login' component={<UserPage />} />
            }
          />
          <Route
            path='/add-pet'
            element={
              <PrivateRoute redirectTo='/login' component={<AddPetPage />} />
            }
          />
          <Route
            path='/register'
            element={
              <RestrictedRoute
                redirectTo='/user'
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path='/login'
            element={
              <RestrictedRoute
                redirectTo='/notices/sell'
                component={<LoginPage />}
              />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
